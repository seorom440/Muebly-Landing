'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// ── Types ──────────────────────────────────────────────────────────────────
type Role = 'user' | 'assistant';

interface Message {
  role: Role;
  content: string;
  timestamp: string;
}

type Phase = 'chat' | 'email-prompt' | 'done';

// ── Helpers ────────────────────────────────────────────────────────────────
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

const GOODBYE_WORDS = ['adiós', 'adios', 'gracias', 'bye', 'hasta luego', 'goodbye', 'thanks', 'thank you', 'ciao'];

function isGoodbye(text: string): boolean {
  const lower = text.toLowerCase().trim();
  return GOODBYE_WORDS.some((w) => lower.includes(w));
}

// ── Component ──────────────────────────────────────────────────────────────
export function ChatWidget() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [phase, setPhase] = useState<Phase>('chat');
  const [emailInput, setEmailInput] = useState('');
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [sessionId] = useState(generateUUID);
  const [startTime] = useState(() => new Date().toISOString());
  const [userMsgCount, setUserMsgCount] = useState(0);
  const [resolved, setResolved] = useState(false);
  const [savedSession, setSavedSession] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const t = {
    welcome: language === 'es'
      ? '¡Hola! Soy el asistente de Muebly. ¿En qué puedo ayudarte hoy? 😊'
      : 'Hi! I\'m the Muebly assistant. How can I help you today? 😊',
    placeholder: language === 'es' ? 'Escribe tu mensaje...' : 'Type your message...',
    send: language === 'es' ? 'Enviar' : 'Send',
    emailPrompt: language === 'es'
      ? '¿Quieres que te enviemos un resumen de esta conversación o que te contactemos si necesitas más ayuda? Déjanos tu email (opcional):'
      : 'Would you like us to send you a conversation summary or follow up if needed? Leave your email (optional):',
    emailPlaceholder: language === 'es' ? 'tu@email.com' : 'your@email.com',
    emailSend: language === 'es' ? 'Enviar' : 'Submit',
    emailSkip: language === 'es' ? 'Omitir' : 'Skip',
    emailConfirm: language === 'es'
      ? 'Perfecto, te contactaremos si es necesario. ¡Hasta pronto! 👋'
      : 'Perfect, we\'ll follow up if needed. See you soon! 👋',
    emailSkipped: language === 'es'
      ? '¡De acuerdo! Si necesitas más ayuda, escríbenos a hola@muebly.es. ¡Hasta pronto! 👋'
      : 'Got it! If you need more help, write to hola@muebly.es. See you! 👋',
    title: language === 'es' ? 'Soporte Muebly' : 'Muebly Support',
    typing: language === 'es' ? 'Escribiendo...' : 'Typing...',
  };

  // ── Scroll to bottom ──
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, phase]);

  // ── Welcome message on first open ──
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'assistant', content: t.welcome, timestamp: new Date().toISOString() }]);
    }
  }, [open]);

  // ── Focus input when opened ──
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  // ── Save session ──
  const saveSession = useCallback(async (email: string | null, msgs: Message[], res: boolean) => {
    if (savedSession) return;
    setSavedSession(true);
    try {
      await fetch('/api/chat/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sessionId,
          timestamp_inicio: startTime,
          timestamp_fin: new Date().toISOString(),
          idioma: language,
          email_usuario: email,
          mensajes: msgs,
          resuelto: res,
        }),
      });
    } catch (e) {
      console.error('Failed to save chat session', e);
    }
  }, [savedSession, sessionId, startTime, language]);

  // ── Inactivity timer (5 min → show email prompt; 10 min → save & close) ──
  const resetInactivity = useCallback(() => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => {
      if (phase === 'chat' && messages.length > 1) setPhase('email-prompt');
    }, 5 * 60 * 1000);
  }, [phase, messages.length]);

  useEffect(() => {
    if (open) resetInactivity();
    return () => { if (inactivityTimer.current) clearTimeout(inactivityTimer.current); };
  }, [open, messages.length]);

  // ── Send message ──
  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isTyping || phase !== 'chat') return;

    const userMsg: Message = { role: 'user', content: text, timestamp: new Date().toISOString() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);
    resetInactivity();

    const newCount = userMsgCount + 1;
    setUserMsgCount(newCount);

    const goodbye = isGoodbye(text);
    if (goodbye) setResolved(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sessionId,
          messages: newMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      if (!res.body) throw new Error('No body');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let botText = '';
      const botMsg: Message = { role: 'assistant', content: '', timestamp: new Date().toISOString() };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        botText += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { ...botMsg, content: botText };
          return updated;
        });
      }

      const finalMessages = [...newMessages, { ...botMsg, content: botText }];

      // Show email prompt after 3 user messages or on goodbye
      if (newCount >= 3 || goodbye) {
        setTimeout(() => setPhase('email-prompt'), 800);
      }

    } catch (err) {
      console.error(err);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: language === 'es' ? 'Lo siento, ha ocurrido un error. Por favor escribe a hola@muebly.es' : 'Sorry, an error occurred. Please write to hola@muebly.es', timestamp: new Date().toISOString() },
      ]);
    }
  };

  // ── Handle email submit ──
  const handleEmailSubmit = async (skip: boolean) => {
    const email = skip ? null : (emailInput.trim() || null);
    const confirm = skip ? t.emailSkipped : t.emailConfirm;
    setUserEmail(email);
    setPhase('done');
    setMessages((prev) => [...prev, { role: 'assistant', content: confirm, timestamp: new Date().toISOString() }]);
    await saveSession(email, messages, resolved);
  };

  return (
    <>
      {/* ── Floating button ── */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open support chat"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#00ffc3] shadow-lg flex items-center justify-center hover:bg-[#00ffc3]/90 hover:scale-105 transition-all"
        style={{ boxShadow: '0 4px 24px rgba(0,255,195,0.35)' }}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#191b1d" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#191b1d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* ── Chat window ── */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={{ height: '520px', boxShadow: '0 8px 40px rgba(0,0,0,0.18)' }}
        >
          {/* Header */}
          <div className="bg-[#191b1d] px-4 py-3 flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#00ffc3] flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#191b1d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-none">{t.title}</p>
              <p className="text-white/50 text-xs mt-0.5">muebly.es</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-[#00ffc3] shrink-0" title="Online" />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#f8f8f8]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#00ffc3] flex items-center justify-center shrink-0 mr-2 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#191b1d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                )}
                <div
                  className={`max-w-[78%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#191b1d] text-white rounded-tr-sm'
                      : 'bg-white text-[#191b1d] rounded-tl-sm shadow-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start items-end gap-2">
                <div className="w-6 h-6 rounded-full bg-[#00ffc3] flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#191b1d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1 items-center">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 bg-[#686a6c] rounded-full inline-block"
                      style={{ animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Email prompt */}
            {phase === 'email-prompt' && (
              <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm text-sm text-[#191b1d] space-y-2 ml-8">
                <p className="text-[#686a6c] leading-relaxed">{t.emailPrompt}</p>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full border border-[#191b1d]/15 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#00ffc3] transition-colors"
                  onKeyDown={(e) => e.key === 'Enter' && handleEmailSubmit(false)}
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEmailSubmit(false)}
                    className="flex-1 bg-[#00ffc3] text-black text-sm font-semibold py-2 rounded-lg hover:bg-[#00ffc3]/90 transition-colors"
                  >
                    {t.emailSend}
                  </button>
                  <button
                    onClick={() => handleEmailSubmit(true)}
                    className="px-4 text-sm text-[#686a6c] border border-[#191b1d]/15 rounded-lg hover:border-[#191b1d]/30 transition-colors"
                  >
                    {t.emailSkip}
                  </button>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input area */}
          {phase === 'chat' && (
            <div className="px-3 py-3 bg-white border-t border-[#191b1d]/8 flex gap-2 shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                placeholder={t.placeholder}
                disabled={isTyping}
                className="flex-1 bg-[#f5f5f5] rounded-xl px-4 py-2.5 text-sm text-[#191b1d] placeholder-[#686a6c] outline-none focus:ring-2 focus:ring-[#00ffc3]/40 disabled:opacity-50 transition-all"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 rounded-xl bg-[#00ffc3] flex items-center justify-center shrink-0 hover:bg-[#00ffc3]/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#191b1d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-11 20-4-9-9-4 24-7z" />
                </svg>
              </button>
            </div>
          )}

          {/* Done state — show email if captured */}
          {phase === 'done' && (
            <div className="px-4 py-3 bg-white border-t border-[#191b1d]/8 text-center shrink-0">
              <p className="text-xs text-[#686a6c]">
                {language === 'es' ? '¿Más preguntas? Escríbenos a ' : 'More questions? Write to '}
                <a href="mailto:hola@muebly.es" className="text-[#00ffc3] hover:underline">hola@muebly.es</a>
              </p>
            </div>
          )}
        </div>
      )}

      {/* Bounce animation for typing dots */}
      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}

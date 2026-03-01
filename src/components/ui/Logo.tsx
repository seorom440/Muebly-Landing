import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className, variant = "light" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-gray-900";
  
  return (
    <a href="/" className={cn("flex items-center gap-1.5", className)}>
      <span className="w-3 h-3 rounded-full bg-accent" />
      <span className={cn("text-3xl font-semibold tracking-tight lowercase", textColor)}>
        muebly
      </span>
    </a>
  );
}

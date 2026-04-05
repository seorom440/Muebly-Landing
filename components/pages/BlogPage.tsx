'use client';
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PostMeta } from "@/lib/blog";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  posts: PostMeta[];
}

export function BlogPage({ posts }: Props) {
  const { t } = useLanguage();
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-24">

        {/* Hero */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-black"
              >
                {t('blogTitle')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                {t('blogDesc')}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="pb-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <Link href={`/blog/${featuredPost.slug}`} className="group block bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 md:flex">
                  <div className="md:w-1/2 relative overflow-hidden aspect-video md:aspect-auto min-h-[280px]">
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-emerald-700">
                      {t('blogFeaturedTag')}
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                      <span className="font-medium text-emerald-600">{featuredPost.category}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featuredPost.readingTime}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6 group-hover:text-emerald-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg line-clamp-3">
                      {featuredPost.description}
                    </p>
                    <span className="flex items-center gap-2 text-black font-medium group-hover:gap-4 transition-all">
                      {t('blogReadArticle')} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="font-medium text-emerald-600">{post.category}</span>
                        <span>·</span>
                        <span>{post.readingTime}</span>
                        <span>·</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-black mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2 flex-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-2">
                        {post.description}
                      </p>
                      <span className="flex items-center gap-2 text-black font-medium text-sm group-hover:gap-3 transition-all mt-auto">
                        {t('blogReadArticle')} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 text-black">
                {t('blogSubscribeTitle')}
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                {t('blogSubscribeDesc')}
              </p>
              <form
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder={t('blogEmailPlaceholder')}
                  className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 shrink-0"
                >
                  {t('blogSubscribeBtn')}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

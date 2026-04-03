import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { posts } from "@/data/posts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function BlogIndex() {
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-5xl font-bold mb-4">Blog</h1>
            <p className="text-white/60 text-lg max-w-xl">
              Interior design ideas, AI design tips, real estate staging guides,
              and trend reports — published daily.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <Link to={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/30 transition-colors">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={featured.coverImage}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-3 text-sm text-white/40">
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {featured.readingTime}
                    </span>
                    <span>{featured.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold group-hover:text-accent transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-white/60 leading-relaxed">
                    {featured.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent text-sm font-medium">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="h-full rounded-2xl overflow-hidden border border-white/10 hover:border-accent/30 transition-colors flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-white/40">
                        <span className="flex items-center gap-1">
                          <Tag className="h-3 w-3" />
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readingTime}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-accent transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed flex-1">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-1 text-accent text-sm font-medium pt-2">
                        Read more
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

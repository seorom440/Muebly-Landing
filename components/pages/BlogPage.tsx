'use client';
import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const postsKeys = [
  {
    categoryKey: "blogFeaturedTag",
    readTimeNum: 8,
    monthKey: "blogMonthMar",
    year: "2025",
    titleKey: "blogFeaturedTitle",
    excerptKey: "blogFeaturedDesc",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    featured: true
  },
  {
    categoryKey: "blogArt1Tag",
    readTimeNum: 5,
    monthKey: "blogMonthFeb",
    year: "2025",
    titleKey: "blogArt1Title",
    excerptKey: "blogArt1Desc",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
  },
  {
    categoryKey: "blogArt2Tag",
    readTimeNum: 6,
    monthKey: "blogMonthFeb",
    year: "2025",
    titleKey: "blogArt2Title",
    excerptKey: "blogArt2Desc",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop"
  },
  {
    categoryKey: "blogArt3Tag",
    readTimeNum: 4,
    monthKey: "blogMonthJan",
    year: "2025",
    titleKey: "blogArt3Title",
    excerptKey: "blogArt3Desc",
    image: "https://images.unsplash.com/photo-1634712282287-14ed57ef99a8?q=80&w=800&auto=format&fit=crop"
  },
  {
    categoryKey: "blogArt4Tag",
    readTimeNum: 10,
    monthKey: "blogMonthJan",
    year: "2025",
    titleKey: "blogArt4Title",
    excerptKey: "blogArt4Desc",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
  },
  {
    categoryKey: "blogArt5Tag",
    readTimeNum: 5,
    monthKey: "blogMonthDec",
    year: "2024",
    titleKey: "blogArt5Title",
    excerptKey: "blogArt5Desc",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=800&auto=format&fit=crop"
  },
  {
    categoryKey: "blogArt6Tag",
    readTimeNum: 7,
    monthKey: "blogMonthNov",
    year: "2024",
    titleKey: "blogArt6Title",
    excerptKey: "blogArt6Desc",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=800&auto=format&fit=crop"
  }
];

export function BlogPage() {
  const { t } = useLanguage();
  const featuredPost = postsKeys[0];
  const regularPosts = postsKeys.slice(1);

  return (
    <div className="min-h-screen bg-background font-sans antialiased selection:bg-accent selection:text-black">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
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

            {/* Categories */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {["blogCatAll", "blogCatTech", "blogCatRealEstate", "blogCatEcommerce", "blogCatDesign", "blogCatGuides"].map((catKey, i) => (
                <button 
                  key={i}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    i === 0 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                  }`}
                >
                  {t(catKey as any)}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
                <div className="md:w-1/2 relative overflow-hidden aspect-video md:aspect-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={t(featuredPost.titleKey as any)} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-emerald-700">
                    {t('blogFeaturedTag')}
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="font-medium text-emerald-600">{t(featuredPost.categoryKey as any)}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featuredPost.readTimeNum} {t('blogReadTime')}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {t(featuredPost.monthKey as any)} {featuredPost.year}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6 group-hover:text-emerald-600 transition-colors">
                    {t(featuredPost.titleKey as any)}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {t(featuredPost.excerptKey as any)}
                  </p>
                  <div className="flex items-center gap-2 text-black font-medium group-hover:gap-4 transition-all">
                    {t('blogReadArticle')} <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regular Posts Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, i) => (
                <div key={i} className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={post.image} 
                      alt={t(post.titleKey as any)} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                      <span className="font-medium text-emerald-600">{t(post.categoryKey as any)}</span>
                      <span>•</span>
                      <span>{post.readTimeNum} {t('blogReadTime')}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {t(post.titleKey as any)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 flex-1">
                      {t(post.excerptKey as any)}
                    </p>
                    <div className="flex items-center gap-2 text-black font-medium text-sm group-hover:gap-3 transition-all mt-auto">
                      {t('blogReadArticle')} <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Block */}
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 text-black">
                {t('blogSubscribeTitle')}
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                {t('blogSubscribeDesc')}
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder={t('blogEmailPlaceholder')} 
                  className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  required
                />
                <button type="submit" className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 shrink-0">
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

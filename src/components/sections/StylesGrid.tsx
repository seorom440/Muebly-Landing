import { motion } from "motion/react";

const styles = [
  {
    name: "Modern",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop",
    popularity: "38%",
    generated: "18K",
    label: "Popular"
  },
  {
    name: "Loft",
    image: "https://images.unsplash.com/photo-1505693416388-b034680950ec?q=80&w=800&auto=format&fit=crop",
    popularity: "24%",
    generated: "12K",
    label: "Chosen"
  },
  {
    name: "Minimalist",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop",
    popularity: "21%",
    generated: "15K",
    label: "Preferred"
  },
  {
    name: "Organic",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop",
    popularity: "Trending",
    generated: "Top Trend",
    label: "Trending",
    isTrending: true
  }
];

export function StylesGrid() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center mb-8 sm:mb-12 tracking-tighter text-black">
          Try Popular Styles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {styles.map((style, index) => (
            <motion.div 
              key={style.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={style.image} 
                alt={style.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                  {style.name}
                </span>
                {style.isTrending && (
                  <span className="bg-[#FF3B6C] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    Trending
                  </span>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-3xl font-medium tracking-tighter mb-1">{style.popularity}</p>
                    <p className="text-sm opacity-80">{style.label}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-medium tracking-tighter mb-1">{style.generated}</p>
                    <p className="text-sm opacity-80">Generated</p>
                  </div>
                </div>
                
                <div className="h-0 overflow-hidden group-hover:h-14 transition-all duration-300 mt-0 group-hover:mt-4">
                  <button className="w-full bg-accent text-black font-medium h-12 rounded-full uppercase tracking-wide hover:bg-accent/90 transition-colors">
                    Try {style.name}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const retailers = ["Amazon", "IKEA", "Jysk", "Ashley"];

const products = [
  {
    id: 1,
    name: "Lounge Chair",
    price: "$1 200.00",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=400&auto=format&fit=crop",
    retailer: "amazon",
    retailerLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    position: "left-10 top-1/3",
    dotPosition: "left-[25%] bottom-[35%]",
    variant: "dark"
  },
  {
    id: 2,
    name: "Sectional Sofa",
    price: "$2 800.00",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop",
    retailer: "amazon",
    position: "left-0 bottom-10",
    dotPosition: "left-[40%] bottom-[40%]",
    variant: "light"
  },
  {
    id: 3,
    name: "Coffee Table",
    price: "$850.00",
    image: "https://images.unsplash.com/photo-1634712282287-14ed57ef99a8?q=80&w=400&auto=format&fit=crop",
    retailer: "amazon",
    position: "right-20 top-20",
    dotPosition: "left-[55%] bottom-[30%]",
    variant: "light"
  },
  {
    id: 4,
    name: "Media Console",
    price: "$1 100.00",
    image: "https://images.unsplash.com/photo-1601084881623-aaa9a86e4111?q=80&w=400&auto=format&fit=crop",
    retailer: "amazon",
    position: "right-0 bottom-20",
    dotPosition: "right-[20%] bottom-[40%]",
    variant: "light"
  }
];

export function ShopYourDesign() {
  const [activeRetailer, setActiveRetailer] = useState("Amazon");

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-2xl mb-12">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 text-black">
            Shop your design
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI recommends products for your design and shows where to buy them locally.
          </p>
        </div>

        {/* Retailer Tabs */}
        <div className="flex flex-wrap justify-center gap-2 p-1 bg-muted rounded-[2rem] mb-12 sm:mb-16 w-full max-w-2xl">
          {retailers.map((retailer) => (
            <button
              key={retailer}
              onClick={() => setActiveRetailer(retailer)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeRetailer === retailer
                  ? "bg-white text-black shadow-sm"
                  : "text-muted-foreground hover:text-black"
              }`}
            >
              {retailer}
            </button>
          ))}
        </div>

        {/* Interactive Image Area */}
        <div className="relative w-full max-w-5xl mx-auto mb-12 sm:mb-16">
          {/* Main Room Image */}
          <div className="relative rounded-3xl sm:rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/9]">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop" 
              alt="Modern Living Room" 
              className="w-full h-full object-cover"
            />
            
            {/* Interactive Dots */}
            {products.map((product) => (
              <motion.div
                key={`dot-${product.id}`}
                className={`absolute ${product.dotPosition} w-6 h-6 rounded-full bg-accent cursor-pointer z-20 border-2 border-white shadow-lg`}
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + product.id * 0.1 }}
              />
            ))}
          </div>

          {/* Floating Product Cards */}
          <div className="absolute inset-0 pointer-events-none">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`absolute ${product.position} hidden lg:block pointer-events-auto`}
              >
                <div 
                  className={`
                    p-4 rounded-2xl shadow-xl w-48 backdrop-blur-sm
                    ${product.variant === 'dark' ? 'bg-[#1A1A1A] text-white' : 'bg-white text-black'}
                  `}
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-white">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  {product.retailerLogo && product.variant === 'dark' && (
                    <div className="mb-2 opacity-80 text-xs font-bold uppercase tracking-wider">
                      {product.retailer}
                    </div>
                  )}
                  <h4 className="font-medium text-sm mb-1">{product.name}</h4>
                  <p className={`text-sm ${product.variant === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                    {product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          className="h-14 px-10 rounded-full bg-accent text-black hover:bg-accent/90 text-base font-bold uppercase tracking-wide shadow-lg shadow-accent/20"
        >
          Explore for free
        </Button>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Bell, Home, Heart, User, RotateCcw, Download, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileAppPreview() {
  return (
    <div className="relative mx-auto w-[300px] h-[600px]">
      {/* iPhone 16 Frame */}
      <div className="absolute inset-0 bg-[#1e293b] rounded-[3rem] shadow-2xl border-[8px] border-[#1e293b] overflow-hidden z-20">
        {/* Dynamic Island / Notch Area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-b-2xl z-30 flex justify-center items-center">
            <div className="w-16 h-4 bg-black rounded-full"></div>
        </div>
        
        {/* Screen Content */}
        <div className="w-full h-full bg-[#F5F5F5] dark:bg-gray-900 relative flex flex-col overflow-hidden rounded-[2.5rem]">
            {/* Status Bar */}
            <div className="px-6 pt-3 flex justify-between items-center text-[10px] font-medium text-black z-10">
                <span>10:01</span>
                <div className="flex gap-1">
                    <div className="w-4 h-3 bg-black rounded-sm"></div>
                    <div className="w-4 h-3 bg-black rounded-sm"></div>
                </div>
            </div>

            {/* App Header */}
            <div className="px-6 pt-8 pb-4 flex justify-between items-center z-10">
                <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-gray-900 font-bold text-lg tracking-tight lowercase">muebly</span>
                </div>
                <Bell className="w-5 h-5 text-gray-500" />
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-24">
                {/* Greeting */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Hello, Kelvin</p>
                        <h3 className="text-xl font-bold text-gray-900 leading-none">Good morning!</h3>
                    </div>
                </div>

                {/* Hero Card */}
                <div className="bg-[#459A85] rounded-3xl p-5 text-white mb-6 relative overflow-hidden shadow-lg">
                    <div className="relative z-10 w-[55%]">
                        <h4 className="font-semibold text-sm mb-3 leading-snug">
                            Upload a photo of your room and visualize furniture instantly.
                        </h4>
                        <Button size="sm" className="bg-white text-black hover:bg-gray-100 text-[10px] font-bold h-8 px-4 rounded-full gap-1.5 uppercase tracking-wide">
                            <Camera size={12} />
                            Upload photo
                        </Button>
                    </div>
                    
                    {/* Before/After Image Mockup */}
                    <div className="absolute top-2 right-2 bottom-2 w-[40%] rounded-2xl overflow-hidden flex shadow-md">
                        <div className="w-1/2 h-full relative">
                            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" alt="Before" />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-[1px] text-[6px] font-bold text-white text-center py-1 uppercase">Before</div>
                        </div>
                        <div className="w-1/2 h-full relative">
                            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" alt="After" />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-[1px] text-[6px] font-bold text-white text-center py-1 uppercase">After</div>
                        </div>
                    </div>
                </div>

                {/* Recent Designs */}
                <div className="mb-4">
                    <h3 className="font-bold text-gray-900 mb-3 text-sm">Your redesigns</h3>
                    
                    <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex flex-col gap-3">
                        <div className="flex gap-3">
                            <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                                <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" alt="Design" />
                            </div>
                            <div className="flex flex-col justify-center py-1">
                                <h4 className="font-bold text-sm text-gray-900 leading-tight mb-1">Modern farmhouse living room</h4>
                                <p className="text-xs text-gray-400">3d ago</p>
                            </div>
                        </div>
                        
                        <div className="flex gap-2">
                            <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors">
                                <RotateCcw size={14} />
                                Re-design
                            </button>
                            <button className="w-10 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center transition-colors">
                                <Download size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 py-4 pb-8 flex justify-between items-center rounded-b-[2.5rem] z-20">
                <div className="flex flex-col items-center gap-1">
                    <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-full">
                        <Home size={20} fill="currentColor" className="text-emerald-600" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600">Home</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-gray-400">
                    <div className="p-2.5">
                        <Heart size={20} />
                    </div>
                    <span className="text-[10px] font-medium">Wishlist</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-gray-400">
                    <div className="p-2.5">
                        <User size={20} />
                    </div>
                    <span className="text-[10px] font-medium">Profile</span>
                </div>
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-1 bg-gray-900 rounded-full z-30"></div>
        </div>
      </div>

      {/* Side Buttons */}
      <div className="absolute top-24 -left-[10px] w-[10px] h-8 bg-[#1e293b] rounded-l-md"></div>
      <div className="absolute top-36 -left-[10px] w-[10px] h-14 bg-[#1e293b] rounded-l-md"></div>
      <div className="absolute top-52 -left-[10px] w-[10px] h-14 bg-[#1e293b] rounded-l-md"></div>
      <div className="absolute top-40 -right-[10px] w-[10px] h-20 bg-[#1e293b] rounded-r-md"></div>
    </div>
  );
}

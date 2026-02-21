import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const Envelope = ({ onOpen, isOpen }) => {
    return (
        <div className="relative w-full max-w-md mx-auto aspect-[4/3] perspective-1000 cursor-pointer group" onClick={onOpen}>
            {/* Back of envelope */}
            <div className="absolute inset-0 bg-rose-200 rounded-lg shadow-xl" />

            {/* Greeting Card - Slides out when open */}
            <motion.div
                className="absolute inset-x-4 bottom-4 bg-white rounded-lg shadow-inner flex flex-col items-center justify-center p-8 border border-rose-100"
                initial={{ y: 0 }}
                animate={{ y: isOpen ? -100 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <div className="z-50 flex flex-col items-center">
                    <h3 className="text-2xl font-serif text-rose-500 mb-2">For My Sayang</h3>
                    <p className="text-rose-500 italic">Click to open my heart...</p>
                    <Heart className="text-rose-500 mt-4 animate-pulse fill-rose-500" />
                </div>
            </motion.div>

            {/* Front flap (Top) */}
            <motion.div
                className="absolute inset-x-0 top-0 h-1/2 bg-rose-300 origin-top rounded-t-lg shadow-md z-20"
                animate={{ rotateX: isOpen ? -160 : 0 }}
                transition={{ duration: 0.8 }}
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            >
                <div className="w-full h-full flex items-start justify-center pt-2">
                    <div className="w-8 h-8 bg-rose-400 rounded-full flex items-center justify-center shadow-lg border-2 border-rose-200">
                        <Heart size={16} fill="white" className="text-white" />
                    </div>
                </div>
            </motion.div>

            {/* Front side (Left & Right triangles) */}
            <div className="absolute inset-x-0 bottom-0 h-full bg-transparent z-10"
                style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%, 100% 0, 50% 50%)' }}>
                <div className="absolute inset-0 bg-rose-100 opacity-90 border-b-2 border-rose-200 shadow-xl" />
            </div>
        </div>
    );
};

export default Envelope;

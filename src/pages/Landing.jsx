import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';
import Envelope from '../components/special/Envelope';
import { useNavigate } from 'react-router-dom';
import { Heart, Sparkles, Star } from 'lucide-react';

const FloatIcon = ({ Icon, size, className, style }) => (
    <motion.div
        className={`absolute pointer-events-none ${className}`}
        style={style}
        animate={{ y: [0, -12, 0], rotate: [-5, 5, -5], scale: [1, 1.1, 1] }}
        transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
    >
        <Icon size={size} />
    </motion.div>
);

const Landing = () => {
    const navigate = useNavigate();
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className="text-center w-full min-h-[80vh] flex flex-col items-center justify-center relative">
            {/* Floating ornaments */}
            <FloatIcon Icon={Heart} size={28} className="text-rose-300/60 fill-rose-300/60" style={{ top: '5%', left: '5%' }} />
            <FloatIcon Icon={Star} size={20} className="text-amber-300/60 fill-amber-300/60" style={{ top: '15%', right: '8%' }} />
            <FloatIcon Icon={Sparkles} size={22} className="text-pink-300/70" style={{ bottom: '20%', left: '3%' }} />
            <FloatIcon Icon={Heart} size={16} className="text-rose-200/70 fill-rose-200/70" style={{ bottom: '10%', right: '5%' }} />

            <AnimatePresence mode="wait">
                {!isOpened ? (
                    <motion.div
                        key="envelope"
                        initial={{ opacity: 0, scale: 0.85, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.1, y: -20, filter: 'blur(10px)' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center gap-10 w-full px-4"
                    >
                        <div className="space-y-2">
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-base md:text-lg font-display italic text-rose-400 tracking-widest uppercase"
                            >
                                A very special message
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-4xl md:text-6xl font-display font-bold text-rose-800 leading-tight"
                            >
                                For Someone <span className="shimmer-text">Beautiful</span>
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="w-full max-w-sm"
                        >
                            <Envelope isOpen={isOpened} onOpen={() => setIsOpened(true)} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex flex-col items-center gap-3"
                        >
                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <Heart size={20} className="text-rose-400/60 fill-rose-400/60" />
                            </motion.div>
                            <p className="text-rose-400/80 font-display italic text-sm md:text-base tracking-wide">
                                "Press the heart seal to begin..."
                            </p>
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="reveal"
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-md mx-auto w-full px-4"
                    >
                        {/* Premium glass card */}
                        <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] p-10 shadow-[0_25px_80px_rgba(244,63,94,0.2)] border border-rose-100/80 overflow-hidden">
                            {/* Decorative blobs inside card */}
                            <div className="absolute -top-16 -right-16 w-40 h-40 bg-rose-100/50 rounded-full blur-2xl pointer-events-none" />
                            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-amber-100/50 rounded-full blur-2xl pointer-events-none" />

                            <div className="relative">
                                {/* Animated pulsing heart */}
                                <motion.div
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="flex justify-center mb-6"
                                >
                                    <Heart size={52} className="text-rose-500 fill-rose-500 drop-shadow-lg" />
                                </motion.div>

                                <h2 className="text-4xl font-display font-bold text-rose-800 mb-4 leading-tight">
                                    She's Waiting...
                                </h2>
                                <p className="text-rose-600/70 text-base mb-8 font-display italic leading-relaxed">
                                    "I've put my heart and soul into every word and every memory. Are you ready to see it?"
                                </p>

                                <Button
                                    onClick={() => navigate('/story')}
                                    className="w-full text-base py-4 font-bold tracking-wide bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 border-0 shadow-[0_8px_30px_rgba(244,63,94,0.35)]"
                                >
                                    <Heart size={18} className="fill-white" />
                                    Let's Go, Sayang!
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Landing;

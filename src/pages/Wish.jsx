import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import TypewriterText from '../components/special/TypewriterText';
import { Heart, Star } from 'lucide-react';

const PARAGRAPHS = [
    "Happy Birthday, my love. Today isn't just another page on the calendar — it's the anniversary of when the universe decided to gift the world its most precious person.",
    "I want you to know how deeply you are loved. You are the light on my darkest mornings, the calm in every storm, and the reason even ordinary Tuesdays feel like something worth celebrating.",
    "Thank you for your kindness, your laughter, and the way you make me feel like I am exactly where I am meant to be. Walking through life beside you is the greatest adventure I have ever known.",
    "On this birthday and all the ones to come, I promise to love you more, hold you closer, and never let you forget just how extraordinary you truly are.",
];

const Wish = () => {
    const navigate = useNavigate();
    const [visibleCount, setVisibleCount] = useState(1);

    const handleNext = () => {
        if (visibleCount < PARAGRAPHS.length) {
            setVisibleCount((c) => c + 1);
        }
    };

    const allShown = visibleCount >= PARAGRAPHS.length;

    return (
        <div className="max-w-2xl mx-auto py-12 px-4">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <p className="text-rose-400 font-display italic tracking-widest uppercase text-sm mb-3">Chapter Three</p>
                <h2 className="text-5xl md:text-6xl font-display font-bold text-rose-800 leading-tight">
                    My Letter
                </h2>
                <div className="flex items-center justify-center gap-3 mt-6">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-200" />
                    <Heart size={14} className="text-rose-300 fill-rose-300" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-200" />
                </div>
            </motion.div>

            {/* Letter card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative bg-white/85 backdrop-blur-xl rounded-[2rem] shadow-[0_25px_80px_rgba(244,63,94,0.15)] border border-rose-100/80 overflow-hidden"
            >
                {/* Top ribbon */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-300 via-pink-400 to-rose-300" />

                {/* Background blobs */}
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-rose-50/80 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-amber-50/80 rounded-full blur-3xl pointer-events-none" />

                <div className="relative p-8 md:p-12">
                    <p className="font-display italic text-rose-700 text-xl mb-8">To my dearest Sayang,</p>

                    <div className="space-y-6 font-display italic text-rose-800/80 text-lg leading-relaxed">
                        <AnimatePresence>
                            {PARAGRAPHS.slice(0, visibleCount).map((para, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    {i === visibleCount - 1 ? (
                                        <TypewriterText text={para} delay={0.03} />
                                    ) : (
                                        para
                                    )}
                                </motion.p>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Reveal next paragraph button */}
                    <AnimatePresence>
                        {!allShown && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="mt-10 flex justify-center"
                            >
                                <button
                                    onClick={handleNext}
                                    className="flex items-center gap-2 text-rose-400 hover:text-rose-600 font-display italic text-base transition-colors"
                                >
                                    <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                                        <Heart size={16} className="fill-current" />
                                    </motion.div>
                                    Continue reading...
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Final signature and CTA */}
                    <AnimatePresence>
                        {allShown && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-12 text-center"
                            >
                                <div className="flex justify-center gap-1 mb-4">
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: i * 0.1, type: 'spring' }}
                                        >
                                            <Star size={16} className="text-amber-400 fill-amber-400" />
                                        </motion.div>
                                    ))}
                                </div>
                                <p className="font-display italic text-2xl font-bold text-rose-700 mb-2">
                                    I love you endlessly. ❤️
                                </p>
                                <p className="text-rose-400 text-sm italic mb-10">— Always yours</p>
                                <Button
                                    onClick={() => navigate('/celebrate')}
                                    className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 border-0 shadow-[0_8px_30px_rgba(244,63,94,0.35)] px-8 py-4 text-base font-bold tracking-wide"
                                >
                                    <Heart size={16} className="fill-white" />
                                    Let's Celebrate! 🎉
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default Wish;

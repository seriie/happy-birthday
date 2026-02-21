import React, { useMemo, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Cake, Sparkles, PartyPopper, Heart, Star } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const Confetti = ({ x, delay, color, size }) => (
    <motion.div
        className={`absolute rounded-sm pointer-events-none ${color}`}
        style={{ left: `${x}%`, width: size, height: size * 0.4 }}
        initial={{ y: -20, opacity: 1, rotate: 0 }}
        animate={{ y: '110vh', opacity: [1, 1, 0], rotate: 720 }}
        transition={{ duration: 4 + Math.random() * 3, delay, ease: 'linear', repeat: Infinity }}
    />
);

const CONFETTI_COLORS = ['bg-rose-400', 'bg-pink-300', 'bg-amber-300', 'bg-rose-300', 'bg-fuchsia-300', 'bg-orange-300'];

const Celebrate = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 600);
        return () => clearTimeout(timer);
    }, []);

    const confettiPieces = useMemo(() =>
        Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            delay: Math.random() * 4,
            color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
            size: Math.random() * 10 + 6,
        }))
        , []);

    return (
        <div className="min-h-[85vh] flex flex-col items-center justify-center text-center relative overflow-hidden py-12 px-4">
            {/* Confetti */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {confettiPieces.map((p) => <Confetti key={p.id} {...p} />)}
            </div>

            {/* Cake */}
            <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                className="relative z-10 mb-12"
            >
                <div className="relative">
                    <motion.div
                        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-rose-200/40 rounded-full blur-2xl"
                    />
                    <div className="relative bg-white/80 backdrop-blur-xl p-10 rounded-full border-4 border-rose-100 shadow-[0_0_60px_rgba(244,63,94,0.25)]">
                        <Cake size={96} className="text-rose-500" strokeWidth={1.5} />
                    </div>
                    {[0, 72, 144, 216, 288].map((deg, i) => (
                        <motion.div
                            key={i}
                            className="absolute inset-0 flex items-start justify-center"
                            animate={{ rotate: [deg, deg + 360] }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: i * 0.3 }}
                        >
                            <motion.div
                                animate={{ scale: [0.8, 1.2, 0.8] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                className="-translate-y-16"
                            >
                                <Star size={12} className="text-amber-400 fill-amber-400" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Text */}
            <AnimatePresence>
                {showContent && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 space-y-6 max-w-xl mx-auto"
                    >
                        <p className="text-rose-400 font-display italic tracking-widest uppercase text-sm">{t('celebrate.label')}</p>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-rose-800 leading-tight">
                            {t('celebrate.title')} <br />
                            <span className="shimmer-text">{t('celebrate.titleHighlight')}</span>
                        </h1>
                        <p className="text-rose-600/70 font-display italic text-xl leading-relaxed">{t('celebrate.subtitle')}</p>

                        <div className="flex justify-center gap-4 py-4">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{ y: [0, -10, 0], scale: [1, 1.3, 1] }}
                                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                                >
                                    <Heart size={i === 2 ? 36 : 24} className={`fill-current ${i === 2 ? 'text-rose-500' : 'text-rose-300'}`} />
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Button
                                onClick={() => navigate('/')}
                                className="bg-white border-2 border-rose-200 text-rose-500 hover:bg-rose-50 hover:border-rose-400 shadow-lg px-10 py-4 text-base font-bold tracking-wide"
                            >
                                {t('celebrate.ctaButton')}
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Celebrate;

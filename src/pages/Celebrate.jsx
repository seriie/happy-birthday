import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Cake, Sparkles, PartyPopper, Heart } from 'lucide-react';

const Balloon = ({ delay, x, color }) => (
    <motion.div
        initial={{ y: "120vh", x }}
        animate={{ y: "-20vh" }}
        transition={{ duration: 10 + Math.random() * 10, delay, repeat: Infinity, ease: "linear" }}
        className={`absolute pointer-events-none opacity-40 ${color}`}
    >
        <div className="w-12 h-16 rounded-full relative">
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-8 bg-rose-200" />
        </div>
    </motion.div>
);

const Celebrate = () => {
    const navigate = useNavigate();

    const balloons = useMemo(() =>
        Array.from({ length: 10 }).map((_, i) => ({
            id: i,
            x: `${Math.random() * 100}vw`,
            delay: Math.random() * 10,
            color: ["text-rose-300", "text-pink-300", "text-amber-200", "text-rose-400"][Math.floor(Math.random() * 4)]
        }))
        , []);

    return (
        <div className="text-center py-12 relative overflow-hidden min-h-[80vh] flex flex-col items-center justify-center">
            {/* Floating Balloons */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {balloons.map(b => (
                    <Balloon key={b.id} {...b} />
                ))}
            </div>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative inline-block mb-12 z-10"
            >
                <div className="bg-white/80 backdrop-blur-md p-10 rounded-full shadow-[0_0_50px_rgba(251,113,133,0.3)] relative z-10 border-4 border-rose-100">
                    <Cake size={100} className="text-rose-500" />
                </div>

                <motion.div
                    animate={{ y: [-20, 20], x: [-10, 10], rotate: [0, 15] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute -top-8 -left-8 text-amber-400"
                >
                    <Sparkles size={60} />
                </motion.div>

                <motion.div
                    animate={{ y: [10, -10], x: [5, -5], rotate: [0, -15] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                    className="absolute -bottom-8 -right-8 text-rose-500"
                >
                    <PartyPopper size={64} />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="z-10"
            >
                <h1 className="text-5xl md:text-7xl font-serif text-rose-800 mb-8 px-4 leading-tight">
                    Happy Birthday, <br /> Sayang! 🎂✨
                </h1>
                <p className="text-2xl text-rose-600/70 mb-12 italic font-serif max-w-lg mx-auto">
                    "Wishing you a day as beautiful and bright as the love you give."
                </p>

                <div className="flex flex-col items-center gap-8">
                    <div className="flex gap-6">
                        {[0, 1, 2].map(i => (
                            <motion.div
                                key={i}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            >
                                <Heart className="text-rose-400 fill-rose-400" size={32} />
                            </motion.div>
                        ))}
                    </div>

                    <Button
                        onClick={() => navigate('/')}
                        className="bg-transparent border-2 border-rose-300 text-rose-500 hover:bg-rose-50 shadow-none px-12 py-4 text-xl"
                    >
                        Read Again 💌
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default Celebrate;

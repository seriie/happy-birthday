import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Cake, Sparkles, PartyPopper, Heart } from 'lucide-react';

const Celebrate = () => {
    const navigate = useNavigate();

    return (
        <div className="text-center py-12">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative inline-block mb-12"
            >
                <div className="bg-rose-100 p-8 rounded-full shadow-2xl relative z-10">
                    <Cake size={80} className="text-rose-500" />
                </div>

                {/* Popping elements */}
                <motion.div
                    animate={{ y: [-20, 20], x: [-10, 10], rotate: [0, 15] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute -top-4 -left-4 text-amber-400 group"
                >
                    <Sparkles size={40} />
                </motion.div>

                <motion.div
                    animate={{ y: [10, -10], x: [5, -5], rotate: [0, -15] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                    className="absolute -bottom-4 -right-4 text-rose-400"
                >
                    <PartyPopper size={48} />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <h1 className="text-4xl md:text-6xl font-serif text-rose-800 mb-6 px-4">
                    Time for Cake & Celebration! 🎂
                </h1>
                <p className="text-xl text-rose-600/70 mb-12 italic">
                    "Wishing you a day filled with everything you love most."
                </p>

                <div className="flex flex-col items-center gap-6">
                    <div className="flex gap-4">
                        <Heart className="text-rose-400 fill-current animate-pulse" />
                        <Heart className="text-rose-400 fill-current animate-pulse delay-75" />
                        <Heart className="text-rose-400 fill-current animate-pulse delay-150" />
                    </div>

                    <Button
                        onClick={() => navigate('/')}
                        className="bg-transparent border-2 border-rose-300 text-rose-500 hover:bg-rose-50 shadow-none"
                    >
                        Read Again 💌
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default Celebrate;

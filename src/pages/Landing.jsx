import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Envelope from '../components/special/Envelope';
import { useNavigate } from 'react-router-dom';
import { Heart, Stars } from 'lucide-react';

const Landing = () => {
    const navigate = useNavigate();
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className="text-center w-full">
            <AnimatePresence mode="wait">
                {!isOpened ? (
                    <motion.div
                        key="envelope"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
                        className="flex flex-col items-center"
                    >
                        <h1 className="text-3xl md:text-5xl font-serif text-rose-500 mb-12 px-4 leading-tight">
                            A Special Message <br /> for Someone Special ❤️
                        </h1>
                        <Envelope isOpen={isOpened} onOpen={() => setIsOpened(true)} />
                        <motion.p
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-rose-400 mt-12 font-medium italic"
                        >
                            "Touch the heart to reveal what's inside"
                        </motion.p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="reveal"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="max-w-md mx-auto relative"
                    >
                        <div className="absolute -top-12 -left-12 text-rose-400 animate-pulse hidden md:block">
                            <Heart size={48} fill="currentColor" />
                        </div>

                        <Card className="p-10 shadow-[0_20px_50px_rgba(251,113,133,0.3)] border-2 border-rose-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-full translate-x-16 -translate-y-16 pointer-events-none" />

                            <h2 className="text-4xl font-serif text-rose-800 mb-6">
                                Ready to See? ✨
                            </h2>
                            <p className="text-rose-600/80 text-lg mb-8 italic">
                                "I've gathered some moments and words just for you. Shall we begin?"
                            </p>
                            <Button
                                onClick={() => navigate('/story')}
                                className="w-full text-lg py-4 relative group"
                            >
                                Let's Go, Sayang! 🚀
                            </Button>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Landing;

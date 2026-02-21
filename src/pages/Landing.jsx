import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useNavigate } from 'react-router-dom';
import { Heart, Stars } from 'lucide-react';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8 relative inline-block"
            >
                <div className="absolute -top-12 -left-12 text-rose-400 animate-pulse">
                    <Heart size={48} fill="currentColor" />
                </div>
                <div className="absolute -bottom-8 -right-8 text-amber-400 animate-bounce">
                    <Stars size={40} fill="currentColor" />
                </div>

                <Card className="max-w-md mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif text-rose-800 mb-4">
                        Happy Birthday, Sayang! ❤️
                    </h1>
                    <p className="text-rose-600/80 text-lg mb-8 italic">
                        "I have a special letter for you. Would you like to open it?"
                    </p>
                    <Button
                        onClick={() => navigate('/story')}
                        className="w-full text-lg py-4"
                    >
                        Open My Letter 💌
                    </Button>
                </Card>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-rose-400 font-medium"
            >
                Make sure you're comfortable. This is just for you.
            </motion.p>
        </div>
    );
};

export default Landing;

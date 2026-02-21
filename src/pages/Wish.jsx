import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Heart } from 'lucide-react';
import TypewriterText from '../components/special/TypewriterText';

const Wish = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-2xl mx-auto py-12 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <Card className="relative overflow-hidden pt-16 pb-12 px-8 md:px-12 text-center bg-white/95 shadow-2xl">
                    {/* Decorative Heart Icon */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-500 p-4 rounded-full shadow-xl text-white">
                        <Heart size={32} fill="currentColor" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif text-rose-800 mb-8 mt-4">
                        To My Dearest Sayang,
                    </h2>

                    <div className="space-y-6 text-lg text-rose-700/80 leading-relaxed font-serif italic text-left min-h-[400px]">
                        <p>
                            <TypewriterText text="Happy Birthday, my love! Today is not just another day; it's the day the world was blessed with your beautiful presence." delay={0.04} />
                        </p>
                        <p>
                            <TypewriterText text="I want you to know how much you mean to me. You are the light that guides me through the darkest nights and the warmth that fills my heart every single morning. Every moment we spend together is a treasure that I hold dear." delay={0.04} />
                        </p>
                        <p>
                            <TypewriterText text="Thank you for being you—for your kindness, your laughter, your amazing strength, and the way you make even the simplest things feel magical. I'm so incredibly lucky to walk through life by your side." delay={0.04} />
                        </p>
                        <TypewriterText
                            className="block text-center font-bold text-2xl text-rose-600 mt-12 not-italic"
                            text="I love you more than words can say. ❤️"
                            delay={0.1}
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button onClick={() => navigate('/celebrate')} className="bg-rose-600 hover:bg-rose-700">
                            Let's Celebrate! 🎇
                        </Button>
                    </motion.div>
                </Card>
            </motion.div>
        </div>
    );
};

export default Wish;

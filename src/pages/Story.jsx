import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Sparkles, Heart, Coffee, MapPin } from 'lucide-react';

const Story = () => {
    const navigate = useNavigate();

    const timeline = [
        {
            icon: <Sparkles className="text-amber-400" />,
            title: "The First Meeting",
            date: "A Day to Remember",
            description: "That moment when everything changed and my world became brighter just by seeing your smile."
        },
        {
            icon: <Coffee className="text-orange-500" />,
            title: "Our First Date",
            date: "The Spark",
            description: "Simple moments turned into extraordinary memories. Every laugh we shared was a melody."
        },
        {
            icon: <MapPin className="text-emerald-500" />,
            title: "Adventures Together",
            date: "Growing Closer",
            description: "Exploring the world or just exploring each other's dreams. Every step with you is a gift."
        },
        {
            icon: <Heart className="text-rose-500" />,
            title: "Falling in Love",
            date: "Every Day Since",
            description: "Realizing that my heart finally found its home in you. I love you more with every passing second."
        }
    ];

    return (
        <div className="max-w-2xl mx-auto py-12">
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-3xl font-serif text-rose-800 text-center mb-12"
            >
                Our Journey Together...
            </motion.h2>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-rose-200 before:to-transparent">
                {timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-rose-50 text-rose-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            {item.icon}
                        </div>

                        <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 hover:shadow-2xl transition-shadow bg-white/90">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-rose-900">{item.title}</div>
                                <time className="font-serif italic text-rose-400 text-sm whitespace-nowrap">{item.date}</time>
                            </div>
                            <div className="text-rose-700/70">{item.description}</div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-16 text-center"
            >
                <Button onClick={() => navigate('/gallery')}>
                    See Our Moments 📸
                </Button>
            </motion.div>
        </div>
    );
};

export default Story;

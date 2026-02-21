import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Camera, Image as ImageIcon, Heart, Star } from 'lucide-react';
import TiltCard from '../components/ui/TiltCard';

const PHOTOS = [
    { title: 'First Smile', caption: 'The moment that started everything' },
    { title: 'Our Getaway', caption: 'Just us, somewhere beautiful' },
    { title: 'Late Nights', caption: 'My favourite kind of evenings' },
    { title: 'Little Things', caption: 'Ordinary days made extraordinary' },
    { title: 'Silly Us', caption: 'Laughing until we cried' },
    { title: 'Just Us', caption: 'My favourite place — with you' },
];

const Gallery = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-5xl mx-auto py-12 px-4">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <p className="text-rose-400 font-display italic tracking-widest uppercase text-sm mb-3">Chapter Two</p>
                <h2 className="text-5xl md:text-6xl font-display font-bold text-rose-800 leading-tight">
                    Our Memories
                </h2>
                <div className="flex items-center justify-center gap-3 mt-6 mb-6">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-200" />
                    <Camera size={14} className="text-rose-300" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-200" />
                </div>
                <p className="text-rose-500/70 font-display italic text-lg">
                    "Every picture is a moment I never want to forget."
                </p>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {PHOTOS.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <TiltCard className="group h-full">
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-rose-50 shadow-md hover:shadow-[0_16px_50px_rgba(244,63,94,0.18)] transition-all duration-500 h-full">
                                {/* Photo placeholder area */}
                                <div className="relative aspect-[4/5] flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50">
                                    {/* Placeholder content */}
                                    <div className="flex flex-col items-center gap-3 text-rose-200 group-hover:text-rose-400 transition-colors duration-500">
                                        <motion.div
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        >
                                            <ImageIcon size={56} strokeWidth={1} />
                                        </motion.div>
                                        <span className="text-xs font-bold uppercase tracking-[0.2em]">Add Photo Here</span>
                                    </div>

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 via-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                        <motion.p
                                            initial={{ y: 10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-white font-display italic text-base leading-snug"
                                        >
                                            "{photo.caption}"
                                        </motion.p>
                                    </div>

                                    {/* Small heart badge */}
                                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Heart size={18} className="text-white fill-white drop-shadow" />
                                    </div>
                                </div>

                                {/* Card footer */}
                                <div className="p-4 flex items-center justify-between">
                                    <h3 className="font-display font-bold text-rose-900 text-base">{photo.title}</h3>
                                    <Star size={14} className="text-amber-300 fill-amber-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <p className="text-rose-400 font-display italic mb-6">And there's still so much more to come...</p>
                <Button
                    onClick={() => navigate('/wish')}
                    className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 border-0 shadow-[0_8px_30px_rgba(244,63,94,0.3)] px-8 py-4 text-base font-bold tracking-wide"
                >
                    <Heart size={16} className="fill-white" />
                    Read My Letter 💌
                </Button>
            </motion.div>
        </div>
    );
};

export default Gallery;

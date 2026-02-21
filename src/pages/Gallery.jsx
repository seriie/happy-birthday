import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Camera, Image as ImageIcon } from 'lucide-react';
import TiltCard from '../components/ui/TiltCard';

const Gallery = () => {
    const navigate = useNavigate();

    const photos = [
        { title: "Sweet Moment", caption: "Walking by the beach" },
        { title: "Our First Trip", caption: "Exploring new horizons" },
        { title: "Movie Night", caption: "Cuddling on the couch" },
        { title: "The Little Things", caption: "Every day with you is special" },
        { title: "Silly Faces", caption: "Laughing until it hurts" },
        { title: "Just Us", caption: "My favorite place in the world" },
    ];

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center mb-12"
            >
                <div className="inline-block p-4 bg-rose-50 rounded-full text-rose-500 mb-6 shadow-inner">
                    <Camera size={40} className="animate-pulse" />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-rose-800">Our Beautiful Memories</h2>
                <p className="text-rose-600/70 mt-6 text-xl italic font-serif">"Every photo is a story we wrote together."</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {photos.map((photo, index) => (
                    <TiltCard key={index} className="group">
                        <Card className="p-4 bg-white/90 cursor-pointer overflow-hidden border-2 border-rose-50 hover:border-rose-200 transition-colors shadow-lg hover:shadow-2xl">
                            <div className="relative aspect-[4/5] bg-rose-50 rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-rose-100 group-hover:border-rose-300 transition-all duration-500 overflow-hidden">
                                <div className="text-rose-200 group-hover:text-rose-400 transition-colors flex flex-col items-center">
                                    <ImageIcon size={64} className="group-hover:scale-110 transition-transform duration-500" />
                                    <span className="text-sm mt-4 font-medium uppercase tracking-widest">Memory</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <p className="text-white text-lg font-serif italic">{photo.caption}</p>
                                </div>
                            </div>
                            <h3 className="text-center font-bold text-rose-900 text-lg group-hover:text-rose-600 transition-colors">{photo.title}</h3>
                        </Card>
                    </TiltCard>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center"
            >
                <Button onClick={() => navigate('/wish')}>
                    A Message for You 💌
                </Button>
            </motion.div>
        </div>
    );
};

export default Gallery;

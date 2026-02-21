import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Camera, Image as ImageIcon } from 'lucide-react';

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
        <div className="max-w-4xl mx-auto py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <div className="inline-block p-3 bg-rose-100 rounded-full text-rose-500 mb-4">
                    <Camera size={32} />
                </div>
                <h2 className="text-3xl font-serif text-rose-800">Our Beautiful Memories</h2>
                <p className="text-rose-600/70 mt-4 italic">"Capturing moments that will last forever."</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <Card className="p-4 bg-white/90 group cursor-pointer overflow-hidden">
                            <div className="relative aspect-video bg-rose-50 rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-rose-200 group-hover:border-rose-400 transition-colors">
                                <div className="text-rose-200 group-hover:text-rose-400 transition-colors flex flex-col items-center">
                                    <ImageIcon size={48} />
                                    <span className="text-sm mt-2 font-medium">Photo Placeholder</span>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-rose-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white text-sm font-serif italic text-center">{photo.caption}</p>
                                </div>
                            </div>
                            <h3 className="text-center font-bold text-rose-900">{photo.title}</h3>
                        </Card>
                    </motion.div>
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

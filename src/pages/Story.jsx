import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Sparkles, Heart, Coffee, MapPin, Star } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const ICONS = [Sparkles, Coffee, MapPin, Heart];
const ICON_COLORS = ['text-amber-500', 'text-orange-500', 'text-emerald-500', 'text-rose-500'];
const BG_COLORS = ['bg-amber-50', 'bg-orange-50', 'bg-emerald-50', 'bg-rose-50'];
const BORDER_COLORS = ['border-amber-100', 'border-orange-100', 'border-emerald-100', 'border-rose-100'];

const Story = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();
    const timeline = t('story.timeline');

    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
            >
                <p className="text-rose-400 font-display italic tracking-widest uppercase text-sm mb-3">{t('story.chapter')}</p>
                <h2 className="text-5xl md:text-6xl font-display font-bold text-rose-800 leading-tight">{t('story.title')}</h2>
                <div className="flex items-center justify-center gap-3 mt-6">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-200" />
                    <Star size={14} className="text-rose-300 fill-rose-300" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-200" />
                </div>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-rose-200 to-transparent" />
                <div className="space-y-12">
                    {Array.isArray(timeline) && timeline.map((item, index) => {
                        const Icon = ICONS[index];
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className={`relative flex flex-col md:flex-row items-center gap-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className={`w-full md:w-[calc(50%-2rem)] bg-white/90 backdrop-blur-sm rounded-2xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${BORDER_COLORS[index]}`}>
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${BG_COLORS[index]} ${ICON_COLORS[index]}`}>
                                        {Icon && <Icon size={12} />}
                                        {item.date}
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-rose-900 mb-2">{item.title}</h3>
                                    <p className="text-rose-700/70 leading-relaxed text-sm">{item.description}</p>
                                </div>
                                <div className={`shrink-0 w-12 h-12 rounded-full ${BG_COLORS[index]} border-4 border-white shadow-lg flex items-center justify-center z-10 ${ICON_COLORS[index]}`}>
                                    {Icon && <Icon size={20} />}
                                </div>
                                <div className="hidden md:block w-[calc(50%-2rem)]" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 text-center"
            >
                <p className="text-rose-400 font-display italic mb-6">{t('story.closing')}</p>
                <Button
                    onClick={() => navigate('/gallery')}
                    className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 border-0 shadow-[0_8px_30px_rgba(244,63,94,0.3)] px-8 py-4 text-base font-bold tracking-wide"
                >
                    <Star size={16} className="fill-white" />
                    {t('story.ctaButton')}
                </Button>
            </motion.div>
        </div>
    );
};

export default Story;

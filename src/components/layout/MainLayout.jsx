import React from 'react';
import FloatingHearts from '../special/FloatingHearts';
import CustomCursor from '../special/CustomCursor';
import { SparklesContainer } from '../special/Sparkles';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Heart, ArrowLeft, ArrowRight } from 'lucide-react';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const ROUTES = ['/', '/story', '/gallery', '/wish', '/celebrate'];
const ROUTE_LABELS = ['Home', 'Story', 'Memories', 'Wish', 'Celebrate'];

const NavDots = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentIdx = ROUTES.indexOf(location.pathname);

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
            {ROUTES.map((route, i) => (
                <button
                    key={route}
                    onClick={() => navigate(route)}
                    title={ROUTE_LABELS[i]}
                    className={`transition-all duration-500 rounded-full border-2 ${i === currentIdx
                        ? 'w-8 h-3 bg-rose-500 border-rose-500'
                        : 'w-3 h-3 bg-white border-rose-200 hover:border-rose-400'
                        }`}
                />
            ))}
        </div>
    );
};

const MainLayout = ({ children }) => {
    const location = useLocation();

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden selection:bg-rose-200 selection:text-rose-900"
            style={{ background: 'linear-gradient(135deg, #fff5f7 0%, #fff9f0 50%, #fff0f5 100%)' }}
        >
            <CustomCursor />
            <SparklesContainer />
            <FloatingHearts />
            <LanguageSwitcher />

            {/* Bokeh orbs */}
            <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none z-0" />
            <div className="fixed bottom-1/4 right-1/4 w-64 h-64 bg-amber-100/30 rounded-full blur-2xl pointer-events-none z-0" />
            <div className="fixed top-3/4 left-1/3 w-48 h-48 bg-pink-100/30 rounded-full blur-2xl pointer-events-none z-0" />

            {/* Page header decoration */}
            <div className="fixed top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent z-50 opacity-60" />

            {/* Corner ornaments */}
            <div className="fixed top-4 left-4 z-40 opacity-30 pointer-events-none">
                <Heart size={20} className="text-rose-400 fill-rose-300" />
            </div>
            <div className="fixed top-4 right-4 z-40 opacity-30 pointer-events-none">
                <Heart size={20} className="text-rose-400 fill-rose-300" />
            </div>

            <main className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 py-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -30, filter: 'blur(4px)' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full max-w-5xl mx-auto"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>

            <NavDots />
        </div>
    );
};

export default MainLayout;

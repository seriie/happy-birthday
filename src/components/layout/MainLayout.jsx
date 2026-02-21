import React from 'react';
import FloatingHearts from '../special/FloatingHearts';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
    const location = useLocation();

    return (
        <div className="relative min-h-screen w-full bg-gradient-to-br from-rose-50 to-cream-100 dark:from-rose-900/10 dark:to-slate-900 overflow-x-hidden">
            <FloatingHearts />

            {/* Soft overlay for texture */}
            <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20 pointer-events-none z-10" />

            <main className="relative z-20 container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-4xl mx-auto"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Decorative corners */}
            <div className="fixed top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-rose-200/50 rounded-tl-3xl pointer-events-none z-30 m-4" />
            <div className="fixed bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-rose-200/50 rounded-br-3xl pointer-events-none z-30 m-4" />
        </div>
    );
};

export default MainLayout;

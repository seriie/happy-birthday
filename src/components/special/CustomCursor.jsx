import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isMobile, setIsMobile] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const moveCursor = (e) => {
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    if (isMobile) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-5 h-5 bg-rose-400/50 rounded-full pointer-events-none z-[9999] flex items-center justify-center backdrop-blur-sm shadow-sm"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        >
            <div className="w-2 h-2 bg-rose-500 rounded-full" />
        </motion.div>
    );
};

export default CustomCursor;

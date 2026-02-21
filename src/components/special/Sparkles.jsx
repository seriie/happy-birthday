import React from 'react';
import { motion } from 'framer-motion';

const Sparkle = ({ size = 20, color = "#fbbf24", style }) => {
    const path = "M 0 10 L 10 10 L 10 0 L 10 10 L 20 10 L 10 10 L 10 20 L 10 10";

    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 20 20"
            style={{
                position: 'absolute',
                pointerEvents: 'none',
                zIndex: 1000,
                ...style
            }}
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{
                scale: [0, 1, 0.5, 0],
                opacity: [0, 1, 1, 0],
                rotate: [0, 90, 180]
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <path
                d={path}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
            />
        </motion.svg>
    );
};

export const SparklesContainer = () => {
    const [sparkles, setSparkles] = React.useState([]);

    const addSparkle = (e) => {
        const newSparkle = {
            id: Date.now(),
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 20 + 10,
        };
        setSparkles((prev) => [...prev.slice(-15), newSparkle]);
    };

    React.useEffect(() => {
        window.addEventListener('mousedown', addSparkle);
        return () => window.removeEventListener('mousedown', addSparkle);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1000]">
            {sparkles.map((s) => (
                <Sparkle
                    key={s.id}
                    size={s.size}
                    style={{ left: s.x - s.size / 2, top: s.y - s.size / 2 }}
                />
            ))}
        </div>
    );
};

export default Sparkle;

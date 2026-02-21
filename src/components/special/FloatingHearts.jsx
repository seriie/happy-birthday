import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
    const hearts = useMemo(() => {
        return Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * (40 - 10) + 10,
            duration: Math.random() * (15 - 10) + 10,
            delay: Math.random() * 5,
        }));
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute text-rose-300/30"
                    initial={{
                        x: `${heart.x}vw`,
                        y: '110vh',
                        opacity: 0,
                        rotate: 0
                    }}
                    animate={{
                        y: '-10vh',
                        opacity: [0, 0.5, 0.5, 0],
                        rotate: 360
                    }}
                    transition={{
                        duration: heart.duration,
                        repeat: Infinity,
                        delay: heart.delay,
                        ease: "linear"
                    }}
                    style={{ width: heart.size, height: heart.size }}
                >
                    <Heart fill="currentColor" size={heart.size} />
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingHearts;

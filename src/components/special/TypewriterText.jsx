import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, delay = 0.05, className }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, delay * 1000);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return (
        <span className={className}>
            {displayedText}
            {currentIndex < text.length && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-1 h-5 bg-rose-400 ml-1 align-middle"
                />
            )}
        </span>
    );
};

export default TypewriterText;

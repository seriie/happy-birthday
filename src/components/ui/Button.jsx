import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Button = ({ className, children, ...props }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "px-6 py-3 rounded-full bg-rose-500 text-white font-semibold shadow-lg",
                "hover:bg-rose-600 transition-colors duration-300",
                "focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "flex items-center justify-center gap-2",
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;

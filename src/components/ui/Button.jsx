import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Button = ({ className, children, ...props }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className={cn(
                // Base
                "relative inline-flex items-center justify-center gap-2.5",
                "px-6 py-3 rounded-full",
                "bg-rose-500 text-white font-bold",
                "shadow-[0_4px_20px_rgba(244,63,94,0.3)]",
                "transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;

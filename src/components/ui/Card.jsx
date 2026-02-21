import React from 'react';
import { cn } from '../../lib/utils';

const Card = ({ className, children, ...props }) => {
    return (
        <div
            className={cn(
                "bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-rose-100",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;

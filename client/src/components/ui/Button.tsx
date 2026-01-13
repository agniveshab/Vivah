import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

// Wait, I didn't install clsx. I should probably just use template literals or install it. 
// I'll stick to template literals for now to avoid install overhead if not needed, but clsx is standard.
// I'll assume I can use standard string logic.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

// Wrapping HTMLButtonElement props but using motion.button properties if needed.
// Actually, let's just use motion.button

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    isLoading,
    disabled,
    ...props
}) => {
    return (
        <motion.button
            className={`btn btn-${variant} btn-${size} ${className}`}
            whileTap={{ scale: 0.98 }}
            disabled={disabled || isLoading}
            {...props as any} // motion.button types can be tricky with React.FC
        >
            {isLoading ? (
                <span className="loader">Loading...</span> // TODO: Add a spinner
            ) : children}
        </motion.button>
    );
};

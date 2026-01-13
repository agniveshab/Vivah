import React from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', label, error, ...props }, ref) => {
        return (
            <div className={`input-wrapper ${className}`}>
                {label && <label className="input-label">{label}</label>}
                <input
                    className={`input-field ${error ? 'has-error' : ''}`}
                    ref={ref}
                    {...props}
                />
                {error && <span className="input-error-msg">{error}</span>}
            </div>
        );
    }
);

Input.displayName = 'Input';

import React from 'react';

interface LogoProps {
    className?: string;
    showText?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({
    className = '',
    showText = true,
    size = 'md'
}) => {
    const sizeClasses = {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };

    const textSizes = {
        sm: 'text-sm',
        md: 'text-lg',
        lg: 'text-2xl'
    };

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Mountain Icon */}
            <div className={`${sizeClasses[size]} relative`}>
                <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    {/* Mountain peaks */}
                    <path
                        d="M4 24 L12 8 L20 16 L28 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Colored dots on peaks */}
                    <circle cx="12" cy="8" r="2" fill="#ff6b47" />
                    <circle cx="20" cy="16" r="2" fill="#22c55e" />
                    <circle cx="28" cy="4" r="2" fill="#3b82f6" />
                </svg>
            </div>

            {/* Text */}
            {showText && (
                <span className={`font-bold text-current ${textSizes[size]}`}>
                    VASINI SINGH
                </span>
            )}
        </div>
    );
};

export default Logo;

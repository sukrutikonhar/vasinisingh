import React from 'react';
import Image from 'next/image';

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
            {/* Logo Image */}
            <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
                <Image
                    src="/images/About us/about-03.webp"
                    alt="Vasini Singh Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                />
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

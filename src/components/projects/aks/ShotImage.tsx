'use client';

import React from 'react';
import Image from 'next/image';

interface ShotImageProps {
    src: string;
    alt: string;
    label: string;
    caption: string;
}

const ShotImage: React.FC<ShotImageProps> = ({ src, alt, label, caption }) => {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
            <div className="relative w-full aspect-[16/10] bg-gray-100">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover object-top"
                />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-200 px-3.5 py-2.5 text-xs text-gray-500">
                <span className="font-grotesk font-medium text-gray-600">{label}</span>
                <span>{caption}</span>
            </div>
        </div>
    );
};

export default ShotImage;

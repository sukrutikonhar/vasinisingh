'use client';

import React from 'react';

interface ImagePlaceholderProps {
    label?: string;
    aspectRatio?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
    label = 'Image Placeholder',
    aspectRatio = 'aspect-video'
}) => {
    return (
        <div className={`${aspectRatio} bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300`}>
            <span className="text-sm font-inter text-gray-500 text-center px-4">
                {label}
            </span>
        </div>
    );
};

export default ImagePlaceholder;

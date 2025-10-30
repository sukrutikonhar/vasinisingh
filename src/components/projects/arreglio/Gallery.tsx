'use client';

import React from 'react';
import Image from 'next/image';

const Gallery: React.FC = () => {
    const screens = [
        '/images/projects/Arreglio/arreglio-UI-01.webp',
        '/images/projects/Arreglio/arreglio-ui-02.webp',
        '/images/projects/Arreglio/arreglio-ui-03.webp',
        '/images/projects/Arreglio/arreglio-ui-04.webp',
        '/images/projects/Arreglio/arreglio-ui-05.webp',
        '/images/projects/Arreglio/5.webp'
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-16 text-center">
                        Final Screens
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {screens.map((screen, index) => (
                            <div
                                key={index}
                                className="overflow-hidden hover:shadow-2xl transition-shadow group shadow-card rounded-[6px]"
                            >
                                <div className="relative aspect-video bg-gray-100">
                                    <Image
                                        src={screen}
                                        alt={`Arreglio Screen ${index + 1}`}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;


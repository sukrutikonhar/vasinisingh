'use client';

import React from 'react';
import Image from 'next/image';

const Gallery: React.FC = () => {
    const screens = [
        '/images/projects/ecoprism/eco-01.webp',
        '/images/projects/ecoprism/eco-02.webp',
        '/images/projects/ecoprism/eco=03.webp',
        '/images/projects/ecoprism/eco-04.webp',
        '/images/projects/ecoprism/eco-05.webp',
        '/images/projects/ecoprism/eco-06.webp'
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-16 text-center">
                        Final Designs
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {screens.map((screen, index) => (
                            <div
                                key={index}
                                className="overflow-hidden hover:shadow-2xl transition-shadow group rounded-[6px] shadow-card"
                            >
                                <div className="relative aspect-video bg-gray-100">
                                    <Image
                                        src={screen}
                                        alt={`ecoPRISM Screen ${index + 1}`}
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


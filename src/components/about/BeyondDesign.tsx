'use client';

import React from 'react';
import Image from 'next/image';

const BeyondDesign: React.FC = () => {
    return (
        <section className="py-24 sm:py-28 md:py-32 bg-[#111] text-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <div className="max-w-xl">
                            <div className="text-xs sm:text-sm font-inter uppercase tracking-[0.22em] text-gray-500 mb-4">
                                BEYOND DESIGN
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold leading-[1.02]">
                                The experiences that shape how I see people
                            </h2>
                        </div>

                        <p className="text-sm sm:text-base md:text-lg font-inter text-gray-300 leading-relaxed pt-2">
                            The way I design is deeply influenced by what I notice outside of work. These interests keep me observant, grounded, and connected to the human side of every product experience.
                        </p>
                    </div>

                    {/* Interest cards */}
                    <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            {
                                image: '/images/about-us/story-05.webp',
                                title: 'Photography',
                                description: 'Photography sharpens my attention to detail, composition, and human moments that often go unnoticed.',
                            },
                            {
                                image: '/images/about-us/vasini-06.webp',
                                title: 'Travel',
                                description: 'Travel broadens my perspective and reminds me that people experience the world and technology in different ways.',
                            },
                            {
                                image: '/images/about-us/story-04.webp',
                                title: 'Coffee Culture',
                                description: 'Slow conversations over coffee often inspire ideas, reflection, and deeper thinking.',
                            },
                            {
                                image: '/images/about-us/about-04.webp',
                                title: 'Community Advocacy',
                                description: 'As a POSH committee member in a non-profit, I stay connected to empathy, inclusion, and responsible decision making.',
                            }
                        ].map((card) => (
                            <div key={card.title} className="bg-[#1a1a1a] rounded-lg p-6">
                                <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5">
                                    <div className="relative w-full h-28 sm:h-32">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-cover grayscale brightness-75"
                                        />
                                    </div>
                                </div>
                                <h3 className="mt-5 text-lg sm:text-xl font-grotesk font-bold">
                                    {card.title}
                                </h3>
                                <p className="mt-3 text-sm sm:text-base font-inter text-gray-300 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeyondDesign;


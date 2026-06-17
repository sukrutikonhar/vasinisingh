'use client';

import { h2Page } from '@/lib/typography';
import React from 'react';
import Image from 'next/image';

const BeyondDesign: React.FC = () => {
    return (
        <section className="py-20 sm:py-24 md:py-28 bg-[#111] text-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <div className="max-w-xl">
                            <div className="text-xs sm:text-sm font-inter uppercase tracking-[0.22em] text-gray-500 mb-4">
                                BEYOND DESIGN
                            </div>
                            <h2 className={`${h2Page}`}>
                                The experiences that shape how I see people
                            </h2>
                        </div>

                        <p className="text-sm sm:text-base md:text-lg font-inter text-gray-300 leading-relaxed pt-2">
                            The way I design is deeply influenced by what I notice outside of work. These interests keep me observant, grounded, and connected to the human side of every product experience.
                        </p>
                    </div>

                    <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            {
                                image: '/images/about-us/story-05.webp',
                                title: 'Photography',
                                description: 'I shoot mostly portraits and street. It taught me that people perform when they know they\'re being watched. The same thing happens in user research. Reading what people actually do under that pressure is most of the work.',
                            },
                            {
                                image: '/images/about-us/vasini-06.webp',
                                title: 'Travel',
                                description: 'You can find me on Instagram as @ghumakkkad_ladki. Traveling solo across cultures taught me how much trust is encoded in tiny moments: a fare estimate, a map without a route, a confirmation screen in a language you don\'t read. Good design is what holds those moments together.',
                            },
                            {
                                image: '/images/about-us/story-04.webp',
                                title: 'Coffee Culture',
                                description: 'My best ideas don\'t come from the brief. They come from the third refill, somewhere around the moment the conversation drifts off-topic. I treat slow conversation as a research method.',
                            },
                            {
                                image: '/images/about-us/about-04.webp',
                                title: 'Community Advocacy',
                                description: 'I serve on a workplace harassment-prevention committee at a non-profit. The work showed me how policies fail when they don\'t account for how people actually behave. That\'s the same thing that goes wrong in products.',
                            },
                        ].map((card) => (
                            <div key={card.title} className="bg-[#1a1a1a] rounded-lg p-6">
                                <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5">
                                    <div className="relative w-full h-28 sm:h-32">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-cover"
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

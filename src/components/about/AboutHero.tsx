'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { h1Page } from '@/lib/typography';

const reelImages = [
    { id: '1', src: '/images/about-us/vasini-07.webp', alt: 'Vasini at a design workshop, 2024' },
    { id: '2', src: '/images/about-us/story-05.webp', alt: 'Portrait, studio session' },
    { id: '3', src: '/images/about-us/story-03.webp', alt: 'Field research notes from a workshop visit, India' },
    { id: '4', src: '/images/about-us/vasini-04.webp', alt: 'Co-design session with product team' },
    { id: '5', src: '/images/about-us/vasini-05.webp', alt: 'Portrait, candid moment' },
    { id: '6', src: '/images/about-us/vasini-06.webp', alt: 'Travel photography on the road' },
    { id: '7', src: '/images/about-us/story-02.webp', alt: 'Workshop whiteboard session' },
    { id: '8', src: '/images/about-us/about-01.webp', alt: 'Presenting design work to stakeholders' },
    { id: '9', src: '/images/about-us/story-01.webp', alt: 'User research session in progress' },
    { id: '10', src: '/images/about-us/about-02.webp', alt: 'Design review at workspace' },
];

const AboutHero: React.FC = () => {
    const images = useMemo(() => reelImages, []);
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const media = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setShouldAnimate(!media.matches);
        update();
        media.addEventListener?.('change', update);
        media.addListener?.(update);
        return () => {
            media.removeEventListener?.('change', update);
            media.removeListener?.(update);
        };
    }, []);

    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="container-custom w-full px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
                    <div className="order-1">
                        <div className="text-xs sm:text-[11px] md:text-sm font-inter uppercase tracking-[0.22em] text-gray-500 mb-4">
                            DESIGNING CALM INTO COMPLEX PRODUCTS
                        </div>

                        <h1 className={`${h1Page} text-black`}>
                            about.
                        </h1>

                        <p className="mt-5 text-base sm:text-lg md:text-xl font-inter text-gray-700 max-w-xl">
                            I&apos;m a senior product designer shaping calm, strategic product experiences for SaaS teams and ambitious digital products.
                        </p>

                        <p className="mt-4 text-base sm:text-lg font-inter text-gray-700 max-w-xl leading-relaxed">
                            Design, for me, is about helping people feel clear, capable, and understood. I turn complexity into thoughtful experiences through research, interaction design, and the kind of strong systems that make products feel more human.
                        </p>
                    </div>

                    <div className="order-2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-black transform translate-x-4 translate-y-4 -z-10" />
                            <div className="absolute inset-0 bg-gray-400 transform translate-x-2 translate-y-2 -z-10 opacity-60" />

                            <div className="relative h-[340px] sm:h-[420px] w-full border border-gray-200 overflow-hidden bg-white rounded-lg shadow-subtle">
                                <Image
                                    src="/images/about-us/vasini-01.webp"
                                    alt="Portrait of Vasini Singh, Senior Product Designer"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 sm:mt-12">
                    <div className="relative overflow-hidden">
                        <style jsx>{`
                            @keyframes aboutPhotoReel {
                                from {
                                    transform: translateX(0);
                                }
                                to {
                                    transform: translateX(-50%);
                                }
                            }
                        `}</style>

                        <div
                            className="flex gap-4"
                            style={
                                shouldAnimate
                                    ? {
                                        animation: 'aboutPhotoReel 18s linear infinite',
                                        willChange: 'transform',
                                    }
                                    : undefined
                            }
                        >
                            {[...images, ...images].map((thumb, idx) => {
                                const copy = idx >= images.length ? 'b' : 'a';
                                return (
                                    <div
                                        key={`${thumb.id}-${copy}`}
                                        className="relative w-[110px] sm:w-[130px] md:w-[150px] h-[68px] sm:h-[78px] md:h-[88px] rounded-[10px] overflow-hidden bg-white shadow-card border border-gray-200 flex-shrink-0"
                                    >
                                        <Image
                                            src={thumb.src}
                                            alt={thumb.alt}
                                            fill
                                            className="object-cover h-full w-full"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;

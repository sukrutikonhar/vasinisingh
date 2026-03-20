'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

const AboutHero: React.FC = () => {
    const reelImages = useMemo(
        () => [
            { id: '1', src: '/images/about-us/vasini-01.webp' },
            { id: '2', src: '/images/about-us/story-05.webp' },
            { id: '3', src: '/images/about-us/story-03.webp' },
            { id: '4', src: '/images/about-us/vasini-04.webp' },
            { id: '5', src: '/images/about-us/vasini-05.webp' },
            { id: '6', src: '/images/about-us/vasini-06.webp' }
        ],
        []
    );

    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const media = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setShouldAnimate(!media.matches);
        update();
        // Safari < 14 compatibility
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
                    {/* Left - Content */}
                    <div className="order-1">
                        <div className="text-xs sm:text-[11px] md:text-sm font-inter uppercase tracking-[0.22em] text-gray-500 mb-4">
                            DESIGNING WITH STRATEGY, SYSTEMS, AND STORY
                        </div>

                        <h1 className="text-6xl sm:text-7xl md:text-8xl font-grotesk font-bold text-black leading-none">
                            about.
                        </h1>

                        <p className="mt-5 text-base sm:text-lg md:text-xl font-inter text-gray-700 max-w-xl">
                            I&apos;m a senior product designer shaping calm, strategic product experiences for SaaS teams and ambitious digital products.
                        </p>

                        <p className="mt-4 text-base sm:text-lg font-inter text-gray-700 max-w-xl">
                            Design, for me, has always been about helping people feel clear, capable, and understood. I enjoy turning complexity into thoughtful experiences through research, interaction design, and strong systems that make products feel more human.
                        </p>
                    </div>

                    {/* Right - Image */}
                    <div className="order-2">
                        <div className="relative">
                            {/* 3D Shadow layers */}
                            <div className="absolute inset-0 bg-black transform translate-x-4 translate-y-4 -z-10" />
                            <div className="absolute inset-0 bg-gray-400 transform translate-x-2 translate-y-2 -z-10 opacity-60" />

                            <div className="relative h-[340px] sm:h-[420px] w-full border border-gray-200 overflow-hidden bg-white rounded-lg shadow-subtle">
                                <Image
                                    src="/images/about-us/vasini-07.webp"
                                    alt="Portrait placeholder"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Moving photo reel */}
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
                                        willChange: 'transform'
                                    }
                                    : undefined
                            }
                        >
                            {[...reelImages, ...reelImages].map((thumb, idx) => {
                                const copy = idx >= reelImages.length ? 'b' : 'a';
                                return (
                                    <div
                                        key={`${thumb.id}-${copy}`}
                                        className="relative w-[110px] sm:w-[130px] md:w-[150px] h-[68px] sm:h-[78px] md:h-[88px] rounded-[10px] overflow-hidden bg-white shadow-card border border-gray-200 flex-shrink-0"
                                    >
                                        <Image
                                            src={thumb.src}
                                            alt="Reel placeholder"
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


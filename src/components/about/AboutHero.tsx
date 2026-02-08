'use client';

import React from 'react';
import Image from 'next/image';

const AboutHero: React.FC = () => {
    return (
        <section className="bg-white py-16 sm:py-24 md:py-32">
            <div className="container-custom w-full px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                    {/* Left - Image */}
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            {/* 3D Shadow Effect */}
                            <div className="absolute inset-0 bg-black transform translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6 -z-10" />
                            <div className="absolute inset-0 bg-gray-400 transform translate-x-1.5 translate-y-1.5 sm:translate-x-3 sm:translate-y-3 -z-10" />

                            {/* Main Image */}
                            <div className="relative h-[300px] sm:h-[350px] md:h-[500px] w-full border border-gray-200 overflow-hidden bg-white group rounded-lg shadow-subtle">
                                <Image
                                    src="/images/vasini-singh1.webp"
                                    alt="Vasini Singh"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                        <div className="inline-block bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                            <span className="text-xs sm:text-sm font-grotesk font-medium uppercase tracking-wider">
                                About Me
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-grotesk font-bold text-black leading-tight">
                            Vasini Singh
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-grotesk font-medium text-gray-700">
                            Product Designer passionate about creating meaningful digital experiences
                        </p>

                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
                            <div className="border-l-2 sm:border-l-4 border-gray-300 pl-3 sm:pl-4">
                                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-1">Based in</p>
                                <p className="text-base sm:text-lg font-grotesk font-semibold">India</p>
                            </div>
                            <div className="border-l-2 sm:border-l-4 border-gray-300 pl-3 sm:pl-4">
                                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-1">Experience</p>
                                <p className="text-base sm:text-lg font-grotesk font-semibold">7+ Years</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;


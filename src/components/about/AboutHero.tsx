'use client';

import React from 'react';
import Image from 'next/image';

const AboutHero: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-white pt-20">
            <div className="container-custom w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Image */}
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            {/* 3D Shadow Effect */}
                            <div className="absolute inset-0 bg-black transform translate-x-6 translate-y-6 -z-10" />
                            <div className="absolute inset-0 bg-gray-400 transform translate-x-3 translate-y-3 -z-10" />

                            {/* Main Image */}
                            <div className="relative h-[500px] w-full border-4 border-black overflow-hidden bg-white">
                                <Image
                                    src="/images/vasini.webp"
                                    alt="Vasini Singh"
                                    fill
                                    className="object-cover grayscale"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="inline-block border-2 border-black px-4 py-2">
                            <span className="text-sm font-grotesk font-medium uppercase tracking-wider">
                                About Me
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-grotesk font-bold text-black leading-tight">
                            Vasini Singh
                        </h1>

                        <p className="text-2xl sm:text-3xl font-grotesk font-medium text-gray-700">
                            Product Designer passionate about creating meaningful digital experiences
                        </p>

                        <div className="flex items-center gap-6 pt-4">
                            <div className="border-l-4 border-black pl-4">
                                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Based in</p>
                                <p className="text-lg font-grotesk font-semibold">India</p>
                            </div>
                            <div className="border-l-4 border-black pl-4">
                                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Experience</p>
                                <p className="text-lg font-grotesk font-semibold">7+ Years</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;


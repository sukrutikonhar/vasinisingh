'use client';

import React from 'react';
import Image from 'next/image';
import { Tag } from 'lucide-react';

interface CaseStudyHeroProps {
    data: {
        title: string;
        subtitle: string;
        image: string;
        tags: string[];
    };
}

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ data }) => {
    return (
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Tags */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                        {data.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-black px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-grotesk font-medium uppercase tracking-wider"
                            >
                                <Tag className="w-3 h-3 sm:w-4 sm:h-4" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-grotesk font-bold text-black text-center mb-3 sm:mb-4">
                        {data.title}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-grotesk font-medium text-gray-600 text-center mb-8 sm:mb-12 px-4">
                        {data.subtitle}
                    </p>

                    {/* Hero Image */}
                    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] border-2 sm:border-4 border-black overflow-hidden bg-gray-100">
                        <Image
                            src={data.image}
                            alt={data.title}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyHero;


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
        <section className="pt-32 pb-20 bg-white">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    {/* Tags */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        {data.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 text-sm font-grotesk font-medium uppercase tracking-wider"
                            >
                                <Tag className="w-4 h-4" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-grotesk font-bold text-black text-center mb-4">
                        {data.title}
                    </h1>
                    <p className="text-2xl sm:text-3xl font-grotesk font-medium text-gray-600 text-center mb-12">
                        {data.subtitle}
                    </p>

                    {/* Hero Image */}
                    <div className="relative w-full h-[500px] border-4 border-black overflow-hidden bg-gray-100">
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


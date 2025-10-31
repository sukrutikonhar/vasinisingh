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
        metrics?: {
            value: string;
            label: string;
        }[];
    };
}

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ data }) => {
    return (
        <section>
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="order-2 lg:order-1">
                            {/* Tags */}
                            <div className="flex flex-wrap items-center gap-3 mb-8">
                                {data.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center gap-2 bg-gray-100 text-[#202022] px-4 py-2 text-xs font-grotesk font-bold uppercase tracking-wider rounded-full"
                                    >
                                        <Tag className="w-3 h-3" />
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Title */}
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-grotesk font-bold text-[#202022] mb-6 leading-tight">
                                {data.title}
                            </h1>

                            {/* Subtitle */}
                            <p className="text-base sm:text-lg md:text-xl font-inter text-gray-600 mb-10 leading-relaxed">
                                {data.subtitle}
                            </p>

                            {/* Metrics */}
                            {data.metrics && (
                                <div className="grid grid-cols-3 gap-4">
                                    {data.metrics.map((metric, index) => (
                                        <div
                                            key={index}
                                            className="bg-white border-2 border-[#202022] p-4 text-center"
                                        >
                                            <div className="text-3xl sm:text-4xl font-grotesk font-bold text-[#202022] mb-1">
                                                {metric.value}
                                            </div>
                                            <div className="text-[10px] sm:text-xs font-inter text-gray-600 leading-tight">
                                                {metric.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Right Image */}
                        <div className="order-1 lg:order-2">
                            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
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
                </div>
            </div>
        </section>
    );
};

export default CaseStudyHero;

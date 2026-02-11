'use client';

import React from 'react';
import Image from 'next/image';
import { Tag, ExternalLink } from 'lucide-react';

interface MockOraaV2HeroProps {
    data: {
        title: string;
        subtitle: string;
        image: string;
        tags: string[];
        metrics?: {
            value: string;
            label: string;
        }[];
        prototypeLink?: string;
        projectStatement?: string;
    };
}

const MockOraaV2Hero: React.FC<MockOraaV2HeroProps> = ({ data }) => {
    return (
        <section className="pt-8 md:pt-8">
            <div className="container-custom px-4 sm:px-6 mb-0">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 items-center gap-12 lg:gap-16 lg:grid-cols-2">
                        {/* Left Content */}
                        <div className="order-2 lg:order-1">
                            {/* Tags */}
                            <div className="flex flex-wrap items-center gap-3 mb-4">
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
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-grotesk font-bold text-[#202022] mb-4 leading-tight">
                                {data.title}
                            </h1>

                            {/* Subtitle */}
                            <p className="text-base sm:text-lg md:text-xl font-inter text-gray-600 mb-10 leading-relaxed">
                                {data.subtitle}
                            </p>

                            {/* Metrics */}
                            {data.metrics && (
                                <div className="grid grid-cols-3 gap-4 mb-8">
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

                            {/* Project Statement */}
                            {data.projectStatement && (
                                <p className="italic text-gray-600 max-w-4xl mb-8 font-inter leading-relaxed">
                                    {data.projectStatement}
                                </p>
                            )}

                            {/* Prototype Link */}
                            {data.prototypeLink && (
                                <a
                                    href={data.prototypeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#202022] text-white px-6 py-3 text-sm font-inter font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
                                >
                                    View Prototype
                                    <ExternalLink className="w-4 h-4" />
                                </a>
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

export default MockOraaV2Hero;
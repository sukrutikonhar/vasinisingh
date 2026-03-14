'use client';

import React from 'react';
import Image from 'next/image';
import { Tag, ExternalLink } from 'lucide-react';

interface MockOraaV2HeroProps {
    data: {
        title: string;
        subtitle: string;
        image?: string;
        youtubeVideoId?: string;
        tags: string[];
        prototypeLink?: string;
        projectStatement?: string;
    };
}

const MockOraaV2Hero: React.FC<MockOraaV2HeroProps> = ({ data }) => {
    return (
        <section className="pt-6 md:pt-8 pb-4 min-h-0">
            <div className="container-custom px-4 sm:px-6 mb-0">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 items-center gap-8 lg:gap-12 lg:grid-cols-2">
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
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-[#202022] mb-3 leading-tight">
                                {data.title}
                            </h1>

                            {/* Subtitle */}
                            <p className="text-sm sm:text-base md:text-lg font-inter text-gray-600 mb-6 leading-relaxed">
                                {data.subtitle}
                            </p>

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

                        {/* Right: YouTube video or image */}
                        <div className="order-1 lg:order-2">
                            {data.youtubeVideoId ? (
                                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${data.youtubeVideoId}`}
                                        title="MockOraa video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    />
                                </div>
                            ) : data.image ? (
                                <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px]">
                                    <Image
                                        src={data.image}
                                        alt={data.title}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MockOraaV2Hero;
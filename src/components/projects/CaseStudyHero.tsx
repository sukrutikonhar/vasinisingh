'use client';

import React from 'react';
import Image from 'next/image';
import { Tag, ExternalLink } from 'lucide-react';

interface CaseStudyHeroProps {
    data: {
        title: string;
        subtitle: string;
        image?: string;
        youtubeVideoId?: string;
        tags: string[];
        metrics?: {
            value: string;
            label: string;
        }[];
        prototypeLink?: string;
    };
    wideLeftColumn?: boolean;
    topPadding?: boolean;
    compactTitle?: boolean;
    /** Extra top/bottom padding so hero doesn’t touch header or next section (e.g. MockOraa v2) */
    comfortableSpacing?: boolean;
}

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ data, wideLeftColumn = false, topPadding = false, compactTitle = false, comfortableSpacing = false }) => {
    const sectionClass = [
        topPadding && "pt-8 md:pt-8",
        comfortableSpacing && "pt-24 md:pt-24 pb-24 md:pb-24",
    ].filter(Boolean).join(" ");
    return (
        <section className={sectionClass}>
            <div className="container-custom px-4 sm:px-6 mb-0">
                <div className="max-w-7xl mx-auto">
                    <div className={`grid grid-cols-1 items-center ${wideLeftColumn ? 'gap-12 lg:gap-0 lg:grid-cols-12' : 'gap-12 lg:gap-16 lg:grid-cols-2'}`}>
                        {/* Left Content */}
                        <div className={`order-2 lg:order-1 ${wideLeftColumn ? 'lg:col-span-7' : ''}`}>
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
                            <h1 className={`font-grotesk font-bold text-[#202022] mb-4 leading-tight ${compactTitle ? 'text-2xl sm:text-3xl md:text-5xl' : 'text-5xl sm:text-6xl md:text-7xl'}`}>
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

                            {/* Prototype Link */}
                            {data.prototypeLink && (
                                <a
                                    href={data.prototypeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#202022] text-white px-6 py-3 text-sm font-inter font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 mt-0"
                                >
                                    View Prototype
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </div>

                        {/* Right: Video or Image */}
                        <div className={`order-1 lg:order-2 ${wideLeftColumn ? 'lg:col-span-5' : ''}`}>
                            {data.youtubeVideoId ? (
                                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${data.youtubeVideoId}`}
                                        title={data.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    />
                                </div>
                            ) : data.image ? (
                                <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
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

export default CaseStudyHero;

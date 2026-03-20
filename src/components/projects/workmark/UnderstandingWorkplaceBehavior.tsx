'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const UnderstandingWorkplaceBehavior: React.FC = () => {
    const gaps = [
        {
            title: 'Visibility Gap',
            description: 'Meaningful work never enters performance systems.',
        },
        {
            title: 'Bias Gap',
            description: 'Lack of structured data creates unfair evaluation.',
        },
        {
            title: 'Evidence Gap',
            description: 'Reviews depend on memory rather than evidence.',
        },
        {
            title: 'Emotion Gap',
            description: 'Employees want acknowledgment of effort, not just scores.',
        },
    ];

    const researchImages = [
        {
            src: '/images/projects/workmark/workplace-01.webp',
            alt: 'Research synthesis - sticky notes and workplace behavior mapping 01',
        },
        {
            src: '/images/projects/workmark/workplace-02.webp',
            alt: 'User research findings - workplace behavior patterns 02',
        },
        {
            src: '/images/projects/workmark/workplace-03.webp',
            alt: 'Data synthesis - evidence collection methods 03',
        },
        {
            src: '/images/projects/workmark/workplace-04.webp',
            alt: 'Interview insights - recognition gap analysis 04',
        },
        {
            src: '/images/projects/workmark/workplace-05.webp',
            alt: 'Interview insights - recognition gap analysis 05',
        },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % researchImages.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prev) => (prev - 1 + researchImages.length) % researchImages.length);
    };

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-4">
                        07 — RESEARCH
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4">
                        Understanding Real Workplace Behavior
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg font-inter text-gray-600 max-w-3xl leading-relaxed mb-12">
                        Research revealed that the issue was not just recognition frequency. The deeper problem was the absence of a system to convert fragmented work into credible evidence.
                    </p>

                    {/* Left: Content + Gaps, Right: Image Slider */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12">
                        {/* Left Side - Content */}
                        <div>

                            {/* Gaps Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {gaps.map((gap, index) => (
                                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                                        <h4 className="text-base sm:text-xl font-grotesk font-bold text-black mb-2">
                                            {gap.title}
                                        </h4>
                                        <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                            {gap.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Image Slider */}
                        <div>
                            <div className="relative">
                                {/* Main Image */}
                                <div
                                    className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] bg-gray-100 rounded-lg overflow-hidden cursor-pointer group"
                                    onClick={() => setLightboxOpen(true)}
                                >
                                    <Image
                                        src={researchImages[currentImageIndex].src}
                                        alt={researchImages[currentImageIndex].alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-inter font-semibold">Click to expand</span>
                                    </div>
                                </div>

                                {/* Navigation Buttons */}
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full transition-all shadow-md z-10"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full transition-all shadow-md z-10"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>

                                {/* Image Counter */}
                                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-inter font-medium">
                                    {currentImageIndex + 1} / {researchImages.length}
                                </div>
                            </div>

                            {/* Thumbnail Navigation */}
                            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                                {researchImages.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`relative w-14 h-14 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${index === currentImageIndex
                                            ? 'border-black'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        aria-label={`View image ${index + 1}`}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Lightbox Modal */}
                    {lightboxOpen && (
                        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                            <div className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center">
                                {/* Close Button */}
                                <button
                                    onClick={() => setLightboxOpen(false)}
                                    className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors z-50"
                                    aria-label="Close lightbox"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Main Lightbox Image */}
                                <div className="relative w-full h-full">
                                    <Image
                                        src={researchImages[currentImageIndex].src}
                                        alt={researchImages[currentImageIndex].alt}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>

                                {/* Navigation in Lightbox */}
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </button>

                                {/* Image Counter in Lightbox */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-inter font-medium">
                                    {currentImageIndex + 1} / {researchImages.length}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Framing cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-3">
                                OLD FRAMING
                            </p>
                            <p className="text-xl sm:text-2xl font-grotesk font-bold text-black mb-3 leading-snug">
                                Employees are not recognized enough.
                            </p>
                            <p className="text-base font-inter text-black leading-relaxed">
                                This treats the problem like a cultural issue and focuses on reminders rituals, or manager discipline.
                            </p>
                        </div>
                        <div className="bg-black text-white rounded-xl p-8">
                            <p className="text-xs uppercase tracking-wider text-gray-400 font-grotesk font-bold mb-3">
                                NEW FRAMING
                            </p>
                            <p className="text-xl sm:text-2xl font-grotesk font-bold text-white mb-3 leading-snug">
                                Organizations lack a system to translate work into evidence.
                            </p>
                            <p className="text-base font-inter text-gray-200 leading-relaxed">
                                This reframes the challenge as a product and systems design opportunity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UnderstandingWorkplaceBehavior;

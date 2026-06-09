'use client';

import React from 'react';
import Image from 'next/image';
import { Tag } from 'lucide-react';

const NeuroHero: React.FC = () => {
    const tags = ['Clinical UX', 'Health Tech', 'End-to-End'];
    const metrics = [
        { value: '8', label: 'Stages Designed' },
        { value: '4', label: 'Clinical Pathways' },
        { value: '0', label: 'Dead-End States' },
    ];

    return (
        <section className="bg-white pt-20 md:pt-24 pb-10 md:pb-14">
            <div className="container-custom px-4 sm:px-6 w-full">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left: Text */}
                    <div className="order-2 lg:order-1">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center gap-1.5 bg-gray-100 text-[#202022] px-3 py-1.5 text-[10px] font-grotesk font-bold uppercase tracking-wider rounded-full"
                                >
                                    <Tag className="w-2.5 h-2.5" />
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-[#202022] leading-[1.1] mb-3">
                            Designing <span className="italic font-bold">NeuroAssist,</span> a stroke care system where every second counts
                        </h1>

                        {/* Subtitle */}
                        <p className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed mb-6 max-w-lg">
                            Translating complex neurology protocols into a workflow a stressed emergency physician can trust and act on in under 60 minutes.
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-3">
                            {metrics.map((m, i) => (
                                <div key={i} className="bg-white border-2 border-[#202022] p-3 sm:p-4 text-center">
                                    <p className="text-2xl sm:text-3xl font-grotesk font-bold text-[#202022] mb-1">{m.value}</p>
                                    <p className="text-[10px] font-inter text-gray-600 leading-tight uppercase tracking-wide">{m.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="order-1 lg:order-2 relative h-[280px] sm:h-[340px] md:h-[400px] rounded-[6px] overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&auto=format&fit=crop&q=80"
                            alt="Doctor reviewing digital health information on a tablet in a clinical setting"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NeuroHero;

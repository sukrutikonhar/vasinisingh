'use client';

import React from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

const NewCategory: React.FC = () => {
    const notItems = [
        {
            title: 'Performance management software',
            description:
                'It does not wait for review cycles to manually document impact.',
        },
        {
            title: 'Productivity tracking software',
            description: 'It does not stop at activity monitoring or task logging.',
        },
        {
            title: 'Recognition software',
            description:
                'It does not rely only on peer appreciation without evidence structure.',
        },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="border-t border-gray-200 pt-4 mb-2">
                        <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-medium mb-4">
                            14 — MARKET INNOVATION
                        </p>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-grotesk font-bold text-black mb-6">
                        A New Category
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl leading-relaxed mb-12">
                        WorkMark is positioned as a performance intelligence platform — distinct from performance management, productivity tracking, or recognition software alone.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* WORKMARK IS NOT */}
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-6">
                                WORKMARK IS NOT
                            </p>
                            <div className="divide-y divide-gray-200">
                                {notItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 py-5 first:pt-0 last:pb-0"
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                                            <X className="w-4 h-4" strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <p className="font-grotesk font-bold text-black mb-1">
                                                {item.title}
                                            </p>
                                            <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* IT IS */}
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-4">
                                IT IS
                            </p>
                            <h3 className="text-2xl font-grotesk font-bold text-black mb-4">
                                Performance Intelligence Platform
                            </h3>
                            <p className="text-base font-inter text-black leading-relaxed mb-8">
                                WorkMark converts everyday work into structured organizational intelligence that can power fair evaluation, recognition, coaching, and workforce planning.
                            </p>
                            <div className="relative w-full aspect-[4/3] bg-gray-900 rounded-xl overflow-hidden">
                                <Image
                                    src="/images/projects/workmark/performance-intelligence-visualization.webp"
                                    alt="Performance intelligence visualization"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewCategory;

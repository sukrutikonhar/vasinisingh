'use client';

import React from 'react';
import Image from 'next/image';

const ThreeUserPerspectives: React.FC = () => {
    const perspectives = [
        {
            label: 'EMPLOYEE VIEW',
            title: 'Personal contribution dashboard',
            description:
                'Evidence timeline of captured work, recognition feed, and career insights in one place.',
            image: '/images/projects/workmark/employee-view.webp',
        },
        {
            label: 'MANAGER VIEW',
            title: 'Evidence backed team reviews',
            description:
                'Team contribution overview, recognition recommendations, and bias alerts.',
            image: '/images/projects/workmark/manager-view.webp',
        },
        {
            label: 'ORGANIZATION VIEW',
            title: 'Strategic organizational intelligence',
            description:
                'Organization wide analytics, recognition culture metrics, and team health insights.',
            image: '/images/projects/workmark/organization-view.webp',
        },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="border-t border-gray-200 pt-4 mb-2">
                        <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-medium mb-4">
                            12 — EXPERIENCE DESIGN
                        </p>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-grotesk font-bold text-black mb-6">
                        Three User Perspectives
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl leading-relaxed mb-12">
                        Designed across three lenses so employees, managers, and organizations each receive relevant value from the same evidence engine.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {perspectives.map((perspective, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                            >
                                <div className="relative w-full aspect-video bg-gray-100">
                                    <Image
                                        src={perspective.image}
                                        alt={perspective.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-2">
                                        {perspective.label}
                                    </p>
                                    <h3 className="text-lg font-grotesk font-bold text-black mb-2">
                                        {perspective.title}
                                    </h3>
                                    <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                        {perspective.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThreeUserPerspectives;

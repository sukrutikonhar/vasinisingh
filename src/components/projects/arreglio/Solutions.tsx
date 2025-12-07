'use client';

import React from 'react';
import Image from 'next/image';
import { LayoutDashboard, DollarSign } from 'lucide-react';

const Solutions: React.FC = () => {
    const solutions = [
        {
            title: 'Kanban Board Management',
            description: 'Visual task tracking dashboard allowing shop owners to drag-and-drop jobs through stages, prioritize urgent repairs, and manage workload at a glance.',
            icon: LayoutDashboard,
            image: '/images/projects/arreglio1/arreglio-landing-image.webp' // Placeholder - update with actual image
        },
        {
            title: 'Transparent Pricing Display',
            description: 'Mandatory service pricing with rental tenure and availability information—building customer trust through transparency.',
            icon: DollarSign,
            image: '/images/projects/arreglio1/arreglio-landing-image.webp' // Placeholder - update with actual image
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4">
                            Few Design Solutions
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            A comprehensive platform that transforms complex sustainability data into clear, actionable insights
                        </p>
                    </div>

                    {/* Solutions Grid */}
                    <div className="space-y-20">
                        {solutions.map((solution, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content */}
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="mb-4">
                                        {React.createElement(solution.icon, {
                                            className: "w-8 h-8 text-black"
                                        })}
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-black mb-4">
                                        {solution.title}
                                    </h3>
                                    <p className="text-base sm:text-lg font-inter text-gray-700 leading-relaxed">
                                        {solution.description}
                                    </p>
                                </div>

                                {/* Image */}
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="relative w-full h-[400px] sm:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
                                        <Image
                                            src={solution.image}
                                            alt={solution.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;


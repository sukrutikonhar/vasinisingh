'use client';

import React from 'react';
import Image from 'next/image';
import { LayoutDashboard, DollarSign, Bell, Bot, Palette, Star } from 'lucide-react';

const Solutions: React.FC = () => {
    const solutions = [
        {
            title: 'Kanban Board Management',
            description: 'Visual task tracking dashboard allowing shop owners to drag-and-drop jobs through stages, prioritize urgent repairs, and manage workload at a glance.',
            icon: LayoutDashboard,
            image: '/images/projects/arreglio1/arreglio-01.webp'
        },
        {
            title: 'Transparent Pricing Display',
            description: 'Mandatory service pricing with rental tenure and availability information—building customer trust through transparency.',
            icon: DollarSign,
            image: '/images/projects/arreglio1/arreglio-02.webp'
        },
        {
            title: 'Real-Time Status Updates',
            description: 'Automated notifications keeping customers informed at each repair stage—eliminating the need for follow-up calls.',
            icon: Bell,
            image: '/images/projects/arreglio1/arreglio-03.webp'
        },
        {
            title: '24/7 AI Virtual Assistant',
            description: 'Intelligent chatbot handling common customer queries about services, pricing, and availability—reducing support burden.',
            icon: Bot,
            image: '/images/projects/arreglio1/arreglio-04.webp'
        },
        {
            title: 'Website Customization',
            description: 'No-code storefront builder allowing shops to customize branding, colors, and layouts—maintaining identity while leveraging platform infrastructure.',
            icon: Palette,
            image: '/images/projects/arreglio1/arreglio-05.webp'
        },
        {
            title: 'Review & Rating System',
            description: 'Post-service review collection building shop credibility and helping customers make informed decisions based on peer experiences.',
            icon: Star,
            image: '/images/projects/arreglio1/arreglio-06.webp'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-20 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4">
                            Few Design Solutions
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Strategic features designed to address core pain points for both shop owners and customers
                        </p>
                    </div>

                    {/* Solutions with Sticky Scroll */}
                    <div className="relative">
                        {solutions.map((solution, index) => (
                            <div
                                key={index}
                                className="sticky top-20 mb-8 last:mb-0"
                                style={{ zIndex: index + 1 }}
                            >
                                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                                        {/* Content */}
                                        <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                            <div className="mb-4">
                                                {React.createElement(solution.icon, {
                                                    className: "w-10 h-10 text-black"
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
                                            <div className="relative w-full h-[350px] sm:h-[450px] bg-gray-100 rounded-xl overflow-hidden">
                                                <Image
                                                    src={solution.image}
                                                    alt={solution.title}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Spacer to allow last card to stick */}
                        <div className="h-[50vh]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;


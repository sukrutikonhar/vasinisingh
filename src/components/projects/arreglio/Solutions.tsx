'use client';

import React from 'react';
import Image from 'next/image';
import { LayoutDashboard, DollarSign, Bell, Bot, Palette, Star } from 'lucide-react';

const Solutions: React.FC = () => {
    const solutions = [
        {
            title: 'Simplified Onboarding Over Feature Richness',
            description: 'Visual task tracking dashboard allowing shop owners to drag-and-drop jobs through stages, prioritize urgent repairs, and manage workload at a glance.',
            challenge: 'Workshop owners needed extensive functionality but had low digital literacy.',
            solution: 'Started with core features (shop profile, services, pricing) and gradually introduced advanced tools once users were comfortable.',
            result: 'Onboarding time reduced from 15 to 4 minutes',
            icon: LayoutDashboard,
            image: '/images/projects/arreglio1/kanban-board.webp'
        },
        {
            title: 'Pricing Transparency as Competitive Advantage',
            description: 'Mandatory service pricing with rental tenure and availability information—building customer trust through transparency.',
            challenge: 'Customers cited "unexpected charges" as primary pain point; competitors buried pricing.',
            solution: 'Made pricing mandatory in service listings and prominently displayed in customer search results.',
            result: '45% increase in booking conversion vs industry average',
            icon: DollarSign,
            image: '/images/projects/arreglio1/arreglio-landing-image.webp'
        },
        {
            title: 'Real-Time Communication Without Overwhelming Shops',
            description: 'Automated notifications keeping customers informed at each repair stage—eliminating the need for follow-up calls.',
            challenge: 'Customers demanded updates, but shops couldn\'t manage constant notifications.',
            solution: 'Automated status updates (received, in progress, ready) with optional custom messages plus 24/7 AI assistant.',
            result: '60% reduction in customer support calls',
            icon: Bell,
            image: '/images/projects/arreglio1/arreglio-08.webp'
        },
        {
            title: 'Kanban Board for Visual Task Management',
            description: 'Intelligent chatbot handling common customer queries about services, pricing, and availability—reducing support burden.',
            challenge: 'Shop owners used physical boards; digital lists felt foreign.',
            solution: 'Designed familiar Kanban interface (To Do, In Progress, Done) with drag-and-drop functionality.',
            result: '90% adoption rate among active users',
            icon: Bot,
            image: '/images/projects/arreglio1/arreglio-06.webp'
        },
        {
            title: 'Multi-Region Compliance by Design',
            description: 'No-code storefront builder allowing shops to customize branding, colors, and layouts—maintaining identity while leveraging platform infrastructure.',
            challenge: 'Operating across EU, India, and UAE with different data protection laws.',
            solution: 'Built consent management, data portability, and erasure mechanisms into core architecture from day one.',
            result: 'Zero compliance issues post-launch',
            icon: Palette,
            image: '/images/projects/arreglio1/arreglio-04.webp'
        },
        {
            title: 'Website Customization for Brand Identity',
            description: 'Post-service review collection building shop credibility and helping customers make informed decisions based on peer experiences.',
            challenge: 'Small shops valued brand identity but lacked technical skills.',
            solution: 'Template-based customization with color, logo, and layout options—no coding required.',
            result: '75% of shops customized their storefront within first week',
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
                                className="lg:sticky lg:top-20 mb-8 sm:mb-12 last:mb-0"
                                style={{ zIndex: index + 1 }}
                            >
                                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8 md:p-12 border border-gray-200">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                                        {/* Content */}
                                        <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                            <div className="mb-4">
                                                {React.createElement(solution.icon, {
                                                    className: "w-8 sm:w-10 h-8 sm:h-10 text-black"
                                                })}
                                            </div>
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-grotesk font-bold text-black mb-5 sm:mb-6">
                                                {solution.title}
                                            </h3>

                                            <div className="space-y-4 sm:space-y-6">
                                                <div>
                                                    <h4 className="text-xs font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-2">
                                                        Challenge
                                                    </h4>
                                                    <p className="text-sm sm:text-base font-inter text-gray-700 leading-relaxed">
                                                        {solution.challenge}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="text-xs font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-2">
                                                        Solution
                                                    </h4>
                                                    <p className="text-sm sm:text-base font-inter text-gray-700 leading-relaxed">
                                                        {solution.solution}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="text-xs font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-2">
                                                        Result
                                                    </h4>
                                                    <p className="text-sm sm:text-base font-inter text-gray-700 leading-relaxed font-semibold">
                                                        {solution.result}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Image */}
                                        <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden">
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
                        {/* Spacer to allow last card to stick - only visible on lg+ */}
                        <div className="hidden lg:block h-[50vh]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;


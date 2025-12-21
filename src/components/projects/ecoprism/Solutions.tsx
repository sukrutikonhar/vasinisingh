'use client';

import React from 'react';
import Image from 'next/image';
import { LayoutDashboard, FileCheck, BarChart3 } from 'lucide-react';

const Solutions: React.FC = () => {
    const solutions = [
        {
            title: 'Unified Data Dashboard',
            description: 'Created a centralized view that aggregates data from multiple sources, providing real-time visibility into sustainability metrics across the organization.',
            features: [
                'Real-time data synchronization from 50+ sources',
                'Customizable KPI tracking and alerting',
                'Interactive data exploration tools'
            ],
            icon: LayoutDashboard,
            image: '/images/projects/ecoprism/dashboard.webp'
        },
        {
            title: 'AI-Powered CSRD Reporting Flow',
            description: 'Streamlined the reporting process with templates, automation, and compliance frameworks that reduce manual work by 80%.',
            features: [
                'Pre-built templates for major frameworks (GRI, SASB, TCFD)',
                'Automated data validation and quality checks',
                'One-click report generation and distribution'
            ],
            icon: FileCheck,
            image: '/images/projects/ecoprism/ai.webp'
        },
        {
            title: 'Advanced Analytics & Insights',
            description: 'Comprehensive analytics tools that transform raw sustainability data into actionable insights for strategic decision-making.',
            features: [
                'Trend analysis and predictive modeling',
                'Customizable reporting dashboards',
                'Benchmarking against industry standards'
            ],
            icon: BarChart3,
            image: '/images/projects/ecoprism/eco-03.webp'
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
                            Strategic solutions designed to transform complex sustainability data into clear, actionable insights
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
                                            <p className="text-base sm:text-lg font-inter text-gray-700 leading-relaxed mb-4">
                                                {solution.description}
                                            </p>
                                            <ul className="space-y-2">
                                                {solution.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm sm:text-base font-inter text-gray-700">
                                                        <span className="text-black font-bold mt-1">•</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
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


'use client';

import React from 'react';
import Image from 'next/image';
import { LayoutDashboard, FileCheck, BarChart3 } from 'lucide-react';

const Solutions: React.FC = () => {
    const solutions = [
        {
            title: 'Unified Data Integration System',
            description: 'Created a centralized view that aggregates data from multiple sources, providing real-time visibility into sustainability metrics across the organization.',
            problem: 'Users struggled with fragmented compliance data across multiple sources, preventing holistic ESG analysis and trend tracking.',
            approach: 'Designed intuitive connector interface with drag-and-drop data mapping supporting multiple formats (Excel, PDF, APIs). Created visual data flow indicators and validation feedback.',
            metrics: [
                { value: '30%', label: 'Faster Data Access' },
                { value: '45%', label: 'User Efficiency' }
            ],
            features: [
                'Real-time data synchronization from 50+ sources',
                'Customizable KPI tracking and alerting',
                'Interactive data exploration tools'
            ],
            icon: LayoutDashboard,
            image: '/images/projects/ecoprism/eco-01.webp'
        },
        {
            title: 'AI-Powered CSRD Reporting Flow',
            description: 'Streamlined the reporting process with templates, automation, and compliance frameworks that reduce manual work by 80%.',
            problem: 'CSRD compliance required extensive manual effort, cross-team coordination, and was highly error-prone leading to audit issues.',
            approach: 'Designed step-by-step wizard interface with AI assistance, automated data validation, and progress tracking. Created clear visual hierarchy to guide users through complex reporting requirements.',
            metrics: [
                { value: '50%', label: 'Reduced Errors' },
                { value: '35%', label: 'Faster Completion' }
            ],
            features: [
                'Pre-built templates for major frameworks (GRI, SASB, TCFD)',
                'Automated data validation and quality checks',
                'One-click report generation and distribution'
            ],
            icon: FileCheck,
            image: '/images/projects/ecoprism/eco-02.webp'
        },
        {
            title: 'Modular Dashboard System',
            description: 'Comprehensive analytics tools that transform raw sustainability data into actionable insights for strategic decision-making.',
            problem: 'Different stakeholders needed different views of ESG data, but existing systems were rigid and overwhelming.',
            approach: 'Created customizable widget-based dashboard with drag-and-drop functionality. Designed role-based templates while allowing personalization for different compliance needs.',
            metrics: [
                { value: '76%', label: 'Customization Adoption' },
                { value: '4.6/5', label: 'User Rating' }
            ],
            features: [
                'Trend analysis and predictive modeling',
                'Customizable reporting dashboards',
                'Benchmarking against industry standards'
            ],
            icon: BarChart3,
            image: '/images/projects/ecoprism/eco-04.webp'
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

                                            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                                                <div>
                                                    <h4 className="text-xs font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-2">
                                                        Problem Identified
                                                    </h4>
                                                    <p className="text-sm sm:text-base font-inter text-gray-700 leading-relaxed">
                                                        {solution.problem}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="text-xs font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-2">
                                                        My Design Approach
                                                    </h4>
                                                    <p className="text-sm sm:text-base font-inter text-gray-700 leading-relaxed">
                                                        {solution.approach}
                                                    </p>
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-xs font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-3">
                                                    Impact
                                                </h4>
                                                <div className="flex gap-6 sm:gap-8">
                                                    {solution.metrics.map((metric, idx) => (
                                                        <div key={idx}>
                                                            <div className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-[#202022] mb-2">
                                                                {metric.value}
                                                            </div>
                                                            <p className="text-xs sm:text-sm font-inter text-gray-600">
                                                                {metric.label}
                                                            </p>
                                                        </div>
                                                    ))}
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


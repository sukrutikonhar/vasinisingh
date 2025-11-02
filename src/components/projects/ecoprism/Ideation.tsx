'use client';

import React from 'react';
import Image from 'next/image';
import { Database, Cpu, LayoutGrid } from 'lucide-react';

const Ideation: React.FC = () => {
    const solutions = [
        {
            tag: 'SOLUTION 01',
            title: 'Unified Data Integration System',
            problem: 'Users struggled with fragmented compliance data across multiple sources, preventing holistic ESG analysis and trend tracking.',
            approach: 'Designed intuitive connector interface with drag-and-drop data mapping supporting multiple formats (Excel, PDF, APIs). Created visual data flow indicators and validation feedback.',
            metrics: [
                { value: '30%', label: 'Faster Data Access' },
                { value: '45%', label: 'User Efficiency' }
            ],
            icon: Database,
            image: '/images/projects/ecoprism/eco-01.webp'
        },
        {
            tag: 'SOLUTION 02',
            title: 'AI-Powered CSRD Reporting Flow',
            problem: 'CSRD compliance required extensive manual effort, cross-team coordination, and was highly error-prone leading to audit issues.',
            approach: 'Designed step-by-step wizard interface with AI assistance, automated data validation, and progress tracking. Created clear visual hierarchy to guide users through complex reporting requirements.',
            metrics: [
                { value: '50%', label: 'Reduced Errors' },
                { value: '35%', label: 'Faster Completion' }
            ],
            icon: Cpu,
            image: '/images/projects/ecoprism/eco-02.webp'
        },
        {
            tag: 'SOLUTION 03',
            title: 'Modular Dashboard System',
            problem: 'Different stakeholders needed different views of ESG data, but existing systems were rigid and overwhelming.',
            approach: 'Created customizable widget-based dashboard with drag-and-drop functionality. Designed role-based templates while allowing personalization for different compliance needs.',
            metrics: [
                { value: '76%', label: 'Customization Adoption' },
                { value: '4.6/5', label: 'User Rating' }
            ],
            icon: LayoutGrid,
            image: '/images/projects/ecoprism/eco-04.webp'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-12 sm:mb-16">
                        <div className="inline-block bg-gray-100 rounded-full px-4 py-2 mb-6">
                            <span className="text-xs sm:text-sm font-grotesk font-bold text-[#202022] uppercase tracking-wider">
                                03 — Design Solutions
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6">
                            Strategic Design Solutions
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-3xl leading-relaxed">
                            Transforming regulatory complexity into intuitive user experiences through data-driven design decisions
                        </p>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-16 sm:space-y-20">
                        {solutions.map((solution, index) => (
                            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full text-xs font-grotesk font-bold mb-6">
                                        {solution.tag}
                                    </div>
                                    <div className="flex items-start gap-4 mb-6">
                                        <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-black">
                                            {solution.title}
                                        </h3>
                                    </div>

                                    <div className="space-y-6 mb-8">
                                        <div>
                                            <h4 className="text-xs font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-2">
                                                Problem Identified
                                            </h4>
                                            <p className="text-base font-inter text-gray-700 leading-relaxed">
                                                {solution.problem}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-xs font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-2">
                                                My Design Approach
                                            </h4>
                                            <p className="text-base font-inter text-gray-700 leading-relaxed">
                                                {solution.approach}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Metrics */}
                                    <div>
                                        <h4 className="text-xs font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-3">
                                            Impact
                                        </h4>
                                        <div className="flex gap-8">
                                            {solution.metrics.map((metric, idx) => (
                                                <div key={idx}>
                                                    <div className="text-3xl sm:text-4xl font-grotesk font-bold text-[#202022] mb-2">
                                                        {metric.value}
                                                    </div>
                                                    <p className="text-sm font-inter text-gray-600">
                                                        {metric.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="relative overflow-hidden rounded-[6px] shadow-xl bg-gray-100">
                                        <Image
                                            src={solution.image}
                                            alt={solution.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto object-cover"
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

export default Ideation;

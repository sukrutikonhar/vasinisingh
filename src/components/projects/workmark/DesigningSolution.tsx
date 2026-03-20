'use client';

import React from 'react';
import Image from 'next/image';
import { Zap, Filter, Settings } from 'lucide-react';

const DesigningSolution: React.FC = () => {
    const steps = [
        {
            label: 'STEP 01',
            title: 'How might we',
            description:
                'Capture invisible work automatically, reduce manager cognitive load, and enable fair recognition at scale?',
        },
        {
            label: 'STEP 02',
            title: 'SCAMPER',
            description:
                'Substituted manual input with automation and combined productivity tools with performance systems.',
        },
        {
            label: 'STEP 03',
            title: 'Feature exploration',
            description:
                'Generated 50+ ideas spanning integrations, scoring, review support, and feedback loops.',
        },
        {
            label: 'STEP 04',
            title: 'Prioritization',
            description:
                'Mapped ideas on impact versus effort to focus on evidence capture, intelligence, fairness, and feedback.',
        },
    ];

    const decisionCriteria = [
        {
            icon: Zap,
            title: 'Divergent thinking',
            description:
                'Explored broad directions across automation, recognition rituals, analytics, and workflow orchestration.',
        },
        {
            icon: Filter,
            title: 'Convergent thinking',
            description:
                'Filtered concepts through value density, implementation realism, and strategic differentiation.',
        },
        {
            icon: Settings,
            title: 'Outcome',
            description: 'Four product pillars emerged as the most coherent system level solution.',
        },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-medium mb-4">
                        10 — IDEATION & DESIGN THINKING
                    </p>
                    <h2 className="text-3xl lg:text-4xl font-grotesk font-bold text-black mb-6">
                        Designing the Solution
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl leading-relaxed mb-12">
                        The ideation process moved from expansive exploration to structured prioritization, using product strategy methods that balanced desirability, feasibility, and business value.
                    </p>

                    {/* Four step cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                            >
                                <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-2">
                                    {step.label}
                                </p>
                                <h3 className="text-lg font-grotesk font-bold text-black mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom: Image + Decision Criteria */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                            <Image
                                src="/images/projects/workmark/workmark-ideation-board.webp"
                                alt="WorkMark ideation board"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <h3 className="text-sm font-grotesk font-bold text-gray-600 mb-6">
                                DECISION CRITERIA
                            </h3>
                            <div className="space-y-6">
                                {decisionCriteria.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={index}
                                            className={`flex gap-4 ${index > 0 ? 'pt-6 border-t border-gray-200' : ''}`}
                                        >
                                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-black">
                                                <Icon className="w-5 h-5" strokeWidth={2} />
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
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesigningSolution;

'use client';

import React from 'react';
import { Zap, Brain, Scale, Heart } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const CoreProductPillars: React.FC = () => {
    const pillars = [
        {
            icon: Zap,
            title: 'Work Capture',
            description: 'Automatic integrations with Slack, Jira, Docs, and Email.',
        },
        {
            icon: Brain,
            title: 'Evidence Intelligence',
            description: 'AI transforms raw activity Into structured performance evidence.',
        },
        {
            icon: Scale,
            title: 'Fair Evaluation',
            description: 'Evidence based reviews reduce bias and increase fairness.',
        },
        {
            icon: Heart,
            title: 'Continuous Feedback',
            description: 'Real time recognition keeps employees engaged and motivated.',
        },
    ];

    const workflowSteps = [
        { title: 'Tools', subtitle: 'Slack, Jira, Docs', highlighted: false },
        { title: 'AI Layer', subtitle: 'Signal detection', highlighted: false },
        { title: 'Evidence Engine', subtitle: 'Structured proof', highlighted: true },
        { title: 'Insights', subtitle: 'Patterns & fairness', highlighted: false },
        { title: 'Dashboards', subtitle: '3 User Views', highlighted: false },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-medium mb-4">
                        11 — FEATURE STRATEGY
                    </p>
                    <h2 className="text-3xl lg:text-4xl font-grotesk font-bold text-black mb-4">
                        Core Product Pillars
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl leading-relaxed mb-12">
                        WorkMark is built on four pillars that work together as a cohesive intelligence engine.
                    </p>

                    {/* Four pillar cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {pillars.map((pillar, index) => {
                            const Icon = pillar.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-black mb-4">
                                        <Icon className="w-5 h-5" strokeWidth={2} />
                                    </div>
                                    <h3 className="text-lg font-grotesk font-bold text-black mb-2">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                        {pillar.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* SYSTEM WORKFLOW */}
                    <p className="text-xs uppercase tracking-wider text-gray-600 font-grotesk font-bold mb-6">
                        SYSTEM WORKFLOW
                    </p>
                    <div className="flex flex-wrap items-stretch gap-1 sm:gap-2">
                        {workflowSteps.map((step, index) => (
                            <React.Fragment key={index}>
                                <div
                                    className={`flex-1 min-w-[100px] sm:min-w-[120px] rounded-lg border border-gray-200 p-3 sm:p-5 ${step.highlighted ? 'bg-black text-white border-black' : 'bg-white'
                                        }`}
                                >
                                    <p
                                        className={`text-sm sm:text-base font-grotesk font-bold ${step.highlighted ? 'text-white' : 'text-black'
                                            }`}
                                    >
                                        {step.title}
                                    </p>
                                    <p
                                        className={`text-xs sm:text-sm mt-1 ${step.highlighted ? 'text-gray-300' : 'text-gray-600'
                                            }`}
                                    >
                                        {step.subtitle}
                                    </p>
                                </div>
                                {index < workflowSteps.length - 1 && (
                                    <div className="flex items-center justify-center px-1 sm:px-2 py-4 text-gray-400 flex-shrink-0">
                                        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" strokeWidth={2} />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreProductPillars;

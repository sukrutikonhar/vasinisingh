'use client';

import React from 'react';
import { Lightbulb, BookOpen, Sparkles } from 'lucide-react';

const Research: React.FC = () => {
    const process = [
        {
            phase: 'PHASE 1',
            title: 'Discovery & Domain Learning',
            description: 'Collaborated with sustainability experts in workshops to deeply understand compliance workflows and regulatory frameworks. Synthesized research findings from expert-led user interviews into actionable design insights.',
            icon: BookOpen
        },
        {
            phase: 'PHASE 2',
            title: 'Ideation & Wireframing',
            description: 'Created low to high-fidelity wireframes focusing on modular dashboards, onboarding wizards, and dynamic reporting flows. Prioritized information hierarchy and progressive disclosure to manage complexity.',
            icon: Lightbulb
        },
        {
            phase: 'PHASE 3',
            title: 'Prototyping & System Design',
            description: 'Built interactive prototypes and established comprehensive design system with reusable components (buttons, forms, tables, KPI cards). Ensured scalability across multiple regulatory frameworks.',
            icon: Sparkles
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-12 sm:mb-16">
                        <div className="inline-block bg-gray-100 rounded-full px-4 py-2 mb-6">
                            <span className="text-xs sm:text-sm font-grotesk font-bold text-[#202022] uppercase tracking-wider">
                                02 — Design Process
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6">
                            User-Centered Design Approach
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-3xl leading-relaxed">
                            Iterative process focused on translating complexity into clarity through continuous testing and collaboration
                        </p>
                    </div>

                    {/* Process Timeline */}
                    <div className="space-y-8 sm:space-y-12 relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-800 via-gray-400 to-gray-200 hidden md:block" />

                        {process.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Timeline Dot */}
                                <div className="absolute left-6 top-6 w-5 h-5 bg-gray-800 rounded-full border-4 border-white shadow-lg hidden md:block" />

                                <div className="md:ml-20 bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-[6px] shadow-card border-2 border-gray-100 hover:border-gray-800 hover:shadow-xl transition-all">
                                    <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                                        <div className="w-16 h-16 bg-[#202022] rounded-lg flex items-center justify-center flex-shrink-0">
                                            {React.createElement(step.icon, {
                                                className: "w-8 h-8 text-white"
                                            })}
                                        </div>
                                        <div className="flex-1">
                                            <div className="inline-block bg-gray-800 text-white px-4 py-1 rounded-full text-xs font-grotesk font-bold mb-4">
                                                {step.phase}
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-black mb-4">
                                                {step.title}
                                            </h3>
                                            <p className="text-base sm:text-lg font-inter text-gray-600 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Key Highlight */}
                    <div className="mt-12 sm:mt-16 bg-gray-800 text-white p-8 sm:p-12 rounded-[6px] shadow-card">
                        <h3 className="text-2xl sm:text-3xl font-grotesk font-bold mb-6">
                            Continuous Improvement
                        </h3>
                        <p className="text-lg font-inter leading-relaxed opacity-90">
                            Through expert-driven feedback loops and user testing, we refined interfaces for clarity, trust, and auditability while maintaining regulatory compliance standards at every iteration.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Research;

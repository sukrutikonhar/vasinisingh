'use client';

import React from 'react';
import { Zap, DollarSign, MessageSquare, Layout, ShieldCheck, Palette, CheckCircle2, Target } from 'lucide-react';

const Ideation: React.FC = () => {
    const decisions = [
        {
            number: '01',
            title: 'Simplified Onboarding Over Feature Richness',
            challenge: 'Workshop owners needed extensive functionality but had low digital literacy.',
            solution: 'Progressive disclosure—launch with essential features (shop profile, services, pricing) and introduce advanced tools after adoption.',
            result: 'Onboarding time reduced from 15 to 4 minutes',
            icon: Zap
        },
        {
            number: '02',
            title: 'Pricing Transparency as Competitive Advantage',
            challenge: 'Customers cited "unexpected charges" as primary pain point; competitors buried pricing.',
            solution: 'Made pricing mandatory in service listings and prominently displayed in customer search results.',
            result: '45% increase in booking conversion vs industry average',
            icon: DollarSign
        },
        {
            number: '03',
            title: 'Real-Time Communication Without Overwhelming Shops',
            challenge: 'Customers demanded updates, but shops couldn\'t manage constant notifications.',
            solution: 'Automated status updates (received, in progress, ready) with optional custom messages plus 24/7 AI assistant.',
            result: '60% reduction in customer support calls',
            icon: MessageSquare
        },
        {
            number: '04',
            title: 'Kanban Board for Visual Task Management',
            challenge: 'Shop owners used physical boards; digital lists felt foreign.',
            solution: 'Designed familiar Kanban interface (To Do, In Progress, Done) with drag-and-drop functionality.',
            result: '90% adoption rate among active users',
            icon: Layout
        },
        {
            number: '05',
            title: 'Multi-Region Compliance by Design',
            challenge: 'Operating across EU, India, and UAE with different data protection laws.',
            solution: 'Built consent management, data portability, and erasure mechanisms into core architecture from day one.',
            result: 'Zero compliance issues post-launch',
            icon: ShieldCheck
        },
        {
            number: '06',
            title: 'Website Customization for Brand Identity',
            challenge: 'Small shops valued brand identity but lacked technical skills.',
            solution: 'Template-based customization with color, logo, and layout options—no coding required.',
            result: '75% of shops customized their storefront within first week',
            icon: Palette
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-6">
                            <Target className="w-4 h-4" />
                            <span className="text-xs font-grotesk font-bold uppercase tracking-wider">
                                03 — Key Design Decisions
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4 max-w-4xl">
                            Strategic Trade-offs & Solutions
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-3xl leading-relaxed">
                            Every design decision balanced competing priorities: simplicity vs. functionality, trust vs. speed, and flexibility vs. standardization.
                        </p>
                    </div>

                    {/* Decisions Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {decisions.map((decision, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 p-6"
                            >
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center font-grotesk font-bold text-sm flex-shrink-0">
                                        {decision.number}
                                    </div>
                                    <h3 className="text-xl font-grotesk font-bold text-black">
                                        {decision.title}
                                    </h3>
                                </div>

                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-1">
                                            Challenge
                                        </p>
                                        <p className="text-sm font-inter text-gray-700 leading-relaxed">
                                            {decision.challenge}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-1">
                                            Solution
                                        </p>
                                        <p className="text-sm font-inter text-gray-700 leading-relaxed">
                                            {decision.solution}
                                        </p>
                                    </div>

                                    <div className="bg-black text-white p-4">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-xs font-grotesk font-bold uppercase tracking-wider mb-1">
                                                    Result
                                                </p>
                                                <p className="text-sm font-inter font-semibold">
                                                    {decision.result}
                                                </p>
                                            </div>
                                        </div>
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

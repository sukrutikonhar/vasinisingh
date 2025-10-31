'use client';

import React from 'react';
import { Zap, DollarSign, MessageSquare, Layout, ShieldCheck, Palette } from 'lucide-react';

const Ideation: React.FC = () => {
    const decisions = [
        {
            number: '01',
            title: 'Simplified Onboarding Over Feature Richness',
            challenge: 'Workshop owners needed extensive functionality but had low digital literacy.',
            solution: 'Progressive disclosure—launch with essential features (shop profile, services, pricing) and introduce advanced tools (Kanban board, analytics) after adoption.',
            result: 'Onboarding time reduced from 15 to 4 minutes.',
            icon: Zap
        },
        {
            number: '02',
            title: 'Pricing Transparency as Competitive Advantage',
            challenge: 'Customers cited "unexpected charges" as primary pain point; competitors buried pricing.',
            solution: 'Made pricing mandatory in service listings and prominently displayed in customer search results.',
            result: '45% increase in booking conversion vs. industry average.',
            icon: DollarSign
        },
        {
            number: '03',
            title: 'Real-Time Communication Without Overwhelming Shops',
            challenge: 'Customers demanded updates, but shops couldn&apos;t manage constant notifications.',
            solution: 'Automated status updates (received, in progress, ready) with optional custom messages. Added 24/7 AI assistant for FAQs.',
            result: '60% reduction in customer support calls.',
            icon: MessageSquare
        },
        {
            number: '04',
            title: 'Kanban Board for Visual Task Management',
            challenge: 'Shop owners used physical boards; digital lists felt foreign.',
            solution: 'Designed familiar Kanban interface (To Do, In Progress, Done) with drag-and-drop functionality.',
            result: '90% adoption rate among active users.',
            icon: Layout
        },
        {
            number: '05',
            title: 'Multi-Region Compliance by Design',
            challenge: 'Operating across EU, India, and UAE with different data protection laws.',
            solution: 'Built consent management, data portability, and erasure mechanisms into core architecture from day one.',
            result: 'Zero compliance issues post-launch.',
            icon: ShieldCheck
        },
        {
            number: '06',
            title: 'Website Customization for Brand Identity',
            challenge: 'Small shops valued brand identity but lacked technical skills.',
            solution: 'Template-based customization with color, logo, and layout options—no coding required.',
            result: '75% of shops customized their storefront within first week.',
            icon: Palette
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
                                03 — Key Design Decisions
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6">
                            Strategic Trade-offs & Solutions
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-3xl leading-relaxed">
                            Every design decision balanced competing priorities: simplicity vs. functionality, trust vs. speed, and flexibility vs. standardization.
                        </p>
                    </div>

                    {/* Decisions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {decisions.map((decision, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 sm:p-8 rounded-[6px] shadow-card border-2 border-gray-100 hover:border-gray-800 hover:shadow-xl transition-all"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center font-grotesk font-bold text-sm flex-shrink-0">
                                        {decision.number}
                                    </div>
                                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                        {React.createElement(decision.icon, {
                                            className: "w-6 h-6 text-white"
                                        })}
                                    </div>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-black mb-4">
                                    {decision.title}
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-2">
                                            Challenge
                                        </p>
                                        <p className="text-sm font-inter text-gray-700">
                                            {decision.challenge}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-2">
                                            Solution
                                        </p>
                                        <p className="text-sm font-inter text-gray-700">
                                            {decision.solution}
                                        </p>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                                        <p className="text-xs font-grotesk font-bold text-green-800 uppercase tracking-wider mb-1">
                                            Result
                                        </p>
                                        <p className="text-sm font-inter font-semibold text-green-900">
                                            {decision.result}
                                        </p>
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

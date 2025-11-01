'use client';

import React from 'react';
import { Zap, DollarSign, MessageSquare, Layout, ShieldCheck, Palette, CheckCircle2 } from 'lucide-react';

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
        <section className="py-16 sm:py-20 md:py-24 bg-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle at 4px 4px, white 1px, transparent 0)',
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            <div className="container-custom px-4 sm:px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-20">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                            <span className="text-xs font-grotesk font-bold uppercase tracking-wider text-white">
                                03 — Key Design Decisions
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-white mb-6 max-w-4xl">
                            Strategic Trade-offs & Solutions
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-white/80 max-w-3xl leading-relaxed">
                            Every design decision balanced competing priorities: simplicity vs. functionality, trust vs. speed, and flexibility vs. standardization.
                        </p>
                    </div>

                    {/* Decisions Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {decisions.map((decision, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-white transform rotate-1 group-hover:rotate-2 transition-transform duration-300 rounded-[6px]"></div>
                                <div className="relative bg-black border-2 border-white/20 p-8 h-full hover:border-white hover:bg-white/5 transition-all duration-300 rounded-[6px]">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-14 h-14 bg-white text-black rounded-lg flex items-center justify-center font-grotesk font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                                            {decision.number}
                                        </div>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-white mb-6">
                                        {decision.title}
                                    </h3>

                                    <div className="space-y-5">
                                        <div className="border-l-4 border-white/30 pl-4">
                                            <p className="text-xs font-grotesk font-bold text-white/60 uppercase tracking-wider mb-2">
                                                Challenge
                                            </p>
                                            <p className="text-sm font-inter text-white/90 leading-relaxed">
                                                {decision.challenge}
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-white/30 pl-4">
                                            <p className="text-xs font-grotesk font-bold text-white/60 uppercase tracking-wider mb-2">
                                                Solution
                                            </p>
                                            <p className="text-sm font-inter text-white/90 leading-relaxed">
                                                {decision.solution}
                                            </p>
                                        </div>

                                        <div className="bg-white text-black p-5 border-2 border-white">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ideation;

'use client';

import React from 'react';
import { Search, Target, TestTube, Users2, ArrowRight } from 'lucide-react';

const Research: React.FC = () => {
    const phases = [
        {
            number: '01',
            title: 'Research & Discovery',
            objective: 'Validate problem hypotheses and understand market dynamics',
            activities: [
                'Conducted 25 in-depth interviews with workshop owners and customers across 3 regions',
                'Competitive analysis of Urban Company and JustDial, identifying gaps in SMB onboarding',
                'Mapped current-state workflows revealing 40% time loss to administrative tasks'
            ],
            insight: 'Small business owners prioritize simplicity over features. A complex system would fail regardless of capabilities.',
            icon: Search,
            color: 'bg-black'
        },
        {
            number: '02',
            title: 'Defining Success Metrics',
            objective: 'Align stakeholders on measurable outcomes',
            activities: [
                'Business: Enable digitization and increase shop visibility through online presence',
                'User: Provide trustworthy discovery and seamless booking experience',
                'Design: Reduce friction in onboarding to under 5 minutes',
                'Compliance: Ensure GDPR, DPDP Act, and PDPL compliance across markets'
            ],
            insight: 'Success metrics must balance business objectives, user needs, and regulatory requirements across multiple regions.',
            icon: Target,
            color: 'bg-gray-800'
        },
        {
            number: '03',
            title: 'Iterative Design & Testing',
            objective: 'Validate solutions through rapid prototyping',
            activities: [
                'Low-fidelity wireframes tested with 15 users to validate core flows',
                'Interactive prototypes in Maze revealed 30% drop-off in initial onboarding',
                'Iterated on service listing architecture based on cognitive load feedback',
                'Built comprehensive design system with accessible color schemes for trust'
            ],
            insight: 'Early testing caught critical usability issues that would have crippled adoption post-launch.',
            icon: TestTube,
            color: 'bg-gray-900'
        },
        {
            number: '04',
            title: 'Cross-Functional Collaboration',
            objective: 'Ensure technical feasibility and business viability',
            activities: [
                'Weekly syncs with developers on real-time updates and payment integration',
                'Collaborated with legal/compliance on data protection across EU, India, and UAE',
                'Partnered with business development on pricing transparency strategy',
                'Conducted stakeholder reviews every sprint to maintain alignment'
            ],
            insight: 'Design success requires orchestrating multiple stakeholders toward shared objectives.',
            icon: Users2,
            color: 'bg-black'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="container-custom px-4 sm:px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-20">
                        <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-8">
                            <Target className="w-4 h-4" />
                            <span className="text-xs font-grotesk font-bold uppercase tracking-wider">
                                02 — Strategic Approach
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6 max-w-4xl">
                            Problem-Solving Framework
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-3xl leading-relaxed">
                            I led the design strategy through a structured, data-driven approach that balanced business objectives with user needs across multiple stakeholders and regions.
                        </p>
                    </div>

                    {/* Process Phases */}
                    <div className="space-y-8 sm:space-y-16">
                        {phases.map((phase, index) => (
                            <div key={index} className="group relative">
                                {/* Connection Line */}
                                {index < phases.length - 1 && (
                                    <div className="absolute left-8 top-32 bottom-[-4rem] w-0.5 bg-black/10 hidden lg:block"></div>
                                )}

                                <div className="bg-white border-2 border-black hover:shadow-2xl transition-all">
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Left: Number & Icon */}
                                        <div className="lg:w-48 flex lg:flex-col items-center gap-6 p-8 lg:border-r-2 lg:border-b-0 border-b-2 border-black bg-gray-50">
                                            <div className="relative">
                                                <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center font-grotesk font-bold text-2xl">
                                                    {phase.number}
                                                </div>
                                                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-black rounded-full border-4 border-white flex items-center justify-center">
                                                    {React.createElement(phase.icon, {
                                                        className: "w-4 h-4 text-white"
                                                    })}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right: Content */}
                                        <div className="flex-1 p-8 lg:p-12">
                                            <div className="flex items-start justify-between mb-6">
                                                <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-black">
                                                    {phase.title}
                                                </h3>
                                                {index < phases.length - 1 && (
                                                    <ArrowRight className="w-6 h-6 text-gray-400 hidden lg:block group-hover:text-black transition-colors" />
                                                )}
                                            </div>

                                            <p className="text-base font-inter text-gray-700 mb-8">
                                                <strong className="text-black">Objective:</strong> {phase.objective}
                                            </p>

                                            <div className="mb-8">
                                                <h4 className="text-xs font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-4">
                                                    Key Activities
                                                </h4>
                                                <ul className="space-y-3">
                                                    {phase.activities.map((activity, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                                                            <span className="text-sm sm:text-base font-inter text-gray-700 leading-relaxed">{activity}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {phase.insight && (
                                                <div className="bg-black p-6 border-l-4 border-white">
                                                    <p className="text-xs font-grotesk font-bold text-white/60 uppercase tracking-wider mb-2">
                                                        Key Insight
                                                    </p>
                                                    <p className="text-sm font-inter text-white leading-relaxed">
                                                        {phase.insight}
                                                    </p>
                                                </div>
                                            )}
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

export default Research;

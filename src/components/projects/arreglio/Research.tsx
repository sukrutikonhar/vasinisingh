'use client';

import React from 'react';
import { Search, Target, TestTube, Users2 } from 'lucide-react';

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
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-6">
                            <Target className="w-4 h-4" />
                            <span className="text-xs font-grotesk font-bold uppercase tracking-wider">
                                02 — Strategic Approach
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4">
                            Problem-Solving Framework
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 leading-relaxed">
                            I led the design strategy through a structured, data-driven approach that balanced business objectives with user needs across multiple stakeholders and regions.
                        </p>
                    </div>

                    {/* Process Phases */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {phases.map((phase, index) => (
                            <div key={index} className="bg-white border border-gray-200 p-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center font-grotesk font-bold text-sm flex-shrink-0">
                                        {phase.number}
                                    </div>
                                    <h3 className="text-xl font-grotesk font-bold text-black">
                                        {phase.title}
                                    </h3>
                                </div>

                                <p className="text-sm font-inter text-gray-700 mb-4">
                                    <strong className="text-black">Objective:</strong> {phase.objective}
                                </p>

                                <ul className="space-y-2 mb-4">
                                    {phase.activities.map((activity, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm font-inter text-gray-700">
                                            <span className="text-black font-bold mt-0.5">•</span>
                                            <span>{activity}</span>
                                        </li>
                                    ))}
                                </ul>

                                {phase.insight && (
                                    <div className="bg-gray-100 border-l-4 border-black p-4">
                                        <p className="text-xs font-grotesk font-bold text-gray-600 uppercase tracking-wider mb-1">
                                            Key Insight
                                        </p>
                                        <p className="text-sm font-inter text-gray-800">
                                            {phase.insight}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Research;

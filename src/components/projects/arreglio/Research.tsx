'use client';

import React from 'react';
import { Search, Lightbulb, TestTube, Users2 } from 'lucide-react';

const Research: React.FC = () => {
    const phases = [
        {
            number: '1',
            title: 'Research & Discovery',
            objective: 'Validate problem hypotheses and understand market dynamics.',
            activities: [
                'Conducted 25 in-depth interviews with workshop owners and customers across 3 regions',
                'Competitive analysis of Urban Company and JustDial, identifying gaps in SMB onboarding and pricing transparency',
                'Mapped current-state workflows revealing 40% time loss to administrative tasks'
            ],
            insight: 'Small business owners prioritize simplicity over features. A complex system would fail regardless of capabilities.',
            icon: Search
        },
        {
            number: '2',
            title: 'Defining Success Metrics',
            objective: 'Align stakeholders on measurable outcomes.',
            activities: [
                'Business: Enable digitization and increase shop visibility through online presence',
                'User: Provide trustworthy discovery and seamless booking experience',
                'Design: Reduce friction in onboarding to under 5 minutes',
                'Compliance: Ensure GDPR, DPDP Act, and PDPL compliance across markets'
            ],
            insight: null,
            icon: Lightbulb
        },
        {
            number: '3',
            title: 'Iterative Design & Testing',
            objective: 'Validate solutions through rapid prototyping.',
            activities: [
                'Low-fidelity wireframes tested with 15 users to validate core flows',
                'Interactive prototypes in Maze revealed 30% drop-off in initial onboarding flow',
                'Iterated on service listing architecture based on cognitive load feedback',
                'Built comprehensive design system with accessible color schemes and typography for trust and clarity'
            ],
            insight: null,
            icon: TestTube
        },
        {
            number: '4',
            title: 'Cross-Functional Collaboration',
            objective: 'Ensure technical feasibility and business viability.',
            activities: [
                'Weekly syncs with engineering to prioritize technical constraints (real-time updates, payment integration)',
                'Collaborated with legal/compliance teams on data protection across EU, India, and UAE',
                'Partnered with business development on pricing transparency strategy to differentiate from competitors',
                'Conducted stakeholder reviews every sprint to maintain alignment'
            ],
            insight: null,
            icon: Users2
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
                                02 — Strategic Approach
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6">
                            Problem-Solving Framework
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-3xl leading-relaxed">
                            I led the design strategy through a structured, data-driven approach that balanced business objectives with user needs.
                        </p>
                    </div>

                    {/* Process Phases */}
                    <div className="space-y-8 sm:space-y-12">
                        {phases.map((phase, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-[6px] shadow-card border-2 border-gray-100 hover:border-gray-800 hover:shadow-xl transition-all">
                                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                                    {/* Phase Number and Icon */}
                                    <div className="flex items-center gap-4 sm:flex-col sm:items-center">
                                        <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-grotesk font-bold text-xl flex-shrink-0">
                                            {phase.number}
                                        </div>
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#202022] rounded-lg flex items-center justify-center flex-shrink-0">
                                            {React.createElement(phase.icon, {
                                                className: "w-7 h-7 sm:w-8 sm:h-8 text-white"
                                            })}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-black mb-3">
                                            {phase.title}
                                        </h3>
                                        <p className="text-base font-inter text-gray-700 mb-6">
                                            <strong className="text-black">Objective:</strong> {phase.objective}
                                        </p>

                                        <div className="mb-6">
                                            <h4 className="text-sm font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-3">
                                                {index === 1 ? 'Established KPIs:' : 'Activities:'}
                                            </h4>
                                            <ul className="space-y-2">
                                                {phase.activities.map((activity, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-sm font-inter text-gray-700">
                                                        <span className="text-gray-800 font-bold flex-shrink-0">→</span>
                                                        <span>{activity}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {phase.insight && (
                                            <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                                                <p className="text-xs font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-2">
                                                    Key Insight
                                                </p>
                                                <p className="text-sm font-inter text-gray-800">
                                                    {phase.insight}
                                                </p>
                                            </div>
                                        )}
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

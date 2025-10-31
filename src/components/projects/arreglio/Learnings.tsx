'use client';

import React from 'react';
import { Lightbulb, Shield, BarChart3, Users2 } from 'lucide-react';

const Learnings: React.FC = () => {
    const learnings = [
        {
            icon: Lightbulb,
            title: 'Simplicity Wins with SMB Users',
            description: 'Small business owners value ease of use above all else. A feature-rich product that&apos;s difficult to adopt will fail regardless of its capabilities. Progressive disclosure and familiar mental models (like physical Kanban boards) were essential to driving adoption.'
        },
        {
            icon: Shield,
            title: 'Trust is a Design Problem',
            description: 'Customer trust in repair shops was fundamentally broken. By making pricing transparency, reviews, and real-time updates core to the platform architecture—not afterthoughts—we transformed trust from a marketing challenge into a design solution.'
        },
        {
            icon: BarChart3,
            title: 'Data-Driven Iteration Reduces Risk',
            description: 'Testing prototypes with Maze revealed a 30% drop-off in onboarding that stakeholder reviews missed. Continuous user testing throughout development prevented costly post-launch redesigns and validated our strategic decisions early.'
        },
        {
            icon: Users2,
            title: 'Cross-Functional Collaboration Accelerates Success',
            description: 'Weekly engineering syncs, compliance team partnerships, and business development alignment ensured technical feasibility, legal compliance, and market fit. Design doesn&apos;t exist in isolation—success requires orchestrating multiple stakeholders toward shared goals.'
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
                                05 — Key Learnings & Insights
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6">
                            Strategic Takeaways
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-3xl leading-relaxed">
                            This project reinforced critical principles that guide my approach to product design and stakeholder collaboration.
                        </p>
                    </div>

                    {/* Learnings Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
                        {learnings.map((learning, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 sm:p-8 rounded-[6px] shadow-card hover:shadow-xl transition-all group"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-[#202022] flex items-center justify-center mb-6 group-hover:bg-[#202022] transition-colors">
                                    {React.createElement(learning.icon, {
                                        className: "w-6 h-6 sm:w-7 sm:h-7 text-[#202022] group-hover:text-white transition-colors"
                                    })}
                                </div>
                                <h3 className="text-lg sm:text-xl font-grotesk font-bold text-[#202022] mb-3">
                                    {learning.title}
                                </h3>
                                <p className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed">
                                    {learning.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Strategic Impact */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 sm:p-12 rounded-[6px] shadow-card border-l-4 border-gray-800">
                        <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-black mb-6">
                            Strategic Impact Beyond Metrics
                        </h3>
                        <p className="text-base sm:text-lg font-inter text-gray-700 leading-relaxed mb-6">
                            Arreglio represents more than a digital transformation—it&apos;s a case study in strategic problem-solving, cross-functional collaboration, and user-centered design at scale. By deeply understanding both workshop owners&apos; operational constraints and customers&apos; trust concerns, we created a platform that didn&apos;t just digitize processes—it fundamentally improved how small businesses operate and serve their communities.
                        </p>
                        <p className="text-base sm:text-lg font-inter text-gray-700 leading-relaxed mb-6">
                            The 70% efficiency improvement and 80% satisfaction rate aren&apos;t just numbers—they represent shop owners who can finally focus on their craft instead of paperwork, and customers who no longer experience the frustration of uncertainty and miscommunication.
                        </p>
                        <p className="text-base sm:text-lg font-inter text-gray-700 leading-relaxed">
                            This project reinforced my belief that exceptional design emerges from the intersection of strategic thinking, rigorous user research, and collaborative problem-solving. It&apos;s not about creating beautiful interfaces—it&apos;s about solving real problems that create measurable business and human impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Learnings;

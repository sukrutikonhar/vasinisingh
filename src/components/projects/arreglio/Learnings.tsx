'use client';

import React from 'react';
import { Lightbulb, Shield, BarChart3, Users2, Sparkles } from 'lucide-react';

const Learnings: React.FC = () => {
    const learnings = [
        {
            icon: Lightbulb,
            title: 'Simplicity Wins with SMB Users',
            description: 'Small business owners value ease of use above all else. A feature-rich product that\'s difficult to adopt will fail regardless of its capabilities.'
        },
        {
            icon: Shield,
            title: 'Trust is a Design Problem',
            description: 'By making pricing transparency, reviews, and real-time updates core to the architecture, we transformed trust from a marketing challenge into a design solution.'
        },
        {
            icon: BarChart3,
            title: 'Data-Driven Iteration Reduces Risk',
            description: 'Testing with Maze revealed a 30% drop-off that stakeholder reviews missed. Continuous user testing prevented costly post-launch redesigns.'
        },
        {
            icon: Users2,
            title: 'Collaboration Accelerates Success',
            description: 'Design doesn\'t exist in isolation—success requires orchestrating multiple stakeholders toward shared goals.'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-6">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-xs font-grotesk font-bold uppercase tracking-wider">
                                06 — Key Learnings & Insights
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4">
                            Strategic Takeaways
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 leading-relaxed">
                            This project reinforced critical principles that guide my approach to product design and stakeholder collaboration.
                        </p>
                    </div>

                    {/* Learnings Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {learnings.map((learning, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 p-6"
                            >
                                <div className="mb-4">
                                    {React.createElement(learning.icon, {
                                        className: "w-8 h-8 text-black"
                                    })}
                                </div>
                                <h3 className="text-lg font-grotesk font-bold text-black mb-3">
                                    {learning.title}
                                </h3>
                                <p className="text-sm font-inter text-gray-700 leading-relaxed">
                                    {learning.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Learnings;

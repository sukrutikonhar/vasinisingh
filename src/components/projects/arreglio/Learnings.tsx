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
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Elements */}
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
                            <Sparkles className="w-4 h-4" />
                            <span className="text-xs font-grotesk font-bold uppercase tracking-wider">
                                06 — Key Learnings & Insights
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6 max-w-4xl">
                            Strategic Takeaways
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-3xl leading-relaxed">
                            This project reinforced critical principles that guide my approach to product design and stakeholder collaboration.
                        </p>
                    </div>

                    {/* Learnings Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {learnings.map((learning, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-black p-8 hover:shadow-2xl transition-all group"
                            >
                                <div className="mb-6">
                                    {React.createElement(learning.icon, {
                                        className: "w-8 h-8 text-black"
                                    })}
                                </div>
                                <h3 className="text-xl font-grotesk font-bold text-black mb-4">
                                    {learning.title}
                                </h3>
                                <p className="text-base font-inter text-gray-600 leading-relaxed">
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

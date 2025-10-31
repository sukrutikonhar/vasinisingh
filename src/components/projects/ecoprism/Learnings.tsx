'use client';

import React from 'react';
import { Target, RefreshCw, BarChart3, Layers } from 'lucide-react';

const Learnings: React.FC = () => {
    const learnings = [
        {
            icon: Target,
            title: 'Progressive Complexity',
            description: 'Learned to balance expert-level functionality with beginner-friendly interfaces through progressive disclosure and contextual help systems.',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: RefreshCw,
            title: 'Collaborative Design',
            description: 'Close collaboration with domain experts and engineering teams early in the design process prevented costly revisions and improved implementation accuracy.',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: BarChart3,
            title: 'Data-Driven Decisions',
            description: 'Continuous user testing and feedback loops validated design decisions and revealed unexpected user behaviors that improved the final product.',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: Layers,
            title: 'System Thinking',
            description: 'Building a comprehensive design system from scratch taught me the importance of scalability and consistency for enterprise products.',
            color: 'from-orange-500 to-orange-600'
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
                                06 — Key Learnings
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6">
                            Design Insights & Growth
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-3xl leading-relaxed">
                            Reflections on design challenges and collaborative problem-solving
                        </p>
                    </div>

                    {/* Learnings Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {learnings.map((learning, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-[6px] shadow-card border-2 border-gray-100 hover:border-gray-800 hover:shadow-xl transition-all group"
                            >
                                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${learning.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {React.createElement(learning.icon, {
                                        className: "w-7 h-7 sm:w-8 sm:h-8 text-white"
                                    })}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-black mb-4">
                                    {learning.title}
                                </h3>
                                <p className="text-base font-inter text-gray-600 leading-relaxed">
                                    {learning.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Reflection */}
                    <div className="mt-12 sm:mt-16 bg-gradient-to-r from-gray-50 to-gray-100 p-8 sm:p-12 rounded-[6px] shadow-card border-l-4 border-gray-800">
                        <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-black mb-6">
                            Strategic Impact Beyond Metrics
                        </h3>
                        <p className="text-base sm:text-lg font-inter text-gray-700 leading-relaxed mb-6">
                            ecoPRISM represents more than a digital transformation—it&apos;s a case study in strategic problem-solving, cross-functional collaboration, and user-centered design at scale. By deeply understanding both regulatory complexity and user needs, we created a platform that didn&apos;t just automate processes—it fundamentally improved how enterprises approach sustainability.
                        </p>
                        <p className="text-base sm:text-lg font-inter text-gray-700 leading-relaxed">
                            This project reinforced my belief that exceptional design emerges from the intersection of strategic thinking, rigorous user research, and collaborative problem-solving.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Learnings;

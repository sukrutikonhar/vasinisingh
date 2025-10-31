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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                </div>
            </div>
        </section>
    );
};

export default Learnings;

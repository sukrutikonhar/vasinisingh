'use client';

import React from 'react';
import { Lightbulb, RefreshCw, ArrowRight } from 'lucide-react';

const ReflectionLearnings: React.FC = () => {
    const learnings = [
        {
            icon: Lightbulb,
            title: 'What Worked Well',
            content: 'Strong product clarity and tight MVP focus helped us move fast and validate early.'
        },
        {
            icon: RefreshCw,
            title: "What I'd Do Differently",
            content: 'With more time, deeper user research and AI fine tuning would strengthen accuracy and personalization.'
        },
        {
            icon: ArrowRight,
            title: 'Next Steps',
            content: 'Expand interview types, refine AI feedback quality, and introduce role specific interview tracks.'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-8">
                            Reflection & Learnings
                        </h2>
                    </div>

                    {/* Learnings Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {learnings.map((learning, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-lg p-6 shadow-subtle hover:shadow-lg transition-all"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full flex-shrink-0">
                                        {React.createElement(learning.icon, {
                                            className: "w-5 h-5"
                                        })}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-grotesk font-bold text-black">
                                        {learning.title}
                                    </h3>
                                </div>
                                <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                    {learning.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReflectionLearnings;


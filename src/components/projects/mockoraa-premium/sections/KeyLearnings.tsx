'use client';

import React from 'react';

const KeyLearnings: React.FC = () => {
    const learnings = [
        "Confidence is measurable when broken into behavioral components",
        "Behavioral analytics improve learning outcomes significantly", 
        "Emotional safety increases engagement and retention rates",
        "Data-driven iteration improves product maturity faster",
        "AI products require clarity over novelty for user adoption"
    ];

    return (
        <section className="py-32 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-5xl font-bold mb-16 text-center">Key Learnings</h2>
                
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {learnings.map((learning, index) => (
                            <div key={index} className="flex items-start gap-6 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                                    {index + 1}
                                </div>
                                <p className="text-xl text-gray-300 leading-relaxed">{learning}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-12 rounded-2xl border border-gray-700 inline-block">
                        <h3 className="text-2xl font-bold mb-4">Ready for Senior Product Designer Role</h3>
                        <p className="text-gray-300 max-w-2xl">
                            This case study demonstrates strategic thinking, research rigor, design craft, 
                            and business impact required for senior product design positions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyLearnings;
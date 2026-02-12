'use client';

import React from 'react';

const References: React.FC = () => {
    const references = [
        "Interview anxiety statistics - Harvard Business Review, 2023",
        "Labor participation data - Bureau of Labor Statistics, 2024", 
        "Youth employment data - International Labour Organization, 2024",
        "Internal usability testing metrics - MockOraa Research, 2024",
        "AI hiring adoption trends - Deloitte Global Survey, 2024"
    ];

    return (
        <section className="py-32 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-3xl font-bold mb-12">References & Footnotes</h2>
                
                <div className="max-w-4xl">
                    <div className="space-y-4">
                        {references.map((reference, index) => (
                            <div key={index} className="text-gray-400 text-sm leading-relaxed">
                                <span className="text-white mr-3">[{index + 1}]</span>
                                {reference}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-500 text-sm">
                        © 2024 MockOraa Case Study. Designed by Vasini Singh for Senior Product Designer Portfolio.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default References;
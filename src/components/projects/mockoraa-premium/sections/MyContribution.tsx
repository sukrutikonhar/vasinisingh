'use client';

import React from 'react';

const MyContribution: React.FC = () => {
    const contributions = [
        "Problem framing",
        "Research synthesis", 
        "Persona creation",
        "Journey mapping",
        "Strategic direction",
        "Interaction design",
        "Testing analysis",
        "Design system logic",
        "Impact measurement"
    ];

    return (
        <section id="impact" className="py-32 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-5xl font-bold mb-8">What I Owned</h2>
                <p className="text-xl text-gray-300 mb-16 max-w-3xl">
                    Senior-level ownership across the entire product development lifecycle.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contributions.map((contribution, index) => (
                        <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
                            <div className="text-lg font-semibold">{contribution}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 p-12 rounded-2xl border border-gray-700 text-center">
                    <h3 className="text-3xl font-bold mb-6">Senior Product Designer Impact</h3>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                        Led cross-functional collaboration, drove strategic product decisions, and delivered 
                        measurable business outcomes through evidence-based design methodology.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MyContribution;
'use client';

import React from 'react';

const learnings = [
    'Invisible work is a structural issue, not a people issue—design for visibility by default.',
    'Lightweight capture (e.g. from existing tools) is critical for adoption.',
    'Recognition must feel fair and tied to impact, not just volume.',
];

const nextSteps = [
    'Validate with more teams and refine the dashboard and tracking concepts.',
    'Explore integrations with common work tools (Slack, Jira, etc.).',
    'Define success metrics and run a pilot with a partner organization.',
];

export default function WorkmarkLearnings() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-6">
                        Learnings & Next Steps
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 mb-12 max-w-3xl leading-relaxed">
                        Key takeaways from the project and planned next steps to move from concept to pilot and beyond.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-sm font-grotesk font-bold uppercase tracking-wider text-black mb-4">
                                Key Learnings
                            </h3>
                            <ol className="space-y-2">
                                {learnings.map((item, i) => (
                                    <li key={i} className="flex gap-2 text-sm font-inter text-gray-700">
                                        <span className="font-grotesk font-bold text-black">{i + 1}.</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-sm font-grotesk font-bold uppercase tracking-wider text-black mb-4">
                                Next Steps
                            </h3>
                            <ol className="space-y-2">
                                {nextSteps.map((item, i) => (
                                    <li key={i} className="flex gap-2 text-sm font-inter text-gray-700">
                                        <span className="font-grotesk font-bold text-black">{i + 1}.</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

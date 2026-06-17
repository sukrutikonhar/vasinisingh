'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';

const decisions = [
    {
        area: 'Symptom screening',
        pill: 'Hard exit at Stage 1',
        approach: 'Non-stroke patients exit immediately with a specific message.',
        rationale: 'Clinicians should never wonder if they are in the right workflow.'
    },
    {
        area: 'CT imaging',
        pill: 'Auto-analysis first',
        approach: 'Reports are interpreted, not stored. Manual fallback on failure.',
        rationale: 'Silent failures can mask a hemorrhage. Every error has a recovery path.'
    },
    {
        area: 'Drug dosing',
        pill: 'Weight entered once',
        approach: 'Propagates automatically to the decision engine.',
        rationale: 'Auto-compute removes a known, dangerous class of errors.'
    },
    {
        area: 'Ambiguity',
        pill: 'Escalation over silence',
        approach: 'Specialist prompt surfaces when the engine cannot resolve.',
        rationale: 'A blank state here is a patient safety risk, not a UX bug.'
    },
    {
        area: 'Protocol updates',
        pill: 'Admin layer, versioned',
        approach: 'JSON/YAML editing, no engineering required.',
        rationale: 'A system that needs a developer to update a dose is a liability.'
    }
];

const KeyDecisions: React.FC = () => {
    return (
        <section className="py-14 sm:py-16 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-8">
                        <div>
                            <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-3">
                                Key decisions
                            </p>
                            <h2 className={`${h2Section}`}>
                                What I chose, and why
                            </h2>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="border border-gray-200 rounded-[6px] overflow-hidden">
                        {/* Header — hidden on mobile */}
                        <div className="hidden md:grid grid-cols-[160px_1fr_1fr] gap-4 px-5 py-3 bg-gray-50 border-b border-gray-200">
                            <span className="text-[10px] font-grotesk font-bold uppercase tracking-wider text-gray-400">Area</span>
                            <span className="text-[10px] font-grotesk font-bold uppercase tracking-wider text-gray-400">Approach</span>
                            <span className="text-[10px] font-grotesk font-bold uppercase tracking-wider text-gray-400">Rationale</span>
                        </div>

                        {decisions.map((d, idx) => (
                            <div
                                key={idx}
                                className="grid grid-cols-1 md:grid-cols-[160px_1fr_1fr] gap-3 md:gap-4 px-5 py-5 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-sm font-grotesk font-semibold text-black">
                                    {d.area}
                                </span>
                                <div>
                                    <span className="inline-block text-[10px] font-grotesk font-bold uppercase tracking-wider bg-black text-white px-2 py-1 rounded-[3px] mb-2">
                                        {d.pill}
                                    </span>
                                    <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                        {d.approach}
                                    </p>
                                </div>
                                <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                    {d.rationale}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyDecisions;

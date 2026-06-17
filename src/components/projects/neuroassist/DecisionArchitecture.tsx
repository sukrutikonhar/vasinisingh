'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';

const pathways = [
    { label: 'Hemorrhagic', outcome: 'BP control + reversal agents' },
    { label: 'Ischemic, no LVO', outcome: 'Weight-based tPA dosing' },
    { label: 'Ischemic + LVO', outcome: 'Thrombectomy recommended' },
];

const DecisionArchitecture: React.FC = () => {
    return (
        <section className="py-14 sm:py-16 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left: text + pathway visualization */}
                    <div>
                        <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-3">
                            Decision architecture
                        </p>
                        <h2 className={`${h2Section} mb-4`}>
                            Four pathways, one entry point
                        </h2>
                        <p className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed mb-7">
                            The same entry point resolves to four different treatments. Visual language and state stay consistent across all branches. Only the content changes.
                        </p>

                        {/* Pathway visualization */}
                        <div className="bg-black rounded-[6px] p-5 sm:p-6">
                            <p className="text-[10px] font-grotesk font-bold uppercase tracking-wider text-gray-500 mb-5">
                                Pathway structure
                            </p>
                            {/* Entry chain */}
                            <div className="flex flex-wrap items-center gap-2 mb-5">
                                {['Triage', 'Exclusions', 'CT analysis'].map((node, i, arr) => (
                                    <React.Fragment key={node}>
                                        <span className="text-xs font-grotesk font-semibold px-3 py-1.5 rounded-[3px] bg-white/10 text-white/70 border border-white/10">{node}</span>
                                        {i < arr.length - 1 && <span className="text-white/30 text-sm">→</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                            {/* Branches */}
                            <div className="border-l-2 border-white/10 pl-5 space-y-3">
                                {pathways.map((p) => (
                                    <div key={p.label} className="flex flex-wrap items-center gap-2">
                                        <span className="text-xs font-grotesk font-semibold px-3 py-1.5 rounded-[3px] bg-white text-black">{p.label}</span>
                                        <span className="text-white/30 text-sm">→</span>
                                        <span className="text-xs font-grotesk font-semibold px-3 py-1.5 rounded-[3px] bg-white/10 text-white/70 border border-white/10">{p.outcome}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DecisionArchitecture;

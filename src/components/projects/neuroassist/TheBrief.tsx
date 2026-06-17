'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';

const TheBrief: React.FC = () => {
    return (
        <section className="py-14 sm:py-16 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* Left: Text */}
                    <div>
                        <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-3">
                            The brief
                        </p>
                        <h2 className={`${h2Section} mb-5`}>
                            A problem where bad UX<br />can cost a <em className="italic">life</em>
                        </h2>
                        <p className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed mb-4">
                            Stroke treatment is brutally time-dependent. The existing clinical landscape — printed binders, fragmented checklists, manual CT review, and mental arithmetic for weight-based dosing — was my brief. Not &ldquo;build a dashboard.&rdquo; The brief was:{' '}
                            <strong className="font-semibold text-black">make the right action the easiest action.</strong>
                        </p>

                        {/* Design Framing Callout */}
                        <div className="bg-black rounded-[6px] p-5 sm:p-6 mt-6">
                            <p className="text-[10px] font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-2">
                                Design framing
                            </p>
                            <p className="text-sm font-inter text-gray-300 leading-relaxed">
                                In most products, a confusing UI costs a conversion. In NeuroAssist, it costs a treatment window. That asymmetry shaped every decision I made.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheBrief;

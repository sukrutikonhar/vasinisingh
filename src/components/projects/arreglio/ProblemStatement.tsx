'use client';

import React from 'react';
import Image from 'next/image';
import { AlertCircle } from 'lucide-react';

const ProblemStatement: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 mb-6 rounded-full">
                                <AlertCircle className="w-5 h-5" />
                                <span className="text-sm font-grotesk font-medium uppercase tracking-wider">
                                    The Problem
                                </span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-8">
                                Chaos in Every<br />Workshop
                            </h2>

                            <div className="space-y-6 text-lg font-inter text-gray-700 leading-relaxed">
                                <p className="italic border-l-4 border-black pl-6">
                                    &ldquo;Imagine dropping your scooter at a repair shop and hearing nothing for days.
                                    The owner flips through a messy notebook, muttering: &apos;Maybe tomorrow?&apos;&rdquo;
                                </p>

                                <div className="bg-gray-50 p-6 shadow-card rounded-[6px]">
                                    <p className="font-semibold text-black mb-3">The Reality:</p>
                                    <ul className="space-y-2">
                                        <li>→ Customers frustrated with lack of updates</li>
                                        <li>→ Shop owners drowning in sticky notes and phone calls</li>
                                        <li>→ Lost revenue from missed follow-ups</li>
                                        <li>→ Inefficient operations costing time and money</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right - Visual */}
                        <div className="overflow-hidden bg-gray-100 shadow-card rounded-[6px]">
                            <Image
                                src="/images/projects/Arreglio/arreglio-problem.webp"
                                alt="Workshop problem illustration"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemStatement;


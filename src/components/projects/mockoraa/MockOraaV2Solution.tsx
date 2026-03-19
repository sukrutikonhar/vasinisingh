'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';

const pillars = [
    {
        title: 'JD-Embedded Intelligence',
        description: 'AI contextualizes questions based on pasted Job Descriptions.',
    },
    {
        title: 'Psychological Safety UI',
        description: 'Avatar-first design with a calming color palette.',
    },
    {
        title: 'Real-Time Analytics',
        description: 'Live tracking of filler words, pacing, and confidence without causing panic.',
    },
    {
        title: 'Structured Improvement Loop',
        description: 'Actionable micro-tasks generated post-interview.',
    },
];

export default function MockOraaV2Solution() {
    return (
        <section id="solution" className="py-16 sm:py-20 md:py-24 bg-black text-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        {/* Left: Content */}
                        <div>
                            <p className="text-xs uppercase tracking-widest text-gray-400 font-grotesk font-bold mb-4">
                                05. CONCEPTUALIZATION
                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-white mb-4 sm:mb-6">
                                Translating Ideas to Product Pillars
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg font-inter text-gray-300 leading-relaxed mb-6 sm:mb-8">
                                Using SCAMPER and Crazy 8s, we diverged rapidly before converging on four core product pillars designed to directly target our research insights.
                            </p>
                            <ul className="space-y-3 sm:space-y-4">
                                {pillars.map((pillar, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <Check className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
                                        </span>
                                        <div className="min-w-0">
                                            <span className="font-grotesk font-bold text-white">{pillar.title}:</span>
                                            <span className="font-inter text-gray-300"> {pillar.description}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Product Pillars image */}
                        <div className="relative w-full rounded-lg sm:rounded-xl overflow-hidden border border-gray-700/50 bg-gray-900/50 h-[300px] sm:h-[400px] md:h-auto">
                            <Image
                                src="/images/projects/mockoraa/product-pillars.webp"
                                alt="Product Pillars - Candidate Confidence"
                                width={600}
                                height={600}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

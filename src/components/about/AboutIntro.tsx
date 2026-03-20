'use client';

import React from 'react';

const AboutIntro: React.FC = () => {
    const phases = [
        {
            phase: 'PHASE 01: CURIOSITY',
            title: 'I began with a deep curiosity about how people experience things.',
            body: 'I was drawn to the small details that shape emotion, trust, and ease. That early curiosity taught me to observe carefully and to understand design as something people feel, not just something they see.',
            foot: 'This phase shaped my sensitivity to people, behaviors, and the power of thoughtful decisions.',
        },
        {
            phase: 'PHASE 02: GROWTH',
            title: 'Then I learned how to turn complexity into clarity.',
            body: 'Working across products and industries helped me see how many moving parts, competing needs, and technical constraints can still become intuitive experiences when the right structure is in place.',
            foot: 'This is where my practice became more strategic and more grounded in real product challenges.',
        },
        {
            phase: 'PHASE 03: TODAY',
            title: 'Today I design experiences that help people move with confidence.',
            body: 'I care about the full picture, from the problem being framed to the system supporting the interface. My work is guided by clarity, emotional intelligence, and a desire to make products feel calm and meaningful.',
            foot: 'The goal is simple: create experiences that feel useful, thoughtful, and easy to trust.',
        }
    ];

    return (
        <section className="bg-[linear-gradient(180deg,_#f8f9fa_0%,_#ffffff_100%)] py-16 sm:py-24">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <div>
                            <div className="text-xs sm:text-sm font-inter uppercase tracking-[0.22em] text-gray-500 mb-4">
                                THE JOURNEY
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black leading-[1.02]">
                                A story of becoming a product designer
                            </h2>
                        </div>

                        <p className="text-sm sm:text-base md:text-lg font-inter text-gray-600 leading-relaxed pt-2">
                            This journey is really about how I learned to connect people, systems, and business goals through design. Each phase shaped the way I think, the way I collaborate, and the kind of experiences I want to create.
                        </p>
                    </div>

                    {/* Phases */}
                    <div className="mt-12 sm:mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {phases.map((phase, idx) => (
                                <div key={phase.phase} className="relative">
                                    {/* dot + connector */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-black" />
                                        {idx !== phases.length - 1 && (
                                            <div className="flex-1 h-px bg-gray-200" />
                                        )}
                                    </div>

                                    <div className="mt-6 border border-black/10 rounded-lg bg-white p-5 sm:p-6">
                                        <div className="text-[10px] sm:text-xs font-inter uppercase tracking-widest text-gray-500 mb-4">
                                            {phase.phase}
                                        </div>
                                        <h3 className="text-base sm:text-lg font-grotesk font-bold text-black leading-snug">
                                            {phase.title}
                                        </h3>
                                        <p className="mt-4 text-sm sm:text-base font-inter text-gray-600 leading-relaxed">
                                            {phase.body}
                                        </p>
                                        <p className="mt-5 text-[11px] sm:text-xs font-inter text-gray-400 leading-relaxed">
                                            {phase.foot}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;


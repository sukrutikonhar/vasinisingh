'use client';

import React, { useEffect, useRef, useState } from 'react';

const AboutDemo: React.FC = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const [activePhase, setActivePhase] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const designPhases = [
        {
            number: '01',
            title: 'Discover',
            description: 'Understanding user needs, pain points, and business goals through research and empathy.'
        },
        {
            number: '02',
            title: 'Define',
            description: 'Synthesizing insights to craft clear problem statements and design principles.'
        },
        {
            number: '03',
            title: 'Design',
            description: 'Creating intuitive solutions through iteration, prototyping, and visual refinement.'
        },
        {
            number: '04',
            title: 'Deliver',
            description: 'Collaborating with engineers to bring designs to life with pixel-perfect precision.'
        }
    ];

    return (
        <section className="py-32 bg-gray-50">
            <div className="container-custom">
                {/* Section Header */}
                <div ref={aboutRef} className="text-center mb-20">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-grotesk font-bold text-black mb-6">
                        My Process
                    </h2>
                    <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                        Every great product starts with understanding. Here&apos;s how I transform
                        ideas into impactful experiences.
                    </p>
                </div>

                {/* Design Process Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {designPhases.map((phase, index) => (
                        <div
                            key={phase.number}
                            className="group relative bg-white border-2 border-black p-8 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                            onMouseEnter={() => setActivePhase(index)}
                        >
                            {/* Number */}
                            <div className="text-6xl font-grotesk font-bold text-gray-200 group-hover:text-gray-800 mb-4 transition-colors">
                                {phase.number}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-grotesk font-bold mb-4">
                                {phase.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm font-inter leading-relaxed opacity-80">
                                {phase.description}
                            </p>

                            {/* Animated Indicator */}
                            <div className={`absolute bottom-0 left-0 h-1 bg-black group-hover:bg-white transition-all duration-300 ${activePhase === index ? 'w-full' : 'w-0'
                                }`} />
                        </div>
                    ))}
                </div>

                {/* Philosophy Section */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Large Quote */}
                        <div className="lg:col-span-2">
                            <blockquote className="relative">
                                <div className="absolute -top-8 -left-4 text-8xl font-grotesk font-bold text-gray-200">
                                    &ldquo;
                                </div>
                                <p className="text-3xl sm:text-4xl font-grotesk font-medium text-black leading-tight relative z-10 pl-8">
                                    Design is not just what it looks like.
                                    It&apos;s how it works, how it feels,
                                    and how it transforms experiences.
                                </p>
                            </blockquote>
                        </div>

                        {/* Side Stats/Info */}
                        <div className="space-y-8">
                            <div className="border-l-4 border-black pl-6">
                                <div className="text-sm text-gray-500 font-inter uppercase tracking-wider mb-2">
                                    Core Belief
                                </div>
                                <p className="text-lg font-inter text-gray-700">
                                    Great design happens at the intersection of user needs,
                                    business goals, and technical feasibility.
                                </p>
                            </div>

                            <div className="border-l-4 border-black pl-6">
                                <div className="text-sm text-gray-500 font-inter uppercase tracking-wider mb-2">
                                    Specialization
                                </div>
                                <p className="text-lg font-inter text-gray-700">
                                    SaaS platforms, enterprise tools, and complex systems that
                                    need clarity and simplicity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Horizontal Divider with Animation */}
                <div className="mt-20 pt-20 border-t border-gray-300 flex items-center justify-center gap-4">
                    <div className="w-16 h-px bg-black" />
                    <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                    <div className="w-16 h-px bg-black" />
                </div>
            </div>
        </section>
    );
};

export default AboutDemo;


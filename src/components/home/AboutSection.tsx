'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
    const aboutRef = useRef<HTMLDivElement>(null);

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

    return (
        <section className="py-32 bg-white border-y-2 border-gray-200">
            <div className="container-custom">
                <div ref={aboutRef} className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Label */}
                        <div className="space-y-4">
                            <div className="inline-block border-2 border-black px-4 py-2">
                                <span className="text-sm font-grotesk font-medium uppercase tracking-wider">
                                    About Preview
                                </span>
                            </div>
                            <h2 className="text-5xl sm:text-6xl md:text-7xl font-grotesk font-bold text-black leading-tight">
                                More Than<br />A Designer
                            </h2>
                        </div>

                        {/* Right - Bio & CTA */}
                        <div className="space-y-8">
                            {/* Bio */}
                            <div className="relative pl-6 border-l-4 border-black">
                                <p className="text-xl sm:text-2xl font-inter text-gray-800 leading-relaxed">
                                    My journey started where design meets storytelling. Through photography,
                                    I learned to see the world in frames—now I apply that lens to digital products,
                                    capturing moments of clarity in complex systems and translating human needs into
                                    experiences that resonate.
                                </p>
                            </div>

                            {/* CTA Link */}
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-3 text-lg font-grotesk font-semibold text-black hover:gap-5 transition-all duration-300"
                            >
                                <span>Read My Full Story</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>

                            {/* Additional Info */}
                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div>
                                    <div className="text-sm text-gray-500 font-inter uppercase tracking-wider mb-2">
                                        Background
                                    </div>
                                    <p className="text-base font-inter text-gray-700">
                                        Photography → Product Design
                                    </p>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 font-inter uppercase tracking-wider mb-2">
                                        Focus
                                    </div>
                                    <p className="text-base font-inter text-gray-700">
                                        SaaS & Enterprise Tools
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

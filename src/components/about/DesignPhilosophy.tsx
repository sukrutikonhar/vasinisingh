'use client';

import React from 'react';
import { Heart, Target, Sparkles } from 'lucide-react';

const DesignPhilosophy: React.FC = () => {
    const principles = [
        {
            icon: Heart,
            title: 'User Empathy',
            description: 'Understanding real human needs, not just assumed requirements.'
        },
        {
            icon: Target,
            title: 'Business Goals',
            description: 'Aligning design decisions with measurable objectives.'
        },
        {
            icon: Sparkles,
            title: 'Visual Harmony',
            description: 'Creating aesthetically pleasing experiences that feel effortless.'
        }
    ];

    return (
        <section className="py-16 sm:py-24 md:py-32 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Quote */}
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <blockquote className="relative">
                            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-grotesk font-bold text-gray-200 absolute -top-6 sm:-top-8 md:-top-12 left-1/2 transform -translate-x-1/2">
                                &ldquo;
                            </div>
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-grotesk font-bold text-black leading-tight relative z-10 max-w-4xl mx-auto px-4">
                                I believe good design balances user empathy, business goals, and visual harmony.
                            </p>
                        </blockquote>
                    </div>

                    {/* Principles Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {principles.map((principle, index) => (
                            <div
                                key={index}
                                className="group bg-gray-50 border-2 border-black p-6 sm:p-8 hover:bg-black hover:text-white transition-all duration-300"
                            >
                                <div className="mb-4 sm:mb-6">
                                    {React.createElement(principle.icon, {
                                        className: "w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform"
                                    })}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-grotesk font-bold mb-3 sm:mb-4">
                                    {principle.title}
                                </h3>
                                <p className="text-sm sm:text-base font-inter leading-relaxed">
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignPhilosophy;


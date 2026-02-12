'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Brain, Activity, Shield, TrendingUp } from 'lucide-react';

const StrategyDirection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const pillars = [
        {
            icon: Brain,
            title: "JD Embedded Intelligence",
            description: "Resume and job description vector matching for contextual question generation and improved realism."
        },
        {
            icon: Activity,
            title: "Real-Time Behavioral Analytics",
            description: "Speech-to-text streaming, filler detection, pace monitoring, and confidence scoring."
        },
        {
            icon: Shield,
            title: "Psychological Safety Design",
            description: "Calm visual hierarchy, minimal distractions, and supportive feedback tone."
        },
        {
            icon: TrendingUp,
            title: "Structured Improvement Loop",
            description: "Post-session rubric, practice suggestions, and gamified progress tracking."
        }
    ];

    return (
        <section ref={sectionRef} id="solution" className="py-32 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-8">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-5xl font-bold mb-8">From Anxiety to Measurable Confidence</h2>
                    <p className="text-xl text-gray-300 mb-16 max-w-3xl">
                        Four strategic pillars transforming interview preparation from passive consumption to active skill building.
                    </p>

                    {/* Strategic Pillars */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {pillars.map((pillar, index) => (
                            <div key={index} className={`bg-gray-900 p-8 rounded-2xl border border-gray-800 transition-all duration-1000 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <pillar.icon className="w-12 h-12 text-white mb-6" />
                                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Ideation Process */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                            <h3 className="text-xl font-semibold mb-4">Brainstorming Process</h3>
                            <div className="aspect-[4/3] bg-gray-800 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-gray-400 mb-2">[Image Placeholder]</div>
                                    <div className="text-sm text-gray-500">Brainstorming Board</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                            <h3 className="text-xl font-semibold mb-4">SCAMPER Ideation</h3>
                            <div className="aspect-[4/3] bg-gray-800 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-gray-400 mb-2">[Image Placeholder]</div>
                                    <div className="text-sm text-gray-500">SCAMPER Ideation Snapshot</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategyDirection;
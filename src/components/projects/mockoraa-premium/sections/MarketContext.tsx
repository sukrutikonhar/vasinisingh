'use client';

import React, { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, Bot } from 'lucide-react';

const MarketContext: React.FC = () => {
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

    return (
        <section ref={sectionRef} className="py-32 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-8">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-5xl font-bold mb-8">Why This Problem Matters Now</h2>
                    <p className="text-xl text-gray-300 mb-16 max-w-3xl">
                        The intersection of AI hiring adoption and outdated preparation tools creates unprecedented opportunity.
                    </p>

                    {/* Market Trends */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                        {/* Female Workforce Participation */}
                        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                            <div className="flex items-center gap-4 mb-6">
                                <TrendingUp className="w-8 h-8 text-white" />
                                <h3 className="text-xl font-semibold">Female Workforce Participation</h3>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6">
                                <div className="text-center">
                                    <div className="text-gray-400 mb-2">[Chart Placeholder]</div>
                                    <div className="text-sm text-gray-500">Labor Participation Line Graph</div>
                                </div>
                            </div>
                        </div>

                        {/* Youth Unemployment */}
                        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                            <div className="flex items-center gap-4 mb-6">
                                <Users className="w-8 h-8 text-white" />
                                <h3 className="text-xl font-semibold">Youth Unemployment</h3>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6">
                                <div className="text-center">
                                    <div className="text-gray-400 mb-2">[Chart Placeholder]</div>
                                    <div className="text-sm text-gray-500">Youth Unemployment Bar Graph</div>
                                </div>
                            </div>
                        </div>

                        {/* AI Hiring Adoption */}
                        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                            <div className="flex items-center gap-4 mb-6">
                                <Bot className="w-8 h-8 text-white" />
                                <h3 className="text-xl font-semibold">AI Hiring Growth</h3>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6">
                                <div className="text-center">
                                    <div className="text-gray-400 mb-2">[Infographic Placeholder]</div>
                                    <div className="text-sm text-gray-500">AI Hiring Growth</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Insight */}
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-12 rounded-2xl border border-gray-700">
                        <h3 className="text-3xl font-bold mb-6 text-center">The Opportunity Gap</h3>
                        <p className="text-xl text-gray-300 text-center leading-relaxed max-w-4xl mx-auto">
                            While hiring processes rapidly adopt AI screening and automation, candidate preparation 
                            tools remain passive, generic, and emotionally disconnected. This creates a systemic 
                            mismatch that MockOraa is uniquely positioned to solve.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketContext;
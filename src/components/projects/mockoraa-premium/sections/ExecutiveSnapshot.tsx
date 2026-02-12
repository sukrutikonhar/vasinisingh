'use client';

import React, { useEffect, useState, useRef } from 'react';

const ExecutiveSnapshot: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState({ sus: 0, csat: 0, timeReduction: 0, roleClarity: 0 });
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Start counter animations
                    animateCounters();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const animateCounters = () => {
        const duration = 2000;
        const steps = 60;
        const stepTime = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            
            setCounters({
                sus: Math.floor(81 * progress),
                csat: Math.floor(4.4 * progress * 10) / 10,
                timeReduction: Math.floor(31 * progress),
                roleClarity: Math.floor(40 * progress)
            });

            if (step >= steps) {
                clearInterval(timer);
                setCounters({ sus: 81, csat: 4.4, timeReduction: 31, roleClarity: 40 });
            }
        }, stepTime);
    };

    return (
        <section ref={sectionRef} className="py-32 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-8">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl font-bold text-center mb-4">Executive Snapshot</h2>
                    <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
                        Immediate Impact Through Evidence-Based Design
                    </p>

                    {/* Animated Metrics Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <div className="text-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                            <div className="text-5xl font-bold mb-2">{counters.sus}</div>
                            <div className="text-gray-400 uppercase tracking-wider text-sm">SUS Score</div>
                        </div>
                        <div className="text-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                            <div className="text-5xl font-bold mb-2">{counters.csat.toFixed(1)}<span className="text-2xl text-gray-400">/5</span></div>
                            <div className="text-gray-400 uppercase tracking-wider text-sm">CSAT</div>
                        </div>
                        <div className="text-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                            <div className="text-5xl font-bold mb-2">−{counters.timeReduction}<span className="text-2xl text-gray-400">%</span></div>
                            <div className="text-gray-400 uppercase tracking-wider text-sm">Time on Task</div>
                        </div>
                        <div className="text-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                            <div className="text-5xl font-bold mb-2">+{counters.roleClarity}<span className="text-2xl text-gray-400">%</span></div>
                            <div className="text-gray-400 uppercase tracking-wider text-sm">Role Clarity</div>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-lg text-gray-300 leading-relaxed mb-12">
                            Through structured iteration and behavioral analytics, we improved usability, 
                            reduced cognitive load, and increased completion rates across three testing rounds.
                        </p>

                        {/* Infographic Placeholder */}
                        <div className="bg-gray-900 rounded-2xl p-12 border border-gray-800">
                            <div className="aspect-[3/1] bg-gray-800 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-gray-400 mb-2">[Infographic Placeholder]</div>
                                    <div className="text-sm text-gray-500">Before vs After Metrics Comparison</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExecutiveSnapshot;
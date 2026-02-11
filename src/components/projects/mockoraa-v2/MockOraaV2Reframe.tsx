'use client';

import { useEffect, useRef, useState } from 'react';

export default function MockOraaV2Reframe() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const causes = [
        { icon: '🚫', title: 'Generic Q&A' },
        { icon: '📉', title: 'No Behavioral Scoring' },
        { icon: '😰', title: 'Emotional Stress' },
        { icon: '🔄', title: 'No Feedback Loop' }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-5xl font-semibold text-center mb-16 tracking-tight">
                    Reframing the Challenge
                </h2>
                
                <div className={`flex flex-col lg:flex-row justify-center items-center gap-8 mb-16 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    {/* Old Way */}
                    <div className="bg-white p-12 rounded-xl w-full lg:w-80 text-center relative shadow-sm border-2 border-gray-200 opacity-70 hover:translate-y-1 transition-transform">
                        <span className="block text-xs uppercase tracking-wider text-gray-500 mb-4">The Assumption</span>
                        <h3 className="text-2xl font-semibold mb-4">"A Knowledge Gap"</h3>
                        <p className="text-gray-600 mb-6">How might we train users to know more answers?</p>
                        <div className="text-3xl text-gray-400">✕</div>
                    </div>

                    {/* Arrow */}
                    <div className="flex flex-col items-center text-gray-600 font-medium">
                        <span className="mb-2">Shift</span>
                        <div className="text-3xl">→</div>
                    </div>

                    {/* New Way */}
                    <div className="bg-white p-12 rounded-xl w-full lg:w-80 text-center relative shadow-lg border-2 border-black transform scale-105 hover:translate-y-1 transition-transform">
                        <span className="block text-xs uppercase tracking-wider text-gray-500 mb-4">The Reality</span>
                        <h3 className="text-2xl font-semibold mb-4">"A Performance Gap"</h3>
                        <p className="text-gray-800 font-medium mb-6">
                            How might we create a psychologically safe space to practice performance?
                        </p>
                        <div className="text-3xl text-black">✓</div>
                    </div>
                </div>

                <div className={`bg-white p-12 border border-gray-200 rounded-xl transition-all duration-1000 delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <h3 className="text-center text-2xl font-semibold mb-8">Solving for Root Causes</h3>
                    <div className="flex justify-around flex-wrap gap-8">
                        {causes.map((cause, index) => (
                            <div key={index} className="text-center w-36">
                                <span className="block text-4xl mb-2">{cause.icon}</span>
                                <p className="font-medium">{cause.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
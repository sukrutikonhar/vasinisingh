'use client';

import { useEffect, useRef, useState } from 'react';

export default function MockOraaV2WhyNow() {
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

    const trends = [
        { icon: '📈', title: 'Female workforce participation', desc: 'is increasing.' },
        { icon: '🎓', title: 'Youth unemployment', desc: 'remains volatile.' },
        { icon: '🤖', title: 'AI hiring adoption', desc: 'is accelerating.' }
    ];

    return (
        <section ref={sectionRef} className="py-24">
            <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-5xl font-semibold mb-16 tracking-tight">
                    Why This Problem Matters Now
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-xl mb-8 leading-relaxed">
                            The workforce is evolving rapidly. Technology is reshaping hiring pipelines, 
                            but preparation tools have not evolved at the same pace.
                        </p>
                        
                        <div className={`space-y-4 transition-all duration-1000 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                            {trends.map((trend, index) => (
                                <div key={index} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                                    <span className="text-2xl">{trend.icon}</span>
                                    <div>
                                        <strong>{trend.title}</strong> {trend.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`text-center transition-all duration-1000 delay-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        <h3 className="text-2xl mb-8">MockOraa exists at the intersection of:</h3>
                        
                        <div className="relative w-96 h-96 mx-auto">
                            {/* Venn Diagram */}
                            <div className="absolute w-56 h-56 rounded-full bg-gray-300 opacity-80 top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-center font-semibold p-4 hover:scale-105 transition-transform">
                                Workforce<br />Inclusion
                            </div>
                            <div className="absolute w-56 h-56 rounded-full bg-gray-400 opacity-80 bottom-0 left-0 flex items-center justify-center text-center font-semibold p-4 hover:scale-105 transition-transform">
                                Behavioral<br />Systems
                            </div>
                            <div className="absolute w-56 h-56 rounded-full bg-gray-500 opacity-80 bottom-0 right-0 flex items-center justify-center text-center font-semibold p-4 hover:scale-105 transition-transform">
                                AI<br />Assessment
                            </div>
                            
                            {/* Center intersection */}
                            <div className="absolute top-1/2 left-1/2 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full text-white flex items-center justify-center font-bold text-sm text-center shadow-lg z-10">
                                Emotional Safety
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
'use client';

import { useEffect, useRef, useState } from 'react';

export default function MockOraaV2Metrics() {
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

    const metrics = [
        { value: '81', label: 'SUS Score' },
        { value: '4.4/5', label: 'CSAT' },
        { value: '−31%', label: 'Reduction in Time on Task' },
        { value: '+40%', label: 'Increase in Role Clarity' }
    ];

    return (
        <section ref={sectionRef} id="metrics" className="py-16 sm:py-20 md:py-24 bg-slate-900 text-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-center mb-12 text-white">
                        What Recruiters Care About:<br />Measurable Outcomes
                    </h2>
                
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {metrics.map((metric, index) => (
                            <div 
                                key={index}
                                className={`text-center transition-all duration-1000 delay-${index * 100} ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            >
                                <div className="text-4xl sm:text-5xl font-grotesk font-bold mb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                                    {metric.value}
                                </div>
                                <div className="text-sm sm:text-base font-inter opacity-80">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                    
                    <p className="text-center opacity-70 max-w-4xl mx-auto text-base sm:text-lg font-inter leading-relaxed">
                        Through structured iteration and behavioral analytics, we improved usability, reduced cognitive load, 
                        and increased completion rates across three testing rounds.
                    </p>
                </div>
            </div>
        </section>
    );
}
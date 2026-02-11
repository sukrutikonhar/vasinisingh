'use client';

import { useEffect, useRef, useState } from 'react';

export default function MockOraaV2Problem() {
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

    const stats = [
        { number: '92%', desc: 'experience interview anxiety' },
        { number: '72%', desc: 'feel underprepared' },
        { number: '67%', desc: 'do not know how to improve' },
        { number: '74%', desc: 'have never experienced a realistic mock interview' }
    ];

    const impacts = [
        'Qualified candidates filtered unfairly',
        'Career returnees struggle to re-enter',
        'Career shifters undervalued',
        'Employers face readiness gaps',
        'Diverse talent overlooked'
    ];

    return (
        <section ref={sectionRef} id="problem" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-5xl font-semibold mb-16 tracking-tight">
                    The Confidence Gap in Modern Hiring
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div 
                            key={index}
                            className={`bg-white p-8 rounded-lg shadow-sm transition-all duration-1000 delay-${index * 100} ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        >
                            <span className="block text-4xl font-bold text-green-600 mb-2">
                                {stat.number}
                            </span>
                            <span className="text-gray-700">{stat.desc}</span>
                        </div>
                    ))}
                </div>

                <div className={`transition-all duration-1000 delay-400 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-6">Hidden Impact</h3>
                        <ul className="space-y-3 mb-8">
                            {impacts.map((impact, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-green-600 mr-4 mt-1">•</span>
                                    <span className="text-lg">{impact}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <p className="text-2xl font-semibold text-center">
                            The problem is not intelligence.<br />
                            It is performance under pressure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
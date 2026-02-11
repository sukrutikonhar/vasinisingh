'use client';

import { useEffect, useRef, useState } from 'react';

export default function MockOraaV2Trust() {
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

    const trustItems = [
        'Transparent scoring logic',
        'Bias mitigation review',
        'Clear feedback explanation',
        'Data privacy awareness'
    ];

    return (
        <section ref={sectionRef} className="py-24">
            <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-5xl font-semibold mb-8 tracking-tight">
                    Designing for Trust, Not Hype
                </h2>
                
                <p className="text-xl mb-12 text-gray-600">
                    AI in hiring demands responsibility.
                </p>
                
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    {trustItems.map((item, index) => (
                        <div 
                            key={index}
                            className="bg-gray-50 p-6 rounded-lg text-center font-medium hover:bg-gray-100 transition-colors"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
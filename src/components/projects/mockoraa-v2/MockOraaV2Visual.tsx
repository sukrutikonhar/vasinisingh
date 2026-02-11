'use client';

import { useEffect, useRef, useState } from 'react';

export default function MockOraaV2Visual() {
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

    const visualElements = [
        {
            title: 'Deep Sea Green',
            color: '#416C53',
            description: 'Creates a sense of calm capabilities and growth.'
        },
        {
            title: 'Midnight Text',
            color: '#0F172A',
            description: 'High contrast for readability without the harshness of pure black.'
        },
        {
            title: 'Clarified Surface',
            color: '#F1F5F9',
            description: 'Reduces eye strain during prolonged practice sessions.'
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-5xl font-semibold text-center mb-16 tracking-tight">
                    Designing for Trust, Not Noise
                </h2>
                
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    {visualElements.map((element, index) => (
                        <div 
                            key={index}
                            className="bg-white/10 p-8 rounded-lg text-center"
                        >
                            <div 
                                className="w-16 h-16 rounded-lg mx-auto mb-4"
                                style={{ backgroundColor: element.color }}
                            ></div>
                            <h3 className="text-xl font-semibold mb-3">{element.title}</h3>
                            <p className="text-sm opacity-80 mb-2">{element.color}</p>
                            <p className="text-sm opacity-70 leading-relaxed">
                                {element.description}
                            </p>
                        </div>
                    ))}
                </div>
                
                <p className="text-center text-xl opacity-80">
                    Design reduces anxiety instead of amplifying it.
                </p>
            </div>
        </section>
    );
}
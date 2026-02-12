'use client';

import React, { useEffect, useState, useRef } from 'react';

const ProductShowcase: React.FC = () => {
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

    const screens = [
        {
            title: "AI Avatar Interview",
            description: "Dynamic questioning with natural tone synthesis and context-aware interaction.",
            ux: "Distraction-free interface prioritizing user focus and emotional comfort."
        },
        {
            title: "Live Feedback Overlay",
            description: "Non-intrusive pace alerts, filler detection, and clarity indicators during speech.",
            ux: "Real-time insight without cognitive overload through progressive disclosure."
        },
        {
            title: "Scorecard Dashboard",
            description: "Structured scoring with strength breakdown and improvement roadmap.",
            ux: "Scannable layout with clear hierarchy and progress motivation."
        },
        {
            title: "Improvement Roadmap",
            description: "Personalized learning path with micro-lessons and practice recommendations.",
            ux: "Gamified progression system maintaining user engagement and growth."
        }
    ];

    return (
        <section ref={sectionRef} className="py-32 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-8">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-5xl font-bold mb-8">Product Showcase — UX + UI Craft</h2>
                    <p className="text-xl text-gray-300 mb-16 max-w-3xl">
                        Each interface demonstrates strategic UX reasoning, visual hierarchy, and interaction design logic.
                    </p>

                    <div className="space-y-20">
                        {screens.map((screen, index) => (
                            <div key={index} className={`transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                                        <h3 className="text-3xl font-bold mb-4">{screen.title}</h3>
                                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">{screen.description}</p>
                                        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                                            <div className="text-sm text-gray-400 mb-2">UX REASONING</div>
                                            <p className="text-white">{screen.ux}</p>
                                        </div>
                                    </div>
                                    <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                                        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                                            <div className="aspect-[4/3] bg-gray-800 rounded-lg flex items-center justify-center">
                                                <div className="text-center">
                                                    <div className="text-gray-400 mb-2">[Image Placeholder]</div>
                                                    <div className="text-sm text-gray-500">Full Screen UI Mockup</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
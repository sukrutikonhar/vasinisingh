'use client';

import { useEffect, useRef, useState } from 'react';

export default function MockOraaV2Problem() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const stats = [
        { number: '92%', desc: 'Experience severe interview anxiety' },
        { number: '74%', desc: 'Never experienced realistic mocks' },
        { number: '72%', desc: 'Feel materially underprepared' },
        { number: '67%', desc: 'Don\'t know how to improve' }
    ];

    return (
        <section ref={sectionRef} id="problem" className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-grotesk font-bold mb-4">01. THE PROBLEM SPACE</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4">The Confidence Gap in Modern Hiring</h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 mb-12 max-w-3xl leading-relaxed">
                        Hiring processes have adopted AI screening and automation, yet preparation remains passive, generic, and emotionally disconnected. Candidates struggle not because they lack knowledge — but because they lack the space to perform under pressure.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`bg-gray-50 border border-gray-100 p-8 rounded-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <span className="block text-4xl sm:text-5xl font-grotesk font-bold text-black mb-3">{stat.number}</span>
                                <span className="text-sm font-inter text-gray-600 leading-relaxed">{stat.desc}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-50 border border-red-500 bg-red-500/10 p-8 rounded-lg border-l-4 border-red-500 shadow-md">
                        <p className="text-xl sm:text-2xl font-grotesk font-bold text-black mb-4">
                            Why Current Solutions Fail to Address the Problem?
                        </p>
                        <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl leading-relaxed">
                            We audited existing platforms and found a critical gap. Tools either relied on static recorded video (lacking dynamic conversation) or provided overwhelming, unstructured data dumps that increased congnitive load rather than building confidence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client';

import { useEffect, useRef, useState } from 'react';

export default function MockOraaV2Final() {
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

    const learnings = [
        'Confidence is measurable when broken into behavioral components.',
        'Emotional safety increases engagement and retention.',
        'AI products demand clarity over novelty.',
        'Data driven iteration strengthens usability maturity.',
        'Design must align with business scalability and ethical responsibility.'
    ];

    const references = [
        'Interview anxiety statistics',
        'Labor participation data',
        'Youth employment data',
        'Internal usability testing metrics',
        'Project documentation'
    ];

    return (
        <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className={`transition-all duration-1000 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-8">
                                Key Learnings
                            </h2>
                            <ul className="space-y-4">
                                {learnings.map((learning, index) => (
                                    <li key={index} className="text-base font-inter text-gray-700 leading-relaxed flex items-start">
                                        <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        {learning}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className={`transition-all duration-1000 delay-300 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-8">
                                References
                            </h2>
                            <ul className="space-y-4">
                                {references.map((reference, index) => (
                                    <li key={index} className="text-base font-inter text-gray-700 leading-relaxed flex items-start">
                                        <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        {reference}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
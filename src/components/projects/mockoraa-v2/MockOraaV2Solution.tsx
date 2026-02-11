'use client';

import { useEffect, useRef, useState } from 'react';

export default function MockOraaV2Solution() {
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

    const pillars = [
        {
            title: 'JD Embedded Intelligence',
            items: [
                'Resume and job description vector matching',
                'Contextual question generation',
                'Improved realism and relevance'
            ]
        },
        {
            title: 'Real Time Behavioral Analytics',
            items: [
                'Speech-to-text streaming',
                'Filler word detection',
                'Pace monitoring',
                'Confidence scoring'
            ],
            note: 'Confidence became measurable, not subjective.'
        },
        {
            title: 'Psychological Safety',
            items: [
                'Calm visual hierarchy',
                'Minimal distractions',
                'Supportive feedback tone',
                'Clear step progression'
            ],
            note: 'Design reduces cognitive stress.'
        },
        {
            title: 'Structured Improvement Loop',
            items: [
                'Post-session rubric',
                'Next best practice suggestions',
                'Micro-learning unlocks',
                'Gamified progress tracking'
            ],
            note: 'Preparation becomes iterative and actionable.'
        }
    ];

    return (
        <section ref={sectionRef} id="solution" className="py-24">
            <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-5xl font-semibold mb-16 tracking-tight">
                    From Anxiety to Measurable Confidence
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pillars.map((pillar, index) => (
                        <div 
                            key={index}
                            className={`p-8 border border-gray-200 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
                                isVisible ? `opacity-100 translate-y-0 delay-${index * 100}` : 'opacity-0 translate-y-8'
                            }`}
                        >
                            <h3 className="text-2xl font-semibold mb-6">{pillar.title}</h3>
                            <ul className="space-y-2 mb-4">
                                {pillar.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-gray-700 list-disc ml-5">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            {pillar.note && (
                                <p className="text-sm text-gray-600 italic mt-4 border-l-2 border-green-600 pl-4">
                                    {pillar.note}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
'use client';

import { useEffect, useRef, useState } from 'react';

export default function MockOraaV2Research() {
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

    const competitorData = [
        {
            feature: 'Role Specificity',
            traditional: 'Generic / Static',
            general: 'Text-based only',
            mockOraa: 'JD & Resume Vector Matching'
        },
        {
            feature: 'Feedback Loop',
            traditional: 'None / Peer-based',
            general: 'Logic only',
            mockOraa: 'Behavioral & Speech Analytics'
        },
        {
            feature: 'Emotional Safety',
            traditional: 'Variable / High Stress',
            general: 'Neutral',
            mockOraa: 'Designed for Anxiety Reduction'
        }
    ];

    const methods = [
        {
            number: '01',
            title: 'Discovery',
            items: [
                'Secondary Labor Market Data',
                'Competitor Benchmarking',
                'Journey Mapping'
            ]
        },
        {
            number: '02',
            title: 'Ideation',
            items: [
                'Crazy 8s (Divergent)',
                'SCAMPER (Lateral Thinking)',
                'Six Thinking Hats (Perspective)'
            ]
        },
        {
            number: '03',
            title: 'Validation',
            items: [
                'Moderated Usability (n=6)',
                'Maze Unmoderated (n=51)',
                'SUS Evaluation'
            ]
        }
    ];

    const decisions = [
        {
            problem: 'Users struggle to articulate answers under time pressure.',
            decision: 'Integrated Real-time Pace Monitoring & Speech Analytics.'
        },
        {
            problem: 'Generic questions feel irrelevant to specific career paths.',
            decision: 'Built JD & Resume Embedding for hyper-personalized questions.'
        },
        {
            problem: 'High anxiety caused by "judgmental" AI interfaces.',
            decision: 'Designed "Psychologically Safe" UI with calm colors and supportive feedback tone.'
        },
        {
            problem: 'Users don\'t know how to improve after a bad session.',
            decision: 'Created a Structured Improvement Loop with actionable next steps.'
        }
    ];

    return (
        <section ref={sectionRef} className="py-24">
            <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-5xl font-semibold mb-8 tracking-tight">Research & Competitor Analysis</h2>
                <p className="text-xl mb-16 text-gray-600">This was not assumption-driven design. We scrutinized the landscape.</p>

                {/* Competitor Analysis */}
                <div className={`mb-16 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <h3 className="text-3xl font-semibold mb-8">The Landscape Gap</h3>
                    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                        <div className="grid grid-cols-4 bg-slate-900 text-white p-6 font-semibold">
                            <div>Feature</div>
                            <div>Traditional Mock Tools</div>
                            <div>General AI (ChatGPT)</div>
                            <div className="underline">MockOraa</div>
                        </div>
                        {competitorData.map((row, index) => (
                            <div key={index} className="grid grid-cols-4 p-6 border-b border-gray-200 last:border-b-0">
                                <div className="font-semibold">{row.feature}</div>
                                <div className="text-gray-600">{row.traditional}</div>
                                <div className="text-gray-600">{row.general}</div>
                                <div className="font-semibold text-green-600">
                                    <span className="mr-2">✓</span>{row.mockOraa}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Research Methods */}
                <div className={`mb-16 transition-all duration-1000 delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <h3 className="text-3xl font-semibold mb-8">Research & Ideation Methods</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {methods.map((method, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-lg relative overflow-hidden h-full">
                                <div className="absolute top-0 right-4 text-6xl font-bold text-black/5">
                                    {method.number}
                                </div>
                                <h4 className="text-xl font-semibold mb-4 mt-4">{method.title}</h4>
                                <ul className="space-y-1">
                                    {method.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="text-sm opacity-80">
                                            {item.includes('(') ? (
                                                <>
                                                    <strong>{item.split(' (')[0]}</strong> ({item.split(' (')[1]}
                                                </>
                                            ) : (
                                                item
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Design Decisions */}
                <div className={`transition-all duration-1000 delay-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <h3 className="text-3xl font-semibold mb-8">From Insight to Design Decision</h3>
                    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                        <div className="grid grid-cols-2 bg-slate-900 text-white p-6 font-semibold">
                            <div>Observed Problem</div>
                            <div>Design Decision</div>
                        </div>
                        {decisions.map((decision, index) => (
                            <div key={index} className="grid grid-cols-2 p-6 border-b border-gray-200 last:border-b-0">
                                <div className="pr-4 font-medium text-gray-600">{decision.problem}</div>
                                <div className="font-semibold text-slate-900">
                                    <span className="mr-2">→</span>{decision.decision}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
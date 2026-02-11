'use client';

import { useEffect, useRef, useState } from 'react';

export default function MockOraaV2Audience() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('arch-1');
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

    const archetypes = [
        {
            id: 'arch-1',
            name: 'The Anxious Achiever',
            quote: '"I know the answers, but I freeze when the camera turns on."',
            traits: [
                'High competence',
                'Low performance confidence',
                'Struggles with articulation under pressure'
            ],
            color: 'bg-gray-600'
        },
        {
            id: 'arch-2',
            name: 'The Career Restarter',
            quote: '"The tools have changed so much, I feel like I\'m starting over."',
            traits: [
                'Experience gaps',
                'Disconnected from modern hiring norms',
                'Needs validation of relevance'
            ],
            color: 'bg-gray-700'
        },
        {
            id: 'arch-3',
            name: 'The Over Researcher',
            quote: '"I\'ve read every article, but I\'ve never actually practiced."',
            traits: [
                'Information overload',
                'Passive preparation habits',
                'Lacks feedback loop'
            ],
            color: 'bg-gray-800'
        },
        {
            id: 'arch-4',
            name: 'The Silent Doubter',
            quote: '"They probably won\'t pick me anyway."',
            traits: [
                'History of rejection',
                'Self-sabotaging mindset',
                'Needs small, quick wins'
            ],
            color: 'bg-gray-900'
        }
    ];

    const activeArchetype = archetypes.find(arch => arch.id === activeTab) || archetypes[0];

    return (
        <section ref={sectionRef} className="py-24 bg-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-5xl font-semibold text-center mb-16 tracking-tight">
                    Who We Designed For
                </h2>
                
                <div className={`flex justify-center gap-16 mb-16 flex-wrap transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <div className="text-center">
                        <span className="text-3xl font-bold">43%</span>
                        <span className="block text-lg opacity-80">First Time Seekers</span>
                    </div>
                    <div className="text-center">
                        <span className="text-3xl font-bold">29%</span>
                        <span className="block text-lg opacity-80">Returning Mothers</span>
                    </div>
                    <div className="text-center">
                        <span className="text-3xl font-bold">28%</span>
                        <span className="block text-lg opacity-80">Career Shifters</span>
                    </div>
                </div>

                <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <h3 className="text-center text-2xl mb-8">Behavioral Archetypes</h3>
                    
                    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden min-h-[450px] flex flex-col lg:flex-row">
                        {/* Tabs */}
                        <div className="flex lg:flex-col bg-black/30 border-r border-white/10 overflow-x-auto lg:overflow-x-visible">
                            {archetypes.map((archetype) => (
                                <button
                                    key={archetype.id}
                                    onClick={() => setActiveTab(archetype.id)}
                                    className={`p-6 text-left font-semibold text-lg cursor-pointer transition-all border-b lg:border-b-0 lg:border-r border-white/5 whitespace-nowrap lg:whitespace-normal ${
                                        activeTab === archetype.id
                                            ? 'bg-white text-black'
                                            : 'text-white/60 hover:bg-white/5 hover:text-white'
                                    }`}
                                >
                                    {archetype.name}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
                                <div>
                                    <h4 className="text-3xl font-semibold mb-4 text-white">
                                        {activeArchetype.name}
                                    </h4>
                                    <p className="italic text-gray-300 mb-6 border-l-3 border-white pl-4 text-lg">
                                        {activeArchetype.quote}
                                    </p>
                                    <ul className="space-y-2">
                                        {activeArchetype.traits.map((trait, index) => (
                                            <li key={index} className="text-gray-300 list-disc ml-5">
                                                {trait}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="flex justify-center">
                                    <div className="w-48 h-64 bg-white rounded-lg p-6 shadow-lg flex flex-col gap-4">
                                        <div className={`w-16 h-16 ${activeArchetype.color} rounded-full mx-auto`}></div>
                                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                                        <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                                        <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Heart, Target, AlertTriangle } from 'lucide-react';

const TargetUsers: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activePersona, setActivePersona] = useState(0);
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

    const personas = [
        {
            name: "Kajal",
            role: "First-time job seeker",
            background: "24-year-old chemistry graduate transitioning to HR",
            goals: ["Land first professional role", "Build interview confidence", "Prove domain relevance"],
            frustrations: ["Gets stuck during interviews", "Lacks feedback on performance", "Anxious about real interviews"],
            blockers: "Confidence issues and fear of judgment"
        },
        {
            name: "Sushma",
            role: "Returning mother",
            background: "31-year-old former coordinator re-entering workforce",
            goals: ["Secure remote work", "Update skills", "Balance family commitments"],
            frustrations: ["Career gap concerns", "Outdated interview norms", "Skill relevance doubts"],
            blockers: "Feeling overwhelmed by industry changes"
        },
        {
            name: "Pravith",
            role: "Career shifter",
            background: "35-year-old banker transitioning to cybersecurity",
            goals: ["Clear personal loans", "Secure stable role", "Reduce interview anxiety"],
            frustrations: ["Industry knowledge gaps", "Lack of confidence", "Financial pressure"],
            blockers: "Nervousness and lack of confidence during HR interviews"
        },
        {
            name: "Nandish",
            role: "Engineering fresher",
            background: "22-year-old mechanical engineering student",
            goals: ["Gain interview confidence", "Land internship", "Improve communication"],
            frustrations: ["Freezes during interviews", "Procrastination habits", "Generic preparation tools"],
            blockers: "Performance anxiety and lack of structured feedback"
        }
    ];

    return (
        <section ref={sectionRef} className="py-32 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-8">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-5xl font-bold mb-8">Who We Designed For</h2>
                    <p className="text-xl text-gray-300 mb-16 max-w-3xl">
                        Deep empathy research revealed four distinct behavioral archetypes with unique needs and emotional barriers.
                    </p>

                    {/* Persona Navigation */}
                    <div className="flex flex-wrap gap-4 mb-12 justify-center">
                        {personas.map((persona, index) => (
                            <button
                                key={index}
                                onClick={() => setActivePersona(index)}
                                className={`px-6 py-3 rounded-lg border transition-all ${
                                    activePersona === index
                                        ? 'bg-white text-black border-white'
                                        : 'bg-transparent text-gray-300 border-gray-600 hover:border-gray-400'
                                }`}
                            >
                                {persona.name} - {persona.role}
                            </button>
                        ))}
                    </div>

                    {/* Active Persona Card */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                            {/* Persona Image Placeholder */}
                            <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-gray-400 text-xs mb-1">[Persona Image]</div>
                                    <div className="text-gray-500 text-xs">Grayscale Portrait</div>
                                </div>
                            </div>
                            
                            <h3 className="text-3xl font-bold text-center mb-2">{personas[activePersona].name}</h3>
                            <p className="text-xl text-gray-300 text-center mb-6">{personas[activePersona].role}</p>
                            <p className="text-gray-400 text-center">{personas[activePersona].background}</p>
                        </div>

                        <div className="space-y-8">
                            {/* Goals */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Target className="w-6 h-6 text-white" />
                                    <h4 className="text-xl font-semibold">Goals</h4>
                                </div>
                                <ul className="space-y-2">
                                    {personas[activePersona].goals.map((goal, index) => (
                                        <li key={index} className="text-gray-300 flex items-start gap-2">
                                            <span className="text-white mt-1">•</span>
                                            {goal}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Frustrations */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <AlertTriangle className="w-6 h-6 text-white" />
                                    <h4 className="text-xl font-semibold">Frustrations</h4>
                                </div>
                                <ul className="space-y-2">
                                    {personas[activePersona].frustrations.map((frustration, index) => (
                                        <li key={index} className="text-gray-300 flex items-start gap-2">
                                            <span className="text-white mt-1">•</span>
                                            {frustration}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Emotional Blockers */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Heart className="w-6 h-6 text-white" />
                                    <h4 className="text-xl font-semibold">Emotional Blockers</h4>
                                </div>
                                <p className="text-gray-300">{personas[activePersona].blockers}</p>
                            </div>
                        </div>
                    </div>

                    {/* Emotional Journey Placeholder */}
                    <div className="bg-gray-900 rounded-2xl p-12 border border-gray-800">
                        <div className="aspect-[3/1] bg-gray-800 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-gray-400 mb-2">[Infographic Placeholder]</div>
                                <div className="text-sm text-gray-500">Emotional Journey Curve</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetUsers;
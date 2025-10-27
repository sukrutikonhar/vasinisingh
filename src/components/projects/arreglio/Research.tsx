'use client';

import React from 'react';
import { Users, MessageSquare, BarChart } from 'lucide-react';

const Research: React.FC = () => {
    const researchMethods = [
        {
            icon: Users,
            title: 'Workshop Visits',
            description: '12 on-site visits to automotive repair shops to observe workflows'
        },
        {
            icon: MessageSquare,
            title: 'User Interviews',
            description: '20+ interviews with shop owners and their customers'
        },
        {
            icon: BarChart,
            title: 'Surveys',
            description: 'Online surveys with 50+ workshop owners about their pain points'
        }
    ];

    const personas = [
        {
            title: 'Shop Owner',
            name: 'Rajesh',
            age: '45',
            needs: [
                'Track all repairs in one place',
                'Reduce phone calls and interruptions',
                'Manage inventory and parts'
            ],
            pain: 'Spends 3+ hours daily on manual paperwork'
        },
        {
            title: 'Customer',
            name: 'Priya',
            age: '32',
            needs: [
                'Know repair status without calling',
                'Get cost estimates upfront',
                'Easy booking process'
            ],
            pain: 'Frustrated by lack of communication and transparency'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-16 text-center">
                        Research & User Insights
                    </h2>

                    {/* Research Methods */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {researchMethods.map((method, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-black p-8"
                            >
                                <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                                    {React.createElement(method.icon, {
                                        className: "w-8 h-8 text-white"
                                    })}
                                </div>
                                <h3 className="text-2xl font-grotesk font-bold text-black mb-4">
                                    {method.title}
                                </h3>
                                <p className="font-inter text-gray-700 leading-relaxed">
                                    {method.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* User Personas */}
                    <div className="mb-12">
                        <h3 className="text-3xl font-grotesk font-bold text-black mb-8 text-center">
                            User Personas
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {personas.map((persona, index) => (
                                <div key={index} className="bg-white border-2 border-black p-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <p className="text-sm font-grotesk uppercase tracking-wider text-gray-500 mb-1">
                                                {persona.title}
                                            </p>
                                            <h4 className="text-2xl font-grotesk font-bold text-black">
                                                {persona.name}, {persona.age}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm font-grotesk font-semibold text-black mb-2">Needs:</p>
                                            <ul className="space-y-1 text-sm font-inter text-gray-700">
                                                {persona.needs.map((need, i) => (
                                                    <li key={i}>• {need}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-4">
                                            <p className="text-sm font-grotesk font-semibold text-black mb-1">Pain Point:</p>
                                            <p className="text-sm font-inter text-gray-700 italic">{persona.pain}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Insight */}
                    <div className="bg-black text-white p-12 text-center">
                        <p className="text-3xl font-grotesk font-bold mb-4">
                            &ldquo;We needed a system that works for both busy shop owners
                            and customers who want transparency.&rdquo;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Research;


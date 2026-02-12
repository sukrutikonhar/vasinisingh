'use client';

import React from 'react';
import { Shield, Eye, Lock, Heart } from 'lucide-react';

const EthicalAI: React.FC = () => {
    const principles = [
        {
            icon: Shield,
            title: "Bias Mitigation",
            description: "Regular algorithmic audits and diverse training data to ensure fair assessment across demographics."
        },
        {
            icon: Eye,
            title: "Transparent Scoring",
            description: "Clear explanation of scoring criteria and methodology accessible to all users."
        },
        {
            icon: Lock,
            title: "Data Privacy Awareness",
            description: "GDPR compliance with user control over data retention and sharing preferences."
        },
        {
            icon: Heart,
            title: "Emotional Safeguards",
            description: "Built-in mechanisms to detect and respond to user distress during sessions."
        }
    ];

    return (
        <section className="py-32 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-5xl font-bold mb-8">Designing Responsible AI Systems</h2>
                <p className="text-xl text-gray-300 mb-16 max-w-3xl">
                    Ethical considerations integrated throughout the design process to ensure trust and fairness.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {principles.map((principle, index) => (
                        <div key={index} className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                            <principle.icon className="w-12 h-12 text-white mb-6" />
                            <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{principle.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EthicalAI;
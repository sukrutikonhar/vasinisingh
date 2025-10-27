'use client';

import React from 'react';
import { Calendar, User, Wrench, Package } from 'lucide-react';

const ProjectOverview: React.FC = () => {
    const details = [
        { icon: Calendar, label: 'Duration', value: '8 weeks' },
        { icon: User, label: 'Role', value: 'Foundation Designer' },
        { icon: Wrench, label: 'Tools', value: 'Adobe XD, Devops' },
        { icon: Package, label: 'Category', value: 'B2B SaaS WebApp' }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-6">
                            Project Overview
                        </h2>
                        <p className="text-xl font-inter text-gray-700 leading-relaxed max-w-4xl">
                            ecoPRISM is an ESG (Environmental, Social, Governance) SaaS platform that simplifies
                            compliance and sustainability reporting. My role was to translate research insights
                            into intuitive UI and UX workflows, ensuring the product experience was clear, usable,
                            and scalable for enterprise sustainability teams.
                        </p>
                    </div>

                    {/* Project Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {details.map((detail, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-black p-6 hover:bg-black hover:text-white transition-all group"
                            >
                                <div className="mb-4">
                                    {React.createElement(detail.icon, {
                                        className: "w-8 h-8"
                                    })}
                                </div>
                                <p className="text-sm font-grotesk uppercase tracking-wider text-gray-500 group-hover:text-gray-300 mb-2">
                                    {detail.label}
                                </p>
                                <p className="text-lg font-grotesk font-semibold">
                                    {detail.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectOverview;


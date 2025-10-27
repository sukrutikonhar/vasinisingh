'use client';

import React from 'react';
import Image from 'next/image';

const Ideation: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-8">
                        Ideation & Strategy
                    </h2>

                    <p className="text-xl font-inter text-gray-700 leading-relaxed mb-12">
                        Based on research insights, I mapped out user flows and created wireframes to test
                        different approaches to organizing complex ESG data.
                    </p>

                    {/* Wireframes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border-2 border-black overflow-hidden">
                            <Image
                                src="/images/projects/ecoprism/Draft Phase.webp"
                                alt="Wireframe draft"
                                width={600}
                                height={400}
                                className="w-full h-auto grayscale"
                            />
                        </div>
                        <div className="border-2 border-black overflow-hidden">
                            <Image
                                src="/images/projects/ecoprism/Draft Phase (1).webp"
                                alt="User flow diagram"
                                width={600}
                                height={400}
                                className="w-full h-auto grayscale"
                            />
                        </div>
                    </div>

                    <div className="mt-12 bg-gray-50 border-2 border-black p-8">
                        <h3 className="text-2xl font-grotesk font-bold text-black mb-4">
                            Strategic Decisions
                        </h3>
                        <ul className="space-y-3 font-inter text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-black">→</span>
                                <span>Simplified onboarding to 3 steps for faster user adoption</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-black">→</span>
                                <span>Created role-based dashboards for different user types</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-black">→</span>
                                <span>Designed a unified navigation system for easy data access</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ideation;


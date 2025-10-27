'use client';

import React from 'react';
import Image from 'next/image';

const Ideation: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-8">
                        Ideation & User Flows
                    </h2>

                    <p className="text-xl font-inter text-gray-700 leading-relaxed mb-12">
                        I mapped out two distinct user journeys: one for customers booking and tracking
                        repairs, and another for shop owners managing operations.
                    </p>

                    {/* Solution Image */}
                    <div className="border-4 border-black overflow-hidden mb-12 bg-gray-100">
                        <Image
                            src="/images/projects/Arreglio/arreglio-solution.webp"
                            alt="Arreglio solution approach"
                            width={1200}
                            height={600}
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Key Decisions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 border-2 border-black p-8">
                            <h3 className="text-2xl font-grotesk font-bold text-black mb-4">
                                Customer Flow
                            </h3>
                            <ul className="space-y-3 font-inter text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="text-black">01</span>
                                    <span>Easy booking with vehicle details</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-black">02</span>
                                    <span>Real-time status updates</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-black">03</span>
                                    <span>Transparent cost breakdowns</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-black">04</span>
                                    <span>Digital payment options</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-black text-white p-8">
                            <h3 className="text-2xl font-grotesk font-bold mb-4">
                                Shop Owner Flow
                            </h3>
                            <ul className="space-y-3 font-inter">
                                <li className="flex items-start gap-3">
                                    <span>01</span>
                                    <span>Dashboard with all active jobs</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span>02</span>
                                    <span>Quick job status updates</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span>03</span>
                                    <span>Inventory management</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span>04</span>
                                    <span>Customer communication tools</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ideation;


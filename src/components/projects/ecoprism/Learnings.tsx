'use client';

import React from 'react';

const Learnings: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-8 sm:mb-12">
                        Learnings & Reflection
                    </h2>

                    <div className="space-y-6 sm:space-y-8">
                        <div className="bg-white p-8 rounded-[6px] shadow-card">
                            <h3 className="text-2xl font-grotesk font-bold text-black mb-4">
                                What I Learned
                            </h3>
                            <ul className="space-y-4 font-inter text-gray-700 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-black">→</span>
                                    <span>
                                        <strong>Enterprise complexity requires patience:</strong> Working with ESG data
                                        taught me to break down overwhelming complexity into manageable steps.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-black">→</span>
                                    <span>
                                        <strong>Users are your best guides:</strong> Regular testing revealed insights
                                        I never would have discovered through assumptions alone.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-black">→</span>
                                    <span>
                                        <strong>Design systems scale design:</strong> Building reusable components
                                        early saved countless hours during iteration.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-black text-white p-8 rounded-[6px] shadow-card">
                            <h3 className="text-2xl font-grotesk font-bold mb-4">
                                What I&apos;d Do Differently
                            </h3>
                            <p className="font-inter text-lg leading-relaxed">
                                If I could start over, I&apos;d involve developers earlier in the wireframing stage
                                to identify technical constraints sooner. I&apos;d also run more frequent micro-tests
                                throughout the process rather than waiting for complete features.
                            </p>
                        </div>

                        <div className="p-8 rounded-[6px] shadow-card">
                            <h3 className="text-2xl font-grotesk font-bold text-black mb-4">
                                Future Improvements
                            </h3>
                            <p className="font-inter text-gray-700 text-lg leading-relaxed">
                                Moving forward, I&apos;d love to explore AI-powered insights that help users
                                interpret their ESG data and suggest actions. Additionally, mobile optimization
                                would make the platform accessible for field teams.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Learnings;


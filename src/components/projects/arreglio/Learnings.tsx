'use client';

import React from 'react';

const Learnings: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-12">
                        Key Learnings
                    </h2>

                    <div className="space-y-8">
                        <div className="bg-white border-2 border-black p-8">
                            <h3 className="text-2xl font-grotesk font-bold text-black mb-4">
                                What I Learned
                            </h3>
                            <ul className="space-y-4 font-inter text-gray-700 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-black">→</span>
                                    <span>
                                        <strong>Context is everything:</strong> Spending time in actual workshops
                                        revealed pain points that interviews alone never would have uncovered.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-black">→</span>
                                    <span>
                                        <strong>Simplicity sells:</strong> The simpler the interface, the faster
                                        the adoption—especially for non-tech users.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-black">→</span>
                                    <span>
                                        <strong>Build trust early:</strong> Transparent pricing and clear communication
                                        were key to user confidence.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-black text-white p-8">
                            <h3 className="text-2xl font-grotesk font-bold mb-4">
                                What I&apos;d Do Differently
                            </h3>
                            <p className="font-inter text-lg leading-relaxed">
                                I would have involved workshop owners earlier in the wireframing stage as
                                co-designers. Their practical insights could have saved time during iteration.
                                I&apos;d also test with more diverse workshop sizes to ensure scalability.
                            </p>
                        </div>

                        <div className="border-2 border-black p-8">
                            <h3 className="text-2xl font-grotesk font-bold text-black mb-4">
                                Next Steps
                            </h3>
                            <p className="font-inter text-gray-700 text-lg leading-relaxed">
                                Future iterations would include automated parts ordering, integration with
                                supplier systems, and predictive maintenance reminders for customers.
                                Voice-based status updates could also help busy shop owners.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Learnings;


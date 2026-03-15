'use client';

import React from 'react';
import { Clock, Calendar, ClipboardList } from 'lucide-react';

const RecognitionGap: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section label */}
                    <div className="border-t border-gray-200 pt-4 mb-2">
                        <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-4">
                            01 — THE PROBLEM SPACE
                        </p>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-grotesk font-bold text-black mb-4">
                        The Recognition Gap in Modern Organizations
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl leading-relaxed mb-12">
                        Employees contribute across multiple tools, conversations, and collaborative efforts every day. However, only a small portion of this work becomes visible in performance reviews or recognition systems.
                    </p>

                    {/* Two columns: left = 2 stacked cards, right = 1 reasons card */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left column: Visible Work + Invisible Work */}
                        <div className="flex flex-col gap-6">
                            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                                <p className="text-sm uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-4">
                                    Visible Work
                                </p>
                                <p className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-5">
                                    20%
                                </p>
                                <p className="text-base font-inter text-gray-600 leading-relaxed">
                                    Deliverables, KPIs, and measurable outputs that surface naturally during formal reviews.
                                </p>
                            </div>
                            <div className="bg-black text-white rounded-xl p-6">
                                <p className="text-sm uppercase tracking-wider text-gray-300 font-grotesk font-bold mb-4">
                                    Invisible Work
                                </p>
                                <p className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-5">
                                    80%
                                </p>
                                <p className="text-base font-inter text-white leading-relaxed">
                                    Collaboration, mentoring, knowledge sharing, issue solving, and proactive ownership.
                                </p>
                            </div>
                        </div>

                        {/* Right column: Why organizations recognize only the visible layer */}
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col">
                            <h3 className="text-2xl font-grotesk font-bold text-black mb-6 leading-snug">
                                Why organizations recognize only the visible layer
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black">
                                        <Clock className="w-5 h-5" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-grotesk font-bold text-black mb-1">Manager memory</h4>
                                        <p className="text-[15px] font-inter text-gray-600 leading-relaxed">
                                            Recognition depends on recall, which breaks once teams scale and daily contributions multiply.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black">
                                        <Calendar className="w-5 h-5" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-grotesk font-bold text-black mb-1">Formal review cycles</h4>
                                        <p className="text-[15px] font-inter text-gray-600 leading-relaxed">
                                            Quarterly and annual check-ins flatten nuanced contributions into a few retrospective talking points.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black">
                                        <ClipboardList className="w-5 h-5" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-grotesk font-bold text-black mb-1">Measurable task outputs</h4>
                                        <p className="text-[15px] font-inter text-gray-600 leading-relaxed">
                                            Legacy systems reward what can be counted, not what actually keeps teams moving forward.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecognitionGap;

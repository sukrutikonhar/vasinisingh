'use client';

import React from 'react';

export default function WorkMarkUserTesting() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-grotesk font-bold mb-4">USER TESTING & FEEDBACK</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-6">User Testing & Feedback</h2>
                    <p className="text-base font-inter text-gray-600 mb-12 max-w-3xl leading-relaxed">
                        Descriptive text for user testing and feedback goes here.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
                        <div>
                            <h3 className="text-sm font-grotesk font-bold uppercase tracking-wider text-black mb-4">TESTING METHODOLOGY</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm font-inter text-gray-600"><span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />Testing methodology item one</li>
                                <li className="flex items-start gap-2 text-sm font-inter text-gray-600"><span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />Testing methodology item two</li>
                                <li className="flex items-start gap-2 text-sm font-inter text-gray-600"><span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />Testing methodology item three</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-grotesk font-bold uppercase tracking-wider text-black mb-4">KEY FINDINGS</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm font-inter text-gray-600"><span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />Key finding one</li>
                                <li className="flex items-start gap-2 text-sm font-inter text-gray-600"><span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />Key finding two</li>
                                <li className="flex items-start gap-2 text-sm font-inter text-gray-600"><span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />Key finding three</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg flex items-center justify-center min-h-[320px]">
                        <p className="text-gray-400 text-sm font-inter">User testing / feedback image placeholder</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

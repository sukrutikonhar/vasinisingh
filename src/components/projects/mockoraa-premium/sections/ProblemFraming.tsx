'use client';

import React, { useEffect, useState, useRef } from 'react';

const ProblemFraming: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
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

    return (
        <section ref={sectionRef} className="py-32 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-8">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-5xl font-bold mb-8">Not a Knowledge Gap — A Performance Gap</h2>
                    <p className="text-xl text-gray-300 mb-16 max-w-3xl">
                        Root cause analysis revealed the true nature of interview anxiety and preparation ineffectiveness.
                    </p>

                    {/* Problem Mapping Diagram */}
                    <div className="bg-gray-900 rounded-2xl p-12 border border-gray-800 mb-16">
                        <div className="aspect-[2/1] bg-gray-800 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-gray-400 mb-2">[Diagram Placeholder]</div>
                                <div className="text-sm text-gray-500">Problem Mapping Framework</div>
                            </div>
                        </div>
                    </div>

                    {/* Root Causes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl">🚫</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Generic AI Tools</h3>
                            <p className="text-gray-400">One-size-fits-all approach fails individual needs</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl">📄</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">No JD Embedding</h3>
                            <p className="text-gray-400">Questions lack role-specific context</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl">📊</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">No Behavioral Scoring</h3>
                            <p className="text-gray-400">Performance metrics remain unmeasured</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl">🔄</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">No Improvement Loop</h3>
                            <p className="text-gray-400">Users lack structured growth path</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemFraming;
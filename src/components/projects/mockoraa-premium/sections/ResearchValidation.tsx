'use client';

import React, { useEffect, useState, useRef } from 'react';

const ResearchValidation: React.FC = () => {
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
        <section ref={sectionRef} id="research" className="py-32 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-8">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-5xl font-bold mb-8">Evidence-Driven Design Decisions</h2>
                    <p className="text-xl text-gray-300 mb-16 max-w-3xl">
                        Rigorous testing methodology proving insight → design change → measurable outcome loop.
                    </p>

                    {/* Research Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">6</div>
                            <div className="text-gray-400">Moderated Testing</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">51</div>
                            <div className="text-gray-400">Maze Testing</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">3</div>
                            <div className="text-gray-400">Iterations</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">81</div>
                            <div className="text-gray-400">Final SUS Score</div>
                        </div>
                    </div>

                    {/* Research Visuals */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                            <h3 className="text-xl font-semibold mb-4">Maze Heatmap</h3>
                            <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-gray-400 mb-2">[Image Placeholder]</div>
                                    <div className="text-sm text-gray-500">Maze Heatmap</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                            <h3 className="text-xl font-semibold mb-4">Iteration Performance</h3>
                            <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-gray-400 mb-2">[Chart Placeholder]</div>
                                    <div className="text-sm text-gray-500">Time on Task Line Graph</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                            <h3 className="text-xl font-semibold mb-4">Completion Rate Growth</h3>
                            <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-gray-400 mb-2">[Infographic]</div>
                                    <div className="text-sm text-gray-500">Completion Rate Growth</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResearchValidation;
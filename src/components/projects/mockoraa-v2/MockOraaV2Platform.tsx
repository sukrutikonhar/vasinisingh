'use client';

import { useEffect, useRef, useState } from 'react';

export default function MockOraaV2Platform() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState('img-avatar');
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            id: 'img-avatar',
            number: '01',
            title: 'AI Avatar Interview',
            description: 'Dynamic questioning, Natural tone synthesis, Context aware interaction.',
            uxFocus: 'UX Focus: Distraction free interface'
        },
        {
            id: 'img-feedback',
            number: '02',
            title: 'Live Feedback Overlay',
            description: 'Non intrusive pace alerts, Filler detection, Clarity indicators during speech.',
            uxFocus: 'UX Focus: Real time insight without cognitive overload'
        },
        {
            id: 'img-dashboard',
            number: '03',
            title: 'Post Session Dashboard',
            description: 'Structured scoring, Strength breakdown, Improvement roadmap with actionable steps.',
            uxFocus: 'UX Focus: Scannable layout & Progress motivation'
        }
    ];

    const renderMockup = () => {
        switch (activeFeature) {
            case 'img-avatar':
                return (
                    <div className="flex flex-col items-center justify-center h-full">
                        <div className="w-24 h-24 bg-gray-600 rounded-full mb-4"></div>
                        <div className="flex gap-1 mb-4">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-1 bg-green-400 rounded-full animate-pulse" style={{ height: Math.random() * 20 + 10 }}></div>
                            ))}
                        </div>
                        <div className="text-center text-gray-600 text-sm">AI Avatar Speaking...</div>
                    </div>
                );
            case 'img-feedback':
                return (
                    <div className="p-4">
                        <div className="bg-yellow-100 border-l-4 border-yellow-400 p-3 mb-3 text-sm">
                            <div className="font-medium text-yellow-800">Pace Alert</div>
                            <div className="text-yellow-700">Speaking a bit fast - try slowing down</div>
                        </div>
                        <div className="bg-blue-100 border-l-4 border-blue-400 p-3 mb-3 text-sm">
                            <div className="font-medium text-blue-800">Clarity Score: 85%</div>
                            <div className="text-blue-700">Good articulation</div>
                        </div>
                        <div className="bg-green-100 border-l-4 border-green-400 p-3 text-sm">
                            <div className="font-medium text-green-800">Confidence Level: High</div>
                        </div>
                    </div>
                );
            case 'img-dashboard':
                return (
                    <div className="p-4 space-y-4">
                        <div className="text-center mb-4">
                            <div className="text-2xl font-bold text-green-600">78/100</div>
                            <div className="text-sm text-gray-600">Overall Score</div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Technical Knowledge</span>
                                <div className="w-20 bg-gray-200 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Communication</span>
                                <div className="w-20 bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full w-3/5"></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Confidence</span>
                                <div className="w-20 bg-gray-200 rounded-full h-2">
                                    <div className="bg-purple-500 h-2 rounded-full w-4/5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section ref={sectionRef} className="py-24 bg-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-5xl font-semibold text-center mb-16 tracking-tight">
                    From Simulation to Scalable Platform
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Feature List */}
                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <div 
                                key={feature.id}
                                className={`cursor-pointer p-6 rounded-lg transition-all duration-300 ${
                                    activeFeature === feature.id 
                                        ? 'bg-white text-black' 
                                        : 'hover:bg-white/5'
                                } ${isVisible ? `opacity-100 translate-y-0 delay-${index * 100}` : 'opacity-0 translate-y-8'}`}
                                onClick={() => setActiveFeature(feature.id)}
                            >
                                <h3 className="text-xl font-semibold mb-2">
                                    {feature.number}. {feature.title}
                                </h3>
                                <p className="mb-3 opacity-80">{feature.description}</p>
                                <div className="text-sm font-medium opacity-70">
                                    {feature.uxFocus}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Screen Mockup */}
                    <div className={`transition-all duration-1000 delay-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                            {/* Screen Header */}
                            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            </div>
                            
                            {/* Screen Content */}
                            <div className="h-80 bg-white text-black">
                                {renderMockup()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
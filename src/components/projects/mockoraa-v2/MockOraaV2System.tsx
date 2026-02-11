'use client';

import { useEffect, useRef, useState } from 'react';

export default function MockOraaV2System() {
    const [isVisible, setIsVisible] = useState(false);
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

    const systemNodes = [
        {
            icon: '⚡',
            title: 'Realtime Engine',
            description: 'WebRTC Streaming'
        },
        {
            icon: '🧠',
            title: 'Intelligence Engine',
            description: 'LLM Context & RAG'
        },
        {
            icon: '📊',
            title: 'Instrumentation',
            description: 'Scoring & User Data'
        }
    ];

    return (
        <section ref={sectionRef} className="py-24">
            <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-5xl font-semibold mb-8 tracking-tight">
                    System Level Design Thinking
                </h2>
                
                <p className="text-xl mb-12 max-w-2xl leading-relaxed">
                    MockOraa required AI systems understanding beyond UI. We mapped the data flow to ensure 
                    real-time latency was minimized.
                </p>
                
                <div className={`flex flex-col lg:flex-row justify-center items-center gap-8 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    {systemNodes.map((node, index) => (
                        <div key={index} className="flex flex-col lg:flex-row items-center">
                            <div className="text-center p-8 bg-gray-50 rounded-lg min-w-[200px]">
                                <div className="text-4xl mb-4">{node.icon}</div>
                                <h4 className="text-xl font-semibold mb-2">{node.title}</h4>
                                <p className="text-gray-600">{node.description}</p>
                            </div>
                            
                            {index < systemNodes.length - 1 && (
                                <div className="text-3xl text-gray-400 mx-4 transform lg:rotate-0 rotate-90 my-4 lg:my-0">
                                    →
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
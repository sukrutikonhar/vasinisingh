'use client';

import { useEffect, useRef, useState } from 'react';

export default function MockOraaV2Summary() {
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

    return (
        <section ref={sectionRef} id="summary" className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-12">Executive Summary</h2>
                
                    <div className={`max-w-4xl transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        <p className="text-xl sm:text-2xl font-grotesk font-bold text-black mb-8">
                            MockOraa addresses a critical gap in modern hiring.
                        </p>
                        
                        <p className="text-base sm:text-lg font-inter text-gray-700 mb-6 leading-relaxed">
                            While hiring processes have adopted AI screening and automation, preparation remains passive, 
                            generic, and emotionally disconnected.
                        </p>
                        
                        <p className="text-base sm:text-lg font-inter text-gray-700 mb-6 leading-relaxed">
                            Candidates struggle not because they lack knowledge, but because they lack:
                        </p>
                        
                        <ul className="text-base font-inter text-gray-700 mb-8 ml-6 space-y-2">
                            <li className="list-disc">Realistic simulation</li>
                            <li className="list-disc">Structured feedback</li>
                            <li className="list-disc">Role-specific clarity</li>
                            <li className="list-disc">Psychological safety</li>
                        </ul>
                        
                        <div className="bg-gray-50 p-6 sm:p-8 border-l-4 border-black rounded-r-lg">
                            <p className="text-base sm:text-lg font-inter text-gray-700 leading-relaxed">
                                MockOraa bridges this gap by combining AI simulation, JD embedding, real-time 
                                behavioral analytics, and improvement roadmaps into one integrated platform.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
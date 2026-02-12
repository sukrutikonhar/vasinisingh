'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Users, UserX, AlertCircle, TrendingDown } from 'lucide-react';

const ProblemSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedStats, setAnimatedStats] = useState({ stat1: 0, stat2: 0, stat3: 0, stat4: 0 });
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    animateStats();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const animateStats = () => {
        const duration = 2000;
        const steps = 60;
        const stepTime = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            
            setAnimatedStats({
                stat1: Math.floor(92 * progress),
                stat2: Math.floor(72 * progress),
                stat3: Math.floor(67 * progress),
                stat4: Math.floor(74 * progress)
            });

            if (step >= steps) {
                clearInterval(timer);
                setAnimatedStats({ stat1: 92, stat2: 72, stat3: 67, stat4: 74 });
            }
        }, stepTime);
    };

    const hiddenCosts = [
        {
            icon: Users,
            title: "Talent filtered unfairly",
            description: "Qualified candidates eliminated due to performance anxiety"
        },
        {
            icon: UserX,
            title: "Career gap professionals excluded",
            description: "Returning mothers and career shifters undervalued"
        },
        {
            icon: TrendingDown,
            title: "Employers receive underperforming candidates",
            description: "Hiring decisions based on interview performance, not capability"
        },
        {
            icon: AlertCircle,
            title: "Diverse talent overlooked",
            description: "Cultural and communication differences penalized"
        }
    ];

    return (
        <section ref={sectionRef} id="problem" className="py-32 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-8">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-5xl font-bold mb-8">The Confidence Gap in Modern Hiring</h2>
                    <p className="text-xl text-gray-300 mb-16 max-w-3xl">
                        Data-backed evidence reveals a systematic problem affecting millions of job seekers worldwide.
                    </p>

                    {/* Statistics Bar Chart */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                            <div className="text-4xl font-bold mb-2">{animatedStats.stat1}%</div>
                            <div className="text-gray-400 text-sm mb-4">face interview anxiety</div>
                            <div className="w-full bg-gray-800 rounded-full h-2">
                                <div 
                                    className="bg-white h-2 rounded-full transition-all duration-2000"
                                    style={{ width: `${animatedStats.stat1}%` }}
                                />
                            </div>
                        </div>
                        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                            <div className="text-4xl font-bold mb-2">{animatedStats.stat2}%</div>
                            <div className="text-gray-400 text-sm mb-4">feel underprepared</div>
                            <div className="w-full bg-gray-800 rounded-full h-2">
                                <div 
                                    className="bg-white h-2 rounded-full transition-all duration-2000"
                                    style={{ width: `${animatedStats.stat2}%` }}
                                />
                            </div>
                        </div>
                        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                            <div className="text-4xl font-bold mb-2">{animatedStats.stat3}%</div>
                            <div className="text-gray-400 text-sm mb-4">don&apos;t know how to improve</div>
                            <div className="w-full bg-gray-800 rounded-full h-2">
                                <div 
                                    className="bg-white h-2 rounded-full transition-all duration-2000"
                                    style={{ width: `${animatedStats.stat3}%` }}
                                />
                            </div>
                        </div>
                        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                            <div className="text-4xl font-bold mb-2">{animatedStats.stat4}%</div>
                            <div className="text-gray-400 text-sm mb-4">never experienced realistic mock interviews</div>
                            <div className="w-full bg-gray-800 rounded-full h-2">
                                <div 
                                    className="bg-white h-2 rounded-full transition-all duration-2000"
                                    style={{ width: `${animatedStats.stat4}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Chart Placeholder */}
                    <div className="mb-20">
                        <div className="bg-gray-900 rounded-2xl p-12 border border-gray-800">
                            <div className="aspect-[2/1] bg-gray-800 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-gray-400 mb-2">[Chart Placeholder]</div>
                                    <div className="text-sm text-gray-500">Interview Preparedness Stats</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hidden Cost Cards */}
                    <div>
                        <h3 className="text-3xl font-bold mb-12 text-center">Hidden Cost to Organizations</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {hiddenCosts.map((cost, index) => (
                                <div key={index} className={`bg-gray-900/50 p-8 rounded-2xl border border-gray-800 transition-all duration-1000 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                    <cost.icon className="w-8 h-8 text-gray-400 mb-4" />
                                    <h4 className="text-xl font-semibold mb-3">{cost.title}</h4>
                                    <p className="text-gray-400">{cost.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
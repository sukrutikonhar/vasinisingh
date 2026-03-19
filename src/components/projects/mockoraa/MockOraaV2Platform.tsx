'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Video, TrendingUp, Heart, User, Shield } from 'lucide-react';

const solutions = [
    {
        title: 'AI Powered Mock Interviews',
        challenge: '92% of candidates face interview anxiety and lack realistic practice environments.',
        solution: 'AI powered mock interviews simulate role specific conversations with adaptive questioning and real time feedback.',
        result: 'Users gain realistic interview exposure, helping reduce anxiety and improve interview readiness.',
        icon: Video,
        image: '/images/projects/mockoraa/mockoraa-02.webp',
    },
    {
        title: 'Progress Tracking & Readiness Score',
        challenge: 'Users struggle to understand whether their interview preparation is improving.',
        solution: 'A performance dashboard tracks session results and generates an interview readiness score.',
        result: 'Users clearly track progress over time, leading to higher engagement and consistent preparation.',
        icon: TrendingUp,
        image: '/images/projects/mockoraa/mockoraa-03.webp',
    },
    {
        title: 'Role Based Interview Preparation',
        challenge: 'Generic interview tools fail to prepare candidates for role specific interview scenarios.',
        solution: 'Structured interview paths tailored for fresher, mid level, and experienced roles.',
        result: 'Role confusion reduced by 40% and users practiced more relevant interview scenarios.',
        icon: User,
        image: '/images/projects/mockoraa/mockoraa-05.webp',
    },
    {
        title: 'Confidence Focused Feedback',
        challenge: 'Traditional feedback focuses only on answers rather than communication confidence.',
        solution: 'Supportive feedback that highlights strengths and provides actionable improvement tips.',
        result: 'Users reported higher clarity and achieved a CSAT score of 4.4/5 during testing.',
        icon: Heart,
        image: '/images/projects/mockoraa/mockoraa-03.webp',
    },
    {
        title: 'Safe Practice Environment',
        challenge: 'Fear of failure prevents many candidates from practicing interviews frequently.',
        solution: 'A private mock interview environment with replay and self review capabilities.',
        result: 'Practice sessions increased and task completion rates improved by 32% after design iterations.',
        icon: Shield,
        image: '/images/projects/mockoraa/mockoraa-01.webp',
    },
];

export default function MockOraaV2Platform() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 sm:mb-20 text-center">
                        <p className="text-xs uppercase tracking-widest text-gray-500 font-grotesk font-bold mb-4">07. The solution</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4">
                            The Core Experience
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Every pixel is optimized to balance realism with safety. The UI gets out of the way, allowing the conversation to take center stage.
                        </p>
                    </div>

                    <div className="relative">
                        {solutions.map((solution, index) => (
                            <div
                                key={index}
                                className={`lg:sticky lg:top-20 mb-8 sm:mb-12 last:mb-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ zIndex: index + 1, transitionDelay: `${index * 80}ms` }}
                            >
                                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8 md:p-12 border border-gray-200 hover:shadow-2xl transition-shadow">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                                        <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                            <div className="mb-4">
                                                {(() => {
                                                    const Icon = solution.icon;
                                                    return <Icon className="w-8 sm:w-10 h-8 sm:h-10 text-black" />;
                                                })()}
                                            </div>
                                            <h3 className="text-xl sm:text-2xl md:text-3xl font-grotesk font-bold text-black mb-5 sm:mb-6">
                                                {solution.title}
                                            </h3>
                                            <div className="space-y-4 sm:space-y-5">
                                                <div>
                                                    <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-red-500 mb-1">Challenge</p>
                                                    <p className="text-sm sm:text-base font-inter text-gray-700 leading-relaxed">{solution.challenge}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-500 mb-1">Solution</p>
                                                    <p className="text-sm sm:text-base font-inter text-gray-700 leading-relaxed">{solution.solution}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-green-500 mb-1">Result</p>
                                                    <p className="text-sm sm:text-base font-inter text-gray-700 leading-relaxed">{solution.result}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden">
                                                <Image
                                                    src={solution.image}
                                                    alt={solution.title}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="hidden lg:block h-[50vh]" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client';

import React from 'react';
import Image from 'next/image';
import { Video, TrendingUp, Heart, User, Shield } from 'lucide-react';

const Solutions: React.FC = () => {
    const solutions = [
        {
            title: 'AI Powered Mock Interviews',
            description: 'Simulated interview sessions tailored to roles and experience levels, creating realistic practice environments.',
            features: [
                'Role specific interview scenarios',
                'Real time AI driven feedback on confidence and clarity',
                'Adaptive question flow based on user responses'
            ],
            icon: Video,
            image: '/images/projects/mockoraa/mockoraa-02.webp'
        },
        {
            title: 'Progress Tracking & Readiness Score',
            description: 'A simple way for users to see growth over time and understand interview readiness at a glance.',
            features: [
                'Session wise performance tracking',
                'Readiness score based on consistency and improvement',
                'Visual progress indicators'
            ],
            icon: TrendingUp,
            image: '/images/projects/mockoraa/mockoraa-03.webp'
        },
        {
            title: 'Role Based Interview Preparation',
            description: 'Structured preparation paths tailored to specific roles and seniority levels.',
            features: [
                'Fresher, mid level, and senior role tracks',
                'Technical and behavioural interview formats',
                'Company style interview simulations'
            ],
            icon: User,
            image: '/images/projects/mockoraa/mockoraa-05.webp'
        },
        {
            title: 'Confidence Focused Feedback',
            description: 'Clear, empathetic feedback that highlights strengths before pointing out improvements, helping users build confidence gradually.',
            features: [
                'Confidence and communication insights',
                'Actionable improvement suggestions',
                'Supportive and non judgmental tone'
            ],
            icon: Heart,
            image: '/images/projects/mockoraa/mockoraa-03.webp'
        },
        {
            title: 'Safe Practice Environment',
            description: 'A private space that encourages experimentation without fear of failure or judgment.',
            features: [
                'Practice without peer or interviewer pressure',
                'Replay and self review responses',
                'Stress free, repeatable sessions'
            ],
            icon: Shield,
            image: '/images/projects/mockoraa/mockoraa-01.webp'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-20 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4">
                            Few Design Solutions
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            A comprehensive platform that transforms interview preparation into clear, actionable insights
                        </p>
                    </div>

                    {/* Solutions with Sticky Scroll */}
                    <div className="relative">
                        {solutions.map((solution, index) => (
                            <div
                                key={index}
                                className="sticky top-20 mb-8 last:mb-0"
                                style={{ zIndex: index + 1 }}
                            >
                                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                                        {/* Content */}
                                        <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                            <div className="mb-4">
                                                {React.createElement(solution.icon, {
                                                    className: "w-10 h-10 text-black"
                                                })}
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-black mb-4">
                                                {solution.title}
                                            </h3>
                                            <p className="text-base sm:text-lg font-inter text-gray-700 leading-relaxed mb-4">
                                                {solution.description}
                                            </p>
                                            <ul className="space-y-2">
                                                {solution.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm sm:text-base font-inter text-gray-700">
                                                        <span className="text-black font-bold mt-1">•</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Image */}
                                        <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                            <div className="relative w-full h-[350px] sm:h-[450px] bg-gray-100 rounded-xl overflow-hidden">
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
                        {/* Spacer to allow last card to stick */}
                        <div className="h-[50vh]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;


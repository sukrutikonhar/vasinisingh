'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Target, Users, Award, Sparkles, Heart, UserCircle, FileText } from 'lucide-react';

const ExperienceEducation: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const experience = [
        {
            title: 'Product Designer — Arreglio',
            period: 'Oct 2024 – Present',
            description: 'Leading UX strategy for a multi-service SaaS (B2B & B2C) platform. Designed reusable UI components and improved user engagement, achieving a 20%+ rise in adoption through feedback-driven iterations.',
            icon: Briefcase
        },
        {
            title: 'Product Designer — ecoPRISM',
            period: 'Mar 2023 – Present',
            description: 'Spearheading end-to-end design for an ESG SaaS platform. Built 10+ core features, a scalable design system, and enhanced usability recognized for its intuitive experience.',
            icon: Target
        },
        {
            title: 'Senior UI/UX Designer — Acumant',
            period: 'May 2024 – Jul 2025',
            description: 'Designed enterprise-level SaaS products integrating AI-driven workflows and design systems to enhance product scalability and usability.',
            icon: Users
        },
        {
            title: 'UI/UX Designer — Acumant',
            period: 'Nov 2022 – Apr 2024',
            description: 'Contributed to digital transformation projects with a focus on accessibility, user research, and responsive web design across B2B applications.',
            icon: Award
        },
        {
            title: 'UI/UX Designer — Bizmeth Solutions',
            period: 'Jun 2018 – Oct 2022',
            description: 'Delivered user-centered web and mobile designs for multiple clients. Improved usability and visual consistency through research, testing, and iterative prototyping.',
            icon: Briefcase
        },
        {
            title: 'Intern (Design Generalist) — Bizmeth Solutions',
            period: 'Mar 2018 – May 2018',
            description: 'Explored multiple design domains including UI, motion, and brand communication.',
            icon: Sparkles
        },
        {
            title: 'POSH Member — Chhanv Foundation',
            period: 'Aug 2019 – Present',
            description: 'Ensuring workplace inclusivity and awareness through POSH policy training and fair redressal processes within an NGO supporting acid attack survivors.',
            icon: Heart
        },
        {
            title: 'Community Manager — Chhanv Foundation',
            period: 'May 2015 – Feb 2018',
            description: 'Led communication, outreach, and digital engagement programs to strengthen community advocacy and awareness initiatives.',
            icon: UserCircle
        },
        {
            title: 'Senior Back Office Executive — Skung Commxperts Ltd',
            period: 'Feb 2011 – Apr 2015',
            description: 'Managed operational workflows and client coordination within the financial services domain.',
            icon: FileText
        },
        {
            title: 'Back Office Executive — Chuknoo Securities Ltd',
            period: 'Jan 2010 – Jan 2011',
            description: 'Handled back-office operations and trade processing in the broking industry.',
            icon: FileText
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const cards = container.querySelectorAll('[data-experience-card]');

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const cardCenter = rect.top + rect.height / 2;

                // Check if card is in the center third of viewport
                if (cardCenter > windowHeight * 0.3 && cardCenter < windowHeight * 0.7) {
                    setActiveIndex(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="py-16 sm:py-24 md:py-32 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-7xl mx-auto" ref={containerRef}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Side - Fixed Title */}
                        <div className="sticky top-32 h-fit">
                            <div className="bg-gray-100 rounded-full w-fit px-4 py-2 mb-6">
                                <span className="text-xs sm:text-sm font-grotesk font-medium uppercase tracking-wider">
                                    Experience
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-grotesk font-bold text-black mb-6">
                                Shaping<br />Products Through<br />Design
                            </h2>
                            <p className="text-base sm:text-lg font-inter text-gray-700 leading-relaxed">
                                From backend operations to community management, my journey into product design has been about understanding people, building trust, and creating meaningful digital experiences.
                            </p>
                        </div>

                        {/* Right Side - Scrollable Cards */}
                        <div className="space-y-6">
                            {experience.map((item, index) => (
                                <div
                                    key={index}
                                    data-experience-card
                                    className={`bg-white rounded-[6px] shadow-card p-6 sm:p-8 transition-all duration-500 ${activeIndex === index
                                        ? 'border-2 border-gray-800 scale-[1.02]'
                                        : 'border border-gray-200 opacity-60'
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                            {React.createElement(item.icon, {
                                                className: "w-6 h-6 sm:w-7 sm:h-7 text-white"
                                            })}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-black mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm sm:text-base font-inter font-semibold text-gray-700 mb-3">
                                                {item.period}
                                            </p>
                                            <p className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed mb-0">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceEducation;


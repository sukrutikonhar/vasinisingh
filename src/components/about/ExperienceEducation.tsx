'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Building2, Heart, FileText } from 'lucide-react';

interface Role {
    title: string;
    period: string;
    description: string;
    isProduct?: boolean;
}

interface Company {
    name: string;
    period: string;
    roles: Role[];
    icon: React.ElementType;
}

const ExperienceEducation: React.FC = () => {
    const [activeCompany, setActiveCompany] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isInView, setIsInView] = useState(false);

    const companies: Company[] = [
        {
            name: 'Acumant',
            period: 'Nov 2022 – Present',
            icon: Building2,
            roles: [
                {
                    title: 'Senior UI/UX Designer',
                    period: 'May 2024 – Jul 2025',
                    description: 'Designed enterprise-level SaaS products integrating AI-driven workflows and design systems to enhance product scalability and usability.',
                },
                {
                    title: 'UI/UX Designer',
                    period: 'Nov 2022 – Apr 2024',
                    description: 'Contributed to digital transformation projects with a focus on accessibility, user research, and responsive web design across B2B applications.',
                },
                {
                    title: 'Product Designer — Arreglio',
                    period: 'Oct 2024 – Present',
                    description: 'Leading UX strategy for a multi-service SaaS (B2B & B2C) platform. Designed reusable UI components and improved user engagement, achieving a 20%+ rise in adoption through feedback-driven iterations.',
                    isProduct: true,
                },
                {
                    title: 'Product Designer — ecoPRISM',
                    period: 'Mar 2023 – Present',
                    description: 'Spearheading end-to-end design for an ESG SaaS platform. Built 10+ core features, a scalable design system, and enhanced usability recognized for its intuitive experience.',
                    isProduct: true,
                }
            ]
        },
        {
            name: 'Bizmeth Solutions',
            period: 'Mar 2018 – Oct 2022',
            icon: Briefcase,
            roles: [
                {
                    title: 'UI/UX Designer',
                    period: 'Jun 2018 – Oct 2022',
                    description: 'Delivered user-centered web and mobile designs for multiple clients. Improved usability and visual consistency through research, testing, and iterative prototyping.',
                },
                {
                    title: 'Intern (Design Generalist)',
                    period: 'Mar 2018 – May 2018',
                    description: 'Explored multiple design domains including UI, motion, and brand communication.',
                }
            ]
        },
        {
            name: 'Chhanv Foundation',
            period: 'May 2015 – Present',
            icon: Heart,
            roles: [
                {
                    title: 'POSH Member',
                    period: 'Aug 2019 – Present',
                    description: 'Ensuring workplace inclusivity and awareness through POSH policy training and fair redressal processes within an NGO supporting acid attack survivors.',
                },
                {
                    title: 'Community Manager',
                    period: 'May 2015 – Feb 2018',
                    description: 'Led communication, outreach, and digital engagement programs to strengthen community advocacy and awareness initiatives.',
                }
            ]
        },
        {
            name: 'Skung Commxperts Ltd',
            period: 'Feb 2011 – Apr 2015',
            icon: FileText,
            roles: [
                {
                    title: 'Senior Back Office Executive',
                    period: 'Feb 2011 – Apr 2015',
                    description: 'Managed operational workflows and client coordination within the financial services domain.',
                }
            ]
        },
        {
            name: 'Chuknoo Securities Ltd',
            period: 'Jan 2010 – Jan 2011',
            icon: FileText,
            roles: [
                {
                    title: 'Back Office Executive',
                    period: 'Jan 2010 – Jan 2011',
                    description: 'Handled back-office operations and trade processing in the broking industry.',
                }
            ]
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const rect = container.getBoundingClientRect();
            const containerHeight = container.offsetHeight;
            const windowHeight = window.innerHeight;

            // Check if section is in view
            const inView = rect.top <= 0 && rect.bottom >= windowHeight;
            setIsInView(inView);

            // Calculate scroll progress within the section
            if (inView) {
                const scrolled = -rect.top;
                const totalScroll = containerHeight - windowHeight;
                const progress = Math.min(Math.max(scrolled / totalScroll, 0), 1);
                setScrollProgress(progress);

                // Calculate which company should be active
                const companyIndex = Math.floor(progress * companies.length);
                const clampedIndex = Math.min(companyIndex, companies.length - 1);
                setActiveCompany(clampedIndex);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [companies.length]);

    return (
        <>
            {/* Header - Scrolls Away */}
            <div className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 bg-white">
                <div className="container-custom px-4 sm:px-6 mx-auto text-center">
                    <div className="bg-gray-100 rounded-full w-fit px-4 py-2 mb-4 sm:mb-6 mx-auto">
                        <span className="text-xs sm:text-sm font-grotesk font-medium uppercase tracking-wider">
                            Career Journey
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-grotesk font-bold text-black mb-3 sm:mb-4">
                        Experience & Education
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg font-inter text-gray-600 max-w-2xl mx-auto">
                        15+ years transforming ideas into impactful digital experiences
                    </p>
                </div>
            </div>

            {/* Sticky Scroll Section - Companies Only */}
            <section
                ref={containerRef}
                className="relative bg-white"
                style={{ height: `${companies.length * 50}vh` }}
            >
                <div className="sticky top-0 min-h-screen flex items-center justify-center py-8 sm:py-12">
                    {/* Company Content */}
                    <div className="w-full">
                        <div className="container-custom px-4 sm:px-6 mx-auto">
                            <div className="max-w-7xl mx-auto relative" style={{ minHeight: 'auto' }}>
                                {companies.map((company, companyIndex) => (
                                    <div
                                        key={companyIndex}
                                        className={`transition-all duration-700 ${activeCompany === companyIndex
                                            ? 'opacity-100 translate-y-0 pointer-events-auto block'
                                            : activeCompany > companyIndex
                                                ? 'opacity-0 -translate-y-12 pointer-events-none hidden'
                                                : 'opacity-0 translate-y-12 pointer-events-none hidden'
                                            }`}
                                    >
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                                            {/* Left Side - Company Logo & Info */}
                                            <div className="lg:col-span-4 flex flex-col justify-center">
                                                <div className="flex flex-col items-start">
                                                    {/* Company Icon */}
                                                    <div
                                                        className={`w-20 h-20 sm:w-24 sm:h-24 bg-gray-800 flex items-center justify-center mb-6 transition-all duration-700 ${activeCompany === companyIndex
                                                            ? 'scale-100 rotate-0'
                                                            : 'scale-90 rotate-12'
                                                            }`}
                                                    >
                                                        {React.createElement(company.icon, {
                                                            className: "w-10 h-10 sm:w-12 sm:h-12 text-white"
                                                        })}
                                                    </div>

                                                    {/* Company Name & Period */}
                                                    <div className="mb-8">
                                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-3">
                                                            {company.name}
                                                        </h3>
                                                        <p className="text-sm sm:text-base font-inter font-semibold text-gray-600">
                                                            {company.period}
                                                        </p>
                                                    </div>

                                                    {/* Timeline indicator */}
                                                    <div className="flex items-center gap-2">
                                                        {companies.map((_, idx) => (
                                                            <div
                                                                key={idx}
                                                                className={`h-1 rounded-full transition-all duration-500 ${idx === companyIndex
                                                                    ? 'w-12 bg-gray-800'
                                                                    : idx < companyIndex
                                                                        ? 'w-8 bg-gray-400'
                                                                        : 'w-4 bg-gray-200'
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>

                                                    {/* Scroll indicator */}
                                                    <div className="mt-6 text-xs text-gray-500 font-inter">
                                                        {companyIndex + 1} / {companies.length}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Side - Role Cards */}
                                            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                                {company.roles.map((role, roleIndex) => (
                                                    <div
                                                        key={roleIndex}
                                                        className={`bg-white rounded-[6px] shadow-card p-5 sm:p-6 border border-gray-200 transition-all duration-700 hover:border-gray-800 hover:shadow-xl ${activeCompany === companyIndex
                                                            ? 'opacity-100 translate-y-0'
                                                            : 'opacity-0 translate-y-12'
                                                            }`}
                                                        style={{
                                                            transitionDelay: activeCompany === companyIndex ? `${roleIndex * 100}ms` : '0ms'
                                                        }}
                                                    >
                                                        <div className="flex flex-col gap-2 mb-3">
                                                            <div className="flex items-start justify-between gap-2">
                                                                <h4 className="text-base sm:text-lg font-grotesk font-bold text-black leading-tight">
                                                                    {role.title}
                                                                </h4>
                                                                {role.isProduct && (
                                                                    <span className="inline-block flex-shrink-0 px-2 py-0.5 text-[10px] font-inter font-medium bg-gray-800 text-white rounded-full uppercase tracking-wide">
                                                                        Product
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <p className="text-xs sm:text-sm font-inter font-semibold text-gray-600">
                                                                {role.period}
                                                            </p>
                                                        </div>
                                                        <p className="text-xs sm:text-sm font-inter text-gray-700 leading-relaxed">
                                                            {role.description}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Progress indicator - Fixed at Bottom (Only visible when section is in view) */}
                {isInView && (
                    <div className="fixed bottom-0 left-0 right-0 py-4 px-4 sm:px-6 bg-white/80 backdrop-blur-sm z-10">
                        <div className="container-custom mx-auto">
                            <div className="h-1 bg-gray-200 rounded-full overflow-hidden max-w-md mx-auto">
                                <div
                                    className="h-full bg-gray-800 transition-all duration-300"
                                    style={{ width: `${(scrollProgress * 100)}%` }}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default ExperienceEducation;

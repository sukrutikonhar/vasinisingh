'use client';

import React from 'react';

const ExperienceEducation: React.FC = () => {
    const cards = [
        {
            id: '1',
            period: '2010 — 2011',
            role: 'Back Office Executive',
            company: 'Chuknoo Securities Ltd',
            description: 'Handled trade processing and back office operations within the broking industry.',
            tags: ['Operations', 'Process Management', 'Financial Services'],
        },
        {
            id: '2',
            period: '2011 — 2015',
            role: 'Senior Back Office Executive',
            company: 'Skung CommXperts Ltd',
            description: 'Managed operational workflows and client coordination, improving internal efficiency and process clarity.',
            tags: ['Operations', 'Workflow Management', 'Client Coordination'],
        },
        {
            id: '3',
            period: '2015 — Present',
            role: 'Community Manager & POSH Member',
            company: 'Chhanv Foundation',
            description: 'Contributing to community outreach, advocacy programs, and workplace inclusivity initiatives supporting acid attack survivors.',
            tags: ['Community Impact', 'Advocacy', 'POSH Compliance'],
        },
        {
            id: '4',
            period: '2018 — 2022',
            role: 'UI/UX Designer',
            company: 'Bizmeth Solutions',
            description: 'Designed user centered web and mobile experiences across multiple clients, focusing on research, usability, and responsive design.',
            tags: ['User Research', 'Responsive UX', 'Interaction Design', 'Prototyping'],
        },
        {
            id: '5',
            period: '2022 — Present',
            role: 'UI/UX Designer',
            company: 'Acumant',
            description: 'Worked on enterprise SaaS and B2B platforms, improving product usability through research driven design and accessibility focused solutions.',
            tags: ['Enterprise UX', 'SaaS Products', 'Accessibility', 'Research'],
        },
        {
            id: '6',
            period: '2024 — 2025',
            role: 'Senior UI/UX Designer',
            company: 'Acumant',
            description: 'Designed scalable product experiences integrating AI driven workflows and design systems for complex enterprise products.',
            tags: ['Design Systems', 'AI Workflows', 'Enterprise UX', 'Product Strategy'],
        },
        {
            id: '7',
            period: '2023 — Present',
            role: 'Product Designer',
            company: 'ecoPRISM',
            description: 'Building an ESG SaaS platform with scalable features, reusable components, and improved product usability.',
            tags: ['ESG Platform', 'Feature Design', 'System Thinking', 'Product UX'],
        },
        {
            id: '8',
            period: '2024 — Present',
            role: 'Product Designer',
            company: 'Arreglio',
            description: 'Leading UX design for a multi service B2B and B2C SaaS platform with focus on reusable patterns and adoption driven experiences.',
            tags: ['B2B SaaS', 'B2C Platform', 'Reusable Components', 'Growth UX'],
        }
    ];

    const [shouldAnimate, setShouldAnimate] = React.useState(true);
    const scrollerRef = React.useRef<HTMLDivElement | null>(null);
    const [manualPause, setManualPause] = React.useState(false);

    React.useEffect(() => {
        if (typeof window === 'undefined') return;
        const media = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setShouldAnimate(!media.matches);
        update();
        // Safari < 14 compatibility
        media.addEventListener?.('change', update);
        media.addListener?.(update);
        return () => {
            media.removeEventListener?.('change', update);
            media.removeListener?.(update);
        };
    }, []);

    // Slow horizontal auto-scroll (with seamless-ish loop via duplicated list).
    React.useEffect(() => {
        if (!shouldAnimate || manualPause) return;
        const el = scrollerRef.current;
        if (!el) return;

        // Keep scroll position inside the loop range to avoid visible jumps on resume.
        const half = el.scrollWidth / 2;
        if (half > 0) {
            el.scrollLeft = ((el.scrollLeft % half) + half) % half;
        }

        let raf = 0;
        let last = 0;
        const speedPxPerMs = 0.02; // slow, steady

        const step = (t: number) => {
            raf = window.requestAnimationFrame(step);
            if (!el) return;

            const dt = last ? t - last : 16;
            last = t;

            const half = el.scrollWidth / 2;
            if (half <= 0) return;

            // Wrap using modulo so it never "hits an end".
            el.scrollLeft = (el.scrollLeft + dt * speedPxPerMs) % half;
        };

        raf = window.requestAnimationFrame(step);
        return () => window.cancelAnimationFrame(raf);
    }, [shouldAnimate, manualPause]);

    const scrollByCard = (direction: 1 | -1) => {
        const el = scrollerRef.current;
        if (!el) return;
        const cardsEls = el.querySelectorAll<HTMLElement>('[data-work-card="true"]');
        const first = cardsEls[0];
        const second = cardsEls[1];
        const step =
            first && second
                ? second.getBoundingClientRect().left - first.getBoundingClientRect().left
                : first?.offsetWidth ?? 320;
        el.scrollBy({ left: direction * step, behavior: 'smooth' });
    };

    const doubledCards = [...cards, ...cards];

    return (
        <section className="bg-[linear-gradient(180deg,_#f8f9fa_0%,_#ffffff_100%)] py-16 sm:py-24">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <div>
                            <div className="text-xs sm:text-sm font-inter uppercase tracking-[0.22em] text-gray-500 mb-4">
                                EXPERIENCE
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black leading-[1.02]">
                                A timeline of craft, leadership, and product thinking
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg font-inter text-gray-600 leading-relaxed pt-2">
                            Every role has added a new layer to how I work. I have grown from designing clearer interfaces to shaping product direction, building systems, and creating experiences that support both users and teams.
                        </p>
                    </div>

                    {/* Slider */}
                    <div className="mt-12 sm:mt-16 relative">
                        <div className="hidden sm:flex absolute top-[-60] right-0 z-10 gap-2">
                            <button
                                type="button"
                                aria-label="Scroll left"
                                onClick={() => {
                                    setManualPause(true);
                                    scrollByCard(-1);
                                    window.setTimeout(() => setManualPause(false), 1200);
                                }}
                                className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-card hover:border-black hover:text-black flex items-center justify-center"
                            >
                                ←
                            </button>
                            <button
                                type="button"
                                aria-label="Scroll right"
                                onClick={() => {
                                    setManualPause(true);
                                    scrollByCard(1);
                                    window.setTimeout(() => setManualPause(false), 1200);
                                }}
                                className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-card hover:border-black hover:text-black flex items-center justify-center"
                            >
                                →
                            </button>
                        </div>

                        <div
                            className="overflow-hidden"
                        >
                            <div
                                ref={scrollerRef}
                                className="work-scroll flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth pb-3 [-ms-overflow-style:none] [scrollbar-width:none]"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                <div className="sr-only">Work timeline</div>
                                {doubledCards.map((card, idx) => (
                                    <div
                                        key={`${card.id}-${idx < cards.length ? 'a' : 'b'}`}
                                        data-work-card="true"
                                        className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[340px]"
                                    >
                                        {/* dot + connector */}
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-black" />
                                            <div className="flex-1 h-px bg-gray-200" />
                                        </div>

                                        {/* Year OUTSIDE the box */}
                                        <div className="mt-4 text-[11px] sm:text-xs font-inter text-gray-500">
                                            {card.period}
                                        </div>

                                        {/* Card */}
                                        <div className="mt-4 bg-white border border-black/10 rounded-[6px] p-5 sm:p-6 flex flex-col h-[300px] md:h-[320px]">
                                            {/* Designation + Company */}
                                            <h3 className="text-base sm:text-lg font-grotesk font-bold text-black leading-tight">
                                                {card.role}
                                            </h3>
                                            <div className="mt-2 text-[11px] sm:text-xs font-inter font-semibold text-gray-600">
                                                {card.company}
                                            </div>

                                            {/* Description */}
                                            <p className="mt-4 text-sm sm:text-base font-inter text-gray-700 leading-relaxed flex-1">
                                                {card.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="mt-auto flex flex-wrap gap-2">
                                                {card.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="inline-flex items-center bg-gray-100 border border-gray-100 px-3 py-1 rounded-full"
                                                    >
                                                        <span className="text-[11px] sm:text-xs font-inter text-gray-600">
                                                            {tag}
                                                        </span>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <style jsx>{`
                            .work-scroll::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceEducation;

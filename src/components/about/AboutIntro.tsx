'use client';

import { h2Page } from '@/lib/typography';
import React, { useState, useEffect, useRef, useCallback } from 'react';

interface Phase {
    id: number;
    phase: string;
    title: string;
    body: string;
    foot: string;
}

const phases: Phase[] = [
    {
        id: 1,
        phase: 'PHASE 01: BEFORE DESIGN',
        title: 'Eight years before design, I was learning to read people.',
        body: 'My career didn\'t start in product design. It started in back-office operations and community management, where for eight years I watched how people made decisions about what to buy, what to believe, and what to trust. One thing kept showing up: the most useful work was never the cleverest. It was the one that made the next step obvious. That observation pulled me into product design, and I haven\'t left.',
        foot: '',
    },
    {
        id: 2,
        phase: 'PHASE 02: LEARNING THE CRAFT',
        title: 'Then came the work of turning systems into something a person could actually use.',
        body: 'At Bizmeth Solutions, and later at Acumant Technologies, I learned how products really get built. Not the polished version in a portfolio, but the messy version with edge cases, stakeholder politics, and constraints that shift every week. I shipped an ESG dashboard for ABB, a workshop management system that rolled out across the EU, India, and the UAE, and the foundations of products other designers later inherited. The lesson from those years: design is less about solving problems on paper, and more about holding a clear vision while the ground moves underneath you.',
        foot: '',
    },
    {
        id: 3,
        phase: 'PHASE 03: TODAY',
        title: 'Today, I design for trust at enterprise scale.',
        body: 'At BetaBridge Ventures, I lead end-to-end design for clients including ABB and Crown Beverage Europe. The work spans knowledge platforms, workforce productivity tools, operational dashboards, and AI-driven support experiences. The thread that runs through all of it is simple. Every system I design has to earn the user\'s belief before it earns their action. That\'s the work I\'m here to do.',
        foot: '',
    },
];

// Waypoint positions on the SVG path (x, y coordinates for desktop)
const waypointPositions = [
    { x: 150, y: 105 },  // Phase 1 - Base camp (lower left)
    { x: 400, y: 45 },   // Phase 2 - Summit (peak)
    { x: 650, y: 85 },   // Phase 3 - Current position (right plateau)
];

const AboutIntro: React.FC = () => {
    const [activePhase, setActivePhase] = useState<number | null>(null);
    const [reduceMotion, setReduceMotion] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Detect reduced motion preference
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReduceMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setReduceMotion(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Intersection Observer for entrance animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Toggle waypoint selection
    const handleWaypointClick = useCallback((phaseId: number) => {
        setActivePhase(prev => prev === phaseId ? null : phaseId);
    }, []);

    // Keyboard handler for waypoints
    const handleWaypointKeyDown = useCallback((e: React.KeyboardEvent, phaseId: number) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleWaypointClick(phaseId);
        }
    }, [handleWaypointClick]);

    const activePhaseData = activePhase !== null ? phases.find(p => p.id === activePhase) : null;

    return (
        <section
            ref={sectionRef}
            className="bg-[linear-gradient(180deg,_#f8f9fa_0%,_#ffffff_100%)] py-10 sm:py-14"
        >
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-start ${isInView ? 'fade-in' : 'opacity-0'}`}>
                        <div>
                            <div className="text-xs sm:text-sm font-inter uppercase tracking-[0.22em] text-gray-500 mb-2">
                                THE JOURNEY
                            </div>
                            <h2 className={`${h2Page}`}>
                                A story of becoming a product designer
                            </h2>
                        </div>

                        <p className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed pt-1">
                            This journey is really about how I learned to connect people, systems, and business goals through design. Each phase shaped how I think, how I collaborate, and the kind of experiences I want to create.
                        </p>
                    </div>

                    {/* Mountain Path SVG - Desktop */}
                    <div className="mt-8 sm:mt-10 hidden md:block">
                        <svg
                            viewBox="0 0 800 150"
                            className="w-full h-auto"
                            role="img"
                            aria-label="Journey path visualization with three waypoints representing different phases of becoming a product designer"
                        >
                            {/* Curved mountain path - smooth bezier curves */}
                            <path
                                d="M 40 120 Q 95 110 150 105 Q 220 100 280 70 Q 340 40 400 45 Q 460 50 520 60 Q 580 70 650 85 Q 710 95 760 100"
                                fill="none"
                                stroke="#d4d4d4"
                                strokeWidth="2"
                                strokeDasharray="8 6"
                            />

                            {/* Active segment overlay - shows progress to active waypoint */}
                            {activePhase !== null && (
                                <path
                                    d={
                                        activePhase === 1
                                            ? "M 40 120 Q 95 110 150 105"
                                            : activePhase === 2
                                                ? "M 40 120 Q 95 110 150 105 Q 220 100 280 70 Q 340 40 400 45"
                                                : "M 40 120 Q 95 110 150 105 Q 220 100 280 70 Q 340 40 400 45 Q 460 50 520 60 Q 580 70 650 85"
                                    }
                                    fill="none"
                                    stroke="#202022"
                                    strokeWidth="2.5"
                                    strokeDasharray="1000"
                                    strokeDashoffset={reduceMotion ? "0" : undefined}
                                    className={!reduceMotion ? 'path-animate' : ''}
                                />
                            )}

                            {/* Start marker */}
                            <g
                                className={`${isInView ? 'waypoint-animate' : 'opacity-0'}`}
                                style={{ animationDelay: reduceMotion ? '0ms' : '300ms' }}
                            >
                                <circle cx="40" cy="120" r="4" fill="#202022" />
                                <text
                                    x="40"
                                    y="138"
                                    textAnchor="middle"
                                    className="text-[9px] font-inter fill-gray-500"
                                >
                                    Start
                                </text>
                            </g>

                            {/* Waypoints */}
                            {waypointPositions.map((pos, idx) => {
                                const phase = phases[idx];
                                const isActive = activePhase === phase.id;
                                const delay = reduceMotion ? 0 : 450 + idx * 150;

                                return (
                                    <g
                                        key={phase.id}
                                        className={`cursor-pointer ${isInView ? 'waypoint-animate' : 'opacity-0'}`}
                                        style={{ animationDelay: `${delay}ms`, outline: 'none' }}
                                        onClick={() => handleWaypointClick(phase.id)}
                                        onKeyDown={(e) => handleWaypointKeyDown(e, phase.id)}
                                        role="button"
                                        tabIndex={0}
                                        aria-pressed={isActive}
                                        aria-label={`${phase.phase}: ${phase.title}`}
                                        focusable="true"
                                    >
                                        {/* Outer circle */}
                                        <circle
                                            cx={pos.x}
                                            cy={pos.y}
                                            r="10"
                                            fill={isActive ? '#202022' : '#ffffff'}
                                            stroke={isActive ? '#202022' : '#a3a3a3'}
                                            strokeWidth="1.5"
                                            className="transition-all duration-200"
                                            style={{
                                                transformOrigin: `${pos.x}px ${pos.y}px`
                                            }}
                                        />
                                        {/* Inner dot */}
                                        <circle
                                            cx={pos.x}
                                            cy={pos.y}
                                            r="3.5"
                                            fill={isActive ? '#ffffff' : '#202022'}
                                            className="transition-all duration-200"
                                        />
                                        {/* Phase label - all below the waypoints now */}
                                        <text
                                            x={pos.x}
                                            y={idx === 1 ? pos.y - 18 : pos.y + 24}
                                            textAnchor="middle"
                                            className="text-[9px] font-inter font-medium fill-gray-600"
                                        >
                                            Phase {String(idx + 1).padStart(2, '0')}
                                        </text>
                                    </g>
                                );
                            })}
                        </svg>
                    </div>

                    {/* Mobile Layout - Vertical Path */}
                    <div className="mt-12 md:hidden">
                        <div className="relative">
                            {/* Vertical connecting line */}
                            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-300" style={{ height: 'calc(100% - 40px)' }} />

                            {/* Mobile waypoints */}
                            <div className="space-y-6">
                                {phases.map((phase, idx) => {
                                    const isActive = activePhase === phase.id;
                                    const delay = reduceMotion ? 0 : 300 + idx * 150;

                                    return (
                                        <div
                                            key={phase.id}
                                            className={`relative pl-14 ${isInView ? 'waypoint-animate' : 'opacity-0'}`}
                                            style={{ animationDelay: `${delay}ms` }}
                                        >
                                            {/* Waypoint marker */}
                                            <button
                                                onClick={() => handleWaypointClick(phase.id)}
                                                className={`absolute left-0 top-0 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${isActive
                                                        ? 'bg-black border-black'
                                                        : 'bg-white border-gray-400 hover:border-gray-600'
                                                    }`}
                                                aria-pressed={isActive}
                                                aria-label={`${phase.phase}: ${phase.title}`}
                                            >
                                                <span
                                                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${isActive ? 'bg-white' : 'bg-black'
                                                        }`}
                                                />
                                            </button>

                                            {/* Phase card */}
                                            <div
                                                className={`border rounded-lg p-4 transition-all duration-200 cursor-pointer ${isActive
                                                        ? 'border-black bg-white shadow-md'
                                                        : 'border-gray-200 bg-white hover:border-gray-400'
                                                    }`}
                                                onClick={() => handleWaypointClick(phase.id)}
                                                role="button"
                                                tabIndex={0}
                                                onKeyDown={(e) => handleWaypointKeyDown(e, phase.id)}
                                            >
                                                <div className="text-[10px] font-inter uppercase tracking-widest text-gray-500 mb-2">
                                                    {phase.phase}
                                                </div>
                                                <h3 className="text-sm font-grotesk font-bold text-black leading-snug">
                                                    {phase.title}
                                                </h3>

                                                {/* Expanded content on mobile */}
                                                {isActive && (
                                                    <div className="mt-4 detail-panel-animate">
                                                        <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                                            {phase.body}
                                                        </p>
                                                        {phase.foot ? (
                                                            <p className="mt-4 text-xs font-inter text-gray-400 leading-relaxed">
                                                                {phase.foot}
                                                            </p>
                                                        ) : null}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Hint text */}
                        <p className="text-center text-sm font-inter text-gray-400 mt-6">
                            Three phases that shaped how I think, collaborate, and design. Click a phase to read it.
                        </p>
                    </div>

                    {/* Detail Panel - Desktop */}
                    <div
                        className="hidden md:block mt-4"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {activePhaseData ? (
                            <div
                                key={activePhaseData.id}
                                className="max-w-2xl mx-auto border border-black/10 rounded-lg bg-white p-5 detail-panel-animate"
                            >
                                <div className="text-[10px] font-inter uppercase tracking-widest text-gray-500 mb-2">
                                    {activePhaseData.phase}
                                </div>
                                <h3 className="text-base sm:text-lg font-grotesk font-bold text-black leading-snug">
                                    {activePhaseData.title}
                                </h3>
                                <p className="mt-3 text-sm font-inter text-gray-600 leading-relaxed">
                                    {activePhaseData.body}
                                </p>
                                {activePhaseData.foot ? (
                                    <p className="mt-3 text-xs font-inter text-gray-400 leading-relaxed">
                                        {activePhaseData.foot}
                                    </p>
                                ) : null}
                            </div>
                        ) : (
                            <div className="max-w-2xl mx-auto text-center py-6 text-gray-400 font-inter text-sm">
                                Three phases that shaped how I think, collaborate, and design. Click a phase to read it.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;

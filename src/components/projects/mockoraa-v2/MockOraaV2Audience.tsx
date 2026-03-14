'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const personas = [
    {
        title: 'First-Time Seeker',
        description: 'Final year student terrified of basic behavioral questions. Fear of sounding inexperienced.',
        needs: 'Needs Context',
        image: '/images/projects/mockoraa/Kajal.webp',
    },
    {
        title: 'Returning Mother',
        description: '6-year career gap. Rusty vocabulary and imposter syndrome regarding her time away.',
        needs: 'Needs Empathy',
        image: '/images/projects/mockoraa/Sushma.webp',
    },
    {
        title: 'Career Shifter',
        description: 'Transitioning to PM. Needs to translate legacy experience into new role terminology.',
        needs: 'Needs Translation',
        image: '/images/projects/mockoraa/Nandish.webp',
    },
    {
        title: 'Engineering Fresher',
        description: 'Can code brilliantly but struggles to articulate technical decisions verbally.',
        needs: 'Needs Structure',
        image: '/images/projects/mockoraa/Pravith.webp',
    },
];

export default function MockOraaV2Audience() {
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
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-grotesk font-bold mb-4">03. TARGET USERS</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4">Designing for Diverse Realities</h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 mb-12 max-w-3xl leading-relaxed">
                        We segmented our audience based on behavioral patterns and emotional blockers, not just demographics.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {personas.map((persona, index) => (
                            <div
                                key={index}
                                className={`rounded-xl p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} bg-[#212121] text-white`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4 flex-shrink-0">
                                    <Image
                                        src={persona.image}
                                        alt={persona.title}
                                        fill
                                        className="object-cover"
                                        sizes="96px"
                                    />
                                </div>
                                <h3 className="text-base sm:text-lg font-grotesk font-bold text-white mb-2">
                                    {persona.title}
                                </h3>
                                <p className="text-sm font-inter text-gray-300 leading-relaxed mb-4">
                                    {persona.description}
                                </p>
                                <div>
                                    <span className="inline-block px-3 py-1.5 rounded-lg text-xs font-inter font-medium bg-gray-200 text-gray-800">
                                        {persona.needs}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

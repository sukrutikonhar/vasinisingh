'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function MockOraaV2Reframe() {
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
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-grotesk font-bold mb-4">04. Strategy & Ideation</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4 sm:mb-6">Finding the Opportunity Space</h2>
                    <p className="text-sm sm:text-base md:text-lg font-inter text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                        We mapped the emotional journey of candidates from application to rejection. The lowest emotional point occurs exactly when feedback is withheld. Competitors like <strong>Huru.ai</strong> and <strong>InterviewBuddy</strong> focus heavily on basic video recording, but miss the mark on contextual intelligence and psychological safety.
                    </p>

                    {/* User Journey Map */}
                    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="relative w-full rounded-lg sm:rounded-xl overflow-hidden mb-8 sm:mb-12 bg-gray-50 border border-gray-200 h-[250px] sm:h-[350px] md:h-[450px]">
                            <Image
                                src="/images/projects/mockoraa/user-journey.webp"
                                alt="User Journey Map"
                                width={1200}
                                height={600}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </div>

                    {/* How Might We */}
                    <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="border border-gray-200 rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-10 bg-gray-50">
                            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-grotesk font-bold mb-3 sm:mb-4">THE &ldquo;HOW MIGHT WE&rdquo;</h3>
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-grotesk font-bold text-black leading-snug">
                                How might we help job seekers practice realistic interviews and receive actionable, non-judgmental feedback so they can build measurable confidence?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

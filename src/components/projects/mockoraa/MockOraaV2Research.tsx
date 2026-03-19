'use client';

import { useEffect, useRef, useState } from 'react';

export default function MockOraaV2Research() {
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

    const frictionPoints = [
        { label: 'The Feedback Void', desc: 'Candidates are rejected without knowing if the issue was content, pacing, or delivery.' },
        { label: 'Role Mismatch', desc: 'Generic questions don\'t help. Candidates need questions contextualized to specific Job Descriptions (JDs).' },
        { label: 'Anxiety Spikes', desc: 'The interface itself must not induce stress. Timers and harsh red error states trigger panic.' }

    ];


    return (
        <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-grotesk font-bold mb-4">02. RESEARCH & DISCOVERY</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-8">Uncovering the Hidden Frictions</h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 mb-12 max-w-3xl leading-relaxed">
                        We initiated a rigorous discovery phase combining moderated interviews, behavioral surveys, and competitive audits to move beyond assumptions.
                    </p>

                    {/* Quote */}
                    <div className={`border-l-4 border-black pl-6 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <p className="text-lg sm:text-xl font-inter italic text-gray-700 leading-relaxed mb-3">
                            &ldquo;I know my domain perfectly, but the moment an interviewer asks &lsquo;Tell me about a time when…&rsquo; I freeze. The generic prep didn&rsquo;t work for me.&rdquo;
                        </p>
                        <span className="text-sm font-inter text-gray-500">— Mid-level Engineer during user interviews</span>
                    </div>

                    {/* FigJam board embed - responsive height */}
                    <div className={`mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="mb-3">
                            <h3 className="text-lg font-grotesk font-bold text-black mb-1">Our FigJam Workspace</h3>
                            <p className="text-sm font-inter text-gray-600 leading-relaxed max-w-3xl">
                                Pan and zoom to explore the board.
                            </p>
                        </div>
                        <div className="rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
                            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh]">
                                <iframe
                                    title="MockOraa FigJam board - Research & ideation"
                                    src="https://embed.figma.com/board/iWB7jm6lJYCobWR81d7iLG/MockOraa-Figjam?embed-host=vasini-portfolio&viewport-controls=1"
                                    className="absolute inset-0 w-full h-full"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>

                    {/* Key Research Insights - card grid to match theme */}
                    <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h3 className="text-2xl font-grotesk font-bold text-black mb-3">Key Research Insights</h3>
                        <p className="text-base font-inter text-gray-600 mb-6 max-w-3xl leading-relaxed">
                            Synthesizing data from 50+ participants revealed three core friction points:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {frictionPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors"
                                >
                                    <span className="inline-block text-[10px] font-grotesk font-bold uppercase tracking-wider text-gray-500 mb-2">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h4 className="text-base font-grotesk font-bold text-black mb-2">{point.label}</h4>
                                    <p className="text-sm font-inter text-gray-600 leading-relaxed">{point.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

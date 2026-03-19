'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function MockOraaV2Iterations() {
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                        {/* Left: Text content + Impact card */}
                        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <p className="text-xs uppercase tracking-widest text-gray-500 font-grotesk font-bold mb-4">
                                08. VALIDATION & ITERATION
                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4 sm:mb-6">
                                Testing with Rigor
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg font-inter text-gray-600 leading-relaxed mb-6 sm:mb-8">
                                We ran moderated sessions (n=6) and unmoderated Maze testing (n=51) to validate our flows. The initial designs suffered from &ldquo;dashboard blindness&rdquo;, where users were overwhelmed by metrics.
                            </p>

                            <div className="bg-gray-100 rounded-lg sm:rounded-xl p-6 sm:p-8 border border-gray-200">
                                <h3 className="text-base sm:text-lg font-grotesk font-bold text-black mb-4">
                                    Before vs. After Impact
                                </h3>
                                <ul className="space-y-2 sm:space-y-3">
                                    <li className="flex items-start gap-3 text-xs sm:text-sm md:text-base font-inter text-gray-700">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                                        </span>
                                        <span><strong className="text-black">Issue:</strong> Dense text blocks caused scanning fatigue.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-xs sm:text-sm md:text-base font-inter text-gray-700">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                                        </span>
                                        <span><strong className="text-black">Fix:</strong> Introduced progressive disclosure for feedback.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-xs sm:text-sm md:text-base font-inter text-gray-700">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                                        </span>
                                        <span><strong className="text-black">Result:</strong> Time-on-task improved by 31%.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right: Iteration image (Before/After) */}
                        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="relative w-full rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 bg-gray-50 h-[250px] sm:h-[350px] md:h-[500px]">
                                <Image
                                    src="/images/projects/mockoraa/validation-iteration.webp"
                                    alt="Validation and Iteration - Dashboard comparison"
                                    width={800}
                                    height={600}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

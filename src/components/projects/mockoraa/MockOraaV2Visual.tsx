'use client';

import { useEffect, useRef, useState } from 'react';

const designTokens = {
    primary: '#416C53',
    primaryHover: '#316C51',
    text: '#09172a',
    surface: '#F9F9F9',
};

const colorSwatches = [
    { name: 'Primary', hex: '#416C53' },
    { name: 'Primary Hover', hex: '#316C51' },
    { name: 'Text', hex: '#09172a' },
    { name: 'Surface', hex: '#F9F9F9' },
];

export default function MockOraaV2Visual() {
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
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-grotesk font-bold mb-4">06. DESIGN SYSTEM</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4 sm:mb-6">Designing for Calm and Clarity</h2>
                    <p className="text-sm sm:text-base md:text-lg font-inter text-gray-600 mb-8 sm:mb-12 max-w-3xl leading-relaxed">
                        Interview anxiety is visceral. We chose a &ldquo;Deep Sea&rdquo; color palette (anchored by #316E51) to evoke calm focus. Typography relies on highly legible sans-serifs with ample line height to reduce cognitive strain during reading tasks.
                    </p>

                    {/* Dynamic Design System: Deep Sea — layout like image */}
                    <div
                        className={`rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ backgroundColor: designTokens.surface }}
                    >
                        <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                            {/* Header */}
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-grotesk font-bold mb-6 sm:mb-8" style={{ color: designTokens.text }}>
                                Design System: &ldquo;Deep Sea&rdquo;
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                                {/* Col 1: Colors */}
                                <div className="space-y-3">
                                    <p className="text-xs font-grotesk font-bold uppercase tracking-wider mb-4" style={{ color: designTokens.text }}>
                                        Colors
                                    </p>
                                    {colorSwatches.map((swatch) => {
                                        const isLight = swatch.name === 'Surface';
                                        return (
                                            <div
                                                key={swatch.name}
                                                className="rounded-lg border border-gray-200 min-h-[60px] sm:min-h-[72px] flex items-center justify-center px-3 sm:px-4 py-3"
                                                style={{ backgroundColor: swatch.hex }}
                                            >
                                                <p
                                                    className={`text-xs sm:text-sm font-grotesk font-bold text-center ${isLight ? '' : 'text-white'}`}
                                                    style={isLight ? { color: designTokens.text } : undefined}
                                                >
                                                    {swatch.name} {swatch.hex}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Col 2: Typography */}
                                <div>
                                    <p className="text-xs font-grotesk font-bold uppercase tracking-wider mb-4 sm:mb-5" style={{ color: designTokens.text }}>
                                        Typography
                                    </p>
                                    <div className="space-y-2 mb-4">
                                        <p className="font-grotesk font-bold" style={{ color: designTokens.text, fontSize: 'clamp(1.5rem, 4vw, 3rem)', lineHeight: 1.2 }}>
                                            Heading 1
                                        </p>
                                        <p className="text-xs font-inter text-gray-500 mb-2">48px / 3rem</p>
                                        <p className="font-grotesk font-bold" style={{ color: designTokens.text, fontSize: 'clamp(1rem, 3vw, 2rem)', lineHeight: 1.3 }}>
                                            Heading 2
                                        </p>
                                        <p className="text-xs font-inter text-gray-500 mb-3">32px / 2rem</p>
                                    </div>
                                    <p className="text-xs sm:text-sm font-inter leading-relaxed" style={{ color: designTokens.text }}>
                                        Body text set in Inter. Optimized for readability to ensure candidates can quickly scan questions and feedback without cognitive load.
                                    </p>
                                </div>

                                {/* Col 3: Inputs (buttons + input) */}
                                <div>
                                    <p className="text-xs font-grotesk font-bold uppercase tracking-wider mb-5 sm:mb-6" style={{ color: designTokens.text }}>
                                        Inputs
                                    </p>
                                    <div className="space-y-3 sm:space-y-4">
                                        <button
                                            type="button"
                                            className="w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-white text-xs sm:text-sm font-inter font-semibold transition-colors hover:opacity-90"
                                            style={{ backgroundColor: designTokens.primary }}
                                        >
                                            Start Interview
                                        </button>
                                        <button
                                            type="button"
                                            className="w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg border-2 text-xs sm:text-sm font-inter font-semibold transition-colors hover:opacity-90"
                                            style={{ color: designTokens.text, borderColor: designTokens.text, backgroundColor: designTokens.surface }}
                                        >
                                            View History
                                        </button>
                                        <div className="bg-white p-3 sm:p-4 rounded-lg">
                                            <label className="block text-xs font-grotesk font-bold uppercase tracking-wider mb-2" style={{ color: designTokens.text }}>
                                                INPUT FIELD
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter job description..."
                                                readOnly
                                                className="w-full py-2 sm:py-3 px-3 sm:px-4 rounded-lg border border-gray-300 text-xs sm:text-sm font-inter placeholder:text-gray-400 focus:outline-none"
                                                style={{ backgroundColor: designTokens.surface, color: designTokens.text }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

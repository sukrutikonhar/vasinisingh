import React from 'react';
import Image from 'next/image';
import { Mountain, Square, Palette, Users } from 'lucide-react';
import { typography, spacing, containers } from '@/lib/typography';

const SymbolsPathSection: React.FC = () => {
    const symbols = [
        {
            icon: Mountain,
            title: "The Mountain Line",
            description: "represents persistence and exploration."
        },
        {
            icon: Square,
            title: "The Green Square",
            description: "reflects balance, grounding and growth."
        },
        {
            icon: Palette,
            title: "The Circles",
            description: "Coral captures creativity and curiosity. Blue symbolizes freedom and exploration. Golden embodies inspiration, imagination and photography."
        },
        {
            icon: Users,
            title: "The Three Shapes Together",
            description: "illustrate collaboration, empathy and community."
        }
    ];

    return (
        <section className={`bg-white ${spacing.section}`}>
            <div className={containers.main}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <div className="space-y-8">
                        <h2 className={`${typography.h2.section} text-gray-900`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                            Symbols Along the Path
                        </h2>

                        <p className={`${typography.body.large} text-gray-700`} style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                            My logo reflects a design philosophy mirroring a climb toward growth, discovery and collaboration.
                        </p>

                        <div className="space-y-6">
                            {symbols.map((symbol, index) => {
                                const IconComponent = symbol.icon;
                                return (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className={`${typography.h3.subsection} text-gray-900 mb-1`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                                                {symbol.title}:
                                            </h3>
                                            <p className={`${typography.body.base} text-gray-600`} style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                                                {symbol.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            <div className="relative w-full h-96 overflow-hidden">
                                <Image
                                    src="/images/About us/about-03.webp"
                                    alt="Design philosophy visual representation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SymbolsPathSection;

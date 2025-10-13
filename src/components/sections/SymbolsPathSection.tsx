import React from 'react';
import { Mountain, Square, Palette, Users } from 'lucide-react';
import Logo from '../ui/Logo';

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
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <div className="space-y-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                            Symbols Along the Path
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed">
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
                                            <h3 className="font-semibold text-gray-900 mb-1">
                                                {symbol.title}:
                                            </h3>
                                            <p className="text-gray-600">
                                                {symbol.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right - Logo */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="text-center space-y-6">
                            <Logo size="lg" className="text-gray-900 justify-center" />
                            <p className="text-lg text-gray-700 max-w-sm">
                                This logo is not just a symbol. It is a visual metaphor for my approach to human centered design.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SymbolsPathSection;

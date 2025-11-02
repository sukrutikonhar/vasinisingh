'use client';

import React from 'react';
import { Camera, Plane, Coffee, Heart } from 'lucide-react';

const BeyondDesign: React.FC = () => {
    const interests = [
        {
            icon: Camera,
            title: 'Photography',
            description: 'Capturing moments and stories through my lens.'
        },
        {
            icon: Plane,
            title: 'Travel',
            description: 'Exploring new cultures and learning from diverse perspectives.'
        },
        {
            icon: Coffee,
            title: 'Coffee Culture',
            description: 'Discovering local cafés and ideas over good coffee.'
        },
        {
            icon: Heart,
            title: 'Advocacy & Impact',
            description: 'Advocating for acid attack survivors with Chhanv Foundation\'s POSH Committee.'
        }
    ];

    return (
        <section className="py-32 bg-gray-50">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-6">
                            Beyond Design
                        </h2>
                        <p className="text-xl font-inter text-gray-600 max-w-2xl mx-auto">
                            What fuels my creativity and keeps me inspired outside of work
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {interests.map((interest, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-black p-8 hover:shadow-xl transition-all group rounded-[6px]"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 bg-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        {React.createElement(interest.icon, {
                                            className: "w-8 h-8 text-white"
                                        })}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-grotesk font-bold text-black mb-3">
                                            {interest.title}
                                        </h3>
                                        <p className="font-inter text-gray-700 leading-relaxed">
                                            {interest.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeyondDesign;


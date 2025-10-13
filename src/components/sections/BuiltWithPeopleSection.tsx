import React from 'react';
import { Users, Heart, HelpCircle, Smile } from 'lucide-react';

const BuiltWithPeopleSection: React.FC = () => {
    const values = [
        {
            icon: Users,
            title: "Collaboration",
            description: "Design thrives when perspectives come together."
        },
        {
            icon: Heart,
            title: "Empathy",
            description: "Every product should feel human and accessible."
        },
        {
            icon: HelpCircle,
            title: "Curiosity",
            description: "Innovation begins with asking the right questions."
        },
        {
            icon: Smile,
            title: "Persistence",
            description: "Challenges are part of the climb, they make the summit worth it."
        }
    ];

    return (
        <section className="bg-gray-900 text-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto text-center space-y-12">
                    <h2 className="text-3xl lg:text-4xl font-bold">
                        Built with People
                    </h2>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <div key={index} className="text-center space-y-4">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                                        <IconComponent className="w-8 h-8 text-black" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Text */}
                    <div className="pt-8">
                        <p className="text-lg text-gray-300">
                            These values anchor my approach to{' '}
                            <span className="text-yellow-400 font-semibold">product design and visual storytelling</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuiltWithPeopleSection;

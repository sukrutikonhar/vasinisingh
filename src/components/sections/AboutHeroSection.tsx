import React from 'react';
import { User } from 'lucide-react';

const AboutHeroSection: React.FC = () => {
    return (
        <section className="bg-gray-900 text-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="flex items-center gap-4">
                    <User className="w-12 h-12 lg:w-16 lg:h-16" />
                    <h1 className="text-4xl lg:text-6xl font-bold">
                        Who I am
                    </h1>
                </div>
                <p className="text-lg text-gray-300 mt-6 max-w-2xl">
                    A product designer driven by curiosity, empathy, and the belief that great design solves real problems.
                </p>
            </div>
        </section>
    );
};

export default AboutHeroSection;

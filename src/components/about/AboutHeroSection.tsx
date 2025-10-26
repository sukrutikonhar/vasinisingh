import React from 'react';
import { User } from 'lucide-react';
import { typography, spacing, containers } from '@/lib/typography';

const AboutHeroSection: React.FC = () => {
    return (
        <section className={`bg-gray-900 text-white ${spacing.section}`}>
            <div className={containers.main}>
                <div className="flex items-center gap-4">
                    <User className="w-12 h-12 lg:w-16 lg:h-16" />
                    <h1 className={`${typography.h1.pageHero}`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                        Who I am
                    </h1>
                </div>
                <p className={`${typography.body.large} text-gray-300 mt-6 max-w-2xl`} style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                    A product designer driven by curiosity, empathy, and the belief that great design solves real problems.
                </p>
            </div>
        </section>
    );
};

export default AboutHeroSection;

import React from 'react';
import { typography, spacing, containers } from '@/lib/typography';

const OpportunitiesContactSection: React.FC = () => {
    return (
        <section className={`bg-white ${spacing.section}`}>
            <div className={containers.main}>
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className={`${typography.h2.section} text-gray-900`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                        I&apos;m currently open to global opportunities
                    </h2>

                    <p className={`${typography.body.large} text-gray-600`} style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                        Having worked across{' '}
                        <span className="font-semibold text-gray-900 italic">SaaS</span>,{' '}
                        <span className="font-semibold text-gray-900 italic">FinTech</span>,{' '}
                        <span className="font-semibold text-gray-900 italic">HR Tech</span>, and{' '}
                        <span className="font-semibold text-gray-900 italic">Retail Tech</span>, I&apos;m eager to continue creating meaningful digital experiences across diverse domains.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OpportunitiesContactSection;

import React from 'react';

const OpportunitiesContactSection: React.FC = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        I&apos;m currently open to global opportunities
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
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

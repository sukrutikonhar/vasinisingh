import React from 'react';
import { Briefcase, DollarSign, Users, ShoppingBag, Globe } from 'lucide-react';

const OpportunitiesSection: React.FC = () => {
    const industries = [
        { name: 'SaaS', icon: Briefcase },
        { name: 'FinTech', icon: DollarSign },
        { name: 'HR Tech', icon: Users },
        { name: 'Retail Tech', icon: ShoppingBag },
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom text-center">
                <div className="max-w-5xl mx-auto space-y-8">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Globe className="w-8 h-8 text-gray-900" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                            I&apos;m currently open to global opportunities
                        </h2>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Having worked across diverse domains, I&apos;m eager to continue creating meaningful digital experiences.
                    </p>

                    {/* Industry Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {industries.map((industry) => (
                            <div
                                key={industry.name}
                                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {React.createElement(industry.icon, { className: "w-6 h-6 text-white" })}
                                    </div>
                                    <span className="font-semibold text-gray-900">
                                        {industry.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpportunitiesSection;

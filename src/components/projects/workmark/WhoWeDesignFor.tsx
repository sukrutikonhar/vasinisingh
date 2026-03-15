'use client';

import React from 'react';

const WhoWeDesignFor: React.FC = () => {
    const companyTypes = [
        {
            label: 'STARTUPS',
            title: 'Everyone knows the work',
            description: 'Recognition is informal and social context fills the gaps.',
            highlighted: false,
        },
        {
            label: 'MID SCALE COMPANIES',
            title: 'Work becomes invisible',
            description: 'Teams scale faster than recognition systems, making contribution evidence disappear.',
            highlighted: true,
        },
        {
            label: 'ENTERPRISES',
            title: 'Heavy legacy systems',
            description: 'Recognition lives inside complex HR stacks that are often slow, manual, and disconnected.',
            highlighted: false,
        },
    ];

    const userRoles = [
        { title: 'Individual contributors', description: 'Need a living record of impact beyond shipped tickets.' },
        { title: 'Managers & team leads', description: 'Need evidence they can trust without manual reconstruction.' },
        { title: 'HR & people ops', description: 'Need structured recognition systems that scale fairly.' },
        { title: 'Leadership', description: 'Need organizational intelligence on collaboration and performance.' },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="border-t border-gray-200 pt-4 mb-2">
                        <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-4">
                            02 - TARGET AUDIENCE
                        </p>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-grotesk font-bold text-black mb-4">
                        Who We Are Designing For
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl leading-relaxed mb-12">
                        WorkMark is built for mid scale organizations with 50 to 500 employees — the chaos zone where teams are too large for informal visibility and too early for mature HR infrastructure.
                    </p>

                    {/* Top row: Company types */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {companyTypes.map((item, index) => (
                            <div
                                key={index}
                                className={`rounded-xl p-6 ${item.highlighted
                                        ? 'bg-black text-white'
                                        : 'bg-white border border-gray-200 shadow-sm'
                                    }`}
                            >
                                <p
                                    className={`text-xs uppercase tracking-wider mb-2 font-grotesk font-bold ${item.highlighted ? 'text-white' : 'text-gray-500'
                                        }`}
                                >
                                    {item.label}
                                </p>
                                <p
                                    className={`text-lg font-grotesk font-bold leading-relaxed mb-1 ${item.highlighted ? 'text-white' : 'text-black'
                                        }`}
                                >
                                    {item.title}
                                </p>
                                <p
                                    className={`text-sm leading-relaxed ${item.highlighted ? 'text-gray-300' : 'text-gray-600'
                                        }`}
                                >
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom row: User roles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {userRoles.map((role, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                            >
                                <p className="text-lg font-grotesk font-bold text-black leading-relaxed mb-1">
                                    {role.title}
                                </p>
                                <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                    {role.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeDesignFor;

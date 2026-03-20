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
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-4">
                        02 - TARGET AUDIENCE
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4">
                        Who We Are Designing For
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg font-inter text-gray-600 max-w-3xl leading-relaxed mb-12">
                        WorkMark is built for mid scale organizations with 50 to 500 employees. The chaos zone where teams are too large for informal visibility and too early for mature HR infrastructure.
                    </p>

                    {/* Top row: Company types */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-0">
                        {companyTypes.map((item, index) => (
                            <div
                                key={index}
                                className={`rounded-lg sm:rounded-xl p-5 sm:p-6 transition-all ${item.highlighted
                                    ? 'bg-black text-white shadow-lg'
                                    : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
                                    }`}
                            >
                                <p
                                    className={`text-xs uppercase tracking-wider mb-2 font-grotesk font-bold ${item.highlighted ? 'text-gray-300' : 'text-gray-500'
                                        }`}
                                >
                                    {item.label}
                                </p>
                                <p
                                    className={`text-base sm:text-lg font-grotesk font-bold leading-snug mb-2 ${item.highlighted ? 'text-white' : 'text-black'
                                        }`}
                                >
                                    {item.title}
                                </p>
                                <p
                                    className={`text-xs sm:text-sm leading-relaxed ${item.highlighted ? 'text-gray-300' : 'text-gray-600'
                                        }`}
                                >
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Tree Structure with SVG connector lines */}
                    <div className="relative">
                        {/* SVG sits in normal flow ABOVE the grid — not absolutely positioned */}
                        <svg
                            className="w-full hidden lg:block"
                            height="80"
                            preserveAspectRatio="none"
                        >
                            {/* Main vertical line from top center */}
                            <line x1="50%" y1="0" x2="50%" y2="35" stroke="#9ca3af" strokeWidth="2" />

                            {/* Horizontal line connecting all four branches */}
                            <line x1="12.5%" y1="35" x2="87.5%" y2="35" stroke="#9ca3af" strokeWidth="2" />

                            {/* Four branches down to each box */}
                            <line x1="12.5%" y1="35" x2="12.5%" y2="80" stroke="#9ca3af" strokeWidth="2" />
                            <line x1="37.5%" y1="35" x2="37.5%" y2="80" stroke="#9ca3af" strokeWidth="2" />
                            <line x1="62.5%" y1="35" x2="62.5%" y2="80" stroke="#9ca3af" strokeWidth="2" />
                            <line x1="87.5%" y1="35" x2="87.5%" y2="80" stroke="#9ca3af" strokeWidth="2" />

                            {/* Center node */}
                            <circle cx="50%" cy="35" r="5" fill="#374151" />

                            {/* Nodes at branch endpoints */}
                            <circle cx="12.5%" cy="80" r="3.5" fill="#9ca3af" />
                            <circle cx="37.5%" cy="80" r="3.5" fill="#9ca3af" />
                            <circle cx="62.5%" cy="80" r="3.5" fill="#9ca3af" />
                            <circle cx="87.5%" cy="80" r="3.5" fill="#9ca3af" />
                        </svg>

                        {/* Bottom row: User roles */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {userRoles.map((role, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <p className="text-base sm:text-lg font-grotesk font-bold text-black leading-snug mb-2">
                                        {role.title}
                                    </p>
                                    <p className="text-xs sm:text-sm font-inter text-gray-600 leading-relaxed">
                                        {role.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhoWeDesignFor;

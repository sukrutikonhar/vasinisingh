'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';

const TargetUsers: React.FC = () => {
    const roles = [
        {
            title: 'Standard Users',
            intro: 'Employees using the platform to:',
            items: [
                'Ask questions',
                'Participate in discussions',
                'Search for solutions',
                'Follow threads and contributors',
                'Save resources and provide feedback',
            ],
        },
        {
            title: 'Moderators',
            intro: 'Power users responsible for:',
            items: [
                'Content moderation',
                'Thread approvals',
                'Managing reports and requests',
                'Creating announcements and banners',
                'Maintaining forum structure and KB quality',
            ],
        },
        {
            title: 'Admins',
            intro: 'Platform owners responsible for:',
            items: [
                'User management',
                'Permissions and access control',
                'System configuration',
                'Governance and moderation oversight',
                'Knowledge lifecycle administration',
            ],
        },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-3">
                        Target Users
                    </p>
                    <h2 className={`${h2Section} mb-10`}>
                        Three roles, three sets of needs
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {roles.map((role, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 border-t-2 border-t-black rounded-lg p-6 hover:shadow-md transition-all h-full"
                            >
                                <h3 className="text-base font-grotesk font-bold text-black mb-3">
                                    {role.title}
                                </h3>
                                <p className="text-sm font-inter text-gray-600 mb-3">
                                    {role.intro}
                                </p>
                                <ul className="space-y-2 pl-4 list-disc">
                                    {role.items.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="text-sm font-inter text-gray-600 leading-relaxed"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetUsers;

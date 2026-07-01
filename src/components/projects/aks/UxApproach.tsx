'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';
import HierarchyFlow from './HierarchyFlow';
import ShotImage from './ShotImage';

const UxApproach: React.FC = () => {
    const enterpriseItems = [
        'Consistent components across every role-based surface',
        'Role based interfaces for standard users, moderators, and admins',
        'Structured dashboards for platform health and moderation load',
        'Accessibility focused layouts',
        'Responsive experiences across devices',
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-3">
                        UX Approach
                    </p>
                    <h2 className={`${h2Section} mb-4`}>
                        Structuring knowledge for discoverability
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 leading-relaxed max-w-3xl mb-8">
                        I designed a hierarchical structure for Sections, Categories, Threads, Comments, and Knowledge Articles. This improved discoverability and reduced navigation friction across a platform expected to hold tens of thousands of threads.
                    </p>

                    <HierarchyFlow
                        centered
                        nodes={[
                            'Sections',
                            'Categories',
                            'Threads',
                            'Comments',
                            'Knowledge Articles',
                        ]}
                    />

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ShotImage
                            src="/images/projects/aks/Section_Overview_trim.webp"
                            alt="Section overview screen showing top-level topic areas with thread and post counts"
                            label="Section Overview"
                            caption="Top level of the IA"
                        />
                        <ShotImage
                            src="/images/projects/aks/Category_Overview_trim.webp"
                            alt="Category overview screen showing categories within a section"
                            label="Category Overview"
                            caption="One level down"
                        />
                    </div>

                    <div className="mt-12 max-w-3xl rounded-lg border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
                        <h3 className="text-lg font-grotesk font-bold text-black mb-4">
                            Enterprise Design Consistency
                        </h3>
                        <ul className="space-y-2 pl-4 list-disc">
                            {enterpriseItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UxApproach;

'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';
import ShotImage from './ShotImage';

const features = [
    {
        title: 'Discussion Forum & Thread Detail',
        description:
            'Structured hierarchy of Sections, Categories, Threads, and Comments, with thread creation approval workflows, rich discussion (reactions, replies, attachments, mentions), and verified solution recommendations surfaced directly in-thread.',
        shots: [
            {
                src: '/images/projects/aks/Single_Thread_detailed_view_trim.webp',
                alt: 'Single thread detail view with comments, replies, and verified solution badges',
                label: 'Thread detail view',
                caption: 'Replies, verified solutions, attachments',
            },
        ],
    },
    {
        title: 'Knowledge Base: Merge & Governance',
        description:
            'The knowledge base needed a way to resolve duplicate articles as the platform scaled past thousands of entries. I designed a 4-step merge flow: select primary, compare content side by side, decide how fields combine, then review a full summary before an irreversible action is taken.',
        shots: [
            {
                src: '/images/projects/aks/Merge_KB_trim.webp',
                alt: 'Merge Knowledge Article flow showing primary article selection and side-by-side content comparison',
                label: 'Merge Knowledge Article',
                caption: 'Step 1–2 of 4: select primary, compare content',
            },
        ],
    },
    {
        title: 'Moderation: Requests & Assignment',
        description:
            'Moderators triage a constant stream of user-submitted requests: new threads, content flags, structure suggestions. I designed a request queue with inline detail panels and AI-suggested categorization, so moderators can act without leaving the list view.',
        shots: [
            {
                src: '/images/projects/aks/Requests_trim.webp',
                alt: 'Requests queue for moderators with filters and inline actions',
                label: 'Request queue',
                caption: 'Filterable, bulk actionable',
            },
            {
                src: '/images/projects/aks/Request_modal_trim.webp',
                alt: 'Request detail panel with AI-suggested section and category assignment',
                label: 'Request detail + assignment',
                caption: 'AI-suggested Section / Category placement',
            },
        ],
    },
    {
        title: 'Dashboards & Analytics',
        description:
            'Moderators and admins needed at-a-glance visibility into platform health: thread volume, unanswered questions, solution adoption, and where users are coming from. I designed a statistics dashboard and a separate feedback dashboard so each audience sees the metrics relevant to their job.',
        shots: [
            {
                src: '/images/projects/aks/Statistics_Dasboard_trim.webp',
                alt: 'Statistics dashboard showing thread volume, active users, and user growth trends',
                label: 'Statistics dashboard',
                caption: 'Platform health at a glance',
            },
        ],
    },
    {
        title: 'Profile & Contribution Tracking',
        description:
            "To encourage participation, every user's profile surfaces their real contribution history: accepted solutions, KB articles authored, peer recognition. This turns knowledge sharing into something visible and valued rather than invisible extra work.",
        shots: [
            {
                src: '/images/projects/aks/Profile_trim.webp',
                alt: 'User profile screen showing statistics on contributions and accepted solutions',
                label: 'Profile',
                caption: 'Contribution & recognition stats',
            },
        ],
    },
];

const KeyFeatures: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-3">
                        Key Features
                    </p>
                    <h2 className={`${h2Section} mb-4`}>
                        Designing the core experience
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 leading-relaxed max-w-3xl mb-12">
                        Rather than spreading effort thin across every module, I focused depth on the areas with the highest complexity: discussion moderation, knowledge base governance, and the admin tooling that keeps both running at scale.
                    </p>

                    <div className="space-y-14">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200 pb-14 last:border-b-0 last:pb-0"
                            >
                                <h3 className="text-lg sm:text-xl font-grotesk font-bold text-black mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed max-w-3xl mb-6">
                                    {feature.description}
                                </p>
                                <div
                                    className={`grid grid-cols-1 ${feature.shots.length > 1 ? 'md:grid-cols-2' : ''} gap-6`}
                                >
                                    {feature.shots.map((shot, shotIndex) => (
                                        <ShotImage
                                            key={shotIndex}
                                            src={shot.src}
                                            alt={shot.alt}
                                            label={shot.label}
                                            caption={shot.caption}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;

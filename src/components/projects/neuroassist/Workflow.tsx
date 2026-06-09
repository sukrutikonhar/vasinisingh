'use client';

import React from 'react';

type BadgeVariant = 'gate' | 'flag' | 'branch' | 'governance' | 'auto';

const badgeStyles: Record<BadgeVariant, string> = {
    gate:       'bg-gray-100 text-gray-600 border-gray-200',
    flag:       'bg-gray-50 text-gray-500 border-gray-200',
    branch:     'bg-black text-white border-black',
    governance: 'bg-gray-100 text-gray-600 border-gray-200',
    auto:       'bg-gray-100 text-gray-600 border-gray-200',
};

interface Stage {
    num: string;
    title: string;
    badge?: { label: string; variant: BadgeVariant };
    desc: string;
    tags: string[];
    accent?: boolean;
    split?: { left: { head: string; body: string }; right: { head: string; body: string } };
}

const stages: Stage[] = [
    {
        num: '01',
        title: 'Triage & symptom collection',
        badge: { label: 'Entry gate', variant: 'gate' },
        desc: 'Captures presenting symptoms, vitals, and last known normal time. Non-stroke presentations and patients outside the 24-hour window exit here with a clear, specific message.',
        tags: ['Weakness · Facial droop · Speech', 'Last known normal (datetime)', 'Vitals · BP · Glucose'],
    },
    {
        num: '02',
        title: 'Pre-hospital & exclusion screen',
        badge: { label: 'Session flag', variant: 'flag' },
        desc: 'Yes/no exclusion criteria that persist as session flags, actively modifying downstream recommendations if any are positive.',
        tags: ['Intracranial hemorrhage history', 'Recent intracranial surgery', 'Anticoagulant use (48h)', 'GI bleed within 21 days'],
    },
    {
        num: '03',
        title: 'CT imaging & auto-analysis',
        badge: { label: 'Branch point', variant: 'branch' },
        desc: 'The critical decision point. CT reports are interpreted automatically for hemorrhage and large vessel occlusion, routing the case to one of four treatment pathways. Manual fallback activates on failure.',
        tags: ['CT Head (no contrast) · Hemorrhage detection', 'CTA Head & Neck · LVO detection', 'Auto-analysis · Manual fallback'],
        accent: true,
    },
    {
        num: '04',
        title: 'Protocol-specific data collection',
        badge: { label: 'Branched', variant: 'branch' },
        desc: 'Two parallel paths, each showing only the fields relevant to the detected stroke type. No extraneous inputs in view.',
        tags: [],
        split: {
            left:  { head: 'Hemorrhagic', body: 'SBP · DBP · CBC · Coagulation studies · Consciousness level' },
            right: { head: 'Ischemic',    body: 'Precise onset time · SBP · DBP · Glucose · Thrombolysis criteria' },
        },
    },
    {
        num: '05',
        title: 'Workflow decision engine',
        badge: { label: 'Auto-computed', variant: 'auto' },
        desc: 'Generates treatment recommendations using all prior session data, including patient weight for dosing. Ambiguous cases surface an explicit specialist escalation prompt, never a blank state.',
        tags: ['Weight-based tPA dosing', 'Thrombectomy guidance', 'BP management · Reversal agents', 'Escalation on ambiguity'],
    },
    {
        num: '06',
        title: 'Recommendation summary',
        badge: { label: 'Clinician action', variant: 'flag' },
        desc: 'Structured output of medication names, doses, ICU admission criteria, and follow-up actions. Clinicians can approve, annotate, or flag for specialist review.',
        tags: ['Medication name & dose', 'ICU admission criteria', 'Approve · Annotate · Escalate'],
    },
    {
        num: '07',
        title: 'Admin & protocol review',
        badge: { label: 'Governance', variant: 'governance' },
        desc: 'A separate surface for medical directors. Editable decision tree visualisation, versioned JSON/YAML protocol editing, change logs, and clinician feedback management.',
        tags: ['Decision tree editor', 'JSON / YAML protocol', 'Version history · Change logs'],
    },
    {
        num: '08',
        title: 'Help & support',
        desc: 'PDF protocol guidelines, FAQs, and live chat. Accessible at any stage. No encounter ends in a dead end.',
        tags: ['PDF guidelines', 'FAQs', 'Live chat support'],
    },
];

const Workflow: React.FC = () => {
    return (
        <section className="py-14 sm:py-16 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-10">
                        <div>
                            <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-3">
                                Workflow
                            </p>
                            <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-black leading-tight">
                                Eight stages, one session
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed lg:pt-9">
                            Each stage validates before advancing and carries state forward. No redundant data entry across the encounter.
                        </p>
                    </div>

                    {/* 2-column card grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {stages.map((stage) => (
                            <div
                                key={stage.num}
                                className={`bg-white rounded-[6px] p-5 flex flex-col gap-3 border ${stage.accent ? 'border-black' : 'border-gray-200'}`}
                            >
                                {/* Number + title + badge */}
                                <div className="flex flex-wrap items-baseline gap-2">
                                    <span className={`text-[10px] font-grotesk font-bold tabular-nums ${stage.accent ? 'text-black' : 'text-gray-400'}`}>
                                        {stage.num}
                                    </span>
                                    <span className="text-sm sm:text-base font-grotesk font-semibold text-black leading-snug">
                                        {stage.title}
                                    </span>
                                    {stage.badge && (
                                        <span className={`text-[9px] font-grotesk font-bold uppercase tracking-wider px-2 py-0.5 rounded-[3px] border flex-shrink-0 ${badgeStyles[stage.badge.variant]}`}>
                                            {stage.badge.label}
                                        </span>
                                    )}
                                </div>

                                {/* Accent line for branch point */}
                                {stage.accent && (
                                    <div className="h-px bg-black w-8" />
                                )}

                                {/* Description */}
                                <p className="text-xs sm:text-sm font-inter text-gray-600 leading-relaxed">
                                    {stage.desc}
                                </p>

                                {/* Split columns for stage 04 */}
                                {stage.split && (
                                    <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-[3px] overflow-hidden">
                                        <div className="bg-white p-3">
                                            <p className="text-[9px] font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-1">{stage.split.left.head}</p>
                                            <p className="text-xs font-inter text-gray-600 leading-relaxed">{stage.split.left.body}</p>
                                        </div>
                                        <div className="bg-white p-3">
                                            <p className="text-[9px] font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-1">{stage.split.right.head}</p>
                                            <p className="text-xs font-inter text-gray-600 leading-relaxed">{stage.split.right.body}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Tags */}
                                {stage.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                                        {stage.tags.map((tag, ti) => (
                                            <span key={ti} className="text-[10px] font-inter text-gray-500 px-2 py-1 border border-gray-100 bg-gray-50 rounded-[3px]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;

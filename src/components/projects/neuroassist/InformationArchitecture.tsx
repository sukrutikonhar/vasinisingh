'use client';

import React from 'react';

const InformationArchitecture: React.FC = () => {
    return (
        <section className="py-14 sm:py-16 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-8">
                        <div>
                            <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-3">
                                Information architecture
                            </p>
                            <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-black leading-tight">
                                How the system is structured
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed">
                            Two user types, two distinct surfaces. Clinicians move linearly through a gated encounter flow. Admins operate a separate governance layer. Session state bridges both.
                        </p>
                    </div>

                    {/* IA Diagram — rebuilt with wider canvas to prevent overlap */}
                    <div className="border border-gray-200 rounded-[6px] overflow-hidden bg-white">
                        <svg
                            viewBox="0 0 820 545"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ width: '100%', display: 'block', background: '#fff' }}
                            role="img"
                            aria-label="NeuroAssist information architecture diagram"
                        >
                            <defs>
                                <marker id="ia-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                    <path d="M0,0 L6,3 L0,6 Z" fill="#ccc" />
                                </marker>
                                <marker id="ia-arr-b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                    <path d="M0,0 L6,3 L0,6 Z" fill="#999" />
                                </marker>
                            </defs>

                            {/* ── Column labels ── */}
                            <text x="185" y="24" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="500" letterSpacing="0.1em" fill="#aaa">CLINICIAN FLOW</text>
                            <text x="610" y="24" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="500" letterSpacing="0.1em" fill="#aaa">ADMIN LAYER</text>

                            {/* Divider — pushed right so side annotations don't bleed into admin */}
                            <line x1="460" y1="32" x2="460" y2="530" stroke="#e4e4e4" strokeWidth="1" strokeDasharray="4,4" />

                            {/* ══ CLINICIAN FLOW ══ */}

                            {/* Patient entry */}
                            <rect x="100" y="40" width="170" height="36" rx="3" fill="#080808" />
                            <text x="185" y="63" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="500" fill="#fff">Patient entry</text>

                            <line x1="185" y1="76" x2="185" y2="96" stroke="#ccc" strokeWidth="1" markerEnd="url(#ia-arr)" />

                            {/* Stage 01 */}
                            <rect x="100" y="96" width="170" height="44" rx="3" fill="#fff" stroke="#e4e4e4" strokeWidth="1" />
                            <text x="185" y="114" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="500" fill="#080808">01 Triage &amp; symptoms</text>
                            <text x="185" y="130" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#999">Vitals · Last known normal</text>

                            {/* Exit annotation — x=290 ensures no overlap with admin boxes that start at x=465 */}
                            <line x1="270" y1="118" x2="290" y2="118" stroke="#e4e4e4" strokeWidth="1" markerEnd="url(#ia-arr)" />
                            <rect x="290" y="104" width="158" height="28" rx="3" fill="#f7f7f7" stroke="#e4e4e4" strokeWidth="1" />
                            <text x="369" y="122" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#aaa">Exit: not stroke / &gt;24h</text>

                            <line x1="185" y1="140" x2="185" y2="160" stroke="#ccc" strokeWidth="1" markerEnd="url(#ia-arr)" />

                            {/* Stage 02 */}
                            <rect x="100" y="160" width="170" height="44" rx="3" fill="#fff" stroke="#e4e4e4" strokeWidth="1" />
                            <text x="185" y="178" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="500" fill="#080808">02 Exclusion screen</text>
                            <text x="185" y="194" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#999">Anticoag · Surgery · Bleeds</text>

                            {/* Session flag annotation */}
                            <line x1="270" y1="182" x2="290" y2="182" stroke="#e4e4e4" strokeWidth="1" strokeDasharray="3,3" />
                            <rect x="290" y="168" width="158" height="28" rx="3" fill="#f7f7f7" stroke="#e4e4e4" strokeWidth="1" />
                            <text x="369" y="186" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#aaa">Session flag persists</text>

                            <line x1="185" y1="204" x2="185" y2="224" stroke="#ccc" strokeWidth="1" markerEnd="url(#ia-arr)" />

                            {/* Stage 03 */}
                            <rect x="100" y="224" width="170" height="44" rx="3" fill="#fff" stroke="#e4e4e4" strokeWidth="1" />
                            <text x="185" y="242" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="500" fill="#080808">03 CT imaging &amp; analysis</text>
                            <text x="185" y="258" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#999">Upload · Auto-detect · LVO</text>

                            <line x1="185" y1="268" x2="185" y2="288" stroke="#ccc" strokeWidth="1" markerEnd="url(#ia-arr)" />

                            {/* Branch box */}
                            <rect x="62" y="288" width="246" height="30" rx="3" fill="#f0f0f0" stroke="#e4e4e4" strokeWidth="1" />
                            <text x="185" y="308" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="500" fill="#555">Branch: stroke type detected</text>

                            {/* Branch splits */}
                            <line x1="130" y1="318" x2="107" y2="338" stroke="#ccc" strokeWidth="1" markerEnd="url(#ia-arr)" />
                            <line x1="240" y1="318" x2="263" y2="338" stroke="#ccc" strokeWidth="1" markerEnd="url(#ia-arr)" />

                            {/* Hemorrhagic path */}
                            <rect x="48" y="338" width="118" height="40" rx="3" fill="#fff" stroke="#e4e4e4" strokeWidth="1" />
                            <text x="107" y="354" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="500" fill="#080808">Hemorrhagic path</text>
                            <text x="107" y="369" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#999">BP · Reversal agents</text>

                            {/* Ischemic path */}
                            <rect x="204" y="338" width="118" height="40" rx="3" fill="#fff" stroke="#e4e4e4" strokeWidth="1" />
                            <text x="263" y="354" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="500" fill="#080808">Ischemic path</text>
                            <text x="263" y="369" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#999">LVO · tPA / thrombectomy</text>

                            {/* Merge to Stage 06 */}
                            <line x1="107" y1="378" x2="107" y2="420" stroke="#ccc" strokeWidth="1" />
                            <line x1="263" y1="378" x2="263" y2="420" stroke="#ccc" strokeWidth="1" />
                            <line x1="107" y1="420" x2="263" y2="420" stroke="#ccc" strokeWidth="1" />
                            <line x1="185" y1="420" x2="185" y2="440" stroke="#ccc" strokeWidth="1" markerEnd="url(#ia-arr)" />

                            {/* Stage 06 */}
                            <rect x="100" y="440" width="170" height="44" rx="3" fill="#080808" />
                            <text x="185" y="458" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="500" fill="#fff">06 Recommendation</text>
                            <text x="185" y="474" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(255,255,255,0.5)">Approve · Annotate · Escalate</text>

                            {/* Escalation dashed line — right edge of Stage 06 (x=270) → admin left edge (x=465) */}
                            <line x1="270" y1="462" x2="464" y2="462" stroke="#bbb" strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#ia-arr-b)" />

                            {/* ══ ADMIN LAYER (starts at x=465, safely past divider + side notes) ══ */}

                            {/* Admin dashboard */}
                            <rect x="465" y="40" width="290" height="44" rx="3" fill="#fff" stroke="#e4e4e4" strokeWidth="1" />
                            <text x="610" y="58" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="500" fill="#080808">Admin dashboard</text>
                            <text x="610" y="74" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#999">Protocol management · Governance</text>

                            <line x1="610" y1="84" x2="610" y2="104" stroke="#ccc" strokeWidth="1" markerEnd="url(#ia-arr)" />

                            {/* Protocol editor */}
                            <rect x="465" y="104" width="140" height="44" rx="3" fill="#fff" stroke="#e4e4e4" strokeWidth="1" />
                            <text x="535" y="122" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="500" fill="#080808">Protocol editor</text>
                            <text x="535" y="137" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#999">JSON / YAML</text>

                            {/* Version history */}
                            <rect x="615" y="104" width="140" height="44" rx="3" fill="#fff" stroke="#e4e4e4" strokeWidth="1" />
                            <text x="685" y="122" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="500" fill="#080808">Version history</text>
                            <text x="685" y="137" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#999">Change logs</text>

                            <line x1="535" y1="148" x2="535" y2="168" stroke="#ccc" strokeWidth="1" markerEnd="url(#ia-arr)" />
                            <line x1="685" y1="148" x2="685" y2="168" stroke="#ccc" strokeWidth="1" markerEnd="url(#ia-arr)" />

                            {/* Decision tree viz */}
                            <rect x="465" y="168" width="140" height="44" rx="3" fill="#fff" stroke="#e4e4e4" strokeWidth="1" />
                            <text x="535" y="186" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="500" fill="#080808">Decision tree viz</text>
                            <text x="535" y="201" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#999">Editable · Visual</text>

                            {/* Feedback mgmt */}
                            <rect x="615" y="168" width="140" height="44" rx="3" fill="#fff" stroke="#e4e4e4" strokeWidth="1" />
                            <text x="685" y="186" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="500" fill="#080808">Feedback mgmt</text>
                            <text x="685" y="201" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#999">Clinician comments</text>

                            {/* Merge row 2 → Help & support */}
                            <line x1="535" y1="212" x2="535" y2="232" stroke="#ccc" strokeWidth="1" />
                            <line x1="685" y1="212" x2="685" y2="232" stroke="#ccc" strokeWidth="1" />
                            <line x1="535" y1="232" x2="685" y2="232" stroke="#ccc" strokeWidth="1" />
                            <line x1="610" y1="232" x2="610" y2="252" stroke="#ccc" strokeWidth="1" markerEnd="url(#ia-arr)" />

                            {/* Help & support */}
                            <rect x="465" y="252" width="290" height="44" rx="3" fill="#fff" stroke="#e4e4e4" strokeWidth="1" />
                            <text x="610" y="270" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="500" fill="#080808">Help &amp; support</text>
                            <text x="610" y="286" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#999">PDF guidelines · FAQs · Chat</text>

                            {/* Escalation & review */}
                            <rect x="465" y="440" width="290" height="44" rx="3" fill="#fff" stroke="#e4e4e4" strokeWidth="1" />
                            <text x="610" y="458" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="500" fill="#080808">Escalation &amp; review</text>
                            <text x="610" y="474" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#999">Annotations · Specialist consult</text>
                        </svg>

                        {/* Legend */}
                        <div className="flex flex-wrap gap-5 px-4 py-3 border-t border-gray-100 bg-gray-50">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#080808] flex-shrink-0" />
                                <span className="text-xs font-inter text-gray-500">Primary action</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300 flex-shrink-0" />
                                <span className="text-xs font-inter text-gray-500">Screen / stage</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-gray-100 border border-gray-300 flex-shrink-0" />
                                <span className="text-xs font-inter text-gray-500">Decision / gate</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="24" height="8">
                                    <line x1="0" y1="4" x2="20" y2="4" stroke="#ccc" strokeWidth="1" strokeDasharray="3,2" />
                                </svg>
                                <span className="text-xs font-inter text-gray-500">Session state / escalation</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InformationArchitecture;

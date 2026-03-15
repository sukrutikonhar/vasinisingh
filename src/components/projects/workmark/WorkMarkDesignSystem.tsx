'use client';

import React from 'react';

const colors = [
    { name: 'Primary', hex: '#1B1B1B' },
    { name: 'Secondary', hex: '#6C6C6C' },
    { name: 'Tertiary', hex: '#DEDEDE' },
];

const typeScale = [
    { label: 'H1', size: '64px / 80px' },
    { label: 'H2', size: '48px / 64px' },
    { label: 'H3', size: '32px / 40px' },
    { label: 'H4', size: '24px / 32px' },
    { label: 'H5', size: '20px / 28px' },
    { label: 'Body Large', size: '18px / 28px' },
    { label: 'Body Medium', size: '16px / 24px' },
    { label: 'Body Small', size: '14px / 20px' },
    { label: 'Caption', size: '12px / 16px' },
];

export default function WorkmarkDesignSystem() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-6">
                        Design System
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 mb-12 max-w-3xl leading-relaxed">
                        A minimal, monochrome design system was established to keep focus on content and structure. Poppins is used for display and headings; body text is optimized for readability.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Colors */}
                        <div>
                            <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-500 mb-4">Colors</p>
                            <div className="space-y-3 mb-4">
                                {colors.map((c) => (
                                    <div
                                        key={c.name}
                                        className="rounded-lg border border-gray-200 min-h-[72px] flex items-center justify-center px-4"
                                        style={{ backgroundColor: c.hex }}
                                    >
                                        <p className={`text-sm font-grotesk font-bold ${c.hex === '#DEDEDE' ? 'text-black' : 'text-white'}`}>
                                            {c.name} {c.hex}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Typography */}
                        <div>
                            <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-500 mb-4">Typography</p>
                            <p className="text-2xl font-grotesk font-bold text-black mb-1">Display Font</p>
                            <p className="text-sm font-inter text-gray-500 mb-4">Poppins</p>
                            <div className="space-y-2">
                                {typeScale.map((t) => (
                                    <div key={t.label} className="flex justify-between gap-4 text-sm font-inter">
                                        <span className="font-grotesk font-bold text-black">{t.label}</span>
                                        <span className="text-gray-500">{t.size}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Inputs / Buttons */}
                        <div>
                            <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-500 mb-4">Inputs</p>
                            <div className="space-y-4">
                                <button
                                    type="button"
                                    className="w-full py-3 px-6 rounded-lg bg-black text-white text-sm font-inter font-semibold"
                                >
                                    Primary Button
                                </button>
                                <button
                                    type="button"
                                    className="w-full py-3 px-6 rounded-lg border-2 border-black text-black text-sm font-inter font-semibold bg-white"
                                >
                                    Secondary Button
                                </button>
                                <button type="button" className="w-full text-left text-sm font-inter font-semibold text-black underline">
                                    Tertiary Button
                                </button>
                                <div>
                                    <label className="block text-xs font-grotesk font-bold uppercase tracking-wider text-gray-500 mb-2">
                                        INPUT FIELD
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Placeholder text..."
                                        readOnly
                                        className="w-full py-3 px-4 rounded-lg border border-gray-300 text-sm font-inter bg-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

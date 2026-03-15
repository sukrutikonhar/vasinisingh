'use client';

const colors = [
    { name: 'Primary', hex: '#000000' },
    { name: 'Secondary', hex: '#B0B0B0' },
    { name: 'Light Gray', hex: '#F4F4F4' },
    { name: 'Medium Gray', hex: '#B0B0B0' },
    { name: 'Dark Gray', hex: '#333333' },
    { name: 'White', hex: '#FFFFFF' },
];

export default function VisualDesignSystem() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-black mb-6">Visual Design System</h2>
                    <p className="text-base font-inter text-gray-600 mb-10 max-w-3xl leading-relaxed">
                        A minimal, monochromatic palette and clear typography hierarchy keep the focus on content and reduce cognitive load.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                        <div>
                            <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-500 mb-4">Colors</p>
                            <div className="grid grid-cols-2 gap-3">
                                {colors.map((c) => (
                                    <div
                                        key={c.hex}
                                        className="rounded-lg border border-gray-200 min-h-[64px] flex items-center justify-center px-3 py-2 text-center"
                                        style={{ backgroundColor: c.hex }}
                                    >
                                        <span className={`text-xs font-grotesk font-bold ${c.hex === '#FFFFFF' || c.hex === '#F4F4F4' || c.hex === '#B0B0B0' ? 'text-gray-800' : 'text-white'}`}>
                                            {c.name} {c.hex}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-500 mb-4">Typography</p>
                            <div className="space-y-3">
                                <p className="font-grotesk font-bold text-black" style={{ fontSize: '48px' }}>Heading 1</p>
                                <p className="text-xs font-inter text-gray-500">48px / Bold</p>
                                <p className="font-grotesk font-bold text-black text-3xl">Heading 2</p>
                                <p className="text-xs font-inter text-gray-500">36px / Bold</p>
                                <p className="font-grotesk font-bold text-black text-xl">Heading 3</p>
                                <p className="text-xs font-inter text-gray-500">24px / Bold</p>
                                <p className="text-sm font-inter text-gray-700">Body text — 16px, regular weight.</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-500 mb-4">Components</p>
                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    <button type="button" className="px-4 py-2 bg-black text-white text-sm font-inter font-medium rounded-lg">
                                        Primary Button
                                    </button>
                                    <button type="button" className="px-4 py-2 border-2 border-black text-black text-sm font-inter font-medium rounded-lg">
                                        Secondary
                                    </button>
                                </div>
                                <div>
                                    <label className="block text-xs font-grotesk font-bold uppercase tracking-wider text-gray-500 mb-1">Input</label>
                                    <input
                                        type="text"
                                        placeholder="Placeholder text..."
                                        readOnly
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-inter bg-white"
                                    />
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <p className="text-sm font-grotesk font-bold text-black mb-1">Card</p>
                                    <p className="text-xs font-inter text-gray-600">Sample card component.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

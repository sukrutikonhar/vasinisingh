'use client';

import ImagePlaceholder from './ImagePlaceholder';

const items = [
    { label: 'Initial Prototype' },
    { label: 'User Feedback Round 1' },
    { label: 'Refined Design' },
];

export default function Iterations() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-black mb-6">Iterations & Testing</h2>
                    <p className="text-base font-inter text-gray-600 mb-10 max-w-3xl leading-relaxed">
                        We ran usability tests at each stage and iterated on the flows and UI based on feedback. Below are key milestones from initial prototype to refined design.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {items.map((item, i) => (
                            <div key={i}>
                                <ImagePlaceholder label="Image placeholder" />
                                <p className="text-xs font-inter text-gray-500 mt-2 text-center">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

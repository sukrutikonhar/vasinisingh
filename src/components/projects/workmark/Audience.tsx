'use client';

import ImagePlaceholder from './ImagePlaceholder';

const userGoals = [
    'Track progress across multiple projects in one place',
    'Demonstrate impact in performance reviews',
    'Stay aligned with team and manager expectations',
];

const painPoints = [
    'Too much time spent on manual updates',
    'Unclear how their work ties to broader goals',
    'Difficulty getting recognition for contributions',
];

export default function Audience() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-black mb-6">Target Audience Insights</h2>
                    <p className="text-base font-inter text-gray-600 mb-10 max-w-3xl leading-relaxed">
                        Research included surveys and interviews with employees across roles. We segmented users by age and usage patterns to tailor the experience.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <ImagePlaceholder label="Chart placeholder (e.g. Users 25-34, 35-44, 45+)" aspectRatio="aspect-[4/3]" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-sm font-grotesk font-bold uppercase tracking-wider text-gray-500 mb-3">User Goals</h3>
                                <ul className="space-y-2">
                                    {userGoals.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm font-inter text-gray-700">
                                            <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-grotesk font-bold uppercase tracking-wider text-gray-500 mb-3">Pain Points</h3>
                                <ul className="space-y-2">
                                    {painPoints.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm font-inter text-gray-700">
                                            <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

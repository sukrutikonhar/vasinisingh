'use client';

export default function MockOraaV2Summary() {
    const failureReasons = [
        { title: 'Generic Question Banks', desc: 'Existing tools offer static, one-size-fits-all questions that fail to reflect real job descriptions or individual career trajectories.' },
        { title: 'No Behavioral Intelligence', desc: 'Most platforms evaluate what you say — not how you say it. Pacing, filler words, tone, and confidence signals go completely unmeasured.' },
        { title: 'Anxiety-Inducing Interfaces', desc: 'High-stakes, judgment-heavy UI designs increase stress rather than building a psychologically safe environment for practice.' },
        { title: 'Missing Improvement Loop', desc: 'After a session ends, users are left with vague ratings and no clear path to improvement — turning each attempt into a dead end.' }
    ];

    return (
        <section id="solutions-fail" className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <div>
                            <div className="mb-12 sm:mb-16">
                                <div className="inline-block bg-gray-100 rounded-full px-4 py-2 mb-6">
                                    <span className="text-xs sm:text-sm font-grotesk font-bold text-[#202022] uppercase tracking-wider">03 — Contextual Analysis</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6">
                                    Why Current Solutions Fail
                                </h2>
                                <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-3xl leading-relaxed">
                                    The market is saturated with tools that treat interview preparation as a knowledge problem. But research consistently shows the gap is behavioral, emotional, and structural.
                                </p>
                            </div>
                            <div className="space-y-6">
                                {failureReasons.map((reason, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full flex-shrink-0 font-grotesk font-bold text-sm mt-0.5">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-grotesk font-bold text-black mb-1">{reason.title}</h3>
                                            <p className="text-sm font-inter text-gray-600 leading-relaxed">{reason.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="relative w-full bg-gray-100 rounded-xl overflow-hidden" style={{minHeight: '400px'}}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <p className="text-gray-400 text-sm font-inter">Image coming soon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

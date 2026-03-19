'use client';

export default function MockOraaV2Metrics() {
    const metrics = [
        { value: '81', label: 'System Usability Scale', sub: 'Top quartile usability, indicating high ease of use.' },
        { value: '4.45/5', label: 'CSAT', sub: 'High satisfaction across all tested demographics.' },
        { value: '−67%', label: 'Reduction in Confusion', sub: 'Following navigation and CTA redesigns.' }
    ];

    const futureRoadmap = [
        'Group interview simulations',
        'Peer-to-peer practice mode with AI moderation',
        'Multilingual avatar support for global markets',
    ];

    return (
        <section id="metrics" className="py-16 sm:py-20 md:py-24 bg-gray-100">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 sm:mb-16 text-center">
                        <p className="text-xs uppercase tracking-widest text-gray-500 font-grotesk font-bold mb-4">10. IMPACTS AND OUTCOMES</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-6">
                            Measurable Success
                        </h2>
                        <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            The final prototype successfully bridged the gap between human anxiety and structured learning, proving that confidence can be engineered through good design.
                        </p>
                    </div>

                    {/* Top metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-lg shadow-subtle border border-gray-200 text-center"
                            >
                                <div className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-2">{metric.value}</div>
                                <div className="text-base font-grotesk font-bold text-black mb-1">{metric.label}</div>
                                <div className="text-xs font-inter text-gray-500">{metric.sub}</div>
                            </div>
                        ))}
                    </div>

                    {/* Business Impact + Future Roadmap */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <h3 className="text-xl font-grotesk font-bold text-black mb-6">Business Potential</h3>
                            <p className="text-sm font-inter text-gray-700 leading-relaxed">
                                MockOraa targets a massive market of 10M+ fresh graduates and career-gap professionals. The scalable cloud-native architecture allows for a freemium B2C model alongside B2B licensing for university placement cells.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-grotesk font-bold text-black mb-6">Future Roadmap</h3>
                            <div className="space-y-2">
                                {futureRoadmap.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                                        <p className="text-sm font-inter text-gray-700 leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
'use client';

export default function MockOraaV2System() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8 sm:mb-10">
                        <p className="text-xs uppercase tracking-widest text-gray-500 font-grotesk font-bold mb-4">09. Technical Architecture</p>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4 sm:mb-6">
                            Product AI Symbiosis
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg font-inter text-gray-600 max-w-3xl leading-relaxed">
                            MockOraa required AI systems thinking beyond UI. We mapped the full data flow to ensure real-time latency was minimized and the intelligence layer served the user, not the other way around.
                        </p>
                    </div>

                    <div className="w-full rounded-lg sm:rounded-xl overflow-hidden mb-8 sm:mb-12 bg-gray-50 border border-gray-200 h-[300px] sm:h-[400px] md:h-[550px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/projects/mockoraa/system-architecture.webp"
                            alt="AI Architecture Diagram"
                            className="w-full h-full object-contain block"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

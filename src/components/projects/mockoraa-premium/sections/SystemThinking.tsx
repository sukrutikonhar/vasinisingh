'use client';

import React from 'react';

const SystemThinking: React.FC = () => {
    return (
        <section className="py-32 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-5xl font-bold mb-8">Designing Beyond Interfaces</h2>
                <p className="text-xl text-gray-300 mb-16 max-w-3xl">
                    AI architecture understanding ensuring real-time performance and scalable user experience.
                </p>

                <div className="bg-gray-900 rounded-2xl p-12 border border-gray-800">
                    <div className="aspect-[2/1] bg-gray-800 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-gray-400 mb-2">[Diagram Placeholder]</div>
                            <div className="text-sm text-gray-500">AI Architecture Flow</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">Realtime Engine</h3>
                        <p className="text-gray-400">WebRTC streaming for low-latency interaction</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">Intelligence Engine</h3>
                        <p className="text-gray-400">LLM context and RAG for dynamic responses</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">Instrumentation</h3>
                        <p className="text-gray-400">Scoring and user data analytics</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SystemThinking;
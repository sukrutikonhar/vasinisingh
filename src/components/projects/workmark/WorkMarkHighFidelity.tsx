'use client';

import React from 'react';

export default function WorkMarkHighFidelity() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-black text-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-grotesk font-bold mb-4">HIGH-FIDELITY DESIGNS</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-white mb-6">High-Fidelity Designs</h2>
                    <p className="text-base font-inter text-gray-300 mb-12 max-w-3xl leading-relaxed">
                        Descriptive text for high-fidelity designs goes here.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-800 rounded-lg flex items-center justify-center aspect-[4/3]">
                            <p className="text-gray-500 text-sm font-inter">Mobile app screen placeholder</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg flex items-center justify-center aspect-[4/3]">
                            <p className="text-gray-500 text-sm font-inter">Mobile app screen placeholder</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-gray-800 rounded-lg flex items-center justify-center aspect-[3/4]">
                                <p className="text-gray-500 text-sm font-inter">Screen placeholder</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

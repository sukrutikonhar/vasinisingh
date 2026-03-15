'use client';

import React from 'react';

export default function WorkMarkAudience() {
    const cards = [
        { title: 'Goals', desc: 'Goals description goes here.' },
        { title: 'Needs', desc: 'Needs description goes here.' },
        { title: 'Pain Points', desc: 'Pain points description goes here.' },
        { title: 'Motivations', desc: 'Motivations description goes here.' },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-black text-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-grotesk font-bold mb-4">DEFINING THE AUDIENCE</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-white mb-6">Defining the Audience</h2>
                    <p className="text-base font-inter text-gray-300 mb-12 max-w-3xl leading-relaxed">Descriptive text for defining the audience goes here.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
                        <div className="bg-gray-800 rounded-lg flex items-center justify-center min-h-[280px]">
                            <p className="text-gray-500 text-sm font-inter">Chart / graph image placeholder</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-3">USER PERSONA</h3>
                            <p className="text-sm font-inter text-gray-300 leading-relaxed mb-4">User persona description and bullet points go here.</p>
                            <ul className="space-y-2 text-sm font-inter text-gray-300">
                                <li>• Persona trait one</li>
                                <li>• Persona trait two</li>
                                <li>• Persona trait three</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {cards.map((card, index) => (
                            <div key={index} className="bg-white text-black p-6 rounded-lg">
                                <h4 className="text-sm font-grotesk font-bold uppercase tracking-wider text-black mb-2">{card.title}</h4>
                                <p className="text-sm font-inter text-gray-600 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

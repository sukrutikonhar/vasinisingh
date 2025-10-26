import React from 'react';
import { typography, spacing, containers } from '@/lib/typography';

const DesignJourneySection: React.FC = () => {
    const steps = [
        {
            number: "1",
            title: "Challenge",
            description: "represents defining the problem."
        },
        {
            number: "2",
            title: "Exploration",
            description: "represents mapping the solution."
        },
        {
            number: "3",
            title: "Iteration",
            description: "represents testing and refining."
        },
        {
            number: "4",
            title: "Outcome",
            description: "represents delivering products that solve real user needs."
        }
    ];

    return (
        <section className={`bg-white ${spacing.section}`}>
            <div className={containers.main}>
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="space-y-6">
                        <h2 className={`${typography.h2.section} text-gray-900`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                            Design Journey
                        </h2>

                        <p className={`${typography.body.large} text-gray-700`} style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                            Every project I take on is a new climb. My design process focuses on discovery, iteration and impact.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center space-y-4">
                                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                                    <span className={`${typography.stat.base} text-gray-900`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                                        {step.number}
                                    </span>
                                </div>
                                <div>
                                    <h3 className={`${typography.h3.subsection} text-gray-900 mb-2`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                                        {step.title}
                                    </h3>
                                    <p className={`${typography.body.small} text-gray-600`} style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dark Banner */}
                    <div className="bg-gray-900 text-white p-8 lg:p-12 rounded-2xl">
                        <p className={`${typography.body.large} lg:text-xl`} style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                            I have designed for B2B SaaS and B2C products, combining research, design, and storytelling to create impactful experiences. With expertise in FinTech, HR Tech, and Retail Tech, I have delivered over 40 websites across diverse industries.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignJourneySection;

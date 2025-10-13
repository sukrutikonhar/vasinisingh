import React from 'react';
import { User, FileText, Code, Lightbulb } from 'lucide-react';

const PhilosophySection: React.FC = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Illustration */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="w-full max-w-md">
                            <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                                <div className="space-y-6">
                                    {/* Person figure with icon */}
                                    <div className="flex items-end space-x-4">
                                        <div className="w-16 h-24 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                                            <User className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="w-12 h-3 bg-gray-300 rounded"></div>
                                            <div className="w-16 h-3 bg-gray-300 rounded"></div>
                                        </div>
                                    </div>

                                    {/* Floating cards with icons */}
                                    <div className="space-y-4">
                                        <div className="w-20 h-12 bg-white border-2 border-gray-200 rounded-lg shadow-sm flex items-center justify-center">
                                            <FileText className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <div className="w-16 h-10 bg-white border-2 border-gray-200 rounded-lg shadow-sm ml-8 flex items-center justify-center">
                                            <Code className="w-4 h-4 text-green-500" />
                                        </div>
                                        <div className="w-24 h-8 bg-white border-2 border-gray-200 rounded-lg shadow-sm flex items-center justify-center">
                                            <Lightbulb className="w-4 h-4 text-yellow-500" />
                                        </div>
                                    </div>

                                    {/* Decorative elements */}
                                    <div className="absolute top-4 right-4 w-8 h-8 bg-red-400 rounded-full"></div>
                                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-green-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Quote */}
                    <div className="space-y-6">
                        <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed">
                            &ldquo;I believe design is not just about pixels, it is about shaping journeys, empowering people, and creating products that leave a lasting impact.&rdquo;
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;

import React from 'react';
import { Search, User, Code, FileText } from 'lucide-react';

const MyPhilosophySection: React.FC = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left - Content */}
                    <div className="space-y-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                            My Philosophy
                        </h2>

                        <div className="space-y-6">
                            <p className="text-lg text-gray-700">
                                At the heart of my design journey lies one principle:{' '}
                                <span className="text-red-500 font-semibold">
                                    design is a conversation between people and technology.
                                </span>
                            </p>

                            <div className="space-y-4">
                                <p className="text-lg text-gray-700">
                                    I approach every project by asking:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start space-x-3">
                                        <span className="text-red-500 font-bold mt-1">•</span>
                                        <span className="text-lg text-gray-700">
                                            <span className="text-red-500 font-semibold">What problem are we truly solving?</span>
                                        </span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <span className="text-red-500 font-bold mt-1">•</span>
                                        <span className="text-lg text-gray-700">
                                            <span className="text-red-500 font-semibold">How can this solution make life simpler, meaningful, and empowering?</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-lg text-gray-700">
                                I thrive on translating research, data, and business needs into human-centered design systems that are not only functional but also engaging and emotionally resonant.
                            </p>
                        </div>
                    </div>

                    {/* Right - Illustration */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-md">
                            <div className="relative w-full h-96 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
                                <div className="space-y-6">
                                    {/* Person with magnifying glass */}
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-20 bg-gradient-to-b from-green-400 to-green-600 rounded-lg relative flex items-center justify-center">
                                            <User className="w-8 h-8 text-white" />
                                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
                                                <Search className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="w-12 h-3 bg-gray-300 rounded"></div>
                                            <div className="w-16 h-3 bg-gray-300 rounded"></div>
                                        </div>
                                    </div>

                                    {/* Floating cards with icons */}
                                    <div className="space-y-4">
                                        <div className="w-24 h-16 bg-white border-2 border-gray-200 rounded-lg shadow-sm flex items-center justify-center">
                                            <FileText className="w-6 h-6 text-blue-500" />
                                        </div>
                                        <div className="w-20 h-12 bg-white border-2 border-gray-200 rounded-lg shadow-sm ml-6 flex items-center justify-center">
                                            <Code className="w-5 h-5 text-green-500" />
                                        </div>
                                        <div className="w-28 h-10 bg-white border-2 border-gray-200 rounded-lg shadow-sm ml-12 flex items-center justify-center">
                                            <Search className="w-4 h-4 text-purple-500" />
                                        </div>
                                    </div>

                                    {/* Decorative elements */}
                                    <div className="absolute top-4 right-4 w-6 h-6 bg-green-400 rounded-full"></div>
                                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-blue-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyPhilosophySection;

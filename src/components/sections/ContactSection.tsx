import React from 'react';
import Image from 'next/image';
import { Mail, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const ContactSection: React.FC = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    {/* Contact Card */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 lg:p-16 shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left - Illustration */}
                            <div className="flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-md">
                                    <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                                        <Image
                                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop&crop=face&auto=format&q=80"
                                            alt="Creative designer working with digital tools"
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Overlay gradient for better text readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>

                                        {/* Floating design elements */}
                                        <div className="absolute top-6 right-6 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                                            <Mail className="w-6 h-6 text-gray-900" />
                                        </div>

                                        {/* Floating paper/document elements */}
                                        <div className="absolute bottom-8 left-6 w-16 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
                                            <div className="w-8 h-8 border-2 border-gray-300 rounded flex items-center justify-center">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-16 left-12 w-12 h-8 bg-white/90 rounded shadow-lg"></div>

                                        {/* Decorative dots */}
                                        <div className="absolute top-16 left-8 w-3 h-3 bg-red-400 rounded-full shadow-lg"></div>
                                        <div className="absolute bottom-20 right-12 w-4 h-4 bg-green-400 rounded-full shadow-lg"></div>
                                        <div className="absolute top-24 left-16 w-2 h-2 bg-blue-400 rounded-full shadow-lg"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Right - Contact Info */}
                            <div className="text-center lg:text-left space-y-8">
                                <div className="space-y-4">
                                    <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                                        Let&apos;s create meaningful experiences together
                                    </p>

                                    <div className="space-y-2">
                                        <a
                                            href="mailto:vasinisingh@gmail.com"
                                            className="block text-2xl lg:text-3xl font-bold text-white hover:text-yellow-400 transition-colors duration-300"
                                        >
                                            vasinisingh@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <Button
                                        variant="secondary"
                                        size="lg"
                                        className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <span className="flex items-center gap-2">
                                            Drop Me a Note
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </span>
                                    </Button>
                                </div>

                                {/* Additional CTA text */}
                                <p className="text-gray-400 text-sm">
                                    Ready to bring your ideas to life? Let&apos;s start the conversation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

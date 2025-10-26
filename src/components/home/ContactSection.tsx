import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
                                    <div className="relative w-full h-96 overflow-hidden">
                                        <Image
                                            src="/images/s_cta_box.svg"
                                            alt="Creative designer working with digital tools"
                                            fill
                                            className="object-contain p-4"
                                        />
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
                                    <Link href="/contact">
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
                                    </Link>
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

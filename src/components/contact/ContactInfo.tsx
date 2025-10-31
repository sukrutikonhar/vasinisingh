'use client';

import React from 'react';
import { Mail, Coffee } from 'lucide-react';

const ContactInfo: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {/* Email */}
                        <div className="p-8 sm:p-10 rounded-[6px] shadow-card bg-white border-2 border-gray-200 hover:border-black transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black flex items-center justify-center">
                                    <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-grotesk font-bold text-black">
                                    Email Me
                                </h3>
                            </div>
                            <a
                                href="mailto:vasinisingh@gmail.com"
                                className="text-lg sm:text-xl font-inter text-gray-700 hover:text-black transition-colors break-all"
                            >
                                vasinisingh@gmail.com
                            </a>
                        </div>

                        {/* Coffee Chat */}
                        <div className="p-8 sm:p-10 bg-white rounded-[6px] shadow-card border-2 border-gray-200 hover:border-black transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black flex items-center justify-center">
                                    <Coffee className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-grotesk font-bold text-black">
                                    Coffee Chat
                                </h3>
                            </div>
                            <p className="text-lg sm:text-xl font-inter text-gray-700">
                                Always up for coffee & good design talk ☕
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;


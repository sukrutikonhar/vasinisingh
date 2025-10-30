'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-xs sm:text-sm font-grotesk font-semibold text-black mb-2 sm:mb-3 uppercase tracking-wider"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 sm:px-6 sm:py-4 border-2 border-black bg-white font-inter text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-xs sm:text-sm font-grotesk font-semibold text-black mb-2 sm:mb-3 uppercase tracking-wider"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 sm:px-6 sm:py-4 border-2 border-black bg-white font-inter text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-xs sm:text-sm font-grotesk font-semibold text-black mb-2 sm:mb-3 uppercase tracking-wider"
                            >
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-4 py-3 sm:px-6 sm:py-4 border-2 border-black bg-white font-inter text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="group inline-flex items-center justify-center gap-3 bg-black text-white px-6 py-3 sm:px-10 sm:py-5 font-grotesk font-semibold hover:bg-gray-800 transition-all w-full sm:w-auto rounded-[12px]"
                        >
                            <span className="text-sm sm:text-base">Send Message</span>
                            <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;


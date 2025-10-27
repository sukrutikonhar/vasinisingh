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
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-grotesk font-semibold text-black mb-3 uppercase tracking-wider"
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
                                className="w-full px-6 py-4 border-2 border-black bg-white font-inter text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-grotesk font-semibold text-black mb-3 uppercase tracking-wider"
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
                                className="w-full px-6 py-4 border-2 border-black bg-white font-inter text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-grotesk font-semibold text-black mb-3 uppercase tracking-wider"
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
                                className="w-full px-6 py-4 border-2 border-black bg-white font-inter text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="group inline-flex items-center gap-3 bg-black text-white px-10 py-5 font-grotesk font-semibold hover:bg-gray-800 transition-all"
                        >
                            <span>Send Message</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;


'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Send } from 'lucide-react';
import Button from '../ui/Button';

const ContactFormSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        question: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left - Contact Form */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-lg text-gray-600 italic">
                                I&apos;d love to hear from you, whether it&apos;s about a project, collaboration, or just a friendly hello.
                            </p>
                            <p className="text-sm text-gray-500 italic">
                                (I usually reply within 24-48 hours)
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                                    Phone Number
                                </label>
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        value="+91"
                                        readOnly
                                        className="w-20 px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-center"
                                    />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                                    Your Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                                    placeholder="What's this about?"
                                />
                            </div>

                            {/* Question */}
                            <div>
                                <label htmlFor="question" className="block text-sm font-medium text-gray-900 mb-2">
                                    Your Question *
                                </label>
                                <textarea
                                    id="question"
                                    name="question"
                                    required
                                    rows={4}
                                    value={formData.question}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors resize-none"
                                    placeholder="Tell me about your project or question..."
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end">
                                <Button type="submit" size="lg" className="group">
                                    <span className="flex items-center gap-2">
                                        Submit
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Right - Profile Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=400&fit=crop&crop=face&auto=format&q=80"
                                    alt="Vasini Singh - Contact Photo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;

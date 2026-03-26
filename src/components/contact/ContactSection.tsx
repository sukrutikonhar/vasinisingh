'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateName = (name: string): boolean => {
        return /^[A-Za-z\s]+$/.test(name);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === 'name' && value && !validateName(value)) {
            setErrors({ ...errors, [name]: 'Name should only contain alphabets' });
        } else {
            setErrors({ ...errors, [name]: '' });
        }

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: { [key: string]: string } = {};

        if (!validateName(formData.name)) {
            newErrors.name = 'Name should only contain alphabets';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'ac3a9aed-ed6f-4295-8009-b5c94a8a0f10',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: 'New Contact Form Submission from Portfolio'
                })
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setErrors({});
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        { name: 'X', icon: 'simple-icons:x', url: 'https://x.com/VasiniSingh' },
        { name: 'Medium', icon: 'simple-icons:medium', url: 'https://medium.com/@vasinisingh' },
        { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/vasini-singh-18a442205/' },
        { name: 'Instagram', icon: 'mdi:instagram', url: 'https://www.instagram.com/ghumakkkad_ladki/' }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Top Section - Heading, Social Links, and Portrait */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-16">
                        {/* Left - Heading and Social Links */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <h1 className="text-5xl sm:text-6xl md:text-7xl font-grotesk font-bold text-black mb-4">
                                    Contact Me
                                </h1>
                                <p className="text-base sm:text-lg font-inter text-gray-600 mb-6">
                                    Get in touch with me via social media<br />or send me an email.
                                </p>
                            </div>

                            {/* Social Links - 2x2 Grid */}
                            <div className="grid grid-cols-2 gap-3 max-w-xs">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="flex items-center gap-2 group"
                                    >
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 group-hover:bg-black text-gray-900 group-hover:text-white transition-all duration-200 [&_.iconify]:shrink-0">
                                            <Icon
                                                icon={social.icon}
                                                className="w-4 h-4 [&_svg]:w-full [&_svg]:h-full"
                                                style={{ color: 'currentColor' }}
                                            />
                                        </div>
                                        <span className="text-xs sm:text-sm font-inter text-gray-800 group-hover:font-semibold transition-all">
                                            {social.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right - Portrait Image */}
                        <div className="flex items-center justify-center">
                            <div className="relative w-full max-w-sm aspect-video">
                                <Image
                                    src="/images/vasini-singh1.webp"
                                    alt="Vasini Singh"
                                    fill
                                    className="object-cover rounded-[6px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-200 mb-8 md:mb-12"></div>

                    {/* Contact Form Section - Centered */}
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-black mb-6 text-center">
                            Send me an email
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name and Email Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Name */}
                                <div>
                                    <label className="block text-xs font-inter text-gray-700 mb-1.5">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-3 py-2 border bg-white font-inter text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-gray-300 focus:border-black'
                                            }`}
                                        placeholder="Your name"
                                    />
                                    {errors.name && (
                                        <p className="mt-0.5 text-xs text-red-500">{errors.name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-xs font-inter text-gray-700 mb-1.5">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 bg-white font-inter text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-xs font-inter text-gray-700 mb-1.5">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 bg-white font-inter text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            {/* Success/Error Messages */}
                            {submitStatus === 'success' && (
                                <div className="p-3 bg-green-50 border border-green-500 rounded">
                                    <p className="text-xs text-green-800">Thank you! Your message has been sent successfully.</p>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="p-3 bg-red-50 border border-red-500 rounded">
                                    <p className="text-xs text-red-800">Oops! Something went wrong. Please try again.</p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="flex justify-center pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 font-grotesk font-semibold text-sm hover:bg-gray-800 transition-all rounded disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send email'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

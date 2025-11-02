'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateName = (name: string): boolean => {
        return /^[A-Za-z\s]+$/.test(name);
    };

    const validatePhone = (phone: string): boolean => {
        if (!phone) return true; // Phone is optional
        return /^[0-9+\-\s()]+$/.test(phone);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Validate on change
        if (name === 'name' && value && !validateName(value)) {
            setErrors({ ...errors, [name]: 'Name should only contain alphabets' });
        } else if (name === 'phone' && value && !validatePhone(value)) {
            setErrors({ ...errors, [name]: 'Phone should only contain numbers and valid characters' });
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

        // Validate all fields
        const newErrors: { [key: string]: string } = {};

        if (!validateName(formData.name)) {
            newErrors.name = 'Name should only contain alphabets';
        }

        if (formData.phone && !validatePhone(formData.phone)) {
            newErrors.phone = 'Phone should only contain numbers and valid characters';
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
                    phone: formData.phone,
                    message: formData.message,
                    subject: 'New Contact Form Submission from Portfolio'
                })
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
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

    return (
        <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="block text-xs font-grotesk font-semibold text-black mb-2 uppercase tracking-wider"
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
                        className={`w-full px-4 py-3 border-2 bg-white font-inter text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-black focus:border-gray-600'
                            }`}
                        placeholder="John Doe"
                    />
                    {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-xs font-grotesk font-semibold text-black mb-2 uppercase tracking-wider"
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
                        className="w-full px-4 py-3 border-2 border-black bg-white font-inter text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
                        placeholder="john@example.com"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label
                        htmlFor="phone"
                        className="block text-xs font-grotesk font-semibold text-black mb-2 uppercase tracking-wider"
                    >
                        Phone Number (Optional)
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 bg-white font-inter text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-black focus:border-gray-600'
                            }`}
                        placeholder="+1 234 567 8900"
                    />
                    {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <label
                        htmlFor="message"
                        className="block text-xs font-grotesk font-semibold text-black mb-2 uppercase tracking-wider"
                    >
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-black bg-white font-inter text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors resize-none"
                        placeholder="Tell me about your project..."
                    />
                </div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border-2 border-green-500 rounded-lg">
                        <p className="text-sm text-green-800">Thank you! Your message has been sent successfully.</p>
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border-2 border-red-500 rounded-lg">
                        <p className="text-sm text-red-800">Oops! Something went wrong. Please try again.</p>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2 font-grotesk font-semibold hover:bg-gray-800 transition-all w-full rounded-[12px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <span className="text-sm">Sending...</span>
                            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </>
                    ) : (
                        <>
                            <span className="text-sm">Send Message</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;


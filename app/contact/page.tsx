'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission logic
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl mb-8 text-center mt-24 [text-shadow:_0_2px_4px_rgba(0,0,0,0.2)]">
                    Contact Us
                </h1>
                <div className="max-w-2xl mx-auto">
                    <form action="https://formspree.io/f/mjkwllej" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-lg mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg focus:outline-none focus:border-[#f5e7c5] text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg focus:outline-none focus:border-[#f5e7c5] text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg focus:outline-none focus:border-[#f5e7c5] text-white resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#f5e7c5] text-[#1a1a1a] py-3 px-6 rounded-lg font-semibold hover:bg-white transition-colors duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
} 
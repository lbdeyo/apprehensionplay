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
        <div className="relative w-full min-h-screen">
            {/* Full-bleed background image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: 'url(/img/contact-bg.png)' }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 w-full h-full bg-[#070C17]/15 z-10" />
            {/* Constrained content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto space-y-12 pt-20 pb-16 text-left px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <section className="space-y-4 text-left">
                    <div className="relative w-full max-w-max">
                        <h1 className="text-6xl md:text-7xl text-white mt-6 md:mt-5 inline-block" style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}>
                            Contact Us
                        </h1>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="mt-12">
                    <div className="max-w-2xl">
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
                                    autoComplete="name"
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
                                    autoComplete="email"
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
                </section>
            </div>
        </div>
    );
} 
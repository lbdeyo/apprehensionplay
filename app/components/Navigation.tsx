'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Cast & Crew', path: '/cast-crew' },
        { name: 'Media', path: '/media' },
        // { name: 'Press Kit', path: '/press-kit' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#a8a07e] shadow-[0_4px_8px_-1px_rgba(0,0,0,0.3),0_2px_6px_-1px_rgba(0,0,0,0.2)] z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="inline-flex items-center" aria-label="Home">
                                <div className="transition-transform duration-200 hover:scale-115">
                                    <Image
                                        src="/img/logo.png"
                                        alt="Apprehension Play logo"
                                        width={340}
                                        height={97}
                                        style={{ height: '97px', width: 'auto' }}
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Social icons + nav links grouped together (desktop) */}
                    <div className="hidden sm:flex sm:items-center gap-8">
                        {/* Social icons */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/profile.php?id=61573063615073"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="text-[#f5e7c5] hover:text-white transition-colors"
                            >
                                <FaFacebook size={28} className="drop-shadow-lg" />
                            </a>
                            <a
                                href="https://www.instagram.com/apprehension3/"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-[#f5e7c5] hover:text-white transition-colors"
                            >
                                <FaInstagram size={28} className="drop-shadow-lg" />
                            </a>
                        </div>
                        {/* Nav links */}
                        <div className="flex items-center gap-8 ml-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className="px-3 py-2 text-lg text-white hover:text-white transition-colors [text-shadow:_0_2px_4px_rgba(0,0,0,0.2)]"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="sm:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#b32b17] transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="sm:hidden">
                    {/* Social icons for mobile */}
                    <div className="flex justify-start gap-4 mb-4 mt-6 pl-4">
                        <a
                            href="https://www.facebook.com/profile.php?id=61573063615073"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-[#f5e7c5] hover:text-white transition-colors"
                        >
                            <FaFacebook size={28} className="drop-shadow-lg" />
                        </a>
                        <a
                            href="https://www.instagram.com/apprehension3/"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-[#f5e7c5] hover:text-white transition-colors"
                        >
                            <FaInstagram size={28} className="drop-shadow-lg" />
                        </a>
                    </div>
                    <div className="pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className="block px-3 py-2 text-lg text-white hover:text-white transition-colors [text-shadow:_0_2px_4px_rgba(0,0,0,0.2)]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
} 
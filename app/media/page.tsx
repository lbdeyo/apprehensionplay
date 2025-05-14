'use client';

import { useState } from 'react';

export default function Media() {
    const [selectedMedia, setSelectedMedia] = useState<{ type: 'video' | 'image', src: string } | null>(null);

    const handleMediaClick = (type: 'video' | 'image', src: string) => {
        setSelectedMedia({ type, src });
    };

    const handleCloseModal = () => {
        setSelectedMedia(null);
    };

    return (
        <div className="relative w-full min-h-screen">
            {/* Full-bleed background image */}
            <div className="absolute inset-0 w-full h-full bg-cover bg-top bg-no-repeat z-0" style={{ backgroundImage: 'url(/img/apprehension-poster-concept-bg.jpg)' }} />
            {/* Overlay */}
            <div className="absolute inset-0 w-full h-full bg-[#070C17]/15 z-10" />
            {/* Constrained content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto space-y-12 pt-20 pb-16 text-left px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <section className="space-y-4 text-left">
                    <div className="relative w-full max-w-max">
                        <h1 className="text-6xl md:text-9xl lg:text-9xl text-white mt-6 md:mt-5 inline-block" style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}>
                            Media
                        </h1>
                    </div>
                </section>

                {/* Media Grid Section */}
                <section className="mt-16">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                        <div
                            className="mb-6 bg-[#070C17]/50 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden"
                            onClick={() => handleMediaClick('image', '/img/media/social-05052025.png')}
                        >
                            <img src="/img/media/social-05052025.png" alt="Media content" className="w-full h-auto object-contain" />
                        </div>
                        <div
                            className="mb-6 bg-[#070C17]/50 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden"
                            onClick={() => handleMediaClick('image', '/img/media/social-05012025a.jpg')}
                        >
                            <img src="/img/media/social-05012025a.jpg" alt="Media content" className="w-full h-auto object-contain" />
                        </div>
                        <div
                            className="mb-6 bg-[#070C17]/50 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden"
                            onClick={() => handleMediaClick('image', '/img/media/social-04292025a.jpg')}
                        >
                            <img src="/img/media/social-04292025a.jpg" alt="Media content" className="w-full h-auto object-contain" />
                        </div>
                        <div
                            className="mb-6 bg-[#070C17]/50 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden"
                            onClick={() => handleMediaClick('image', '/img/media/social-04272025.jpg')}
                        >
                            <img src="/img/media/social-04272025.jpg" alt="Media content" className="w-full h-auto object-contain" />
                        </div>
                        <div
                            className="mb-6 bg-[#070C17]/50 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden"
                            onClick={() => handleMediaClick('image', '/img/media/social-04232025.jpg')}
                        >
                            <img src="/img/media/social-04232025.jpg" alt="Media content" className="w-full h-auto object-contain" />
                        </div>
                        <div
                            className="mb-6 bg-[#070C17]/50 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden"
                            onClick={() => handleMediaClick('image', '/img/media/social-04142025b.png')}
                        >
                            <img src="/img/media/social-04142025b.png" alt="Media content" className="w-full h-auto object-contain" />
                        </div>
                        <div
                            className="mb-6 bg-[#070C17]/50 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden"
                            onClick={() => handleMediaClick('image', '/img/media/social-04132025.png')}
                        >
                            <img src="/img/media/social-04132025.png" alt="Media content" className="w-full h-auto object-contain" />
                        </div>
                        <div
                            className="mb-6 bg-[#070C17]/50 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden"
                            onClick={() => handleMediaClick('image', '/img/media/social-38.jpg')}
                        >
                            <img src="/img/media/social-38.jpg" alt="Media content" className="w-full h-auto object-contain" />
                        </div>
                        <div
                            className="mb-6 bg-[#070C17]/50 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden"
                            onClick={() => handleMediaClick('image', '/img/media/social20.jpg')}
                        >
                            <img src="/img/media/social20.jpg" alt="Media content" className="w-full h-auto object-contain" />
                        </div>
                        <div
                            className="mb-6 bg-[#070C17]/50 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden"
                            onClick={() => handleMediaClick('image', '/img/media/social19.jpg')}
                        >
                            <img src="/img/media/social19.jpg" alt="Media content" className="w-full h-auto object-contain" />
                        </div>
                        <div
                            className="mb-6 bg-[#070C17]/50 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden"
                            onClick={() => handleMediaClick('image', '/img/media/social16.jpg')}
                        >
                            <img src="/img/media/social16.jpg" alt="Media content" className="w-full h-auto object-contain" />
                        </div>
                        <div
                            className="mb-6 bg-[#070C17]/50 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden"
                            onClick={() => handleMediaClick('image', '/img/media/social15.jpg')}
                        >
                            <img src="/img/media/social15.jpg" alt="Media content" className="w-full h-auto object-contain" />
                        </div>
                        <div
                            className="mb-6 bg-[#070C17]/50 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden"
                            onClick={() => handleMediaClick('image', '/img/media/social10.jpg')}
                        >
                            <img src="/img/media/social10.jpg" alt="Media content" className="w-full h-auto object-contain" />
                        </div>
                        <div
                            className="mb-6 bg-[#070C17]/50 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden"
                            onClick={() => handleMediaClick('image', '/img/media/social4.jpg')}
                        >
                            <img src="/img/media/social4.jpg" alt="Media content" className="w-full h-auto object-contain" />
                        </div>
                        <div
                            className="mb-6 bg-[#070C17]/50 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden"
                            onClick={() => handleMediaClick('image', '/img/media/apprehension-poster-concept-1.jpg')}
                        >
                            <img src="/img/media/apprehension-poster-concept-1.jpg" alt="Media content" className="w-full h-auto object-contain" />
                        </div>
                        <div
                            className="mb-6 bg-[#070C17]/50 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden"
                            onClick={() => handleMediaClick('image', '/img/media/apprehension-poster-concept-3.jpg')}
                        >
                            <img src="/img/media/apprehension-poster-concept-3.jpg" alt="Media content" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                </section>

                {/* Modal/Lightbox */}
                {selectedMedia && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 pt-20 transition-opacity duration-300"
                        onClick={handleCloseModal}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
                            onClick={handleCloseModal}
                        >
                            ×
                        </button>
                        <div
                            className="relative max-w-7xl max-h-[90vh] w-full transform transition-transform duration-300"
                        >
                            {selectedMedia.type === 'video' ? (
                                <video
                                    src={selectedMedia.src}
                                    controls
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <img
                                    src={selectedMedia.src}
                                    alt="Enlarged media"
                                    className="w-full max-w-full max-h-[90vh] h-auto object-contain mx-auto"
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
} 
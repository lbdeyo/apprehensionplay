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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
                        {/* Placeholder items - these will be replaced with actual media content */}
                        <div
                            className="bg-[#070C17]/50 p-4 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                            onClick={() => handleMediaClick('video', '/path/to/video1')}
                        >
                            <div className="w-full h-full flex items-center justify-center text-white text-xl">
                                [Video Placeholder]
                            </div>
                        </div>
                        <div
                            className="bg-[#070C17]/50 p-4 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                            onClick={() => handleMediaClick('image', '/path/to/image1')}
                        >
                            <div className="w-full h-full flex items-center justify-center text-white text-xl">
                                [Image Placeholder]
                            </div>
                        </div>
                        <div
                            className="bg-[#070C17]/50 p-4 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                            onClick={() => handleMediaClick('video', '/path/to/video2')}
                        >
                            <div className="w-full h-full flex items-center justify-center text-white text-xl">
                                [Video Placeholder]
                            </div>
                        </div>
                        <div
                            className="bg-[#070C17]/50 p-4 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                            onClick={() => handleMediaClick('image', '/path/to/image2')}
                        >
                            <div className="w-full h-full flex items-center justify-center text-white text-xl">
                                [Image Placeholder]
                            </div>
                        </div>
                        <div
                            className="bg-[#070C17]/50 p-4 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                            onClick={() => handleMediaClick('video', '/path/to/video3')}
                        >
                            <div className="w-full h-full flex items-center justify-center text-white text-xl">
                                [Video Placeholder]
                            </div>
                        </div>
                        <div
                            className="bg-[#070C17]/50 p-4 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                            onClick={() => handleMediaClick('image', '/path/to/image3')}
                        >
                            <div className="w-full h-full flex items-center justify-center text-white text-xl">
                                [Image Placeholder]
                            </div>
                        </div>
                    </div>
                </section>

                {/* Modal/Lightbox */}
                {selectedMedia && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
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
                            onClick={(e) => e.stopPropagation()}
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
                                    className="w-full h-full object-contain"
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
} 
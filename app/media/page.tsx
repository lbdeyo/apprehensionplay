'use client';

import { useState, useEffect } from 'react';

export default function Media() {
    const [selectedMedia, setSelectedMedia] = useState<{ type: 'video' | 'image', src: string } | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Array of all media items
    const mediaItems = [
        { type: 'image' as const, src: '/img/bts/bars/reading3-big-gang.jpg' },
        { type: 'image' as const, src: '/img/bts/bars/reading3-sonnet-jenny.jpg' },
        { type: 'image' as const, src: '/img/bts/bars/reading-3-buzz-lance.jpg' },
        { type: 'image' as const, src: '/img/media/social-05052025.png' },
        { type: 'image' as const, src: '/img/media/social-05012025a.jpg' },
        { type: 'image' as const, src: '/img/media/social-04292025a.jpg' },
        { type: 'image' as const, src: '/img/media/social-04272025.jpg' },
        { type: 'image' as const, src: '/img/media/social-04232025.jpg' },
        { type: 'image' as const, src: '/img/media/social-04142025b.png' },
        { type: 'image' as const, src: '/img/media/social-04132025.png' },
        { type: 'image' as const, src: '/img/media/social-38.jpg' },
        { type: 'image' as const, src: '/img/media/social20.jpg' },
        { type: 'image' as const, src: '/img/media/social19.jpg' },
        { type: 'image' as const, src: '/img/media/social16.jpg' },
        { type: 'image' as const, src: '/img/media/social15.jpg' },
        { type: 'image' as const, src: '/img/media/social10.jpg' },
        { type: 'image' as const, src: '/img/media/social4.jpg' },
        { type: 'image' as const, src: '/img/media/apprehension-poster-concept-1.jpg' },
        { type: 'image' as const, src: '/img/media/apprehension-poster-concept-3.jpg' },
    ];

    const handleMediaClick = (type: 'video' | 'image', src: string) => {
        const index = mediaItems.findIndex(item => item.src === src);
        setCurrentIndex(index);
        setSelectedMedia({ type, src });
    };

    const handleCloseModal = () => {
        setSelectedMedia(null);
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            setSelectedMedia(mediaItems[newIndex]);
        }
    };

    const handleNext = () => {
        if (currentIndex < mediaItems.length - 1) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            setSelectedMedia(mediaItems[newIndex]);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (selectedMedia) {
                if (event.key === 'Escape') {
                    handleCloseModal();
                } else if (event.key === 'ArrowLeft') {
                    handlePrevious();
                } else if (event.key === 'ArrowRight') {
                    handleNext();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedMedia, currentIndex]);

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
                            Images/Videos
                        </h1>
                    </div>
                </section>

                {/* Media Grid Section */}
                <section className="mt-16">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                        {mediaItems.map((item, index) => (
                            <div
                                key={item.src}
                                className="mb-6 bg-[#070C17]/50 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 overflow-hidden"
                                onClick={() => handleMediaClick(item.type, item.src)}
                            >
                                <img src={item.src} alt="Media content" className="w-full h-auto object-contain" />
                            </div>
                        ))}
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
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrevious();
                            }}
                            disabled={currentIndex === 0}
                        >
                            ←
                        </button>
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                            }}
                            disabled={currentIndex === mediaItems.length - 1}
                        >
                            →
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
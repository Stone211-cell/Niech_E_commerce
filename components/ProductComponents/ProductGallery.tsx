"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
    images: string[];
    title: string;
}

const ProductGallery = ({ images, title }: ProductGalleryProps) => {
    const [current, setCurrent] = useState(0);

    const allImages = images.length > 0 ? images : [];
    if (allImages.length === 0) return null;

    const prev = () => setCurrent((c) => (c === 0 ? allImages.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === allImages.length - 1 ? 0 : c + 1));

    return (
        <div className="w-full">
            {/* Main Image */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-900 group">
                <Image
                    src={allImages[current]}
                    alt={`${title} - ${current + 1}`}
                    fill
                    priority
                    className="object-cover transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Navigation arrows */}
                {allImages.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Dots indicator */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {allImages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`w-2 h-2 rounded-full transition-all ${i === current
                                            ? "bg-white w-6"
                                            : "bg-white/40 hover:bg-white/60"
                                        }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Thumbnail strip */}
            {allImages.length > 1 && (
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                    {allImages.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${i === current
                                    ? "border-purple-500 ring-2 ring-purple-500/30"
                                    : "border-white/10 hover:border-white/30"
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`${title} thumbnail ${i + 1}`}
                                fill
                                className="object-cover"
                                sizes="80px"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductGallery;

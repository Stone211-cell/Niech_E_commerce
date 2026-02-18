"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface CardCarouselProps {
    images: string[];
    title: string;
}

const CardCarousel = ({ images, title }: CardCarouselProps) => {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    }, [images.length]);

    // Auto-slide every 3 seconds
    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(next, 3000);
        return () => clearInterval(timer);
    }, [next, images.length]);

    if (images.length === 0) return null;

    return (
        <div className="relative w-full h-60 rounded-xl overflow-hidden">
            {images.map((img, i) => (
                <Image
                    key={i}
                    src={img}
                    height={1000}
                    width={1000}
                    className={`absolute inset-0 h-60 w-full object-cover rounded-xl transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"
                        }`}
                    alt={`${title} - ${i + 1}`}
                />
            ))}

            {/* Dots */}
            {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-white w-4" : "bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CardCarousel;

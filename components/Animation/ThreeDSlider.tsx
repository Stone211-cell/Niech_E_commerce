"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, ArrowRight, ShoppingBag, Eye } from "lucide-react";
import { ProductCardProps } from "@/utils/types";

interface ThreeDSliderProps {
    products: ProductCardProps[];
}

const ThreeDSlider: React.FC<ThreeDSliderProps> = ({ products }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Constants
    const CARD_WIDTH = 300; // Base width for calculation, but we'll use responsive CSS
    const GAP = 20;

    const { contextSafe } = useGSAP({ scope: containerRef });

    const handleNext = contextSafe(() => {
        if (isAnimating) return;
        if (activeIndex >= products.length - 1) {
            // Optional: Loop back to start? Let's just stop for now to keep it simple or implement loop
            animateToSlide(0);
            return;
        }
        animateToSlide(activeIndex + 1);
    });

    const handlePrev = contextSafe(() => {
        if (isAnimating) return;
        if (activeIndex <= 0) {
            animateToSlide(products.length - 1);
            return;
        }
        animateToSlide(activeIndex - 1);
    });

    const handleDotClick = contextSafe((index: number) => {
        if (isAnimating || index === activeIndex) return;
        animateToSlide(index);
    });

    const animateToSlide = (index: number) => {
        setIsAnimating(true);
        setActiveIndex(index);

        // We will animate the "camera" or the container to center the active slide
        // For a 3D effect, we can animate the cards themselves

        // This part is handled by the useEffect/useGSAP hook that responds to activeIndex change
        // But for smoother control, we can do it here directly or let the reactive state handle it.
        // Let's use reactive state + GSAP for the "FLIP" like behavior or just simple tweening.
    };

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".product-card");

        // 3D Perspective Animation
        // We want the active card to be front and center, others to be rotated/scaled back

        cards.forEach((card, i) => {
            const distance = i - activeIndex;
            const absDistance = Math.abs(distance);

            // Calculate 3D properties
            // Center: scale 1.2, zIndex 10, rotateY 0, x 0, opacity 1
            // Neighbors: scale 0.9, zIndex 5, rotateY +/- 45deg, x +/- offset, opacity 0.7

            let scale = 1;
            let x = 0;
            let opacity = 1;
            let zIndex = 10 - absDistance;
            let rotateY = 0;
            let blur = 0;

            if (i === activeIndex) {
                scale = 1.2;
                x = 0;
                opacity = 1;
                rotateY = 0;
                blur = 0;
            } else {
                scale = 0.8;
                // Distribute cards along X axis but overlap them slightly
                x = distance * 220; // spacing
                opacity = i === activeIndex ? 1 : Math.max(0.2, 1 - absDistance * 0.3);
                rotateY = distance > 0 ? -15 : 15; // Point towards center
                blur = Math.min(absDistance * 2, 6);
            }

            // Hiding far away cards for performance
            const isVisible = absDistance <= 2;

            gsap.to(card, {
                x: x,
                scale: scale,
                rotationY: rotateY,
                zIndex: zIndex,
                opacity: isVisible ? opacity : 0,
                filter: `blur(${blur}px)`,
                duration: 0.8,
                ease: "power3.out",
                overwrite: "auto",
                onComplete: () => {
                    if (i === activeIndex) setIsAnimating(false);
                }
            });
        });

    }, [activeIndex, products]);

    if (!products || products.length === 0) return null;

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 perspective-1000"
            style={{ perspective: "1000px" }}
        >
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />

            {/* Cards Container - Centered */}
            <div className="relative w-full max-w-5xl h-full flex items-center justify-center transform-style-3d">
                {products.map((product, index) => {
                    const imgSrc = product.image || "/placeholder.png";
                    const title = product.title || "No title";

                    return (
                        <div
                            key={product.id}
                            className="product-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[320px] bg-card/80 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl overflow-hidden cursor-pointer transform-style-3d group"
                            onClick={() => handleDotClick(index)}
                        >
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src={imgSrc}
                                    alt={title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                                    <h3 className="text-2xl font-bold mb-1 drop-shadow-lg tracking-wide">{title}</h3>
                                    <p className="text-sm font-light text-white/80 line-clamp-2 mb-4">
                                        {product.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-primary-foreground">THB {product.price}</span>
                                        <Link
                                            href={`/product/${product.id}`}
                                            className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur transition-all hover:scale-110 active:scale-95"
                                        >
                                            <Eye size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50">
                <button
                    onClick={handlePrev}
                    className="p-4 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-primary/25 group"
                >
                    <ArrowLeft size={24} className="transition-transform group-hover:-translate-x-1" />
                </button>

                <div className="flex gap-2">
                    {products.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleDotClick(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-primary shadow-[0_0_10px_var(--primary)]' : 'w-2 bg-primary/20 hover:bg-primary/50'}`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="p-4 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-primary/25 group"
                >
                    <ArrowRight size={24} className="transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </div>
    );
};

export default ThreeDSlider;

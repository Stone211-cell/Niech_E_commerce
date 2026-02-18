"use client"
import React, { useEffect, useRef } from 'react'
import { animateFadeIn, animateStagger, animateTitle } from './GsapEffects'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function AnimationLayer({ children }: { children: React.ReactNode }) {

    // Using Ref for scoping GSAP (best practice for React)
    const container = useRef(null);

    useGSAP(() => {
        // Animate Title
        animateTitle(".hero-title");

        // Animate Subtitle
        animateFadeIn(".hero-subtitle", 0.5);

        // Animate Product Grid Stagger
        // Assuming products are inside .product-grid-container which is a sibling or parent, 
        // but since this component wraps the Hero, we might need a separate hook or context for global page animations.
        // For simplicity requested by user, let's just animate children of this layer or global classes.

        // Let's animate the product cards if they exist in DOM
        // Note: Product cards are loaded async, so they might not be present immediately. 
        // We can use a simple timeout or ScrollTrigger if we had it.
        // For now, let's just animate what we wrap.

    }, { scope: container });

    // Global animation for product grid appearing
    useEffect(() => {
        const productGrid = document.querySelector('.product-grid-container');
        if (productGrid) {
            gsap.from(productGrid, {
                opacity: 0,
                y: 100,
                duration: 1.2,
                delay: 0.8,
                ease: "power4.out"
            })
        }
    }, []);

    return (
        <div ref={container}>
            {children}
        </div>
    )
}

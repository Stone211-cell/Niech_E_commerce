"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const subTextRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Hero Text Animation (Staggered Reveal)
        tl.fromTo(
            ".hero-text-char",
            { y: 100, opacity: 0, rotateX: -45 },
            {
                y: 0,
                opacity: 1,
                rotateX: 0,
                stagger: 0.05,
                duration: 1.2,
                ease: "power4.out",
            }
        )
            .fromTo(
                subTextRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
                "-=0.8"
            );

        // Scroll-triggered animations for benefits
        const benefits = gsap.utils.toArray<HTMLElement>(".benefit-card");
        benefits.forEach((card, i) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    delay: i * 0.1,
                }
            );
        });

    }, { scope: containerRef });

    // Helper to split text for animation
    const splitText = (text: string) => {
        return text.split("").map((char, index) => (
            <span key={index} className="hero-text-char inline-block whitespace-pre">
                {char}
            </span>
        ));
    };

    return (
        <section ref={containerRef} className="relative w-full overflow-hidden bg-background">
            {/* Hero Section */}
            <div className="relative h-screen flex flex-col justify-center items-center text-center px-4 z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-70 pointer-events-none" />

                <h1 ref={textRef} className="text-6xl md:text-9xl font-black tracking-tighter mb-6 leading-[0.9] overflow-hidden">
                    <div className="flex flex-wrap justify-center gap-x-4">
                        <span className="inline-block overflow-hidden pb-4">
                            {splitText("ELEVATE")}
                        </span>
                        <span className="inline-block overflow-hidden text-primary pb-4">
                            {splitText("YOUR")}
                        </span>
                        <span className="inline-block overflow-hidden pb-4">
                            {splitText("STYLE")}
                        </span>
                    </div>
                </h1>

                <p ref={subTextRef} className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light tracking-wide mb-10">
                    Discover a curated collection of premium products designed to define who you are.
                </p>

                <button className="group relative px-8 py-4 bg-primary text-primary-foreground text-lg font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
                    <span className="relative z-10 flex items-center gap-2">
                        Shop Collection <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>
            </div>

            {/* Benefits Section */}
            <div className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Premium Quality", desc: "Crafted with the finest materials for lasting durability." },
                        { title: "Modern Design", desc: "Aesthetics that blend seamlessly with your lifestyle." },
                        { title: "Eco-Friendly", desc: "Sustainable choices for a better tomorrow." }
                    ].map((benefit, idx) => (
                        <div key={idx} className="benefit-card p-8 rounded-2xl bg-muted/30 border border-white/5 backdrop-blur hover:bg-muted/50 transition-colors">
                            <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                            <p className="text-muted-foreground">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Intro;

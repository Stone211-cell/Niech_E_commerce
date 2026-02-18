"use client"
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

// Animation สำหรับหน้าแรกทั้งหมด
export default function HomeAnimation({ children }: { children: React.ReactNode }) {
    const box = useRef(null)

    useGSAP(() => {

        // ===== HERO =====
        // ข้อความใหญ่ค่อยๆ โผล่
        gsap.from(".home-hero-text", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
        })

        // ข้อความรองค่อยๆ โผล่
        gsap.from(".home-hero-sub", {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: "power2.out",
        })

        // ปุ่ม CTA ค่อยๆ โผล่
        gsap.from(".home-hero-btn", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.8,
            ease: "back.out(1.7)",
        })

        // วงกลม Glow วนลูป
        gsap.to(".home-glow", {
            scale: 1.3,
            opacity: 0.5,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        })

        // ===== ABOUT =====
        gsap.from(".about-text", {
            x: -80,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 80%",
            }
        })

        gsap.from(".about-image", {
            x: 80,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 80%",
            }
        })

        // ===== SERVICES =====
        gsap.from(".service-card", {
            y: 80,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
                trigger: ".service-section",
                start: "top 80%",
            }
        })

        // ===== STATS =====
        gsap.from(".stat-item", {
            y: 60,
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".stats-section",
                start: "top 80%",
            }
        })

        // ===== SHOWCASE =====
        gsap.from(".showcase-item", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".showcase-section",
                start: "top 80%",
            }
        })

        // ===== TESTIMONIALS =====
        gsap.from(".testi-card", {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
                trigger: ".testi-section",
                start: "top 80%",
            }
        })

        // ===== STEPS =====
        gsap.from(".step-item", {
            x: -60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".steps-section",
                start: "top 80%",
            }
        })

        // ===== BRANDS =====
        gsap.from(".brand-item", {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".brands-section",
                start: "top 85%",
            }
        })

        // ===== FAQ =====
        gsap.from(".faq-item", {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".faq-section",
                start: "top 85%",
            }
        })

        // ===== FINAL CTA =====
        gsap.from(".final-cta", {
            y: 80,
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
            scrollTrigger: {
                trigger: ".final-section",
                start: "top 80%",
            }
        })

    }, { scope: box })

    return (
        <div ref={box}>
            {children}
        </div>
    )
}

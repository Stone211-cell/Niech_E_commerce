"use client"
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

// Component สำหรับ Animation ตัวอักษร Hero
export default function HeroAnimation({ children }: { children: React.ReactNode }) {
    const box = useRef(null)

    useGSAP(() => {
        // ทำให้ Title ค่อยๆ โผล่ขึ้นมา
        gsap.from(".hero-title", {
            y: 80,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
        })

        // ทำให้ Subtitle ค่อยๆ โผล่ (ช้ากว่า title)
        gsap.from(".hero-subtitle", {
            y: 40,
            opacity: 0,
            duration: 1,
            delay: 0.4,
            ease: "power2.out",
        })

        // ทำให้ปุ่ม CTA ค่อยๆ โผล่
        gsap.from(".hero-cta", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.7,
            ease: "back.out(1.7)",
        })

        // เอฟเฟค Glow วนลูป
        gsap.to(".glow-circle", {
            scale: 1.2,
            opacity: 0.6,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        })

    }, { scope: box })

    return (
        <div ref={box}>
            {children}
        </div>
    )
}

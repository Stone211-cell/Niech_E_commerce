"use client"
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

// Component สำหรับ Animation เมื่อ Scroll ลงมาเจอ
export default function ScrollAnimation({ children }: { children: React.ReactNode }) {
    const box = useRef(null)

    useGSAP(() => {
        // ทำให้ Feature Card ค่อยๆ โผล่ทีละใบ
        gsap.from(".feature-card", {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".feature-section",
                start: "top 80%",
            }
        })

        // ทำให้ Product Section ค่อยๆ โผล่
        gsap.from(".product-section", {
            y: 80,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".product-section",
                start: "top 85%",
            }
        })

        // ทำให้ Showcase ค่อยๆ Slide เข้ามาจากซ้ายขวา
        gsap.from(".showcase-left", {
            x: -80,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".showcase-section",
                start: "top 75%",
            }
        })

        gsap.from(".showcase-right", {
            x: 80,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".showcase-section",
                start: "top 75%",
            }
        })

    }, { scope: box })

    return (
        <div ref={box}>
            {children}
        </div>
    )
}

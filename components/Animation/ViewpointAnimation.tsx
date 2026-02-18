"use client"
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

// Animation สำหรับหน้า Viewpoint — แต่ละ card ค่อยๆ โผล่
export default function ViewpointAnimation({ children }: { children: React.ReactNode }) {
    const box = useRef(null)

    useGSAP(() => {

        // Hero text
        gsap.from(".vp-hero", {
            y: 80,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
        })

        // Card slide-in จากซ้าย
        gsap.utils.toArray<HTMLElement>(".vp-card-left").forEach((card) => {
            gsap.from(card, {
                x: -100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                }
            })
        })

        // Card slide-in จากขวา
        gsap.utils.toArray<HTMLElement>(".vp-card-right").forEach((card) => {
            gsap.from(card, {
                x: 100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                }
            })
        })

        // Quote section
        gsap.from(".vp-quote", {
            y: 60,
            opacity: 0,
            scale: 0.95,
            duration: 1,
            scrollTrigger: {
                trigger: ".vp-quote",
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

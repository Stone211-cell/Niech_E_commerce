"use client"
import { useEffect } from "react"

// Smooth Scroll ทั้งเว็บ — เลื่อนสมูทๆ มี duration
export default function SmoothScroll() {
    useEffect(() => {
        // ใช้ CSS scroll-behavior + custom smooth
        document.documentElement.style.scrollBehavior = "smooth"

        // Smooth wheel scroll (เพิ่ม delay/duration)
        let isScrolling = false

        const smoothWheel = (e: WheelEvent) => {
            if (isScrolling) return

            e.preventDefault()
            isScrolling = true

            const target = window.scrollY + e.deltaY * 1.5

            window.scrollTo({
                top: target,
                behavior: "smooth",
            })

            // ป้องกันการ scroll ซ้อน
            setTimeout(() => {
                isScrolling = false
            }, 100)
        }

        window.addEventListener("wheel", smoothWheel, { passive: false })

        return () => {
            window.removeEventListener("wheel", smoothWheel)
            document.documentElement.style.scrollBehavior = ""
        }
    }, [])

    return null
}

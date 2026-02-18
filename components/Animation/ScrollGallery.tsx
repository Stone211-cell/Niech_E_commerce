"use client"
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

// รูปสำหรับแต่ละ column
const leftImages = [
    { src: "/images/BannerRoll-On.jpg", label: "แฟชั่น" },
    { src: "/images/BannerRoll-On.jpg", label: "สกินแคร์" },
    { src: "/images/BannerRoll-On.jpg", label: "อุปกรณ์เสริม" },
    { src: "/images/BannerRoll-On.jpg", label: "ดีไซน์" },
]

const centerImages = [
    { src: "/images/BannerRoll-On.jpg", label: "Premium Collection", desc: "คอลเลกชั่นพิเศษ คัดสรรเพื่อคุณ" },
    { src: "/images/BannerRoll-On.jpg", label: "New Arrivals", desc: "สินค้ามาใหม่ อัพเดททุกสัปดาห์" },
    { src: "/images/BannerRoll-On.jpg", label: "Best Sellers", desc: "สินค้าขายดี ยอดนิยมอันดับ 1" },
    { src: "/images/BannerRoll-On.jpg", label: "Limited Edition", desc: "จำนวนจำกัด พลาดแล้วพลาดเลย" },
]

const rightImages = [
    { src: "/images/BannerRoll-On.jpg", label: "ของตกแต่ง" },
    { src: "/images/BannerRoll-On.jpg", label: "เทคโนโลยี" },
    { src: "/images/BannerRoll-On.jpg", label: "กีฬา" },
    { src: "/images/BannerRoll-On.jpg", label: "ท่องเที่ยว" },
]

export default function ScrollGallery() {
    const box = useRef(null)

    useGSAP(() => {

        // คอลัมน์ซ้าย — เลื่อนลง
        gsap.to(".gallery-left", {
            y: -300,
            ease: "none",
            scrollTrigger: {
                trigger: ".gallery-wrapper",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            }
        })

        // คอลัมน์ขวา — เลื่อนขึ้น (ทิศทางตรงข้าม)
        gsap.to(".gallery-right", {
            y: 300,
            ease: "none",
            scrollTrigger: {
                trigger: ".gallery-wrapper",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            }
        })

        // คอลัมน์กลาง — อยู่นิ่งๆ (pin) แต่สลับรูป
        gsap.to(".gallery-center-strip", {
            y: -200,
            ease: "none",
            scrollTrigger: {
                trigger: ".gallery-wrapper",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            }
        })

        // แต่ละการ์ดค่อยๆ โผล่
        gsap.utils.toArray<HTMLElement>(".gallery-card").forEach((card, i) => {
            gsap.from(card, {
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
                delay: i * 0.05,
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                }
            })
        })

    }, { scope: box })

    return (
        <div ref={box}>
            <section className="gallery-wrapper relative z-10 py-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-20">
                        <p className="text-sm uppercase tracking-[0.3em] text-pink-400 mb-4">Gallery</p>
                        <h2 className="text-4xl md:text-7xl font-black text-white">
                            สินค้า
                            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"> ยอดนิยม</span>
                        </h2>
                        <p className="text-gray-500 mt-4 text-lg">สำรวจคอลเลกชั่นจากทั่วทุกหมวด</p>
                    </div>

                    {/* 3 คอลัมน์ */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

                        {/* ===== คอลัมน์ซ้าย — เลื่อนลง ===== */}
                        <div className="gallery-left space-y-6">
                            {leftImages.map((img, i) => (
                                <div key={i} className="gallery-card group relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer">
                                    <div className="relative h-64">
                                        <Image
                                            src={img.src}
                                            alt={img.label}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <p className="text-white font-bold text-lg">{img.label}</p>
                                        <div className="w-8 h-0.5 bg-purple-500 mt-2 group-hover:w-16 transition-all duration-300" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ===== คอลัมน์กลาง — เลื่อนช้า + เปลี่ยนรูป ===== */}
                        <div className="gallery-center-strip space-y-6 pt-20">
                            {centerImages.map((img, i) => (
                                <div key={i} className="gallery-card group relative overflow-hidden rounded-3xl border border-white/10 cursor-pointer">
                                    <div className="relative h-80">
                                        <Image
                                            src={img.src}
                                            alt={img.label}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <span className="text-xs uppercase tracking-widest text-pink-400 mb-2 block">Featured</span>
                                        <p className="text-white font-black text-2xl">{img.label}</p>
                                        <p className="text-gray-400 text-sm mt-2">{img.desc}</p>
                                        <div className="mt-4 flex items-center gap-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span>ดูเพิ่มเติม</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ===== คอลัมน์ขวา — เลื่อนขึ้น ===== */}
                        <div className="gallery-right space-y-6 pt-40">
                            {rightImages.map((img, i) => (
                                <div key={i} className="gallery-card group relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer">
                                    <div className="relative h-64">
                                        <Image
                                            src={img.src}
                                            alt={img.label}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <p className="text-white font-bold text-lg">{img.label}</p>
                                        <div className="w-8 h-0.5 bg-blue-500 mt-2 group-hover:w-16 transition-all duration-300" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

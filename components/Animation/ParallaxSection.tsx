"use client"
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

// Parallax แบบ Pin — หน้าจอหยุดอยู่กับที่ แล้วเนื้อหาเลื่อนจากขวาไปซ้าย
export default function ParallaxSection() {
    const box = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // คำนวณว่าต้องเลื่อน content ไปซ้ายเท่าไหร่
        const slider = document.querySelector(".pin-slider") as HTMLElement
        if (!slider) return
        const totalWidth = slider.scrollWidth - window.innerWidth

        // Pin หน้าจอไว้ แล้วเลื่อน content จากขวาไปซ้าย
        gsap.to(".pin-slider", {
            x: -totalWidth,
            ease: "none",
            scrollTrigger: {
                trigger: ".pin-wrapper",
                start: "top top",
                end: () => "+=" + totalWidth,
                pin: true,        // <-- หยุดหน้าจอไว้ตรงนี้
                scrub: 1,         // <-- เลื่อนตาม scroll
                anticipatePin: 1,
            }
        })

        // Glow วนลูป
        gsap.to(".pin-glow", {
            scale: 1.3,
            opacity: 0.4,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        })

    }, { scope: box })

    return (
        <div ref={box}>
            <section className="pin-wrapper relative z-10 overflow-hidden h-screen">

                {/* พื้นหลัง */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-950/30 to-black" />
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '80px 80px'
                    }}
                />

                {/* Glow */}
                <div className="pin-glow absolute w-[500px] h-[500px] rounded-full bg-purple-600/15 blur-[150px] top-[20%] left-[10%] pointer-events-none" />
                <div className="pin-glow absolute w-[400px] h-[400px] rounded-full bg-pink-600/10 blur-[120px] top-[30%] right-[5%] pointer-events-none" />

                {/* ===== Slider เลื่อนจากขวาไปซ้าย ===== */}
                <div className="pin-slider flex items-center h-full gap-0">

                    {/* ===== Slide 1: ข้อความเปิด ===== */}
                    <div className="flex-shrink-0 w-screen h-full flex items-center justify-center px-8">
                        <div className="text-center max-w-3xl">
                            <p className="text-sm uppercase tracking-[0.4em] text-purple-400/60 mb-6">
                                ✧ Scroll to Explore ✧
                            </p>
                            <h2 className="text-6xl md:text-9xl font-black leading-[0.85]">
                                <span className="block text-white/90">DEFINE</span>
                                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mt-2">
                                    YOUR STYLE
                                </span>
                            </h2>
                            <p className="text-gray-500 text-lg mt-8 max-w-lg mx-auto">
                                เลื่อนต่อเพื่อสัมผัสประสบการณ์ที่ไม่เหมือนใคร
                            </p>
                        </div>
                    </div>

                    {/* ===== Slide 2: คุณภาพ ===== */}
                    <div className="flex-shrink-0 w-screen h-full flex items-center justify-center px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl items-center">
                            <div className="space-y-6">
                                <div className="w-20 h-20 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                                    <span className="text-4xl">✨</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                    คุณภาพ
                                    <br />
                                    <span className="text-purple-400">ระดับพรีเมียม</span>
                                </h3>
                                <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                                    สินค้าทุกชิ้นผ่านการคัดสรรจากทีมผู้เชี่ยวชาญ
                                    เพื่อให้คุณได้รับสิ่งที่ดีที่สุดเท่านั้น
                                </p>
                            </div>
                            <div className="relative h-[400px] rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/40 via-black to-blue-900/20 overflow-hidden flex items-center justify-center">
                                <span className="text-[100px]">💎</span>
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
                            </div>
                        </div>
                    </div>

                    {/* ===== Slide 3: จัดส่ง ===== */}
                    <div className="flex-shrink-0 w-screen h-full flex items-center justify-center px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl items-center">
                            <div className="relative h-[400px] rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/40 via-black to-cyan-900/20 overflow-hidden flex items-center justify-center">
                                <span className="text-[100px]">🚀</span>
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
                            </div>
                            <div className="space-y-6">
                                <div className="w-20 h-20 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                                    <span className="text-4xl">📦</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                    จัดส่ง
                                    <br />
                                    <span className="text-blue-400">รวดเร็วทันใจ</span>
                                </h3>
                                <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                                    ส่งถึงมือคุณภายใน 1-3 วัน พร้อมระบบติดตามพัสดุ
                                    แบบ Real-time ทุกขั้นตอน
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ===== Slide 4: ดีไซน์ ===== */}
                    <div className="flex-shrink-0 w-screen h-full flex items-center justify-center px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl items-center">
                            <div className="space-y-6">
                                <div className="w-20 h-20 rounded-2xl bg-pink-500/20 flex items-center justify-center">
                                    <span className="text-4xl">🎨</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                    ดีไซน์
                                    <br />
                                    <span className="text-pink-400">ที่เป็นคุณ</span>
                                </h3>
                                <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                                    สไตล์ที่สะท้อนตัวตนของคุณ ออกแบบโดยทีมดีไซเนอร์
                                    มืออาชีพเพื่อประสบการณ์ที่ลงตัว
                                </p>
                            </div>
                            <div className="relative h-[400px] rounded-3xl border border-white/10 bg-gradient-to-br from-pink-900/40 via-black to-orange-900/20 overflow-hidden flex items-center justify-center">
                                <span className="text-[100px]">🛍️</span>
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
                            </div>
                        </div>
                    </div>

                    {/* ===== Slide 5: ปิดท้าย ===== */}
                    <div className="flex-shrink-0 w-screen h-full flex items-center justify-center px-8">
                        <div className="text-center max-w-3xl">
                            <h2 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8">
                                เริ่มต้น
                                <br />
                                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                    ช้อปเลย
                                </span>
                            </h2>
                            <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto">
                                ค้นหาสินค้าที่ใช่สำหรับคุณ วันนี้
                            </p>
                            <div className="flex justify-center gap-4">
                                <div className="w-3 h-3 rounded-full bg-purple-500" />
                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                <div className="w-3 h-3 rounded-full bg-pink-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

"use client"
import { useState, useEffect } from "react"

// Loading Screen แบบ Pixel Hourglass + เปอร์เซ็นต์
export default function LoadingScreen() {
    const [progress, setProgress] = useState(0)
    const [done, setDone] = useState(false)

    useEffect(() => {
        // เพิ่มเปอร์เซ็นต์ทีละนิด
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer)
                    setTimeout(() => setDone(true), 400)
                    return 100
                }
                // เร็วขึ้นเรื่อยๆ
                const step = prev < 60 ? 2 : prev < 90 ? 3 : 5
                return Math.min(prev + step, 100)
            })
        }, 50)

        return () => clearInterval(timer)
    }, [])

    // ซ่อนเมื่อโหลดเสร็จ
    if (done) return null

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-500 ${progress >= 100 ? "opacity-0" : "opacity-100"
                }`}
        >
            {/* Cube หมุน (มุมบนซ้าย) */}
            <div className="absolute top-[15%] left-[15%]">
                <div
                    className="w-4 h-4 bg-white"
                    style={{
                        animation: "spin 2s linear infinite, float 3s ease-in-out infinite",
                    }}
                />
            </div>

            {/* Pixel Hourglass */}
            <div className="mb-8">
                <svg
                    width="60"
                    height="80"
                    viewBox="0 0 60 80"
                    fill="none"
                    className="drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    style={{ animation: "hourglassSpin 2s ease-in-out infinite" }}
                >
                    {/* Top frame */}
                    <rect x="4" y="0" width="52" height="4" fill="white" />
                    <rect x="8" y="4" width="4" height="4" fill="white" />
                    <rect x="48" y="4" width="4" height="4" fill="white" />

                    {/* Top sand */}
                    <rect x="16" y="12" width="28" height="4" fill="white" opacity="0.7" />
                    <rect x="20" y="16" width="20" height="4" fill="white" opacity="0.5" />
                    <rect x="24" y="20" width="12" height="4" fill="white" opacity="0.3" />

                    {/* Middle neck */}
                    <rect x="12" y="8" width="4" height="28" fill="white" />
                    <rect x="44" y="8" width="4" height="28" fill="white" />
                    <rect x="16" y="24" width="4" height="8" fill="white" />
                    <rect x="40" y="24" width="4" height="8" fill="white" />
                    <rect x="20" y="28" width="4" height="8" fill="white" />
                    <rect x="36" y="28" width="4" height="8" fill="white" />
                    <rect x="24" y="32" width="4" height="8" fill="white" />
                    <rect x="32" y="32" width="4" height="8" fill="white" />
                    <rect x="28" y="36" width="4" height="4" fill="white" />

                    {/* Falling sand */}
                    <rect x="28" y="44" width="4" height="4" fill="white" opacity="0.8">
                        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
                    </rect>

                    {/* Bottom sand */}
                    <rect x="16" y="60" width="28" height="4" fill="white" opacity="0.4" />
                    <rect x="12" y="64" width="36" height="4" fill="white" opacity="0.6" />
                    <rect x="12" y="68" width="36" height="4" fill="white" opacity="0.8" />

                    {/* Bottom frame */}
                    <rect x="12" y="40" width="4" height="32" fill="white" />
                    <rect x="44" y="40" width="4" height="32" fill="white" />
                    <rect x="16" y="48" width="4" height="8" fill="white" />
                    <rect x="40" y="48" width="4" height="8" fill="white" />

                    <rect x="8" y="72" width="4" height="4" fill="white" />
                    <rect x="48" y="72" width="4" height="4" fill="white" />
                    <rect x="4" y="76" width="52" height="4" fill="white" />
                </svg>
            </div>

            {/* Percentage */}
            <p
                className="text-white font-mono text-xl tracking-widest"
                style={{ fontFamily: "'Courier New', monospace" }}
            >
                {progress}%
            </p>

            {/* CSS Animations */}
            <style jsx>{`
        @keyframes hourglassSpin {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
      `}</style>
        </div>
    )
}

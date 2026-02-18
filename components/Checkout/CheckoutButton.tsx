"use client"
import { useState } from "react"

import { toast } from "sonner"

// ปุ่มชำระเงิน — กดแล้ว redirect ไป Stripe
export default function CheckoutButton() {
    const [loading, setLoading] = useState(false)

    const handleCheckout = async () => {
        setLoading(true)

        try {
            // เรียก API สร้าง Stripe session
            const res = await fetch("/api/checkout", {
                method: "POST",
            })

            const data = await res.json()

            if (data.url) {
                // ไปหน้า Stripe
                window.location.href = data.url
            } else {
                toast.error(data.error || "เกิดข้อผิดพลาด")
                setLoading(false)
            }
        } catch {
            toast.error("เกิดข้อผิดพลาด กรุณาลองใหม่")
            setLoading(false)
        }
    }

    return (
        <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-lg hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {loading ? "กำลังดำเนินการ..." : "💳 ชำระเงิน (บัตรเครดิต / PromptPay)"}
        </button>
    )
}

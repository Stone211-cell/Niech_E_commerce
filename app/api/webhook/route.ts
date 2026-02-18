import { NextRequest, NextResponse } from "next/server"
import stripe from "@/lib/stripe"

// Webhook: รับ event จาก Stripe เมื่อ payment สำเร็จ
export async function POST(req: NextRequest) {
    const body = await req.text()
    const sig = req.headers.get("stripe-signature")

    // ถ้ามี webhook secret ให้ verify signature
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

    try {
        let event

        if (webhookSecret && sig) {
            // Verify signature (ใช้ตอน production)
            event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
        } else {
            // ไม่มี secret ก็ parse ตรงๆ (ใช้ตอน dev)
            event = JSON.parse(body)
        }

        // เช็คว่าเป็น event อะไร
        if (event.type === "checkout.session.completed") {
            const session = event.data.object
            console.log("✅ Payment สำเร็จ!", session.id)

            // TODO: เพิ่ม business logic ตรงนี้
            // เช่น บันทึก order ลง DB, ส่งอีเมลยืนยัน ฯลฯ
        }

        return NextResponse.json({ received: true })
    } catch (error) {
        console.error("Webhook Error:", error)
        return NextResponse.json(
            { error: "Webhook failed" },
            { status: 400 }
        )
    }
}

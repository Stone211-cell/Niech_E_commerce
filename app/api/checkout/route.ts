import { NextRequest, NextResponse } from "next/server"
import stripe from "@/lib/stripe"
import { fetchCart } from "@/app/action/favoriteproduct"

// POST: สร้าง Stripe Checkout Session จากสินค้าในตะกร้า
export async function POST(req: NextRequest) {
    try {
        const cart = await fetchCart()

        if (cart.length === 0) {
            return NextResponse.json(
                { error: "ไม่มีสินค้าในตะกร้า" },
                { status: 400 }
            )
        }

        // สร้าง line_items จากสินค้าในตะกร้า
        const lineItems = cart.map((item) => ({
            price_data: {
                currency: "thb",
                product_data: {
                    name: item.title,
                    description: item.description || "สินค้าจาก Niech Shop",
                    images: [item.image],
                },
                unit_amount: item.price * 100, // Stripe ใช้สตางค์
            },
            quantity: 1,
        }))

        // สร้าง Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card", "promptpay"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout?status=success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout?status=cancel`,
        })

        return NextResponse.json({ url: session.url })
    } catch (error) {
        console.error("Stripe Error:", error)
        return NextResponse.json(
            { error: "สร้าง session ไม่สำเร็จ" },
            { status: 500 }
        )
    }
}

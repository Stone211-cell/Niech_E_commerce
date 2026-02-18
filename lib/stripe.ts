import Stripe from "stripe"

// สร้าง Stripe client — ใช้ร่วมกันทั้งโปรเจค
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-01-28.clover",
})

export default stripe

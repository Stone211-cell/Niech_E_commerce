import Stripe from "stripe"

// สร้าง Stripe client — ใช้ร่วมกันทั้งโปรเจค
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "dummy_key", {
    apiVersion: "2026-01-28.clover",
    typescript: true,
})

export default stripe

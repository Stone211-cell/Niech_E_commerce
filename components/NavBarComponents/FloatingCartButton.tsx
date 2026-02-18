"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";

interface FloatingCartButtonProps {
    cartCount: number;
}

const FloatingCartButton = ({ cartCount }: FloatingCartButtonProps) => {
    const pathname = usePathname();

    // ซ่อนตอนอยู่หน้า cart
    if (pathname === "/cart" || pathname === "/checkout") return null;

    return (
        <Link
            href="/cart"
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-4 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-110 transition-all group"
        >
            <ShoppingCart size={24} className="group-hover:rotate-12 transition-transform" />

            {/* Badge */}
            {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1 animate-bounce">
                    {cartCount > 9 ? "9+" : cartCount}
                </span>
            )}
        </Link>
    );
};

export default FloatingCartButton;

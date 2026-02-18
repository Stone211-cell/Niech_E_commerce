"use client";
import { usePathname } from "next/navigation";
import { useTransition, useEffect, useState } from "react";
import { toggleFavoriteAction, fetchFavoriteId } from "@/app/action/favoriteproduct";
import { ShoppingCart, Check, Loader2 } from "lucide-react";

interface AddToCartButtonProps {
    productId: string;
    productType: "A" | "B";
}

const AddToCartButton = ({ productId, productType }: AddToCartButtonProps) => {
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const [favoriteId, setFavoriteId] = useState<string | null>(null);
    const [added, setAdded] = useState(false);

    useEffect(() => {
        const checkFavorite = async () => {
            try {
                const id = await fetchFavoriteId({ productId, productType });
                setFavoriteId(id);
                setAdded(!!id);
            } catch {
                // not logged in
            }
        };
        checkFavorite();
    }, [productId, productType]);

    const handleClick = () => {
        startTransition(async () => {
            const result = await toggleFavoriteAction({
                favoriteId,
                productId,
                pathname,
                productType,
            });
            if (result.msg.includes("Add")) {
                setAdded(true);
                setFavoriteId("temp");
            } else {
                setAdded(false);
                setFavoriteId(null);
            }
        });
    };

    return (
        <button
            onClick={handleClick}
            disabled={isPending}
            className={`flex items-center justify-center gap-2 w-full py-4 rounded-full font-bold text-lg transition-all disabled:opacity-50 ${added
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
        >
            {isPending ? (
                <Loader2 size={20} className="animate-spin" />
            ) : added ? (
                <Check size={20} />
            ) : (
                <ShoppingCart size={20} />
            )}
            {isPending
                ? "กำลังดำเนินการ..."
                : added
                    ? "อยู่ในตะกร้าแล้ว"
                    : "เพิ่มลงตะกร้า"}
        </button>
    );
};

export default AddToCartButton;

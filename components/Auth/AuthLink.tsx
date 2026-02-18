"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@clerk/nextjs";

const AuthLink = ({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) => {
    const { isSignedIn } = useAuth();
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        if (!isSignedIn) {
            e.preventDefault();
            toast.error("กรุณาเข้าสู่ระบบก่อนทำรายการ");
        }
    };

    return (
        <Link href={href} className={className} onClick={handleClick}>
            {children}
        </Link>
    );
};

export default AuthLink;

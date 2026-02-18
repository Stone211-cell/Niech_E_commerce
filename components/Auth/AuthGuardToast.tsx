"use client";
import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface AuthGuardToastProps {
    message: string;
    redirectUrl?: string;
}

const AuthGuardToast = ({ message, redirectUrl }: AuthGuardToastProps) => {
    const router = useRouter();

    useEffect(() => {
        toast.error(message);
        if (redirectUrl) {
            router.push(redirectUrl);
        }
    }, [message, redirectUrl, router]);

    return null;
};

export default AuthGuardToast;

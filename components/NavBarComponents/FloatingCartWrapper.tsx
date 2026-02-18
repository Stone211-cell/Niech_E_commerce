import { currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import FloatingCartButton from "./FloatingCartButton";

const FloatingCartWrapper = async () => {
    let cartCount = 0;

    try {
        const user = await currentUser();
        if (user) {
            const count = await db.favorite.count({
                where: { profileId: user.id },
            });
            cartCount = count;
        }
    } catch {
        // not logged in or error
    }

    return <FloatingCartButton cartCount={cartCount} />;
};

export default FloatingCartWrapper;

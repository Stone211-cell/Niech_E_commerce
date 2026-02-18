import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import DropList from "./DropList";
import db from "@/utils/db";
import { ShoppingCart } from "lucide-react";

const Headbar = async () => {
  const user = await currentUser();
  const isAdmin = user?.publicMetadata?.role === 'admin' || user?.privateMetadata?.IsAdmin === true;

  // Fetch cart count
  let cartCount = 0;
  try {
    if (user) {
      cartCount = await db.favorite.count({
        where: { profileId: user.id },
      });
    }
  } catch { /* not logged in */ }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-primary-foreground font-bold text-xl">N</span>
          </div>
          <span className="text-lg font-bold tracking-tight hidden sm:inline-block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Niech Shop</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Cart icon */}
          <Link href="/cart" className="relative text-gray-400 hover:text-white transition-colors">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </Link>

          <DropList isAdmin={isAdmin} />
        </div>
      </div>
    </header>
  );
};

export default Headbar;


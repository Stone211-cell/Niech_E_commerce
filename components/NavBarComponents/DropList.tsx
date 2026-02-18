"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SignedOut, SignedIn } from "@clerk/nextjs";
import SignInBtn from "./SignInBtn";
import SignOutBtn from "./SignOutBtn";
import SignUpBtn from "./SignUpBtn";
import { List, AdminList } from "@/utils/menulist";
import { Menu } from "lucide-react";

interface DropListProps {
  isAdmin: boolean;
}

const DropList = ({ isAdmin }: DropListProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {List.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary relative group",
              pathname === item.href
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            {item.label}
            <span className={cn("absolute left-0 bottom-[-4px] w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left", pathname === item.href && "scale-x-100")} />
          </Link>
        ))}

        {isAdmin && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Admin
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Admin Controls</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {AdminList.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        <div className="flex items-center gap-2 ml-4">
          <SignedOut>
            <div className="flex items-center gap-2">
              <SignInBtn msg="Sign In" />
              <SignUpBtn msg="Sign Up" />
            </div>
          </SignedOut>
          <SignedIn>
            <SignOutBtn msg="Sign Out" />
          </SignedIn>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-4">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[280px] p-4 bg-gray-950 backdrop-blur-sm border-white/10 text-white">
            <DropdownMenuLabel className="text-lg font-semibold mb-2">Menu</DropdownMenuLabel>
            <DropdownMenuSeparator className="mb-2" />
            <div className="flex flex-col gap-2">
              {List.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-accent",
                    pathname === item.href ? "bg-accent text-accent-foreground" : "text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {isAdmin && (
              <>
                <DropdownMenuSeparator className="my-2" />
                <DropdownMenuLabel>Admin</DropdownMenuLabel>
                <div className="flex flex-col gap-2">
                  {AdminList.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center px-4 py-2 rounded-md text-sm font-medium hover:bg-accent"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </>
            )}

            <DropdownMenuSeparator className="my-4" />

            <div className="flex flex-col gap-2">
              <SignedOut>
                <SignInBtn msg="Sign In" />
                <SignUpBtn msg="Sign Up" />
              </SignedOut>
              <SignedIn>
                <SignOutBtn msg="Sign Out" />
              </SignedIn>
            </div>

          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default DropList;

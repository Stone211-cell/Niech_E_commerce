"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import SignInBtn from "./SignInBtn";
import SignOutBtn from "./SignOutBtn";
import { SignedOut, SignedIn } from "@clerk/nextjs";
import { List } from "@/utils/menulist";
import SignUpBtn from "./SignUpBtn";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const DropList = () => {
  const [open, setOpen] = useState(false); // false เริ่มต้น

  return (
    <nav>
      {/* Mobile */}
      <div className="flex md:hidden items-center">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger>
            <FontAwesomeIcon
              icon={open ? faXmark : faBars}
              size="2x"
              className="cursor-pointer border-2 border-black rounded px-1.5"
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>เมนู</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {List.map((item, index) => (
              <DropdownMenuItem key={index} asChild>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <SignedIn>
              <SignOutBtn msg="SignOut" />
            </SignedIn>
            <SignedOut>
              <div className="flex items-center gap-2">
                <SignInBtn msg="SignIn" />
                <SignUpBtn msg="SignUp" />
              </div>
            </SignedOut>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex gap-4 items-center">
        {List.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="px-3 py-2 rounded-md text-white bg-red-500 hover:bg-red-700 hover:scale-105 transition-all duration-150"
          >
            {item.label}
          </Link>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger className="px-3 py-2 rounded-md text-white bg-red-500 hover:bg-red-700 hover:scale-105 transition-all duration-150">
            ปุ่มย่อย
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* ใส่ PayList หรือเมนูย่อยได้ */}
          </DropdownMenuContent>
        </DropdownMenu>

        <SignedIn>
          <SignOutBtn msg="SignOut" />
        </SignedIn>
        <SignedOut>
          <div className="flex items-center gap-2">
            <SignInBtn msg="SignIn" />
            <SignUpBtn msg="SignUp" />
          </div>
        </SignedOut>
      </div>

         <Link href="/admin/edit/">แก้ไข</Link>
         <Link href="/admin">admin</Link>

         <Link href={`/admin/create/`}>เพิ่ม</Link>

    </nav>
  );
};
export default DropList;

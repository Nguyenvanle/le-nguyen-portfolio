"use client";
import { useState } from "react";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MenuIcon, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAVIGATION_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const currentPath = usePathname();

  return (
    <header className="flex justify-between items-center px-4 py-4 md:px-8">
      <ModeToggle />

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-8">
        {NAVIGATION_ITEMS.map(({ href, label }) => (
          <Link key={href} href={href}>
            <Button
              variant="link"
              className={
                currentPath === href ? "text-primary" : "text-foreground"
              }
            >
              {label}
            </Button>
          </Link>
        ))}
      </nav>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex lg:hidden hover:bg-primary hover:text-primary-foreground">
          <MenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <nav className="flex flex-col gap-2">
            {NAVIGATION_ITEMS.map(({ href, label }) => (
              <Link key={href} href={href}>
                <Button
                  variant="link"
                  className={
                    currentPath === href ? "text-primary" : "text-foreground"
                  }
                >
                  {label}
                </Button>
              </Link>
            ))}
          </nav>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

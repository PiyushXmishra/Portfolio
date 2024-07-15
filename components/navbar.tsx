"use client";
import React from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="w-full flex items-center justify-center">
      <Navbar className="pt-10" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  return (
    <div className={cn("max-w-auto mx-auto z-50 text-shadow-DEFAULT shadow-custom-sage", className)}>
      <Menu>
        <MenuItem item="</>" to="/"></MenuItem>
        <MenuItem item="Skills" to="Skills"></MenuItem>
        <MenuItem item="Projects" to="Projects"></MenuItem>
      </Menu>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

interface MobileSidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const MobileSidebar = ({
  apiLimitCount,
  isPro = false,
}: MobileSidebarProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <SheetTrigger
        className="lg:hidden p-2 rounded hover:bg-slate-700 transition"
        onClick={() => setIsOpen(true)}
      >
        <HamburgerMenuIcon className="h-6 w-6 text-slate-200" />
      </SheetTrigger>

      <SheetContent side={"left"} className="p-0">
        <Sidebar
          apiLimitCount={apiLimitCount}
          isPro={isPro}
          setIsOpen={setIsOpen}
        />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

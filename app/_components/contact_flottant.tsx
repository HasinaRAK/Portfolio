"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Contact2Icon } from "lucide-react";
import _DrawerContact from "./drawer_contact";

export default function _Contact_flottant() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Button
        variant="default"
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2"
        onClick={handleDrawerOpen}
      >
        <Contact2Icon className="w-4 h-4" />
        Contactez-moi
      </Button>

      <_DrawerContact
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
    </>
  );
}

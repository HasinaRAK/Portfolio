import { Drawer, DrawerContent, DrawerFooter } from "@/components/ui/drawer";
import React from "react";
import _Contact from "./contact";
import { Button } from "@/components/ui/button";

export default function _DrawerContact({
  isDrawerOpen,
  setIsDrawerOpen,
  handleDrawerClose,
}: any) {
  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerContent>
        <div className="p-4">
          <_Contact />
        </div>
        <DrawerFooter>
          <Button variant="outline" onClick={handleDrawerClose}>
            Fermer
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

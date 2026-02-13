"use client"

import { useState } from "react";
import MobileMenu from "./MobileMenu";
import DesktopNav from "./DesktopNav";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <DesktopNav
        setOpen={setOpen}
        open={open}
      />

      {/* Mobile menu */}
      <MobileMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default Navbar;

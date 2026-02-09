"use client";
import {useIsMobile} from "@/hooks/use-mobile";
import {MenuMobile} from "./mobile/MenuMobile";
import NavHeader from "./partials/NavHeader";
import {NavLinks} from "./partials/NavLinks";
import NavProfile from "./partials/NavProfile";

export default function Navigation() {
  const isMobile = useIsMobile();

  return (
    <nav className="sticky top-2.5 z-50 bg-background/65 flex justify-between items-center px-4 mx-2 py-2 border-b shadow-md shadow-primary/20 backdrop-blur-lg sm:px-8 sm:mx-8 md:px-12 md:mx-12 lg:px-20 lg:mx-20 rounded-full">
      <NavHeader />
      {!isMobile && (
        <>
          <NavLinks />
          <NavProfile />
        </>
      )}
      {isMobile && <MenuMobile />}
    </nav>
  );
}

"use client";
import {useIsMobile} from "@/hooks/use-mobile";
import {MenuMobile} from "./mobile/MenuMobile";
import NavHeader from "./partials/NavHeader";
import {NavLinks} from "./partials/NavLinks";
import NavProfile from "./partials/NavProfile";

export default function Navigation() {
  const isMobile = useIsMobile();

  return (
    <nav className="sticky top-2.5 z-50 bg-background/65 flex justify-between items-center px-20 mx-20 py-2 border-b rounded-full shadow-md shadow-primary/20 backdrop-blur-lg">
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

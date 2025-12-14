"use client";

import {
  BuildingIcon,
  BusIcon,
  FileSearchCornerIcon,
  FileStackIcon,
  MailQuestionMarkIcon,
  MailsIcon,
  MessageCircleQuestionMarkIcon,
  NotebookPenIcon,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import Link from "next/link";

export function NavLinks() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle() + " bg-transparent"}>
            <Link href="/">Acasă</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle() + " bg-transparent"}>
            <Link href="/bussiness">Bussiness</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Servicii
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                    style={{
                      // backgroundImage: "url(/svgs/passports_ro.svg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    href="/cetatenie-romana">
                    <div className="mb-2 text-lg font-medium sm:mt-4 bg-background/90 rounded-md px-3 py-2 shadow-md">
                      Acte românești
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight bg-background/90 rounded-md px-3 py-2 shadow-md">
                      Cetățenie Română și Pașaport Românesc RAPID și LEGAL
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/cetatenie-romana" title="Cetățenie română">
                Obține Cetățenia Română Depune dosarul
              </ListItem>
              <ListItem href="/pasaport-romanesc" title="Pașaport românesc">
                Obține pașaport românesc în doar 5 zile
              </ListItem>
              <ListItem href="/buletin-romanesc" title="Buletin românesc">
                Ai nevoie de buletin românesc?
              </ListItem>
              <ListItem
                href="/permis-conducere-romanesc"
                title="Permis de conducere românesc">
                Ai nevoie de permis de conducere românesc?
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Compania
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Item variant="default" asChild>
                    <Link
                      href="/about-us"
                      className="flex flex-row items-center gap-2">
                      <ItemMedia variant={"icon"}>
                        <BuildingIcon className="h-4 w-4" />
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle>Despre noi</ItemTitle>
                      </ItemContent>
                    </Link>
                  </Item>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Item variant="default" asChild>
                    <Link
                      href="/faq"
                      className="flex flex-row items-center gap-2">
                      <ItemMedia variant={"icon"}>
                        <MessageCircleQuestionMarkIcon className="h-4 w-4" />
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle>FAQ</ItemTitle>
                      </ItemContent>
                    </Link>
                  </Item>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Contacte
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Item variant="default" asChild>
                    <Link
                      href="/contacte"
                      className="flex flex-row items-center gap-2">
                      <ItemMedia variant={"icon"}>
                        <MailsIcon className="h-4 w-4" />
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle>Contacte</ItemTitle>
                      </ItemContent>
                    </Link>
                  </Item>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {href: string}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

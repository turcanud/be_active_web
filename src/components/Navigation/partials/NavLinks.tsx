"use client";

import {useEffect, useState} from "react";
import {BuildingIcon, MailsIcon, MessageCircleQuestionMarkIcon} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {Item, ItemContent, ItemMedia, ItemTitle} from "@/components/ui/item";
import Link from "next/link";
import {useTranslations} from "next-intl";

const backgroundImages = [
  "/images/nav/basketball-nav.jfif",
  "/images/nav/football-nav.jfif",
  "/images/nav/tennis-nav.jfif",
];

export function NavLinks() {
  const t = useTranslations("NavLinks");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + " bg-transparent"}>
            <Link href="/">{t("home")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">{t("business")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                    style={{
                      backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    href="/business">
                    <div className="mb-2 text-lg font-medium sm:mt-4 bg-background/90 rounded-md px-3 py-2 shadow-md">
                      {t("businessCard.title")}
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight bg-background/90 rounded-md px-3 py-2 shadow-md">
                      {t("businessCard.description")}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/business" title={t("businessItems.listServices.title")}>
                {t("businessItems.listServices.description")}
              </ListItem>
              <ListItem href="/business" title={t("businessItems.reachAthletes.title")}>
                {t("businessItems.reachAthletes.description")}
              </ListItem>
              <ListItem href="/business" title={t("businessItems.seeStats.title")}>
                {t("businessItems.seeStats.description")}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + " bg-transparent"}>
            <Link href="/blog">{t("blog")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">{t("about")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-50 gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Item variant="default" asChild>
                    <Link href="/about-us" className="flex flex-row items-center gap-2">
                      <ItemMedia variant={"icon"}>
                        <BuildingIcon className="h-4 w-4" />
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle>{t("aboutItems.company")}</ItemTitle>
                      </ItemContent>
                    </Link>
                  </Item>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Item variant="default" asChild>
                    <Link href="/faq" className="flex flex-row items-center gap-2">
                      <ItemMedia variant={"icon"}>
                        <MessageCircleQuestionMarkIcon className="h-4 w-4" />
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle>{t("aboutItems.faq")}</ItemTitle>
                      </ItemContent>
                    </Link>
                  </Item>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Item variant="default" asChild>
                    <Link href="/faq" className="flex flex-row items-center gap-2">
                      <ItemMedia variant={"icon"}>
                        <MailsIcon className="h-4 w-4" />
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle>{t("aboutItems.contacts")}</ItemTitle>
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

function ListItem({title, children, href, ...props}: React.ComponentPropsWithoutRef<"li"> & {href: string}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

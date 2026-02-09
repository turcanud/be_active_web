import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {useTranslations} from "next-intl";
import Link from "next/link";
import {ChooseLang} from "@/components/Toggles/ChooseLang";
import {ModeToggle} from "@/components/Toggles/ModeToggle";

export function MenuMobile() {
  const t = useTranslations("NavLinks");
  const tAuth = useTranslations("Auth");

  return (
    <div className="flex items-center gap-1">
      <ModeToggle />
      <ChooseLang />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mr-4" align="end" sideOffset={12}>
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/">{t("home")}</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/blog">{t("blog")}</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/bussiness">{t("business")}</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/about-us">{t("about")}</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/sign-in">{tAuth("sign-in")}</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/sign-up">{tAuth("sign-up")}</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

import AuthButton from "@/components/Auth/AuthButton";
import {ChooseLang} from "@/components/Toggles/ChooseLang";
import {ModeToggle} from "@/components/Toggles/ModeToggle";
import {LogIn, UserRoundPlus} from "lucide-react";
import {useTranslations} from "next-intl";

export default function NavProfile() {
  const t = useTranslations("Auth");

  return (
    <div className="flex items-center gap-1 xl:gap-1.5">
      <AuthButton icon={LogIn} content={t("sign-in")} href="/sign-in" variant="ghost" />
      <AuthButton icon={UserRoundPlus} content={t("sign-up")} href="/sign-up" variant="outline" />
      <ModeToggle />
      <ChooseLang />
    </div>
  );
}

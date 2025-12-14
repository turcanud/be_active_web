"use client";

import {Link} from "@/i18n/navigation";
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          {t("title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md">
          {t("description")}
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link href="/">
            <Button>{t("home")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import {use} from "react";
import {setRequestLocale} from "next-intl/server";
import LandingContent from "@/components/Main/LandingContent";

export default function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = use(params);
  setRequestLocale(locale);
  return (
    <>
      <LandingContent />
    </>
  );
}

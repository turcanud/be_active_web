import {useTranslations} from "next-intl";
import SportCardLink from "./SportCardLink";

export default function SportsList() {
  const t = useTranslations("SPORTS");

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Available Sports
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground/80">Choose your sport and book your next session</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        <SportCardLink link="/football" name={t("football")} imgUrl="/images/football_cover.jpeg" />
        <SportCardLink link="/basketball" name={t("basketball")} imgUrl="/images/basketball_cover.jpeg" />
        <SportCardLink link="/tennis" name={t("tennis")} imgUrl="/images/tennis_cover.jpeg" />
        <SportCardLink link="/mma" name={t("mma")} imgUrl="/images/mma_cover.jpeg" />
        <SportCardLink link="/boxing" name={t("boxing")} imgUrl="/images/boxing_cover.jpeg" />
        <SportCardLink link="/muay-thai" name={t("muay-thai")} imgUrl="/images/thai_cover.jpeg" />
      </div>
    </div>
  );
}

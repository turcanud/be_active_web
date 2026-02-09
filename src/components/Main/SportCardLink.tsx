import {Link} from "@/i18n/navigation";
import {Card, CardContent} from "../ui/card";

type SportCardLinkProps = {
  name: string;
  link: string;
  imgUrl: string;
};

export default function SportCardLink({link, name, imgUrl}: SportCardLinkProps) {
  return (
    <Link href={link} className="group w-full sm:w-auto">
      <Card className="relative h-48 w-full overflow-hidden border p-0 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:h-56 sm:w-72 md:h-64 md:w-80">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('${imgUrl}')`}} />
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50 transition-all duration-300 group-hover:bg-black/20 dark:group-hover:bg-black/40" />
        <CardContent className="relative z-10 flex h-full items-center justify-center p-0">
          <h2 className="text-3xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-4xl">{name}</h2>
        </CardContent>
      </Card>
    </Link>
  );
}

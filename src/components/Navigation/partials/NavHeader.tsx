import Image from "next/image";
import Link from "next/link";

export default function NavHeader() {
  return (
    <Link href="/" className="select-none">
      <Image
        src="/images/logo.png"
        alt="BeActive Logo"
        width={75}
        height={75}
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[75px] lg:h-[75px]"
      />
    </Link>
  );
}

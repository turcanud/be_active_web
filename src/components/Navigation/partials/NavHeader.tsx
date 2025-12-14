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
      />
    </Link>
  );
}

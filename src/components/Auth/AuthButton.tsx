import {Button} from "../ui/button";
import {cn} from "@/lib/utils";
import {LucideIcon} from "lucide-react";
import Link from "next/link";

export default function AuthButton({
  content,
  className,
  href,
  variant,
  icon: Icon,
}: {
  content: string;
  className?: string;
  href: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  icon?: LucideIcon;
}) {
  return (
    <Link href={href}>
      <Button className={cn(className)} variant={variant}>
        {Icon && <Icon className="mr-2 h-4 w-4" />}
        {content}
      </Button>
    </Link>
  );
}

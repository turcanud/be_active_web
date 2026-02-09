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
      <Button
        className={cn("px-2 xl:px-4", className)}
        variant={variant}
        size="default">
        {Icon && <Icon className="h-4 w-4 xl:mr-2" />}
        <span className="hidden xl:inline">{content}</span>
      </Button>
    </Link>
  );
}

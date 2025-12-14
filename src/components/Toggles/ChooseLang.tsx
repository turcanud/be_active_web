"use client";

import Image from "next/image";
import {Check, ChevronsUpDown} from "lucide-react";
import {useLocale} from "next-intl";
import {useRouter, usePathname} from "@/i18n/navigation";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {useState, useTransition} from "react";
import {useParams} from "next/navigation";

const languages = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "ro",
    label: "Română",
  },
  {
    value: "ru",
    label: "Русский",
  },
];

export function ChooseLang({className}: {className?: string}) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleLanguageChange = (value: string) => {
    startTransition(() => {
      router.replace({pathname, query: params}, {locale: value});
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={isPending}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[150px] justify-between", className)}>
          <span className="flex items-center gap-2">
            <Image
              src={`/svgs/${locale}.svg`}
              alt={locale}
              width={20}
              height={20}
            />
            {languages.find((language) => language.value === locale)?.label}
          </span>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-[150px] p-0", className)}>
        <Command>
          <CommandList>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  value={language.value}
                  onSelect={() => handleLanguageChange(language.value)}>
                  <Image
                    src={`/svgs/${language.value}.svg`}
                    alt={language.label}
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  {language.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      locale === language.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

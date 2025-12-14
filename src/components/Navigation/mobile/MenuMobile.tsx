import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MenuMobile() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-4" align="start" sideOffset={12}>
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        {/* <ChooseLang className="w-full" /> */}
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Acasă
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Cetățenie română
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Programare Jurământ
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Servicii</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent sideOffset={7}>
                <DropdownMenuItem>Cetățenie română</DropdownMenuItem>
                <DropdownMenuItem>Pașaport românesc</DropdownMenuItem>
                <DropdownMenuItem>Buletin românesc</DropdownMenuItem>
                <DropdownMenuItem>Buletin românesc</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Transport</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent sideOffset={7}>
                <DropdownMenuItem>Transport România tur-retur</DropdownMenuItem>
                <DropdownMenuItem>Livrare acte românești</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Compania</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent sideOffset={7}>
                <DropdownMenuItem>Despre noi</DropdownMenuItem>
                <DropdownMenuItem>Articole</DropdownMenuItem>
                <DropdownMenuItem>Ordine ANC</DropdownMenuItem>
                <DropdownMenuItem>FAQ</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Contacte</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent sideOffset={7}>
                <DropdownMenuItem>Contacte</DropdownMenuItem>
                <DropdownMenuItem>Programează o întâlnire</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Profil</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Sign In
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Sign Up
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

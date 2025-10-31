"use client";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import {
  ChevronUpIcon,
  CreditCardIcon,
  FolderOpenIcon,
  HistoryIcon,
  KeyIcon,
  LogOutIcon,
  StarIcon,
  User2,
  User2Icon,
  UserIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { cn } from "@/lib/utils";
const menuItems = [
  {
    title: "Home",
    items: [
      {
        title: "Workflows",
        url: "/workflows",
        icon: FolderOpenIcon,
      },
      {
        title: "Credentials",
        url: "/credentials",
        icon: KeyIcon,
      },
      {
        title: "Executions",
        url: "/executions",
        icon: HistoryIcon,
      },
    ],
  },
];
export function AppSidebar() {
  const pathname = usePathname();
  const isActive = (url: string) => pathname.startsWith(url);
  const { signOut, useSession } = authClient;
  const router = useRouter();
  const session = useSession();

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/" prefetch>
                <Image src="/logo.png" alt="XLR8" width={100} height={100} />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {menuItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      isActive={isActive(item.url)}
                      asChild
                    >
                      <Link href={item.url} prefetch>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Upgrade to Pro">
              <Link href="/billing">
                <StarIcon className="size-4" />
                <span>Upgrade to Pro</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton tooltip="Account Settings">
                  <User2Icon className="size-4" />{" "}
                  <span className="ml-2 truncate">
                    {session.data?.user.name || "Unknown"}
                  </span>
                  <ChevronUpIcon className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-3xs">
                <DropdownMenuItem asChild>
                  <Link href="/billing" className="w-full flex gap-2">
                    <CreditCardIcon className="size-4" />
                    <span>Billing</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="w-full flex gap-2"
                  onClick={() =>
                    signOut({
                      fetchOptions: {
                        onSuccess: () => {
                          router.push("/");
                        },
                        onError: (error) => {
                          toast.error(error.error.message);
                        },
                      },
                    })
                  }
                >
                  <LogOutIcon className="size-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

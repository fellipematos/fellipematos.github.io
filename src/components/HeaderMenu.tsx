"use client"

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
} from "@heroui/react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";


export function HeaderMenu(): React.JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} className="m-auto max-w-[768px] py-8">

            <NavbarContent>
                <NavbarBrand>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path className="fill-gray-400" d="M1 19V5h2v14zm3 0V5h2v14zm3 0V5h1v14zm3 0V5h2v14zm3 0V5h3v14zm4 0V5h1v14zm3 0V5h3v14z" /></svg>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="uppercase hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link className="text-gray-700 hover:text-blue-500" href="/">
                        Start
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-gray-700 hover:text-blue-500" href="/works">
                        Works
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-gray-700 hover:text-blue-500" href="/about">
                        About
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
            <NavbarMenu className="uppercase py-10">
                <NavbarMenuItem>
                    <Link className="py-2 w-full" color="foreground" href="/">
                        Start
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="py-2 w-full" color="foreground" href="/works">
                        Works
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="py-2 w-full" color="foreground" href="/about">
                        About
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>

            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarContent>

        </Navbar>
    );
}
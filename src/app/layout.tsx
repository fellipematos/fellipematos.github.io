import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { HeaderMenu } from "../components/HeaderMenu"

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Fellipe Matos - Webmaster",
    description: "Desenvolvedor Web",
    openGraph: {
        title: "Fellipe Matos",
        description: "Aprimorando meus conhecimentos para me especializar em Linux, cibersegurança, gestão e otimização de servidores e cloud.",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
        }
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <HeroUIProvider>
                    <NextThemesProvider attribute="class" defaultTheme="dark">
                        <HeaderMenu />
                        {children}
                    </NextThemesProvider>
                </HeroUIProvider>
            </body>
        </html>
    );
}

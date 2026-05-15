import type { Metadata } from "next";
import "./globals.css";
import { SideBar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Onde tá",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className="
bg-white dark:bg-[#111827]

text-zinc-900 dark:text-white

border-gray-200 dark:border-[#1E293B]"
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

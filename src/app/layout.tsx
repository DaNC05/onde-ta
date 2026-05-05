import type { Metadata } from "next";
import "./globals.css";
import { SideBar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";




export const metadata: Metadata = {
  title: "Onde tá",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
    >
      <body>
        {children}
      </body>
    </html >
  );
}

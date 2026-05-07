'use client'
import { SideBar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { useState } from "react";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className="flex h-screen">
            <SideBar isMenuOpen={isMenuOpen} />
            <div className="flex flex-col flex-1">
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                <main >{children} </main>
            </div>
        </div>

    );

}
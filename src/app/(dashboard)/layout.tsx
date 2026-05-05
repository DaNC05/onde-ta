import { SideBar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div className="flex h-screen">
            <SideBar />
            <div className="flex flex-col flex-1">
                <Header />
                <main className="">{children} </main>
            </div>
        </div>
    );
}



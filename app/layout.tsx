import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import Navbar from "@/components/main-nav";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "AcuVault",
    description: "Unlock Your Potential Through Active Learning.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="w-full flex-none md:w-64">
                <Navbar/>
            </div>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}

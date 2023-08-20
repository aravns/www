import "./../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
    title: "aravan",
    description: "Full stack developer",
    keywords: ["aravan", "developer", "hacking"],
    icons: {
        icon: "/logo.ico",
        username: "aravan",
        shortcut: "short",
    },
    authors: [],
    assets: [],
    creator: "aravan dev",
    colorScheme: "normal",
    themeColor: "dark",
    category: "dev",
    robots: "robot",
    twitter: {
        title: "aravan",
        creator: "aravan",
        description: "Full stack developer",
        images: "https://www.analyticsinsight.net/wp-content/uploads/2023/05/How-Mastering-Rust-Can-Advance-Your-Career-in-Cybersecurity.jpg",
        players: [],
        creatorId: "lolo",
        site: "lala",
        siteId: "lele",
        card: "player",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}

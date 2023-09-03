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
    category: "dev",
    robots: "robot",
    twitter: {
        title: "aravan",
        creator: "aravan",
        description: "Full stack developer",
        images: "https://i.pinimg.com/originals/5e/5f/cd/5e5fcd2efe9b4eb3bbaace2a02b29185.gif",
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

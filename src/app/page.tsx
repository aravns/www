"use client";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";
import { useEffect, useState } from "react";

export default function Page() {
    const [theme, setTheme] = useState("light");
    const themeSettings = {
        Set: (themeName: string) => {
            setTheme(themeName);
        },
        Get: () => theme,
    };

    useEffect(() =>
        setTheme(localStorage.theme == null ? "light" : localStorage.theme)
    );

    return (
        <body>
            <main className="w-full h-full overflow-hidden">
                <Home id="home" ThemeSettings={themeSettings} />
                <About id="about" />
                <Projects id="projects" />
                <Contact id="contact" ThemeSettings={themeSettings} />
            </main>
        </body>
    );
}

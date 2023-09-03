"use client";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";
import { useEffect, useRef, useState } from "react";
import { Load } from "./components/load";

export default function Page() {
    const [mainDisplay, setMainDisplay] = useState("none");
    const setMain = (lala: string) => {
        setMainDisplay(lala);
    }
    const [theme, setTheme] = useState("light");
    const themeSettings = {
        Set: (themeName: string) => {
            setTheme(themeName);
        },
        Get: () => theme,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
                else {
                    entry.target.classList.remove('show');
                }
            })
        })

        const unshows = document.querySelectorAll(".unshow");
        unshows.forEach(el => { observer.observe(el) });

        setTheme(localStorage.theme == null ? "light" : localStorage.theme)
    });

    return (
        <body>
            <main style={{
                display: mainDisplay
            }} className="w-full h-full overflow-hidden">
                <Home id="home" ThemeSettings={themeSettings} />
                <About id="about" />
                <Projects id="projects" />
                <Contact id="contact" ThemeSettings={themeSettings} />
            </main>
            <Load setMain={setMain} />
        </body>
    );
}


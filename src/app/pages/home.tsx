"use client";

import Image from "next/image";
import { useRef } from "react";
import { Navbar } from "../components/navbar";
import { MobileNav } from "../components/mobile_nav";

interface Pops {
    id: string;
    ThemeSettings: {
        Set: (themeName: string) => void;
        Get: () => string | null;
    };
}

export const Home = ({ id, ThemeSettings }: Pops) => {
    const logo = useRef<HTMLImageElement>(null);

    return (
        <section id={id} className="pages">
            <Navbar
                getTheme={() => ThemeSettings.Get()}
                changeTheme={(name) => {
                    ThemeSettings.Set(name);
                }}
            />
            <MobileNav
                getTheme={() => ThemeSettings.Get()}
                changeTheme={(name) => {
                    ThemeSettings.Set(name);
                }}
            />
            <div className="home">
                <div className="two-div content">
                    <span className="l"></span>
                    <p>
                        <span className="text-light-red dark:text-dark-red">
                            Welcome
                        </span>{" "}
                        to my website. hi i am aravan. <br /> i am{" "}
                        <span className="text-light-blue dark:text-dark-blue">
                            Fullstack
                        </span>{" "}
                        developer. i am 18 years old. <br /> and i have{" "}
                        <span className="text-light-green dark:text-dark-green">
                            4+
                        </span>{" "}
                        years in programming <br /> and i use archlinux for
                        programming
                    </p>
                </div>
                <div className="two-div img">
                    <div className="myimg">
                        <ul>
                            {[
                                "https://brandeps.com/icon-download/L/Linux-icon-vector-02.svg",
                                "https://docs.rs/-/rustdoc.static/rust-logo-151179464ae7ed46.svg",
                                "https://brandeps.com/icon-download/C/C-sharp-icon-vector-01.svg",
                                "https://brandeps.com/logo-download/E/Edinburgh-JS-logo-vector-01.svg",
                                "https://brandeps.com/icon-download/P/Python-icon-vector-04.svg",
                                "https://brandeps.com/icon-download/R/React-icon-vector-05.svg",
                                "https://brandeps.com/logo-download/F/Figma-logo-vector-01.svg",
                                "https://brandeps.com/icon-download/M/Math-format-linear-icon-vector-01.svg",
                            ].map((lala_src: string) => (
                                <li>
                                    <div>
                                        <img src={lala_src} alt="" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <Image
                            src={`/logo_${ThemeSettings.Get()}.svg`}
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

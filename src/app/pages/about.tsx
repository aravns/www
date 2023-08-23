"use client";

import Image from "next/image";
import { Title } from "../components/titile";
import { useRef, useEffect } from "react";
import TypeIt from "typeit-react";

interface Pops {
    id: string;
}

export const About = ({ id }: Pops) => {
    const about_text = [
        "Before I begin, I must confess that I have no idea what I will write to express myself.However, I am a person who loves programming because it allows for creativity and the expression of ideas. On this old TV, I will display a simple thing from my experience. I was confused about what to put on the TV while writing this, and the text you are reading is something I had no idea about putting on the TV. Since you are reading my words, I must have finished the site and put something on the TV. I hope it is good and that you like it. Enjoy!"
    ];

    const screen = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const newLALA: HTMLDivElement = document.createElement("div");
        newLALA.innerHTML = `<marquee direction="down" className="w-full h-full" behavior="alternate"><marquee behavior="alternate">Coming Soon...</marquee></marquee>`;
        if (screen.current!.children.length === 0) { screen.current!.appendChild(newLALA); }
    });

    return (
        <section id={id} className="pages unshow">
            <div className="about">
                <Title title="About" />
                <div className="two-div content">
                    <TypeIt
                        options={{
                            strings: about_text,
                            speed: 30,
                            loopDelay: 1000,
                            waitUntilVisible: true,
                        }}
                    />
                </div>
                <div className="two-div img">
                    <div className="lala">
                        <div ref={screen} className="screen"></div>
                        <Image src="/TV.svg" alt="" width={500} height={500} />
                    </div>
                </div>
            </div>
        </section >
    );
};


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
        "Before I begin, I must confess that I have no idea what I",
        "will write to express myself. However, I am a person who",
        "loves programming because it allows for creativity and the",
        "expression of ideas. On this old TV, I will display a simple",
        "thing from my experience. I was confused about what to put",
        "on the TV while writing this, and the text you are reading",
        "is something I had no idea about putting on the TV. Since",
        "you are reading my words, I must have finished the site and",
        "put something on the TV. I hope it is good and that you like it.",
        "Enjoy!",
    ];

    const screen = useRef<HTMLDivElement>(null);
    // const canvas = useRef<HTMLCanvasElement>(null);
    // const video = useRef<HTMLVideoElement>(null);


    useEffect(() => {
        // const c = canvas.current!;
        // const s = screen.current!;
        // const ctx = c.getContext("2d")!;
        //
        // const v = video.current!;
        // let w = s.clientWidth;
        // let h = s.clientHeight;

        // const setCanvasSize = () => {
        //     w = s.clientWidth;
        //     h = s.clientHeight;
        //
        //     c.width = w;
        //     c.height = h;
        // };

        // window.addEventListener("resize", (e) => setCanvasSize());
        // setCanvasSize();
        // v.onclick = () => {
        //     v.requestFullscreen();
        // };
        //
        // const draw = () => {
        //     ctx.fillStyle = "black";
        //     ctx.fillRect(0, 0, w, h);
        //     v.play();
        //     requestAnimationFrame(draw);
        // };
        // draw();
    });

    return (
        <section id={id} className="pages">
            <div className="about">
                <Title title="About" />
                <div className="two-div content">
                    <TypeIt
                        options={{
                            strings: about_text,
                            speed: 70,
                            // loop: true,
                            loopDelay: 1000,
                            waitUntilVisible: true,
                        }}
                    />
                </div>
                <div className="two-div img">
                    <div className="lala">
                        <div ref={screen} className="screen">
                            <div>
                                Coming soon...
                                {/* <video */}
                                {/*     ref={video} */}
                                {/*     src="/videos/Animation_vs_Math.mp4" */}
                                {/*     loop */}
                                {/* ></video> */}
                                {/* <canvas ref={canvas} /> */}
                            </div>
                        </div>
                        <Image src="/TV.svg" alt="" width={500} height={500} />
                    </div>
                </div>
            </div>
        </section>
    );
};

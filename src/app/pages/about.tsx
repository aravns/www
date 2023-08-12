import Image from "next/image";
import { Title } from "../components/titile";
import { useRef, useEffect } from "react";

interface Pops {
    id: string;
}
export const About = ({ id }: Pops) => {
    const screen = useRef<HTMLDivElement>(null);
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        var c = canvas.current!;
        var s = screen.current!;
        var w = s.clientWidth;
        var h = s.clientHeight;
    });

    return (
        <section id={id} className="pages">
            <div className="about">
                <Title title="About" />
                <div className="two-div content">
                    <p>
                        In this TV you will see my programming skills I want you
                        now I am not a professional but I try my best I am not
                        smart but I have persistence and there is a time you
                        will find me flying in the air because I use Command
                        /gamemode creative
                    </p>
                </div>
                <div className="two-div img">
                    <div className="lala">
                        <div ref={screen} className="screen">
                            <canvas ref={canvas}></canvas>
                        </div>
                        <Image src="/TV.svg" alt="" width={500} height={500} />
                    </div>
                </div>
            </div>
        </section>
    );
};

"use client";

import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { AiTwotoneBoxPlot } from "react-icons/ai";

// import Swiper core and required modules
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectFade,
    FreeMode,
    EffectCoverflow,
    Autoplay,
    Virtual,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Title } from "../components/titile";
import { useEffect, useState } from "react";

interface Pops {
    id: string;
}

interface Project {
    key: number;
    img: string;
    title: string;
    desc: string;
}

export const Projects = ({ id }: Pops) => {
    const cards: Project[] = [
        {
            key: 0,
            img: "https://c4.wallpaperflare.com/wallpaper/854/214/410/accounting-black-budget-calculating-wallpaper-preview.jpg",
            title: "hunter niga",
            desc: "wawa",
        },
        {
            key: 1,
            img: "https://c4.wallpaperflare.com/wallpaper/384/350/430/digital-art-artwork-cyber-cyberpunk-neon-hd-wallpaper-preview.jpg",
            title: "hunter lala",
            desc: "wawa",
        },
        {
            key: 2,
            img: "https://c4.wallpaperflare.com/wallpaper/611/838/413/spiderman-hd-4k-superheroes-wallpaper-preview.jpg",
            title: "hunter niga",
            desc: "wawa",
        },
        {
            key: 3,
            img: "https://c4.wallpaperflare.com/wallpaper/967/867/776/abstract-brain-science-artwork-wallpaper-preview.jpg",
            title: "hunter lele",
            desc: "wawa",
        },
        {
            key: 4,
            img: "https://c4.wallpaperflare.com/wallpaper/910/741/143/joker-joker-2019-movie-arthur-fleck-joaquin-phoenix-dc-comics-hd-wallpaper-preview.jpg",
            title: "hunter weee",
            desc: "wawa",
        },
    ];

    let cards_num: number = cards.length <= 3 ? cards.length : 3;

    const [card_n, card_n_update] = useState(3);

    useEffect(() => {
        window.addEventListener("resize", (e) => {
            if (window.innerWidth <= 1000) cards_num = 1;
            else cards_num = 3;
            card_n_update(cards_num);
        });

        if (window.innerWidth <= 1000) cards_num = 1;
        else cards_num = 3;
        card_n_update(cards_num);
    });

    return (
        <section id={id} className="pages">
            <div className="projects">
                <Title title="Projects" />
                <div className="cards">
                    <Swiper
                        // install Swiper modules
                        modules={[
                            Navigation,
                            Pagination,
                            Scrollbar,
                            A11y,
                            EffectFade,
                            Autoplay,
                            Virtual,
                            FreeMode,
                            // effects
                            EffectCoverflow,
                        ]}
                        // Transition effect. Can be 'slide', 'fade', 'cube', 'coverflow', 'flip' or 'creative'
                        effect={"slide"}
                        spaceBetween={50}
                        slidesPerView={card_n}
                        // ++++
                        freeMode={{ enabled: true }}
                        data-swiper-autoplay="500"
                        // loop={true}
                        autoplay={{ delay: 1000 }}
                        virtual={true}
                        // autoplay={true}
                        navigation={{ nextEl: ".right", prevEl: ".left" }}
                        pagination={{
                            clickable: true,
                        }}
                        // scrollbar={{ draggable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log("slide change")}
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.key} className="card">
                                <div className="img">
                                    <img src={card.img} alt="" />
                                </div>
                                <div className="content">
                                    <div className="title">{card.title}</div>
                                    <div className="desc">{card.desc}</div>
                                    <div className="button">
                                        <button>git</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="div-footer">
                    <div className="left">
                        <BiSolidLeftArrow size={40} />
                    </div>
                    <div className="center">
                        <AiTwotoneBoxPlot size={40} />
                    </div>
                    <div className="right">
                        <BiSolidRightArrow size={40} />
                    </div>
                </div>
            </div>
        </section>
    );
};

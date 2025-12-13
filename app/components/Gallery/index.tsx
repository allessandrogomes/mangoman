"use client"

import { useEffect, useRef, useState } from "react";
import { HeaderSection } from "../shared/HeaderSection";
import { SectionLayout } from "../shared/SectionLayout";
import dynamic from "next/dynamic";

const Masonry = dynamic(() => import("./Mansory/index"), {
    ssr: false, // importante
});

const items = [
    { id: "1", img: "/gallery/1.png", url: "https://example.com/one", height: 350 },
    { id: "2", img: "/gallery/2.png", url: "https://example.com/two", height: 450 },
    { id: "3", img: "/gallery/3.png", url: "https://example.com/three", height: 300 },
    { id: "4", img: "/gallery/4.png", url: "https://example.com/three", height: 500 },
    { id: "5", img: "/gallery/5.png", url: "https://example.com/three", height: 250 },
    { id: "6", img: "/gallery/6.png", url: "https://example.com/three", height: 400 },
    { id: "7", img: "/gallery/7.png", url: "https://example.com/three", height: 300 },
    { id: "8", img: "/gallery/8.png", url: "https://example.com/three", height: 450 },
    { id: "9", img: "/gallery/9.png", url: "https://example.com/three", height: 350 },
    { id: "10", img: "/gallery/10.png", url: "https://example.com/three", height: 500 },
    { id: "11", img: "/gallery/1.png", url: "https://example.com/one", height: 300 },
    { id: "12", img: "/gallery/2.png", url: "https://example.com/two", height: 500 },
    { id: "13", img: "/gallery/3.png", url: "https://example.com/three", height: 350 },
    { id: "14", img: "/gallery/4.png", url: "https://example.com/three", height: 400 },
    { id: "15", img: "/gallery/5.png", url: "https://example.com/three", height: 250 },
    { id: "16", img: "/gallery/6.png", url: "https://example.com/three", height: 450 },
    { id: "17", img: "/gallery/7.png", url: "https://example.com/three", height: 300 },
    { id: "18", img: "/gallery/8.png", url: "https://example.com/three", height: 500 },
    { id: "19", img: "/gallery/9.png", url: "https://example.com/three", height: 350 },
    { id: "20", img: "/gallery/10.png", url: "https://example.com/three", height: 400 },
];

export function Gallery() {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);
    const [minHeight, setMinHeight] = useState(200);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: "100px",
            }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <SectionLayout className="relative">
            <HeaderSection
                title="Galeria"
                subtitle="Conheça nossa produção, estrutura e qualidade de perto"
                titleColor="tertiary"
                subtitleColor="quaternary"
            />

            <div ref={ref} className="mt-5 relative" style={{ minHeight }}>
                {visible && (
                    <Masonry
                        onHeightChange={setMinHeight}
                        items={items}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.05}
                        animateFrom="bottom"
                        scaleOnHover={true}
                        hoverScale={0.95}
                        blurToFocus={true}
                        colorShiftOnHover={false}
                    />
                )}
            </div>
        </SectionLayout>
    )
}
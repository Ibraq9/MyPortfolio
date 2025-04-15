"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../../components/ui/apple-cards-carousel";
import Prayer from '..//assets/prayer.png';
import e_commerce from '../assets/e-commerce.png';
import Queue from '../assets/queue.png';
import Social from '../assets/social.png';
import cplusPlus from '../assets/CPlusPlus.webp';
import DataSlider from '../DataSlider';

export default function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-20 my-20 ">
            <h2
                className="max-w-5xl mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
                Take a look at the projects
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = ({ item }) => {
    return (
        <div
            className=" p-8 md:p-14 rounded-3xl mb-4 relative overflow-hidden h-[300px] md:h-[400px]">

            {item.name !== "C++ Organize Program" ? <iframe
                src={`${item.Videosrc}${item.VideoID}`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full z-0"
            /> : <a href="https://github.com/Ibraq9/File-Organization" className="bg-black p-3 text-white" target="_blank">GO to Github Source Code ? ➡️</a>
               
            }


        </div>
    );
};

const data = [
    {
        category: "Website",
        title: "E-commerce app",
        src: e_commerce,
        content: <DummyContent item={DataSlider[0]} />,
    },
    {
        category: "Website",
        title: "Prayer times app",
        src: Prayer,
        content: <DummyContent item={DataSlider[1]} />,
    },
    {
        category: "Website",
        title: "Social Media app ",
        src: Social,
        content: <DummyContent item={DataSlider[2]} />,
    },
    {
        category: "C++ Program",
        title: "C++ program to organize folders and files by size or extension",
        src: cplusPlus,
        content: <DummyContent item={DataSlider[3]} />,
    },
    {
        category: "Simulate",
        title: "Queue Simulation",
        src: Queue,
        content: <DummyContent item={DataSlider[4]} />,
    },
];

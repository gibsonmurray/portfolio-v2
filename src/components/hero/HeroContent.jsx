import React from "react";
import Socials from "./Socials";

function HeroContent() {
    return (
        <div className="flex h-full w-5/12 flex-col justify-center">
            <h1 className="text-6xl font-extrabold">
                Full-Stack 🚀 Software Engineer
            </h1>
            <p className="mt-8 text-xl text-neutral-500">
                Hi I'm Gibson! A driven and passionate Full-Stack Developer based
                in College Park, MD 📍
            </p>
            <Socials />
        </div>
    );
}

export default HeroContent;

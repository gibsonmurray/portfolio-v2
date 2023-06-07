import React from "react";
import HeroContent from "./HeroContent";
import HeroImg from "./HeroImg";
import TechStack from "./TechStack";
import { Element } from "react-scroll";

function Hero() {
    return (
        <Element name="Home">
            <div className="flex h-screen w-screen items-center justify-center bg-neutral-100">
                <div className="flex h-4/5 w-4/5 flex-col items-center justify-center">
                    <div className="flex items-center justify-center">
                        <HeroContent />
                        <HeroImg />
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                        <p className="whitespace-nowrap border-r-[3px] border-neutral-500 pr-10 text-2xl font-semibold text-neutral-800">
                            Tech Stack
                        </p>
                        <TechStack />
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Hero;

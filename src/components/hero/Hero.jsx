import React from "react";
import HeroContent from "./HeroContent";
import HeroImg from "./HeroImg";
import TechStack from "./TechStack";

function Hero() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-neutral-100">
            <div className="flex h-4/5 w-4/5 flex-col items-center justify-center">
                <div className="flex items-center justify-center">
                    <HeroContent />
                    <HeroImg />
                </div>
                <div className="flex items-center justify-between mt-5">
                    <p className="text-2xl text-neutral-800 font-semibold pr-10 border-r-[3px] border-neutral-500 whitespace-nowrap">Tech Stack</p>
                    <TechStack />
                </div>
            </div>
        </div>
    );
}

export default Hero;

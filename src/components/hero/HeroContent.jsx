import React from "react";
import Socials from "./Socials";

function HeroContent() {
    return (
        <div className="flex h-full flex-col justify-center items-center lg:items-start
                        w-11/12
                        lg:w-5/12"
        >
            <h1 className=" font-extrabold 
                            text-center text-[32px] leading-tight
                            lg:text-left lg:text-6xl lg:w-96
                            xl:w-auto"
            >
                Full-Stack 🚀 Software Engineer
            </h1>
            <p className="mt-8 text-xl text-neutral-500
                            text-center
                            lg:text-left"
            >
                Hi I'm Gibson! A driven and passionate Full-Stack Developer based
                in College Park, MD 📍
            </p>
            <Socials />
        </div>
    );
}

export default HeroContent;

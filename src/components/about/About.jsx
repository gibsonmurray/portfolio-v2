import React from "react";
import AboutMe from "./AboutMe";
import me from "../../images/aboutme.json";
import Lottie from "lottie-react";
import { Element } from "react-scroll";

function About() {
    return (
        <Element name="About">
            <div
                className="flex w-screen flex-col items-center justify-center overflow-hidden
                            bg-white py-32
                            xl:flex-row xl:py-20"
            >
                <div
                    className="flex  items-center justify-center overflow-hidden
                                xl:h-3/4 xl:w-2/5"
                >
                    <div className="w-fill h-fill">
                        <Lottie
                            animationData={me}
                            className=" w-[350px]
                                        lg:w-[500px] 
                                        xl:h-[500px]"
                        />
                    </div>
                </div>
                <AboutMe />
            </div>
        </Element>
    );
}

export default About;

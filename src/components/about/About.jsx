import React from "react";
import AboutMe from "./AboutMe";
import me from "../../images/aboutme.json";
import Lottie from "lottie-react";
import { Element } from "react-scroll";

function About() {
    return (
        <Element name="About">
            <div className="flex h-[90vh] w-screen items-center justify-center bg-white overflow-hidden">
                <div className="flex h-3/4 w-1/3 items-center justify-center overflow-hidden">
                    <div className="w-fill h-fill">
                        <Lottie
                            animationData={me}
                            className="w-[500px] h-[500px]"
                        />
                    </div>
                </div>
                <AboutMe />
            </div>
        </Element>
    );
}

export default About;

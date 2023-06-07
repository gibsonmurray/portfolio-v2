import React from "react";
import AboutMe from "./AboutMe";
import devSetup from "../../images/dev-setup.json";
import Lottie from "lottie-react";
import { Element } from "react-scroll";

function About() {
    return (
        <Element name="About">
            <div className="flex h-[90vh] w-screen items-center justify-center bg-white">
                <Lottie animationData={devSetup} className="h-3/4 w-1/3" />
                <AboutMe />
            </div>
        </Element>
    );
}

export default About;

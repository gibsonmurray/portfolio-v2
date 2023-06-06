import React from "react";
import AboutMe from "./AboutMe";
import devSetup from "../../images/dev-setup.json";
import Lottie from "lottie-react";

function About() {
    return (
        <div className="flex h-4/5 w-screen items-center justify-center bg-white">
            <Lottie animationData={devSetup} className="h-3/4 w-1/3" />
            <AboutMe />
        </div>
    );
}

export default About;

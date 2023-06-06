/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Lottie from "lottie-react";
import abstractBubbles from "../../images/abstract-bubbles.json";
import heroImg from "../../images/hero-img.jpeg";

function HeroImg() {
    return (
        <div className="flex items-center justify-center">
            {" "}
            <Lottie animationData={abstractBubbles} />
            <img
                src={heroImg}
                alt="hero image"
                className="hero-img absolute h-80 w-64"
            />
        </div>
    );
}

export default HeroImg;
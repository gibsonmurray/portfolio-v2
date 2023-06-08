import React from "react";
import Content from "./Content";
import Lottie from "lottie-react";
import emailAnimation from "../../images/email.json";
import { Element } from "react-scroll";

function Contact() {
    return (
        <Element name="Contact">
            <div className="flex flex-col items-center justify-center overflow-hidden py-28 lg:flex-row">
                <div className="flex h-4/5 w-4/5 xl:h-1/3 xl:w-1/4 items-center justify-center overflow-hidden">
                    <div className="w-fill h-fill">
                        <Lottie
                            animationData={emailAnimation}
                            className="h-[225px] w-[225px] xl:h-[300px] xl:w-[300px]"
                        />
                    </div>
                </div>
                <Content />
            </div>
        </Element>
    );
}

export default Contact;

import React from "react";
import Content from "./Content";
import Lottie from "lottie-react";
import emailAnimation from "../../images/email.json";
import { Element } from "react-scroll";

function Contact() {
    return (
        <Element name="Contact">
            <div className="flex items-center justify-center py-28 overflow-hidden">
                <div className="flex h-1/3 w-1/4 items-center justify-center overflow-hidden">
                    <div className="w-fill h-fill">
                        <Lottie
                            animationData={emailAnimation}
                            className="h-[300px] w-[300px]"
                        />
                    </div>
                </div>
                <Content />
            </div>
        </Element>
    );
}

export default Contact;

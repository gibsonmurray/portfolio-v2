import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Account(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isHovered, setIsHovered] = React.useState(false);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    let icon,
        title,
        link,
        size = "3x";

    if (props.platform === "linkedin") {
        icon = faLinkedin;
        title = "LinkedIn";
        link = "https://www.linkedin.com/in/gibsonmurray/";
    } else if (props.platform === "email") {
        icon = faEnvelope;
        title = "Email";
        link = "mailto:gibmurrays@gmail.com";
    }

    if (windowWidth < 900) {
        size = "2x";
    }

    return (
        icon && (
            <a
                rel="noreferrer"
                target="_blank"
                href={link}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`my-2 flex w-fit items-center justify-center rounded-2xl border-[3px] border-neutral-200 
                bg-white p-5 shadow-lg transition-all duration-200 xl:my-5 lg:mr-10 
                ${
                    isHovered
                        ? "scale-105 text-blue-500 shadow-2xl hover:-translate-y-1"
                        : ""
                }`}
            >
                <FontAwesomeIcon icon={icon} title={title} size={size} />
                <span className="ml-3 text-xl font-bold lg:ml-5 lg:text-2xl">
                    {props.caption}
                </span>
            </a>
        )
    );
}

export default Account;

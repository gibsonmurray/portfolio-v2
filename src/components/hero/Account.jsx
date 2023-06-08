import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";



function Account(props) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    let icon, title, link;

    if (props.platform === "linkedin") {
        icon = faLinkedin;
        title = "LinkedIn";
        link = "https://www.linkedin.com/in/gibsonmurray/";
    } else if (props.platform === "github") {
        icon = faGithub;
        title = "GitHub";
        link = "https://github.com/gibsonmurray";
    } 

    return (
        <div className={`h-20 w-20 ${windowWidth < 900 && "flex justify-center items-center"}`}>
            {icon && (
                <a rel="noreferrer" target="_blank" href={link}>
                    <FontAwesomeIcon
                        icon={icon}
                        title={title}
                        size="2x"
                        className="duration-200 hover:text-blue-500"
                    />
                </a>
            )}
        </div>
    );
}

export default Account;

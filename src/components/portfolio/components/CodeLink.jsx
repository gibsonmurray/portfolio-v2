import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function CodeLink(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    let size = "xl";

    if (windowWidth > 900) {
        size = "2x"
    }

    return (
        <a
            href={props.code}
            rel="noreferrer"
            target="_blank"
            className="flex items-center justify-center duration-200 hover:text-blue-500"
        >
            <span className="mr-2 text-xl lg:text-2xl font-bold">Code</span>
            <FontAwesomeIcon icon={faGithub} size={size} />
        </a>
    );
}

export default CodeLink;

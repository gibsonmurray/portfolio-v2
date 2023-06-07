import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function CodeLink(props) {
    return (
        <a
            href={props.code}
            rel="noreferrer"
            target="_blank"
            className="flex items-center justify-center duration-200 hover:text-blue-500"
        >
            <span className="mr-2 text-2xl font-bold">Code</span>
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
    );
}

export default CodeLink;

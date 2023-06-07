import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function DemoLink(props) {
    return (
        <a
            href={props.demo}
            rel="noreferrer"
            target="_blank"
            className="flex items-center justify-center duration-200 hover:text-blue-500"
        >
            <span className="mr-2 text-2xl font-bold">Demo</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" />
        </a>
    );
}

export default DemoLink;

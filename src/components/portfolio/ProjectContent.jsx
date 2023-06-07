import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectContent(props) {
    return (
        <div className="flex h-5/6 w-2/5 flex-col items-center justify-evenly mr-14">
            <h3 className="whitespace-nowrap text-3xl font-extrabold">
                {props.title}
            </h3>
            <p className="text-center text-xl font-semibold text-neutral-500">
                {props.desc}
            </p>
            <a
                href={props.code}
                rel="noreferrer"
                target="_blank"
                className="flex items-center justify-center duration-200 hover:text-blue-500"
            >
                <span className="mr-2 text-2xl font-bold">Code</span>
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>
    );
}

export default ProjectContent;

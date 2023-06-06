import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Account(props) {
    let icon, altText, link;

    if (props.platform === "linkedin") {
        icon = faLinkedin;
        altText = "LinkedIn";
        link = "https://www.linkedin.com/in/gibsonmurray/";
    } else if (props.platform === "github") {
        icon = faGithub;
        altText = "GitHub";
        link = "https://github.com/gibsonmurray";
    }

    return (
        <div className="mr-5 h-10 w-10">
            {icon && (
                <a rel="noreferrer" target="_blank" href={link}>
                    <FontAwesomeIcon
                        icon={icon}
                        title={altText}
                        size="3x"
                        className="duration-200 hover:text-blue-500"
                    />
                </a>
            )}
        </div>
    );
}

export default Account;

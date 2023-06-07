import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Account(props) {
    let icon, title, link;

    const [isHovered, setIsHovered] = React.useState(false);

    if (props.platform === "linkedin") {
        icon = faLinkedin;
        title = "LinkedIn";
        link = "https://www.linkedin.com/in/gibsonmurray/";
    } else if (props.platform === "email") {
        icon = faEnvelope;
        title = "Email";
        link = "mailto:gibmurrays@gmail.com";
    }

    return (
        icon && (
            <a
                rel="noreferrer"
                target="_blank"
                href={link}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`my-5 mr-5 flex h-24 w-fit p-10 items-center justify-center rounded-2xl bg-white shadow-lg border-[3px] border-neutral-200 duration-200 ${isHovered && 'text-blue-500' }`}
            >
                <FontAwesomeIcon
                    icon={icon}
                    title={title}
                    size="3x"
                />
                <span className="ml-5 text-2xl font-bold">{props.caption}</span>
            </a>
        )
    );
}

export default Account;

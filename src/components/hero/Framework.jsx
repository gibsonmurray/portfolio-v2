import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faJava, faSwift } from "@fortawesome/free-brands-svg-icons";

function Framework(props) {
    let icon, color;

    if (props.name === "html") {
        icon = faHtml5;
        color = "#e34f26";
    } else if (props.name === "css") {
        icon = faCss3Alt;
        color = "#1472b6";
    } else if (props.name === "js") {
        icon = faJs;
        color = "#f4df1c";
    } else if (props.name === "react") {
        icon = faReact;
        color = "#52c1de";
    } else if (props.name === "node") {
        icon = faNodeJs;
        color = "#83cd29";
    } else if (props.name === "java") {
        icon = faJava;
        color = "#5283a2"
    } else if (props.name === "swift") {
        icon = faSwift;
        color = "#f05035";
    }

    return (
        <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white mx-5 shadow-md">
            <FontAwesomeIcon icon={icon} style={{ color: color }} size="3x" />
        </div>
    );
}

export default Framework;

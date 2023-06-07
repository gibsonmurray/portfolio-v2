import React from "react";
import ProjLinks from "./ProjLinks";
import ProjDesc from "./ProjDesc";
import ProjTitle from "./ProjTitle";

function ProjectContent(props) {
    return (
        <div className="flex h-5/6 w-2/5 flex-col items-center justify-evenly">
            <ProjTitle title={props.title} />
            <ProjDesc desc={props.desc} />
            <ProjLinks code={props.code} demo={props.demo} />
        </div>
    );
}

export default ProjectContent;

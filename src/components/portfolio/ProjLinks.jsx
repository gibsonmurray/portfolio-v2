import React from "react";
import DemoLink from "./DemoLink";
import CodeLink from "./CodeLink";

function ProjLinks(props) {
    return (
        <div className="flex w-3/4 items-center justify-evenly">
            {props.code && <CodeLink code={props.code} />}
            {props.demo && <DemoLink demo={props.demo} />}
        </div>
    );
}

export default ProjLinks;

import React from "react";

function ProjTitle(props) {
    return (
        <h3 className="whitespace-nowrap text-3xl font-extrabold">
            {props.title}
        </h3>
    );
}

export default ProjTitle;

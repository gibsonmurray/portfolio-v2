import React from "react";

function ProjTitle(props) {
    return (
        <h3 className="text-center text-2xl lg:text-3xl font-extrabold">
            {props.title}
        </h3>
    );
}

export default ProjTitle;

import React from "react";

function ProjDesc(props) {
    return (
        <p className="text-center text-md font-semibold text-neutral-500 lg:text-xl">
            {props.desc}
        </p>
    );
}

export default ProjDesc;

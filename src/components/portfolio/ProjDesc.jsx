import React from "react";

function ProjDesc(props) {
    return (
        <p className="text-center text-xl font-semibold text-neutral-500">
            {props.desc}
        </p>
    );
}

export default ProjDesc;

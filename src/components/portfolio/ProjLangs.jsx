import React from "react";
import Framework from "../Framework";

function ProjLangs({ langs, flipped }) {


    return (
        <div
            className={`top-0 lg:w-fill flex flex-wrap items-center justify-center lg:flex-col lg:justify-start

                ${flipped ? "left-0 " : "right-0 "}
            `}
        >
            {langs.map((lang, index) => {
                return <Framework name={lang} key={index} />;
            })}
        </div>
    );
}

export default ProjLangs;

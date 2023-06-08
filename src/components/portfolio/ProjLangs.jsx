import React from "react";
import Framework from "../Framework";

function ProjLangs({ langs, flipped }) {
    return (
        <div
            className={
                flipped
                    ? "left-0 top-0 flex h-full flex-col items-center justify-start"
                    : "right-0 top-0 flex h-full flex-col items-center justify-start"
            }
        >
            {langs.map((lang, index) => {
                return <Framework name={lang} key={index}/>;
            })}
        </div>
    );
}

export default ProjLangs;

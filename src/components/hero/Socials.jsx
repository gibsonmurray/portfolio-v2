import React from "react";
import Account from "./Account";

function Socials() {
    return (
        <div className="mt-8 flex flex-row">
            <Account platform="linkedin" />
            <Account platform="github" />
        </div>
    );
}

export default Socials;

import React from "react";
import Account from "./Account";

function Socials() {
    return (
        <div className="mt-8 flex flex-row">
            <Account key={1} platform="linkedin" />
            <Account key={2} platform="github" />
        </div>
    );
}

export default Socials;

import React from "react";
import Account from "./Account";

function Socials() {
    return (
        <div className="flex flex-row 
                        justify-center
                        lg:justify-start lg:mt-8">
            <Account platform="linkedin" />
            <Account platform="github" />
        </div>
    );
}

export default Socials;

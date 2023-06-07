import React from "react";
import Account from "./Account";

function Accounts() {
    return (
        <div className="mt-8 flex items-center justify-evenly">
            <Account platform="email" caption="gibmurrays@gmail.com" />
            <Account platform="linkedin" caption="/gibsonmurray" />
        </div>
    );
}

export default Accounts;

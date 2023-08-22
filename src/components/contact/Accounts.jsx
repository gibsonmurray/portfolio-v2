import React from "react";
import Account from "./components/Account";

function Accounts() {
    return (
        <div className="mt-5 xl:mt-8 flex items-center justify-evenly flex-col lg:flex-row">
            <Account platform="email" caption="gibmurrays@gmail.com" />
            <Account platform="linkedin" caption="/gibsonmurray" />
        </div>
    );
}

export default Accounts;

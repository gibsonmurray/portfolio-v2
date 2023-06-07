import React from "react";
import Accounts from "./Accounts";

function Content() {
    return (
        <div className="flex flex-col items-start justify-center">
            <h2 className="text-xl font-extrabold text-blue-500">CONTACT</h2>
            <h3 className="mt-5 text-3xl font-extrabold">
                Let's connect! I'm currently open for hire! 💡
            </h3>
            <Accounts />
        </div>
    );
}

export default Content;
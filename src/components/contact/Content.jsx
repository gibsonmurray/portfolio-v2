import React from "react";
import Accounts from "./Accounts";

function Content() {
    return (
        <div className="flex w-5/6 flex-col items-center justify-center lg:h-auto lg:w-auto lg:items-start">
            <h2 className="text-center text-xl font-extrabold text-blue-500 lg:text-start">
                CONTACT
            </h2>
            <h3 className="mt-5 text-center text-3xl font-extrabold lg:text-start">
                Let's connect! I'm currently available for hire! 💡
            </h3>
            <Accounts />
        </div>
    );
}

export default Content;

import React from "react";
import Links from "./NavLinks";

function Navbar() {
    return (
        <div className=" fixed flex h-24 w-screen items-center justify-between bg-white px-10 text-neutral-800 shadow-lg">
            <h1 className="whitespace-nowrap text-4xl font-extrabold cursor-pointer">
                Gibson Murray
            </h1>
            <Links />
        </div>
    );
}

export default Navbar;

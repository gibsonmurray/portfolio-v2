import React from "react";
import Links from "./NavLinks";

function Navbar() {
    return (
        <div className=" fixed z-10 flex h-24 w-screen items-center justify-between bg-white px-10 shadow-lg">
            <h2 className="cursor-pointer whitespace-nowrap text-4xl font-extrabold">
                Gibson Murray
            </h2>
            <Links />
        </div>
    );
}

export default Navbar;

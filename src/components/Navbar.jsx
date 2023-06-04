import React from "react";
import Links from "./Links";

function Navbar() {
    return (
        <div className=" fixed flex h-24 w-screen items-center justify-between bg-white px-52 text-neutral-800 shadow-lg">
            <h1 className="m-3 text-4xl font-extrabold whitespace-nowrap">Gibson Murray</h1>
            <Links />
        </div>
    );
}

export default Navbar;

import React from "react";
import Links from "./NavLinks";
import { Link } from "react-scroll";

function Navbar() {
    return (
        <div className=" fixed z-10 flex h-24 w-screen items-center justify-between bg-white px-10 shadow-lg">
            <Link
                activeClass="active"
                to={"Home"}
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
            >
                <h2 className="cursor-pointer whitespace-nowrap text-3xl font-extrabold">
                    Gibson Murray
                </h2>
            </Link>
            <Links />
        </div>
    );
}

export default Navbar;

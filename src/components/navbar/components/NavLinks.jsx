import React from "react";
import NavLink from "./NavLink";

function NavLinks() {
    return (
        <div className="flex flex-row space-x-10">
            <NavLink name="Home" />
            <NavLink name="About" />
            <NavLink name="Projects" />
            <NavLink name="Contact" />
        </div>
    );
}

export default NavLinks;

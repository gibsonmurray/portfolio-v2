import React from "react";
import Link from "./NavLink";

function NavLinks() {
    return (
        <div className="flex flex-row space-x-10">
            <Link name="Home" />
            <Link name="About" />
            <Link name="Projects" />
            <Link name="Contact" />
        </div>
    );
}

export default NavLinks;

import React from "react";
import Link from "./Link";

function Links() {
    return (
        <div className="flex flex-row space-x-10">
            <Link name="Home" />
            <Link name="About" />
            <Link name="Projects" />
            <Link name="Contact" />
        </div>
    );
}

export default Links;

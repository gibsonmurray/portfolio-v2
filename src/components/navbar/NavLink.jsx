import React from "react";
import { Link } from "react-scroll";

function NavLink(props) {
    return (
        <Link
            activeClass="active"
            to={props.name}
            spy={true}
            smooth={true}
            offset={0}
            duration={750}
        >
            <h3 className="cursor-pointer text-xl font-bold duration-200 hover:text-blue-500">
                {props.name}
            </h3>
        </Link>
    );
}

export default NavLink;

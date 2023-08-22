import React from "react";
import { Link } from "react-scroll";

function NavLink({ name, vertical, onClick }) {

    return (
        <Link
            activeClass="active"
            to={name}
            spy={true}
            smooth={true}
            offset={-70}
            duration={750}
            onClick={onClick}
        >
            <h3 className={`cursor-pointer duration-200 hover:text-blue-500 
                            text-4xl font-black
                            sm:text-xl sm:font-bold
                            xl:text-xl xl:font-bold 
                            ${vertical && "my-10"}`}>
                {name}
            </h3>
        </Link>
    );
}

export default NavLink;

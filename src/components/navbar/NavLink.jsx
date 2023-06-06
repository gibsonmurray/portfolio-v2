import React from "react";

function NavLink(props) {
    return (
        <h3 className="cursor-pointer text-2xl font-bold duration-200 hover:text-blue-500">
            {props.name}
        </h3>
    );
}

export default NavLink;

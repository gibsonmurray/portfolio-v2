import React, { useEffect } from "react";
import NavLink from "./NavLink";

const FullscreenMenu = ({ isOpen, setIsOpen, links }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.position = 'fixed';
        } else {
            document.body.style.position = 'static';
        }
    }, [isOpen]);

    return (
        <div className={`fixed top-0 left-0 w-screen h-screen overflow-hidden 
                        flex flex-col items-center justify-center bg-white 
                        transition-transform duration-500 ease-in-out z-40 transform 
                        ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
            {links.map((link, index) => (
                <NavLink
                    key={index}
                    name={link.name}
                    vertical={true}
                    onClick={() => setIsOpen(false)}
                />
            ))}
        </div>
    );
};

export default FullscreenMenu;

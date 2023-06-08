import React from "react";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="flex w-screen items-center justify-center bg-neutral-800 py-16">
            <span className="text-center text-sm font-extrabold text-white lg:text-xl ">
                Copyright © {year} All rights are reserved 🔒
            </span>
        </div>
    );
}

export default Footer;

import React from "react";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="flex w-screen items-center justify-center bg-neutral-800 py-16">
            <span className="font-extrabold text-white text-xl">
                Copyright © {year} All rights are reserved 🔒
            </span>
        </div>
    );
}

export default Footer;

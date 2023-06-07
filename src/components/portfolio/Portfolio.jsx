import React from "react";
import Projects from "./Projects";
import { Element } from "react-scroll";

function Portfolio() {
    return (
        <Element name="Projects">
            <div className="flex flex-col items-center justify-center bg-neutral-100 px-40 py-40">
                <div className="w-[88%]">
                    {" "}
                    <h2 className="text-xl font-extrabold text-blue-500">
                        PORTFOLIO
                    </h2>
                    <h3 className="mt-5 text-3xl font-extrabold">
                        Every project puts the user first and achieves peak
                        efficiency 🧑‍💻
                    </h3>
                    <Projects />
                </div>
            </div>
        </Element>
    );
}

export default Portfolio;

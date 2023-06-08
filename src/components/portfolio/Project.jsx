import React, { useState, useEffect } from "react";
import ProjectContent from "./ProjectContent";
import ProjImg from "./ProjImg";
import ProjLangs from "./ProjLangs";

function Project({ title, desc, code, demo, image, flipped, imgSize, langs }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (windowWidth < 1024) {
        flipped = false;
    }

    return (
        <div className="relative m-10 flex h-[700px] w-full flex-col items-center justify-evenly overflow-hidden rounded-3xl bg-white shadow-xl lg:h-[28rem] lg:flex-row lg:p-0">
            {flipped && <ProjLangs langs={langs} flipped={flipped} />}
            {!flipped && <ProjImg image={image} imgSize={imgSize} />}
            <ProjectContent
                title={title}
                desc={desc}
                code={code}
                demo={demo}
                image={image}
                flipped={flipped}
            />
            {flipped && <ProjImg image={image} imgSize={imgSize} />}
            {!flipped && <ProjLangs langs={langs} flipped={flipped} />}
        </div>
    );
}

export default Project;

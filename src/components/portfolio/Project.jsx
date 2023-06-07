import React from "react";
import ProjectContent from "./ProjectContent";
import ProjImg from "./ProjImg";
import ProjLangs from "./ProjLangs";

function Project({ title, desc, code, demo, image, flipped, imgSize, langs }) {
    return (
        <div className="relative m-10 flex h-[28rem] w-full items-center justify-evenly overflow-hidden rounded-2xl bg-white shadow-xl">
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

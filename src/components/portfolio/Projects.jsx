import React from "react";
import projectList from "./projectList";
import Project from "./Project";

function Projects() {
    return (
        <div className="mt-10 flex w-full flex-col items-center justify-center">
            {projectList.map((proj, index) => {
                return (
                    <Project
                        key={index}
                        title={proj.title}
                        desc={proj.desc}
                        langs={proj.langs}
                        code={proj.code}
                        demo={proj.demo}
                        image={proj.image}
                        imgSize={proj.imgSize}
                        flipped={proj.flipped}
                    />
                );
            })}
        </div>
    );
}

export default Projects;

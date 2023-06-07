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
                        id={index}
                        title={proj.title}
                        desc={proj.desc}
                        lang={proj.lang}
                        code={proj.code}
                        demo={proj.demo}
                        image={proj.image}
                        imgSize={proj.imgSize}
                    />
                );
            })}
        </div>
    );
}

export default Projects;

import React from "react";
import Lottie from "lottie-react";
import ProjectContent from "./ProjectContent";
import Framework from "../Framework";

function Project(props) {
    return (
        <div className="relative m-10 flex h-[28rem] w-full items-center justify-evenly overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="flex h-5/6 w-2/5 items-center justify-center overflow-hidden">
                <div className="w-fill h-fill">
                    <Lottie
                        animationData={props.image}
                        className={props.imgSize}
                    />
                </div>
            </div>
            <ProjectContent
                key={props.id}
                id={props.id}
                title={props.title}
                desc={props.desc}
                code={props.code}
                demo={props.demo}
                image={props.image}
            />
            <div className="absolute right-0 top-0">
                <Framework name={props.lang} bgColor="bg-white" />
            </div>
        </div>
    );
}

export default Project;

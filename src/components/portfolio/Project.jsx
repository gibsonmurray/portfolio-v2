import ProjectContent from "./components/ProjectContent";
import ProjImg from "./components/ProjImg";
import ProjLangs from "./components/ProjLangs";

function Project({ title, desc, code, demo, image, imgSize, langs }) {

    return (
        <div className="relative m-7 py-5 flex h-[500px] w-full flex-col items-center justify-evenly overflow-hidden rounded-3xl bg-white shadow-xl lg:h-[26rem] lg:flex-row lg:p-0">
            <ProjImg image={image} imgSize={imgSize} />
            <ProjectContent
                title={title}
                desc={desc}
                code={code}
                demo={demo}
                image={image}
            />
            <ProjLangs langs={langs} />
        </div>
    );
}

export default Project;

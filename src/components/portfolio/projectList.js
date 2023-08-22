import geolocatorImg from "../../images/geolocator.json";
import codepenImg from "../../images/codepen.json"
import aiImg from "../../images/ai.json";
import devSetupImg from "../../images/dev-setup.json";
import listenerImg from "../../images/listener.json";

const projects = [
    {
        title: "MUSTATS 🎧",
        desc:
            "Developed an iOS app using the Spotify API and SwiftUI to display user listening statistics",
        langs: ["Swift", "SwiftUI"],
        code: undefined,
        demo: "https://apps.apple.com/us/app/mustats/id6459354721",
        image: listenerImg,
        imgSize: "h-[180px] lg:h-[340px] lg:w-[340px] xl:h-[370px] xl:w-[400px]",
    },
    {
        title: "AI IMAGINES 🎨",
        desc:
            "Programmed and deployed a full-stack RESTful web application to allow users to generate images with OpenAI's DALLE-2",
        langs: ["JavaScript", "Node.js", "Express", "MongoDB"],
        code: "https://github.com/gibsonmurray/imagine",
        demo: "https://cerise-scorpion-tux.cyclic.app/",
        image: aiImg,
        imgSize: "h-[380px] lg:h-[680px] lg:w-[680px] xl:h-[780px] xl:w-[780px] lg:mb-7",
    },
    {
        title: "CODEPENS 🖋️",
        desc:
            "A collection of original front-end projects on an online portfolio",
        langs: ["HTML", "CSS", "JavaScript", "Sass"],
        code: undefined,
        demo: "https://codepen.io/gibsonmurray",
        image: codepenImg,
        imgSize: "h-[160px] lg:h-[280px] lg:w-[280px] xl:h-[350px] xl:w-[350px]",
    },
    {
        title: "CELL GEOLOCATOR 🌎",
        desc:
            "Implemented a data structure to efficiently link any cellphone to a cell tower depending on its location",
        langs: ["Java", "Data Structures"],
        code: "https://github.com/gibsonmurray/CMSC420-Data-Structures/tree/main/Project%203%20-%20Clustering%20and%20Farthest%20First%20KD%20Tree/cmsc420_s23",
        demo: undefined,
        image: geolocatorImg,
        imgSize: "h-[170px] w-[190px] lg:h-[350px] lg:w-[350px] xl:h-[380px] xl:w-[400px] mt-5 ml-3 lg:ml-0",
    },
    {
        title: "MICRO COMPILER 👾",
        desc:
            "Implemented a lexer, parser, and interpreter to handle a subset of the OCaml functional language",
        langs: ["OCaml"],
        code: "https://github.com/gibsonmurray/CMSC330-Programming-langs/tree/main/project4a",
        demo: undefined,
        image: devSetupImg,
        imgSize: "h-[270px] lg:h-[400px] lg:w-[400px] xl:w-[500px] xl:w-[500px]",
    },
];

export default projects;

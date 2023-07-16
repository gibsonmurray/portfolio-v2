import geolocatorImg from "../../images/geolocator.json";
import codepenImg from "../../images/codepen.json"
import aiImg from "../../images/ai.json";
import devSetupImg from "../../images/dev-setup.json";

const projects = [
    {
        title: "IMAGINE (AI IMAGER) 🎨",
        desc:
            "Programmed and deployed a full-stack RESTful web application with the Express API. " +
            "Deposited hashed passwords in MongoDB to verify user logins and allow storage of private data. " +
            "Fetched a custom image via the OpenAI DALL-E 2 service prompted by input from the user.",
        langs: ["JavaScript", "Node.js", "Express", "MongoDB"],
        code: "https://github.com/gibsonmurray/imagine",
        demo: "https://cerise-scorpion-tux.cyclic.app/",
        image: aiImg,
        imgSize: "h-[400px] lg:h-[700px] lg:w-[700px] xl:h-[800px] xl:w-[800px] lg:mb-7",
        flipped: false,
    },
    {
        title: "CODEPENS 🖋️",
        desc:
            "A collection of original front-end projects on an online portfolio. " +
            "Intended to showcase a variety of skills involving animation, frameworks, and experimentation. " +
            "Projects include a use of SCSS, D3.js, and p5.js frameworks.",
        langs: ["HTML", "CSS", "JavaScript", "Sass"],
        code: undefined,
        demo: "https://codepen.io/gibsonmurray",
        image: codepenImg,
        imgSize: "h-[180px] lg:h-[280px] lg:w-[280px] xl:h-[350px] xl:w-[350px]",
        flipped: true,
    },
    {
        title: "CELLULAR GEOLOCATOR 🌎",
        desc:
            "Implemented a kd-tree data structure to plot cellular devices on a 2D plane. " +
            "Modified a max-heap to construct a priority queue and perform a farthest-first traversal. " +
            "The end result was a data structure to efficiently link any cellphone to a cell tower depending on its location.",
        langs: ["Java", "Data Structures"],
        code: "https://github.com/gibsonmurray/CMSC420-Data-Structures/tree/main/Project%203%20-%20Clustering%20and%20Farthest%20First%20KD%20Tree/cmsc420_s23",
        demo: undefined,
        image: geolocatorImg,
        imgSize: "h-[190px] w-[190px] lg:h-[350px] lg:w-[350px] xl:h-[400px] xl:w-[400px] mt-5 ml-3 lg:ml-0",
        flipped: false,
    },
    {
        title: "MICROCAML COMPILER 👾",
        desc:
            "Implemented a lexer to tokenize string inputs targeted by MicroCaml syntax. " +
            "Constructed a recursive descent parser to create an abstract syntax tree from tokens" +
            "Built an interpreter to calculate a value from the AST given the operational semantics of the " +
            "MicroCaml functional language.",
        langs: ["OCaml"],
        code: "https://github.com/gibsonmurray/CMSC330-Programming-langs/tree/main/project4a",
        demo: undefined,
        image: devSetupImg,
        imgSize: "h-[300px] lg:h-[400px] lg:w-[400px] xl:w-[500px] xl:w-[500px]",
        flipped: true,
    },
];

export default projects;

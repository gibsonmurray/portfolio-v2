import geolocatorImg from "../../images/geolocator.json";
import aiImg from "../../images/ai.json";
import devSetup from "../../images/dev-setup.json";

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
        imgSize: "h-[800px] w-[800px] mb-7",
        flipped: false,
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
        imgSize: "h[800px] w-[800px] mt-5",
        flipped: true,
    },
    {
        title: "MICROCAML COMPILER 📝",
        desc:
            "Implemented a lexer to tokenize string inputs targeted by MicroCaml syntax." +
            "Constructed a recursive descent parser to create an abstract syntax tree from tokens" +
            "Built an interpreter to calculate a value from the AST given the operational semantics of the " +
            "MicroCaml functional langsuage; included a “mutop” top-level REPL.",
        langs: ["OCaml"],
        code: "https://github.com/gibsonmurray/CMSC330-Programming-langss/tree/main/project4a",
        demo: undefined,
        image: devSetup,
        imgSize: "h=[500px] w-[500px]",
        flipped: false,
    },
];

export default projects;

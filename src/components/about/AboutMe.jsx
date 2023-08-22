import React from "react";

function AboutMe() {
    return (
        <div className="mt-12 w-5/6 text-center lg:w-3/5 lg:text-start xl:ml-10 xl:mt-0 xl:w-1/3">
            <h2 className="text-xl font-extrabold text-blue-500">ABOUT ME</h2>
            <h3 className="mt-5 text-3xl font-extrabold lg:w-[550px]">
                A driven Full-Stack Software Engineer based in College Park,
                MD📍
            </h3>
            <p className="mt-5 text-xl text-neutral-500">
                Welcome to my corner of the web! I'm a{" "}
                <strong>Computer Science Student @ UMD</strong> with expertise
                in languages and frameworks including{" "}
                <strong>
                    TypeScript, React, Tailwind CSS, Next.js, Java, and Swift
                </strong>
                . Throughout my career, I've leveraged these skills to develop
                compelling, intuitive, and efficient software solutions, always
                focusing on writing clean, efficient code, and building{" "}
                <strong>user interfaces</strong>.
            </p>
        </div>
    );
}

export default AboutMe;

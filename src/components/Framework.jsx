import React from "react";
import html from "../images/icons/html.svg";
import css from "../images/icons/css.svg";
import js from "../images/icons/js.svg";
import react from "../images/icons/react.svg";
import node from "../images/icons/node.svg";
import java from "../images/icons/java.svg";
import swift from "../images/icons/swift.svg";
import c from "../images/icons/c.svg";
import tailwind from "../images/icons/tailwind.svg";
import ocaml from "../images/icons/ocaml.svg";
import mongodb from "../images/icons/mongodb.svg";
import express from "../images/icons/express.svg";
import haskell from "../images/icons/haskell.svg";
import dataStructure from "../images/icons/data-structure.svg";

function Framework({ name, bgColor }) {
    let icon;

    if (name === "HTML") {
        icon = html;
    } else if (name === "CSS") {
        icon = css;
    } else if (name === "JavaScript") {
        icon = js;
    } else if (name === "React") {
        icon = react;
    } else if (name === "Node.js") {
        icon = node;
    } else if (name === "Java") {
        icon = java;
    } else if (name === "Swift") {
        icon = swift;
    } else if (name === "C") {
        icon = c;
    } else if (name === "TailwindCSS") {
        icon = tailwind;
    } else if (name === "OCaml") {
        icon = ocaml;
    } else if (name === "MongoDB") {
        icon = mongodb;
    } else if (name === "Express") {
        icon = express;
    } else if (name === "Haskell") {
        icon = haskell;
    } else if (name === "Data Structures") {
        icon = dataStructure;
    }

    return (
        <div
            className={`${bgColor} m-5 flex h-[70px] w-[70px] transform cursor-pointer 
            items-center justify-center rounded-full border-[3px] border-neutral-200 
            shadow-xl transition-transform duration-200 hover:-translate-y-1 hover:scale-110`}
        >
            <img src={icon} alt={name} title={name} className="h-12 w-12" />
        </div>
    );
}

export default Framework;

import React from "react";
import html from "../images/icons/html.svg";
import css from "../images/icons/css.svg";
import js from "../images/icons/js.svg";
import ts from "../images/icons/ts.svg";
import react from "../images/icons/react.svg";
import node from "../images/icons/node.svg";
import next from "../images/icons/next.svg";
import d3 from "../images/icons/d3.svg";
import java from "../images/icons/java.svg";
import swift from "../images/icons/swift.svg";
import swiftui from "../images/icons/swiftui.png";
import c from "../images/icons/c.svg";
import tailwind from "../images/icons/tailwind.svg";
import sass from "../images/icons/sass.svg";
import ocaml from "../images/icons/ocaml.svg";
import mongodb from "../images/icons/mongodb.svg";
import express from "../images/icons/express.svg";
import haskell from "../images/icons/haskell.svg";
import dataStructure from "../images/icons/data-structure.svg";

function Framework({ name }) {
    let icon;

    if (name === "HTML") {
        icon = html;
    } else if (name === "CSS") {
        icon = css;
    } else if (name === "JavaScript") {
        icon = js;
    } else if (name === "TypeScript") {
        icon = ts;
    } else if (name === "React") {
        icon = react;
    } else if (name === "Node.js") {
        icon = node;
    } else if (name === "Next.js") {
        icon = next;
    } else if (name === "D3.js") {
        icon = d3;
    } else if (name === "Java") {
        icon = java;
    } else if (name === "Swift") {
        icon = swift;
    } else if (name === "SwiftUI") {
        icon = swiftui;
    } else if (name === "C") {
        icon = c;
    } else if (name === "TailwindCSS") {
        icon = tailwind;
    } else if (name === "Sass") {
        icon = sass;
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
            className={`m-3 flex h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] transform cursor-pointer 
            items-center justify-center rounded-full border-[3px] border-neutral-200 
            shadow-xl transition-transform duration-200 hover:-translate-y-1 hover:scale-110`}
        >
            <img src={icon} alt={name} title={name} className=" h-8 w-8 lg:h-12 lg:w-12" />
        </div>
    );
}

export default Framework;

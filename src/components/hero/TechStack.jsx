import React from "react";
import Framework from "./Framework";

function TechStack() {
    return (
        <div className="ml-20 flex items-center">
            <Framework name="html" />
            <Framework name="css" />
            <Framework name="js" />
            <Framework name="react" />
            <Framework name="node" />
            <Framework name="java" />
            <Framework name="swift" />
        </div>
    );
}

export default TechStack;

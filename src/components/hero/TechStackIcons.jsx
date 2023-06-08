import React from "react";
import Framework from "../Framework";

function TechStackIcons() {
    return (
        <div className="flex items-center justify-center
                        flex-wrap
                        xl:ml-20"
        >
            <Framework name="JavaScript" />
            <Framework name="React" />
            <Framework name="Node.js" />
            <Framework name="TailwindCSS" />
            <Framework name="Java" />
            <Framework name="C" />
            <Framework name="Swift" />
        </div>
    );
}

export default TechStackIcons;

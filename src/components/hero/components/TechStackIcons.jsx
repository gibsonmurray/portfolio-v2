import React from "react";
import Framework from "../../Framework";

function TechStackIcons() {
    return (
        <div className="flex items-center justify-center
                        flex-wrap
                        xl:ml-20"
        >
            <Framework name="TypeScript" circular={true}/>
            <Framework name="React" circular={true}/>
            <Framework name="Node.js" circular={true}/>
            <Framework name="Next.js" circular={true}/>
            <Framework name="TailwindCSS" circular={true}/>
            <Framework name="Swift" circular={true}/>
            <Framework name="Java" circular={true}/>
            <Framework name="C" circular={true}/>
        </div>
    );
}

export default TechStackIcons;

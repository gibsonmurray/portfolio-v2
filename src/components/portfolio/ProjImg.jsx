import React from "react";
import Lottie from "lottie-react";

function ProjImg(props) {
    return (
        <div className="flex h-5/6 w-2/5 items-center justify-center overflow-hidden">
            <div className="w-fill h-fill">
                <Lottie animationData={props.image} className={props.imgSize} />
            </div>
        </div>
    );
}

export default ProjImg;

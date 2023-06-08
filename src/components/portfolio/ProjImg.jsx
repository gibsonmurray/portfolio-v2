import React from "react";
import Lottie from "lottie-react";

function ProjImg(props) {

    return (
        <div className="flex h-[180px] w-[400px] items-center justify-center overflow-hidden lg:h-5/6 lg:w-2/5">
            <div className="w-fill h-fill">
                <Lottie animationData={props.image} className={props.imgSize} />
            </div>
        </div>
    );
}

export default ProjImg;

import React from "react";

const SliderImg = (props) => {
    return (
        <div>
            <img
                src={props.srcImg}
                alt={props.alt}
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
            ></img>
            <div className="text--overlay" style={{color:"white"}}>
                <h1>{props.caption}</h1>
            </div>
        </div>
    )
};

export default SliderImg;

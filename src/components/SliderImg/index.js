import React from "react";
// import belt from "./belt.jpg";
// import SliderImg from "./SliderImg"

// const Slider = () => {
    // const sliderImgs = [
    //     {
    //         imgSrc: belt,
    //         alt: "taekwondo belt",
    //     },
    //     {
    //         imgSrc: belt,
    //         alt: "taekwondo belt",
    //     },
    //     {
    //         imgSrc: belt,
    //         alt: "taekwondo belt",
    //     },
    //     {
    //         imgSrc: belt,
    //         alt: "taekwondo belt",
    //     },
    // ];



    const SliderImg = (props) => {
        return (
            <div>
                <img
                    src={props.srcImg}
                    alt={props.alt}
                    style={{ height: "300px", width: "100%", objectFit: "cover" }}
                ></img>
            </div>
        )
    };
// };
export default SliderImg;

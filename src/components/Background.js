import React from 'react';
import useWindowDimensions from '../functions/useWindowDimensions';

const randint = (from, to) => Math.floor(Math.random() * (to - from));

const BACKGROUND_IMAGES = [
    "7Ebx92w.png", "Xb7Whge.png", "omaldQs.jpg"
].map(s => `https://i.imgur.com/${s}`)

function makeBackground() {
    document.body.style.backgroundImage = arguments[0];
    document.body.style.backgroundSize = arguments[1];
    document.body.style.backgroundRepeat = arguments[2];
}

const Background = ({ image, images, full }) => {
    let [ imageSrc, ] = React.useState(
        images 
        ? images[randint(0, images.length)]
        : image
    );  

    if (full) makeBackground(`url("${imageSrc}")`, "cover", "no-repeat");
    else  makeBackground("", "", "");

    const Image = () => {
        if (full) { return <></> }
        return (
            <div style={{ overflow: "hidden", maxHeight: "35vh" }}>
                <img 
                    alt=""
                    style={{
                        width: "calc(100% + 20px)", 
                        minWidth: "1000px",
                        transform: "translateX(calc(0.7 * (100vw - 100%)))",
                        display: "block"
                    }}
                    src={imageSrc}
                />
            </div>
        )
    }
        
    return <div id="background-container">
        <Image />
        <div style={{
                width: "100%",
                height: "30px",
                background: `linear-gradient(
                    180deg, 
                    rgba(255, 255, 255, 0) 0%, 
                    rgba(255, 255, 255, 1) 100%
                )`,
                position: "relative",
                bottom: "30px"
        }}/>
    </div>
    
}

export default Background
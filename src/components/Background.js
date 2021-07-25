import React from 'react';
import useWindowDimensions from '../functions/useWindowDimensions';

const randint = (from, to) => Math.floor(Math.random() * (to - from));

const BACKGROUND_IMAGES = [
    "7Ebx92w.png", "Xb7Whge.png", "omaldQs.jpg"
].map(s => `https://i.imgur.com/${s}`)

function makeBackground() {
    document.documentElement.style.backgroundImage = arguments[0];
    document.documentElement.style.backgroundSize = arguments[1];
    document.documentElement.style.backgroundRepeat = arguments[2];
}

const Background = ({ image, images, full }) => {
    let [ imageSrc, ] = React.useState(
        images 
        ? images[randint(0, images.length)]
        : image
    );      
    let imgRef = React.useRef(null);
    let [ styleIsUpdated, setStyleIsUpdated ] = React.useState(false);

    React.useEffect(() => {
        function updateStyle() {
            let windowWidth = document.documentElement.clientWidth;
            let styleIsUpdated;
            setStyleIsUpdated(s => {
                styleIsUpdated = s;
                return s;
            });

            if (!imgRef.current) return;
            if (windowWidth <= 1000 && !styleIsUpdated) {
                imgRef.current.style["min-width"] = "1000px";
                setStyleIsUpdated(true);
            } else if (windowWidth > 1000 & styleIsUpdated) {
                imgRef.current.style["min-width"] = "100vw";
                setStyleIsUpdated(false);
            }
        }
        updateStyle();
        window.addEventListener("resize", updateStyle);
        return () => window.removeEventListener("resize", updateStyle);
    }, [])

    if (full) makeBackground(`url("${imageSrc}")`, "cover", "no-repeat");
    else  makeBackground("", "", "");

    const Image = () => {
        if (full) { return <></> }
        return (
            <div style={{ overflow: "hidden", maxHeight: "35vh" }}>
                <img 
                    ref={imgRef}
                    alt=""
                    style={{
                        width: "calc(100% + 20px)", 
                        minWidth: styleIsUpdated ?  "1000px" : "100vw",
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
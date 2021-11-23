import React from 'react';

/**
 * Sets the background image to `backgroundImage`, background size to 
 * `backgroundSize`, and background repeat to `backgroundRepeat`.
 */
function makeBackground(
    backgroundImage,
    backgroundSize,
    backgroundRepeat,
) {
    document.documentElement.style.backgroundImage = backgroundImage;
    document.documentElement.style.backgroundSize = backgroundSize;
    document.documentElement.style.backgroundRepeat = backgroundRepeat;
}

/**
 * Controls the background fo the current page.  
 * - `imgSrc: string`: specifies the src for the image being used for the 
 *   background.
 * - `full: boolean`: specifies whether the image is a full-page spread
 *    (`true`) or just along the top portion (`false`).
 */
const Background = ({ imgSrc, full }) => {
    let imgRef = React.useRef(null);
    let [styleIsUpdated, setStyleIsUpdated] = React.useState(false);

    React.useEffect(() => {
        // Creating a function to update the background size appropriately
        // on a window resize.
        function updateStyle() {
            let windowWidth = document.documentElement.clientWidth;
            let styleIsUpdated;
            setStyleIsUpdated(s => {
                styleIsUpdated = s;
                return s;
            });

            // Don't bother if the image isn't there, we'll just runtime.
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

    if (full) {
        makeBackground(`url("${imgSrc}")`, "100% 100%", "no-repeat");
    } else {
        makeBackground("", "", "");
    }

    const Image = () => {
        // We return nothing for full backgrounds because we are using the 
        // `documentElement` background
        if (full) {
            return <></>;
        }
        return (
            <div style={{ overflow: "hidden", maxHeight: "35vh" }}>
                <img
                    ref={imgRef}
                    alt="background image"
                    style={{
                        width: "calc(100% + 20px)",
                        minWidth: styleIsUpdated ? "1000px" : "100vw",
                        transform: "translateX(calc(0.7 * (100vw - 100%)))",
                        display: "block"
                    }}
                    src={imgSrc}
                />
            </div>
        )
    }

    return (
        <div id="background-container">
            <Image />
            {/* gradient for smoothing when it's not big enough -
            we need this on full backgrounds too. */}
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
            }} />
        </div>
    )
}

export default Background;
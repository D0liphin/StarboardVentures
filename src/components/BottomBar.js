import { useEffect, useRef } from 'react';
import useWindowDimensions from '../functions/useWindowDimensions';
import getMarginHeight from '../functions/getMarginHeight';

const BottomBar = () => {
    const bottomBarRef = useRef(null);
    const [ windowWidth, windowHeight ] = useWindowDimensions();

    // Great job moron
    useEffect(() => {
        let updateHeight = () => {
            bottomBarRef.current.style.marginTop = getMarginHeight(windowWidth);
            let rect = bottomBarRef.current.getBoundingClientRect();
            if (rect.bottom <= windowHeight) 
                bottomBarRef.current.style.marginTop 
                    = `${parseInt(bottomBarRef.current.style.marginTop) + windowHeight - rect.bottom + 2}px`;
            
        }
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    });

    return (<>
        <div id="bottom-bar-flex-aligner" ref={bottomBarRef}>
            <div id="bottom-bar-container">
                <div id="bottom-bar-elements-container">
                    <img src="starboard-ventures-logo-white.svg" alt="" />
                    <div style={{ flexGrow: "2", minWidth: "40px" }}/>
                    <div class="navigation-container">
                        I think something should go here, but I'm not sure what. 
                        I think something should go here, but I'm not sure what. 
                    </div>
                </div>
            </div>
            
        </div>
        <div style={{ 
            position: "relative", 
            bottom: "25px", 
            left: "5px", 
            color: "rgba(255, 255, 255, 0.1)",
            height: "0"
        }}>
            website built by <a style={{ color: "rgba(255, 255, 255, 0.1)" }} href="https://github.com/D0liphin">D0liphin</a>
        </div>
    </>)
}

export default BottomBar;
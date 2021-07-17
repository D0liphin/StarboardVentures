import { useEffect, useRef } from 'react';

import getMarginHeight from '../functions/getMarginHeight';
import useWindowDimensions from '../functions/useWindowDimensions';

const Page = ({ children }) => {
    let pageRef = useRef(null);
    let [ windowWidth, ] = useWindowDimensions();

    useEffect(() => {
        const updateTopMargin = () => 
            pageRef.current.style.marginTop = getMarginHeight(windowWidth, 10);
        updateTopMargin();
        window.addEventListener("resize", updateTopMargin);
        return () => window.removeEventListener("resize", updateTopMargin);
    });

    return <div id="page-container" ref={pageRef}>
        <div id="page">
            <div style={{ padding: "30px" }}>{children}</div>
        </div>
    </div>
}

export default Page;
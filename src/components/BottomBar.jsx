import { useEffect, useRef } from 'react';
import useWindowDimensions from '../util/useWindowDimensions';
import getHeaderOffset from '../util/getHeaderOffset';

const WebsiteBuiltByD0liphin = () => <div
    style={{
        position: 'relative',
        bottom: '25px',
        left: '5px',
        color: 'rgba(255, 255, 255, 0.1)',
        height: '0',
    }}
>
    website built by{' '}
    <a
        style={{ color: 'rgba(255, 255, 255, 0.1)' }}
        href="https://github.com/D0liphin"
    >
        D0liphin
    </a>
</div>;

/**
 * The bottom bar that shows the Starboard logo. Should always be at 
 * the bottom of the page or after the content if the page does not 
 * have enough content on it.
 */
const BottomBar = () => {
    const bottomBarRef = useRef(null);
    const [windowWidth, windowHeight] = useWindowDimensions();

    // TODO: This could potentially use some fixing so that it is a little
    // less choppy, but it'll do for now.
    useEffect(() => {
        function repositionBottomBar() {
            // Keep trying until the bottom bar has been rendered.
            if (!bottomBarRef.current) {
                repositionBottomBar();
                return;
            }
            let headerOffset = getHeaderOffset(windowWidth);
            let rect = bottomBarRef.current.getBoundingClientRect();
            bottomBarRef.current.style.marginTop = headerOffset;
            if (rect.bottom < windowHeight) {
                bottomBarRef.current.style.marginTop = `${parseInt(bottomBarRef.current.style.marginTop) +
                    windowHeight -
                    rect.bottom
                    }px`;
            }
        };
        repositionBottomBar();
        window.addEventListener('resize', repositionBottomBar);
        return () => window.removeEventListener('resize', repositionBottomBar);
    });

    return <>
        <div
            id="bottom-bar-flex-aligner"
            ref={bottomBarRef}
            style={{ marginTop: '1px' }}
        >
            <div id="bottom-bar-container">
                <img src="/starboard-ventures-logo-white.svg" alt="" />
                <div id="bottom-bar-elements-container">
                    {/* This is row-aligned */}
                    <div class="navigation-container">
                        <div style={{ textAlign: "right", }}>
                            <div>Strategic Leadership</div>
                            <div>Innovation &amp; Delivery</div>
                        </div>
                        <div>
                            <div>&nbsp;—&nbsp;</div>
                            <div>&nbsp;—&nbsp;</div>
                        </div>
                        <div>
                            <div>Project Management</div>
                            <div>Transformation &amp; Restructuring</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <WebsiteBuiltByD0liphin />
    </>;
};

export default BottomBar;

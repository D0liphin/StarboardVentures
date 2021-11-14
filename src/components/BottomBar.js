import { useEffect, useRef } from 'react';
import useWindowDimensions from '../functions/useWindowDimensions';
import getMarginHeight from '../functions/getMarginHeight';
import LineBreak from './LineBreak';

const BottomBar = () => {
  const bottomBarRef = useRef(null);
  const [windowWidth, windowHeight] = useWindowDimensions();

  // Great job moron
  useEffect(() => {
    let updateHeight = () => {
      if (!bottomBarRef.current) {
        new Promise((r) => setTimeout(r, 200)).then(updateHeight);
        return;
      }
      bottomBarRef.current.style.marginTop = getMarginHeight(windowWidth);
      let rect = bottomBarRef.current.getBoundingClientRect();
      if (rect.bottom <= windowHeight)
        bottomBarRef.current.style.marginTop = `${
          parseInt(bottomBarRef.current.style.marginTop) +
          windowHeight -
          rect.bottom +
          2
        }px`;
    };
    updateHeight();
    new Promise((r) => setTimeout(r, 500)).then(updateHeight);
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  });

  return (
    <>
      <div
        id="bottom-bar-flex-aligner"
        ref={bottomBarRef}
        style={{ marginTop: '1px' }}
      >
        <div id="bottom-bar-container">
          <div id="bottom-bar-elements-container">
            <img src="/starboard-ventures-logo-white.svg" alt="" />
            <div
              style={{
                letterSpacing: 2,
                display: 'inline-block',
              }}
              class="navigation-container"
            >
              Strategic Leadership &#8212; Project Management<br></br>
              Innovation & Delivery &#8212; Transformation & Restructuring
            </div>
          </div>
        </div>
      </div>
      <div
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
      </div>
    </>
  );
};

export default BottomBar;

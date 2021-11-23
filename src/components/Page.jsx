import { useEffect, useRef } from 'react';

import getHeaderOffset from '../util/getHeaderOffset';
import useWindowDimensions from '../util/useWindowDimensions';

const Page = ({ children, useMarginHeight = true }) => {
  let pageRef = useRef(null);
  let [windowWidth] = useWindowDimensions();

  useEffect(
    useMarginHeight
      ? () => {
          const updateTopMargin = () =>
            (pageRef.current.style.marginTop = getHeaderOffset(
              windowWidth,
              10
            ));
          updateTopMargin();
          window.addEventListener('resize', updateTopMargin);
          return () => window.removeEventListener('resize', updateTopMargin);
        }
      : () => null
  );

  return (
    <div id="page-container" ref={pageRef}>
      <div id="page">
        <div
          style={{ padding: '30px', marginTop: useMarginHeight ? '' : '150px' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;

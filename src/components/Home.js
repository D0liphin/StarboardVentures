import React from 'react';

import getMarginHeight from '../functions/getMarginHeight';
import useWindowDimensions from '../functions/useWindowDimensions';
import Background from './Background.js';
import TopBar from './TopBar.js';
import BottomBar from './BottomBar.js';
import LineBreak from './LineBreak';

const BigText = () => {
  const bigTextRef = React.useRef(null);
  const [windowWidth] = useWindowDimensions();

  React.useEffect(() => {
    let updateHeight = () =>
      (bigTextRef.current.style.height = getMarginHeight(windowWidth));
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  });

  return (
    <>
      <div
        ref={bigTextRef}
        style={{
          display: 'block',
          height: '100px',
        }}
      />
      <div id="big-text">
        <div style={{ padding: '20px 15px 20px 15px' }}>
          Marine Sector Operating Partner
        </div>
      </div>
    </>
  );
};

const Description = () => (
  <div id="description-container">
    <div
      style={{
        padding: '30px 30px 30px 30px',
        fontSize: '18px',
        textAlign: 'justify',
      }}
    >
      The marine sector is an attractive asset class open to financial investors
      with access to the right knowledge and expertise. Since 2013, Starboard
      Ventures has been partnering with investors to provide them with this
      expertise so that they can maximise the value of their marine investments
      while carefully managing operational risk. The typical services that we
      offer are: board representation, commercial strategy, vessel acquisition
      and acting as owner's representative.
      <LineBreak />
      <h3>Modern Shipping</h3>
      Three key trends in shipping have been the move to larger ships, more
      demanding environmental regulations and the requirement for additional
      capital. Looking forward, it is the environmental challenge that is likely
      to increase in importance and rightly so. Trying to forecast who the
      winners and losers of these trends is crucial to making the right marine
      investments. Another structural feature of the shipping sector is that in
      most shipping classes it is possible to make direct investments with a
      very light organisation. We explore these and many other issues in our
      Blog.
      <LineBreak />
      <h3>Key Investment Decisions</h3>
      For direct shipping investments the inital decisions include the shipping
      class (e.g. product tanker, container), the age of the vessel and the
      size. Following acquisition decisions will need to be made about where to
      charter out the vessel and the length of the charter. Finally, there is
      the timing of the sales process. Along the way decisions will need to be
      made regarding brokers, ship management and financing structure.
      <LineBreak />
      <h3>Operating Partner</h3>
      Starboard Ventures is an operating partner. What this means is that we
      partner up with financial investors and help manage all operational
      aspects of the investment. This would include managing suppliers &mdash;
      brokers, shipyards, fleet managers &mdash; finding and selecting assets,
      or providing assistance within commercial disputes. Alternatively, we also
      provide Board level representation of strategic support for indirect
      investments or corporate acquisitions.
      <LineBreak />
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      <Background image="home-background-4.jpg" full={true} />
      <TopBar />
      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
        }}
      >
        <BigText />
        <Description />
      </div>
      <BottomBar />
    </>
  );
};

export default Home;

// "omaldQs.jpg"

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
          Marine Sector Partner
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
      The structure of the marine industry makes it possible to invest directly
      in assets without the need for large overheads. There are high quality
      organizations that provide ship management and crewing services, brokers
      to assist with Sale and Purchase, and chartering and pooling organizations
      that can manage the commercial aspect of your marine asset for as long as
      you own it. The structure of the supplier network required will depend on
      a number of factors, not least, on the type of ship but in all cases you
      will need a trusted partner to help you set up and manage your suppliers
      and ensure that your investment is a success.
      <LineBreak />
      Shipping is by definition an international business and over time it has
      developed a very helpful set of standards, organizational bodies and a
      legal framework which help keep everything running smoothly. If you would
      like to understand more about the shipping sector, how it is structured
      and what the current trends are please have a look at our blog.
      <LineBreak />
      <h3>Key Investment Decisions</h3>
      For direct shipping investments the inital decisions include the type of
      ship: crude, product, chemical, container, dry bulk, multi-purpose, off
      shore or other the age of the vessel and the size. Then begins the Sale
      and Purchase process and following acquisition decisions will need to be
      made about where to charter out the vessel and the length of the charter.
      Finally, there is the timing of the sales process. Along the way decisions
      will need to be made regarding brokers, ship management and financing
      structure, and depending on the ship type, bunker hedging, crewing and
      maintenance and dry-docking.
      <LineBreak />
      <h3>Starboard Ventures as your Partner</h3>
      Starboard Ventures is a marine partner. We partner with investors and help
      manage the strategic and operational aspects of marine investment.
      Typically we act as owner's representatives and act as Board members on
      behalf of investors, however, we also get involved in commercial strategy
      especially vessel acquisition.
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

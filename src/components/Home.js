import React from 'react';

import getMarginHeight from '../functions/getMarginHeight';
import useWindowDimensions from '../functions/useWindowDimensions';
import Background from './Background.js';
import TopBar from './TopBar.js';
import BottomBar from './BottomBar.js';
import LineBreak from './LineBreak';

const Indent = () => <div style={{ display: 'inline-block', width: '2rem' }} />;

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
          Investing in the Marine Sector
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
      <h3>Marine Sector</h3>
      The marine sector can be understood from a couple of perspectives. Most
      simply it is composed of five areas: ships, ship construction, port
      infrastructure, ship operations and ship services. The sector can also be
      split into transport and offshore. Within transport the larger segments
      are dry bulk, crude oil, petroleum products, chemicals, containers, car
      carriers, and cruise ships. Offshore, on the other hand, is dominated by
      oil and gas production and includes platform supply vessels, ocean going
      tugs, crewing vessels, oil and gas platforms, dredgers and windfarm
      erection vessels.
      <br />
      <br />
      Marine transport is for the most part an international business and has a
      well-developed set of accepted standards, organizational structures and a
      legal framework which help keep everything running smoothly. These
      structures help preserve competition and as a consequence within
      international shipping, prices and economics tend to be global. The
      notable exception to this is the movement of goods between domestic ports
      known as cabotage trade. This area of shipping is more prone to regulation
      and local pricing.
      <LineBreak />
      <h3>Starboard Ventures</h3>
      Starboard Ventures was founded in 2013 with the goal of helping investors
      "steer the right course", with their marine investments. It is lead by
      Roger Iliffe and Simon Wade who together have more than 35 years
      experience in the marine industry over a wide range of roles from
      ship-building to CEO.(team link)
      <LineBreak />
      <h3>Our Services</h3>
      To ensure that we have the greatest impact we focus on four services:
      Strategic Leadership, Project Management, Innovation and Delivery, and
      Transformation and Restructuring. (services link)
      <LineBreak />
      <h3>Contact</h3>
      We are based in sunny Manchester but regularly visit London. If you are
      thinking about investing in the marine sector or would simply like to know
      more about the marine eco system please give us a call or drop us an
      email.
      <LineBreak />
      <h3>Blog</h3>
      For some no nonsense insights into the basics of the marine sector and
      beyond please check out our blog.(blog link)
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

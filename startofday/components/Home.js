import React from 'react';

import getMarginHeight from '../functions/getMarginHeight';
import useWindowDimensions from '../functions/useWindowDimensions';
import Background from './Background.js';
import TopBar from './TopBar.js';
import BottomBar from './BottomBar.js';
import LineBreak from './LineBreak';


const PlaceholderImg = ({ dimensions, float }) => (
    <img 
        src="https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png" 
        alt="" 
        width={dimensions[0]} 
        height={dimensions[1]}
        style={{float: float}}
    />
)

const BigText = () => {
    const bigTextRef = React.useRef(null);
    const [ windowWidth, ] = useWindowDimensions();

    // Great job moron
    React.useEffect(() => {
        let updateHeight = () => bigTextRef.current.style.height = getMarginHeight(windowWidth);
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    });

    return <>
        <div 
            ref={bigTextRef}
            style={{
                display: "block", 
                height: "100px",
            }}
        />
        <div id="big-text">
            <div style={{padding: "20px 15px 20px 15px"}}>
                Independent Operating Partner to Investors in the Marine Sector
            </div>
        </div>
    </>
}

const Description = () => (
    <div id="description-container">
        <div class="centered-major-heading-container">
            <div class="centered-major-heading">
                About Us
            </div>
        </div>
        <div style={{ 
            padding: "30px 30px 30px 30px",
            fontSize: "18px",
            textAlign: "center"
        }}>
            Shipping can be an attractive asset class provided that investors have an independent partner 
            to steer them on the right course.  Starboard Ventures is that partner. 
            <LineBreak />
            Starboard Ventures was founded in 2013 and specialises in providing operating partner services 
            to investors who make direct shipping investments.  We provide support during the investment 
            decision making process -  timing, ship type, pricing and deal structure - and then, 
            post-acquisition, set up a commercial and technical network for the ongoing management of the 
            vessel.  Our dedicated project team will then focus on the performance and cashflow of your 
            investment until you decide to exit. 
            <LineBreak />
            We act as your “owner’s representative” and focus entirely on your interests. We provide 
            independent marine expertise, analytical support to your decision making and excellent project 
            management. 
        </div>
    </div>
)

const Home = () => {
    return <> 
        <Background image="home-background-4.jpg" full={true} />
        <TopBar />
        <div style={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center"
        }}>
            <BigText />
            <Description />
        </div>
        <BottomBar />
    </>
}

export default Home

// "omaldQs.jpg"
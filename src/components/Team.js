import Background from './Background.js';
import BottomBar from './BottomBar.js';
import TopBar from './TopBar.js';
import Page from './Page.js';
import LineBreak from './LineBreak';

const TeamMember = ({ name, float, children }) => {
    return <div class="team-member">
        <img 
            src={/(\w+) /.exec(name)[1] + ".jpg"}
            alt={name} 
            style={{ 
                float: float, 
                width: "25%", 
                minWidth: "150px", 
                margin: float === "left" ? "0 20px 10px 0" : "0 0 10px 20px",
                borderRadius: "15px"
            }}
        />
        <div style={{ }}>
            <div style={{ 
                fontSize: "24px", 
                padding: "10px 0 10px 0",
                width: "100%",
                textAlign: float,
                color: "var(--dark-blue)"
            }}>{name}</div>
        </div>
        <div style={{textAlign: float}}>
            {children}
        </div>
    </div>
}

const Team = () => (
    <>
        <Background image="https://i.imgur.com/7Ebx92w.png"/> 
        <TopBar /> 
        <Page>
            <major-heading>Team</major-heading>
            <div style={{}}>
                <TeamMember name="Roger Iliffe" float="left">
                    has been in shipping for almost a decade and founded Starboard Ventures 
                    Ltd in 2013. Prior to that he was the CEO and founder of Hansa Heavy Lift and from 
                    2009-2013 was an operating partner at Oaktree Capital Management where he focused on 
                    marine and aviation investments.
                    <LineBreak height="10px"/>
                    He has experience across a broad range of ship types including MPP, Containers and 
                    offshore vessels. He sits on the Board of Geoquip Marine AG, an offshore geotechnical 
                    contractor. He has worked at both Bombardier and McKinsey and has an MBA from Bocconi
                    University. 
                </TeamMember>
                <LineBreak />
                <TeamMember name="Simon Wade" float="left">
                    <LineBreak height="10px"/>
                    He is a naval architect and chartered engineer.  He has a B.Eng from the University of 
                    Southampton.
                    - 25 years experience in the marine sector
                    <LineBreak height="10px"/>
                    - newbuilding and ship repair in Asia: Hong Kong, South Korea, China. Ship Types were
                    bulkers, tankers and container ships 
                    <LineBreak height="10px"/>
                    - Country Manager Lloyd's Register Ireland for 7 years
                    <LineBreak height="10px"/>
                    - SV as Marine Technical Director
                    <LineBreak height="10px"/>
                    - Fleetscape investment assessment
                    <LineBreak height="10px"/>
                    - Green Containership Group newbuild supervision, Philipines
                    <LineBreak height="10px"/>
                    - shipyard assessment for investors (Spain - Solvtrans)
                    <LineBreak height="10px"/>
                    - RCYC boutique cruise ships
                    <LineBreak height="10px"/>
                    - add something about environmental
                </TeamMember>
            </div>
        </Page>
        <BottomBar />
    </>
)

export default Team;
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
                padding: float == "left" ? "0 20px 10px 0" : "0 0 10px 20px"
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
                    is Starboard Ventures’ Marine Technical Director.  He is a founding member of SV, 
                    joining in 2013.  Simon has 25 years of experience in the marine sector.  Prior to 
                    joining SV he was the country manager for Lloyd’s Register in Ireland.  He has extensive 
                    new building experience in Korea, the Philippines and China across bulkers, tankers, and 
                    container ships.
                    <LineBreak height="10px"/>
                    He is a naval architect and chartered engineer.  He has a B.Eng from the University of 
                    Southampton.
                </TeamMember>
            </div>
        </Page>
        <BottomBar />
    </>
)

export default Team;
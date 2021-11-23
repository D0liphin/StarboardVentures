import Background from './Background';
import BottomBar from './BottomBar';
import TopBar from './TopBar';
import Page from './Page';

const TeamMember = ({ name, float, children }) => {
    return (
        <div class="team-member">
            <img
                src={/(\w+) /.exec(name)[1] + '.jpg'}
                alt={name}
                style={{
                    float: float,
                    width: '25%',
                    minWidth: '150px',
                    margin: float === 'left' ? '0 20px 10px 0' : '0 0 10px 20px',
                    borderRadius: '15px',
                }}
            />
            <div style={{}}>
                <div
                    style={{
                        fontSize: '24px',
                        padding: '10px 0 10px 0',
                        width: '100%',
                        textAlign: float,
                        color: 'var(--dark-blue)',
                    }}
                >
                    {name}
                </div>
            </div>
            <div style={{ textAlign: float }}>{children}</div>
        </div>
    );
};

const Team = () => (
    <>
        <Background image="https://i.imgur.com/7Ebx92w.png" />
        <TopBar />
        <Page>
            <major-heading>Team</major-heading>
            <div style={{ fontSize: '18px' }}>
                <TeamMember name="Roger Iliffe" float="left">
                    Roger has over twenty years of experience in the industrial and marine
                    sectors. From 2009-2013 he was a Senior Vice-President at Oaktree
                    Capital Management where he worked as an operating partner across
                    their European Private Equity funds. In 2011 he helped found the heavy
                    lift shipping company Hansa Heavy Lift GmbH and went on to become the
                    CEO. He founded Starboard Ventures in 2013 and continued to support
                    Oaktree on their marine investments.
                    <br />
                    <br />
                    Roger has worked across a number of ship types. He has been on the
                    Board of Geoquip Marine AG, Beluga Group GmbH, Jackson Square
                    Aviation, Gulmar Offshore SA and Hansa Heavy Lift GmbH.
                    <br />
                    <br />
                    His earlier experiences include stints at McKinsey and Bain as a
                    strategy consultant and at Bombardier as a business leader. He served
                    in the Canadian military as an infantry Captain, has an MBA from
                    Bocconi, a BA(Hons) from McGill and is fluent in English, German and
                    French. He has a graduate certificate in Data Science from Harvard and
                    is currently completing his MSc in Mathematics.
                </TeamMember>
                <TeamMember name="Simon Wade" float="left">
                    Simon is a naval architect and chartered engineer with over twenty
                    five years experience in the marine sector. Simon joined Starboard
                    Ventures in 2014. Prior to that he was the Ireland country manager for
                    Lloyd's Register, a leading classification society. He has been the
                    project manager for Oaktree on their Green Containership Group
                    investment and is the lead for all of Starboard Ventures' project
                    management services.
                    <br />
                    <br />
                    Simon has experience across all the major ship types including crude
                    tankers, product tankers, containers and bulkers. He has new-building
                    and ship repair experience in a number of countries including: Hong
                    Kong, South Korea, Philippines, and China. He has extensive experience
                    in commercial claims and insurance matters.
                    <br />
                    <br />
                    He has a B.Eng from the University of Southampton and is an avid
                    cyclist.
                </TeamMember>
                <TeamMember name="Partners " float="left">
                    Depending on the structure of your investment a number of service
                    providers will be required. In the case of a ship investment this
                    might is likely to include, at least a technical manager and a
                    commercial manager. The exact roles and responsibilities can change
                    significantly depending on the ship type and the investment. In
                    addition legal services, marine insurers, Sale and Purchase brokers,
                    flag states and classification societies also have their roles to
                    play.
                    <br />
                    <br />
                    Based on our network and experience we can help you structure the best
                    operating model for your investment, help you structure your
                    agreements with the service providers and thereafter manage their day
                    to day performance. We are independent and we can help ensure that the
                    selection process is transparent and provides value for money.
                </TeamMember>
            </div>
        </Page>
        <BottomBar />
    </>
);

export default Team;

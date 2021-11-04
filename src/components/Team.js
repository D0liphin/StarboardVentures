import Background from './Background.js';
import BottomBar from './BottomBar.js';
import TopBar from './TopBar.js';
import Page from './Page.js';
import LineBreak from './LineBreak';

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
      <div style={{}}>
        <TeamMember name="Roger Iliffe" float="left">
          Roger has over ten years of marine experience across a variety of
          roles and ship types. He was a Senior Vice-President at Oaktree
          Capital Management from 2009-2013 where he was an operating partner
          focused on marine investments. While at Oaktree he helped found the
          heavy lift shippinng company Hansa Heavy Lift and went on to become
          the CEO.
          <LineBreak height="10px" />
          Roger has worked with a number of ship types including MPP,
          Containers, heavy lift, military and offshore vessels. He has been on
          the Board of Geoquip Marine AG, Beluga Group, Gulmar Offshore and
          Hansa Heavy Lift.
          <LineBreak height="10px" />
          Roger's earlier experiences include running a rail business at
          Bombardier and working as a manager at McKinsey. He has an MBA from
          Bocconi, a BA(Hons) from McGill and is fluent in English, German and
          French.
        </TeamMember>
        <LineBreak />
        <TeamMember name="Simon Wade" float="left">
          Simon is a naval architect and chartered engineer with over twenty
          five years experience in the marine sector. Simon joined Starboard
          Ventures in 2014. Prior to that he was the Ireland country manager for
          Lloyd's Register. He has been the owner's representative for Oaktree
          on their Green Containership Group investment and is the Starboard
          Ventures technical due diligence lead for newbuilds, shipyard
          assessments and dry docking.
          <LineBreak height="10px" />
          Simon has experience across all the major ship types including crude
          tankers, product tankers, containers and bulkers. He has new-building
          and ship repair experience in a number of countries including: Hong
          Kong, South Korea, Philipines, and China. He also has extensive
          experience in commercial claims and insurance matters.
          <LineBreak height="10px" />
          He has a B.Eng from the University of Southampton and is an avid
          cyclist.
        </TeamMember>
        <TeamMember name="Partners " float="left">
          Shipping is a sector where the inexperienced investor needs to be quite careful. 
          There some excellent service providers but there are unfortunately still
          some that are best avoided. Based on our network and experience we can
          help you structure the best operating model for your investment, help
          you structure your agreements with the service providers and
          thereafter manage their day to day performance to ensure that you get
          the best performance from them. We are independent from all
          other service providers and we can ensure that the selection process
          is transparent and provides value for money.
          <LineBreak height="10px" />
          Depending on the structure of the investment a number of service
          providers will be required. This will typically include a ship
          technical manager who will ensure the running of the shipping
          including crewing and a commercial manager or pool operator who will
          find work for the ship and manage the day to day operations ship. The
          exact roles and responsibilities can change significantly depending on
          the ship type and the investment. In addition legal services, marine
          insurers, Sale and Purchase brokers, flag states and classification
          societies also have their roles to play.
        </TeamMember>
      </div>
    </Page>
    <BottomBar />
  </>
);

export default Team;

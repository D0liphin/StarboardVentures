import LineBreak from '../LineBreak';
import Article from '../Article';

const PLACEHOLDER_IMG =
  'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg';

let Br = () => <LineBreak height="5px" />;

export default (
  <Article
    title="Assessing a Shipyard"
    date="15/11/2021"
    author="Roger Iliffe"
    description={`
    Building a ship is more like building a bridge than a car.
    A ship takes two to three years to build and each ship is its own project.
    The capabilities of a shipyard are closely related to its drydocking
    facilities, the strength of its engineering team and its track record by ship type. 
    `}
    image={'./Article5-Harkand.jpg'}
  >
    <p>
      If you are considering a new build ship then selecting the best possible
      shipyard is critical. Most ship-building is done in the far East
      specifically, China, South Korea and Japan. There is still some
      ship-building done in Europe but it is focused on very high-value added
      ships like cruiseships or specialised offshore or fishing vessels.
      Japanese shipyards have a reputation for excellent quality and a
      specialisation in dry bulkers. Chinese yards are dominated by the two
      state owned behemoths, CSIC (China Shipbuilding Industry Corporation) and
      CSSC (China State Shipbuilding Corporation), each has a large number of
      yards. South Korea is dominated by Daewoo, Hyundai and Samsung, each of
      which own massive shipyards and in the case of Hyundai - three massive
      shipyards - HHIC, Samho and Mipo.
    </p>
    <Br />
    <p>
      Before deciding to visit any yards you will first need to reduce the
      number of yards based on their track record and experience with the type
      of vessel that you are interested in building. A track record means many
      years of building that vessel type. You are running a huge technical risk
      if you decide to go with a shipyard that does not have a long history of
      experience with that vessel type.
    </p>
    <Br />
    <p>
      Once you have narrowed your selection down to shipyards with experience
      with the vessel type that you want then you need to conduct a physical
      assessement of the shipyard. At Starboard Ventures we structure our
      shipyard assessment into four main areas:
      <div style={{ marginLeft: '30px' }}>
        <ul>
          <li>General Shipyard </li>
          <li>Management Systems </li>
          <li>Production Facilities </li>
          <li>Manufacturing Practice </li>
        </ul>
      </div>
      Let's take each one in turn
    </p>
    <img align="right" src="./Article5-Harkand.jpg" alt="" />
    <Br />
    <h3>General Shipyard</h3>
    <p>
      First examine the overall creditworthiness of the shipyard. You can get a
      rough idea of this based on the order book of the shipyard and the level
      of activity on site. A half empty site is a clear red flag. Then review
      with the shipyard the vessels of your type that they have recently
      constructed. Ideally there will be a couple going through the production
      process when you visit. Then, ask around about the reputation of the
      shipyard. For the vessels under construction on site you would ideally
      discuss with current customers their level of satisfaction with the
      shipyard.
    </p>
    <Br />
    <h3>Management Systems</h3>
    <p>
      The critical management systems are safety. This can have a real effect on
      production schedules and workers. We went to one shipyard where there had
      been a number of recent casualties and this had resulted in an
      understandable drop in motivation. A safe workplace is a productive
      workplace. You would expect to see personal protective gear worn around
      the site without exceptions, the movement of heavy machinery and blocks
      carefully controlled and dangerous production steps like welding done
      according to clear work instructions.
    </p>
    <Br />
    <p>
      The shipyard will need to have design and manufacturing engineers on site.
      They should be fully up to date with the latest changes to the ship's
      design and they should be able to converse regarding recent classification
      issues such as environmental issues and safety. Production and quality
      should be clearly managed and well documented. The yard should have an
      easy to understand production plan for each ship. This is generally done
      on a block by block basis when building the hull and installing the main
      engine, later on during outfitting the production can be much more complex
      and heavily reliant on supply deliveries.
    </p>
    <Br />
    <h3>Production Facilities</h3>
    <p>
      You will be interested in understanding what block sizes the yard
      typically manages. A large, well-developed yard will be managing blocks of
      up to 500tonnes and greater. This has been shown to improve quality. To
      move large blocks the yard will need to have a large dry-dock (500m+),
      gantry cranes of a commensurable size and a long enough quay side to
      conduct outfitting and allow access by the workforce. Painting facilities
      should be well ventilated and contamination well controlled to ensure that
      paint is applied evenly and consistently. The dry-docks themselves should
      be big enough to accomodate the vessel. 10 years ago it would have been
      acceptable to launch from a shipway but this process is not as good as a
      dry docking. Finally, the yard should have adequate testing equipment and
      engineering expertise on site.
    </p>
    <h3>Manufacturing Practice</h3>
    <p>
      Finally, you need to assess the yard according to more traditional
      manufacturing best practice. Is the overall shipyard clean and well laid
      out. Is the flow of product and equipment through the facility clearly
      mapped out. Is quality control visible and done on a regular and random
      basis. Is the workforce skilled and experienced.
    </p>
    <Br />
    <p>
      Once you have picked your shipyard and agreed on commercial and technical
      terms you will need to have your own site build supervision team. The size
      of this team well staffed, particularly at the start of operations and a
      clear weekly feedback loop set up to review quality and ensure delivery
      timings are met. Building a ship is NOT a fire and forget operation. You
      need to have experienced personnel at the shipyard on your side to ensure
      that you get the shipyards attention and receive the right level of
      quality.
    </p>
    <Br />
    <p>
      There is of course much more to visiting and assessing a shipyard than can
      be communicated in a single short blog. Please get in contact with us if
      you would like to discuss further.
    </p>
  </Article>
);

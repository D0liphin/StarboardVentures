import LineBreak from '../LineBreak';
import Article from '../Article';


let Br = () => <LineBreak height="5px" />;

export default (
  <Article
    title="Why are Ships so Big?"
    date="25/09/2021"
    author="Roger Iliffe"
    description={`
    It is astonishing how large much of the shipping fleet is today.
    Lengths approaching 400 meters are no longer uncommon.
    Will this trend ever cease? Will all ships eventually become behemoths?
    `}
    image={'./Article3-pixabay.jpg'}
  >
    <p>
      There are some pretty big ships active in today's shipping market. The
      blockage of part of the Suez Canal earlier this year by the VLCS (Very
      Large Container Ship) the Ever Given helped show the general public just
      how large ships have gotten. A VLCS will generally be very close to 400
      meters long, the largest bulk carriers are close to 300m long (Very Large
      Ore Carriers) while VLCC (Very Large Crude Carriers) are about 330m long.
      Other ship types (product tankers, offshore vessels etc) don't have so
      many very large vessels although there are always exceptions although
      there are VLGC (Very Large Gas Carriers).
    </p>
    <img align="right" src="./Article3-pixabay.jpg" alt="" />
    <Br />
    <h3>So Why so Large?</h3>
    <p>
      The short answer is fuel consumption. The propulsion of large ocean going
      ships is dominated by slow speed two-stroke diesel engines. These engines
      are extremely energy efficient with the ability to convert over 50% of the
      energy content of their fuel into propulsion. Your standard petrol engine
      is unlikely to do much better than 25%! And when we say slow speed we mean
      that the engines rpms are very low, often below 70rpm. A large diesel
      truck would be closer to 2000rpm. In addition the engines are connected
      straight to the propellers so their is a minimal efficiency loss due to
      transmission. The propeller blades themselves will then rotate to effect
      the speed of the vessel (CPP - Controlled Pitch Propeller). So once you
      have optimised your propulsion system the only thing left to improve fuel
      efficiency is size.
    </p>
    <Br />
    <h3>Don't Be A Drag</h3>
    <p>
      Ships get slowed down by two forces. The water sliding along the side of
      the ship and the waves. The drag from water friction is a function of the
      service area of the ship which is a squared relationship. A ship that is
      twice as large will have two-squared or 4x as much drag. Fortunately,
      since volume is a cubed relationship, that same ship will be able to carry
      8x as much cargo. Which where the fuel savings comes from. What this means
      in practical terms is that the transition over the past 10 years from
      container ships carrying 10,000 boxes to ships carrying 20,000 boxes
      (VLCC) is that they got 26% longer, generated 59% more drag but could
      carry twice as much cargo. For an overall improvement in efficiency of
      about 26%. The impact of waves is not nearly so straight-forward and is
      dependent on speed. A vessel traveling slowly, say 12 knots, does not have
      much drag from waves; whereas, one travelling at 20 knots can have a
      significant share of its overall drag from waves.
    </p>
    <Br />
    <h3>So Why aren't all Ships Big?</h3>
    <p>
      Large ships can be very akward. They can either be too tall to fit under a
      bridge (air draft). Or sit so low in the water that they hit the bottom
      (draft). The fairly recent introduction of VLCS into the market generated
      quite a few problems. For example, a fully loaded VLCS cannot access the
      port of Hamburg, one of the most important European container ports due to
      the Elbe river being too shallow in some areas. Similarly, many ports
      needed to make adjustments because bridges were not tall enough or their
      cargo handling equipment could not reach across the ship, which can be 50m
      across. So for many routes very large ships do not make sense. The product
      trade is one of them. Product tankers come in a variety of sizes but the
      most common are the Medium Range( MR) and Long Range(LR) sizes. The Long
      Ranges go farther and are larger but no where near as big as the other
      ships. Clients just don't need huge lots of diesel or petrol and the
      refineries are not far enough away from the end users for the merits of
      fuel efficiency to play such a critical role.
    </p>
  </Article>
);

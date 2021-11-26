import LineBreak from '../LineBreak';
import Article from '../Article';

const PLACEHOLDER_IMG =
  'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg';

let Br = () => <LineBreak height="5px" />;

export default (
  <Article
    title="Fuel and Fresh Air"
    date="25/08/2021"
    author="Simon Wade"
    description={`
    Some basics about the types of fuels used in the marine industry and recent changes.
    `}
    image={'Article2-fuelOil-WikiCommons.jpg'}
  >
    <p>
      You can read a lot in the maritime press about air pollution from ships.
      But what are the actual fuel options for ships and what do they mean for
      our fresh air? Fuel is needed for main propulsion, i.e. turning the
      propeller, plus for electricity production and heat generation.
      Historically heavy fuel oil (HFO) has been used because it was cheap
      however this dirty tar like substance is not known for its environmentally
      friendly properties.
    </p>
    <img align="right" src="./Article2-fuelOil-WikiCommons.jpg" alt="" />
    <Br />
    <p>
      Over the years the International Maritime Organisation (IMO) have tried to
      clean up emissions from combustion processes. They have considered the
      impact of Sulphur Oxides (SOx), Nitrogen Oxides (NOx) and more recently
      carbon dioxide (CO2).
    </p>
    <Br />
    <p>
      For SOx control the permitted Sulphur contained in HFO has been reducing
      over the years, currently standing at no more than 0.5% as the standard
      global level. This is the maximum sulphur content of the now designated
      Very Low Sulphur Fuel Oils (VLSFO). Other lower sulphur fuels are
      available but generally prices increase the more refined the product is.
      Incidentally a scrubber can also be fitted to meet SOx requirements but
      that is for another blog.
    </p>
    <Br />
    <p>
      NOx are controlled by mechanical means incorporated in engine design, one
      of the more recent methods for highest compliance (Tier III compliance)
      being Selective Catalytic Reduction methods. NOx controls were introduced
      from the year 2000 starting with Tier I requirements leading to the
      current Tier III requirements required for vessel since 2016.
    </p>
    <Br />
    <p>
      CO2 emissions are now also being looked into more closely and statutory
      reporting requires vessels to report and have verified their annual CO2
      emissions, the measurements being related to the type of fuel and quantity
      used. The IMO has set the goal to reduce the carbon intensity of shipping
      by 40% by 2030 and by 50% up to 2050 compared to a baseline figure from
      2008. Apart from slowing ships down and additional energy efficiency
      measures it is thought new fuel will need to be developed to meet these
      goals. LNG is as an option for managing SOx and NOx emissions but still
      has only a slightly lower CO2 loading compared to HFO so this is not seen
      as a solution to this problem. In this respect the maritime industry is
      currently looking at the use of other fuels such as Green Ammonia,
      Methanol, Biofuels and Hydrogen to try to manage this issue and create
      fresher air for everyone. The question here is which fuel option should I
      choose for my ship ?
    </p>
  </Article>
);

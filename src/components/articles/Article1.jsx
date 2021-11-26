import LineBreak from '../LineBreak';
import Article from '../Article';


let Br = () => <LineBreak height="5px" />;

export default (
  <Article
    title="Investing in a Ship"
    date="25/07/2021"
    author="Roger Iliffe"
    description={`
      This blog provides a quick overview of some of the key considerations to be made
      when taking the plunge into investing directly into vessels.
      We go over some of the key questions: What kind of ship? How old? 
      How to buy a ship? How to manage a ship 
      and how to exit.  `}
    image={'./Article1-colin-lloyd-cruiseship.jpg'}
  >
    Our first blog is a quick introduction to the eco system around investing in
    ships. Here we mean buying a ship rather than rather than shares. Here are
    the key questions that you will need to work through:
    <div style={{ marginLeft: '30px' }}>
      <ul>
        <li>What kind of ship should I invest in?</li>
        <li>How old should the ship be?</li>
        <li>How do I buy the ship?</li>
        <li>How do I manage the investment?</li>
        <li>How to sell?</li>
      </ul>
    </div>
    <img align="right" src="./Article1-colin-lloyd-cruiseship.jpg" alt="" />
    <Br />
    <h3>What kind of ship?</h3>
    <p>
      The basic ship types used in transport are: dry bulk, crude oil tanker,
      container ship, product tanker, car transporter (PCTC) and break-bulk
      which is for goods that cannot be transported via containers like tree
      products. Also to be considered are the ship types not related to
      transport: cruiseships, ferries, or offshore vessels, whether for oil and
      gas or for civil works. Once you have narrowed down the types of ships you
      are interested in you need to consider the design and layout. At the risk
      of antagonising my naval architect friends most designs for transport
      ships are perfectly fine and tried and tested. You can mistakes with a bad
      design but you are unlikely to extract too much extra value with a great
      design. The major systems: engines, crew support, navigation etc. tend to
      come from the international supply base and build quality is generally
      good amongst the main shipbuilding nations which are China, Korea and
      Japan. On the other hand, you do need to make a choice about the size of
      the vessel as this will determine which markets it serves this will make a
      big difference to your investment returns.
    </p>
    <Br />
    <h3>How old?</h3>
    <p>
      While investing in a newbuild vessel can seem attractive, the problem with
      newbuild is that you will need to wait a couple of years at least until
      you start earning money. If you are able to reliably forecast out that far
      then great, otherwise, maybe consider investing in a used ship. Transport
      ships last quite a while, generally longer than twenty years and offshore
      vessels can last much longer than that. For a bit of guidance, the current
      age of scrapped vessels is about 28 years old. The maintenance schedule of
      a transport ship centers around the five year dry dock event. In dry dock,
      the vessel will be completely lifted out of the water to allow access to
      parts of the vessel which had been submerged. Post or pre-dry dock might
      be an interesting time to purchase a vessel particularly if you investment
      hypothesis is about a change in short term rates.
    </p>
    <Br />
    <h3>How do I buy the ship?</h3>
    <p>
      The process for actually buying a ship is relatively straight-forward. You
      can use a brokers who will typically charge a 1% fee. A pre-purchase
      technical survey of the ship will highlight any issues and then it is over
      to the lawyers to do their bit. Fortunately, there are a number of high
      quality standard documents for most aspects of shipping (see the BIMCO
      website). For financing there are a number of banks specialised in
      shipping and this is usually the longest and most complicated part of the
      transaction - who would have guessed!
    </p>
    <Br />
    <h3>How do I manage the investment?</h3>
    <p>
      This is the most difficult question to give a generic answer to. But at
      the real risk of over-generalizing, you can either charter out your vessel
      on a time charter, bare boat charter or join a commercial pool where you
      will retain most of the commercial risk. Time charter is by far the most
      common. Or you can set yourself up as an operator if you really get the
      shipping bug. The situation will vary a lot by ship type.
    </p>
    <Br />
    <h3>How to Sell?</h3>
    <p>
      Again, the sales process will usually be done by an Sale and Purchase
      broker. The sale might be of the single legal entity for the ship or it
      can be of the ship itself. The purchaser will assess the condition of the
      vessel and seek legal protection against any outstanding claims. Most ship
      types are very much commodities. Provided you have access to good support
      and expertise the devil is not really in the details. Success will depend
      on when you buy, the type of ship and its size. Get these things right and
      your shipping investment is likely to go well.
    </p>
  </Article>
);

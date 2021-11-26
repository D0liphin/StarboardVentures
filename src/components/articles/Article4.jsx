import LineBreak from '../LineBreak';
import Article from '../Article';

let Br = () => <LineBreak height="5px" />;

export default (
  <Article
    title="Basics of OPEX"
    date="29/10/2021"
    author="Roger Iliffe"
    description={`
    If you own a ship but not an operating company then the most common way for
    you to charter out your vessel will be on a time charter basis.
    This means that you will have to pay the OPEX.
    So what are the key components of OPEX and how risky are they?
    `}
    image={'./Article4-pixabay.jpg'}
  >
    <p>
      The most common way for ships to be traded is on a time charter basis.
      This means that the charterer, say a container line, pays the owner a per
      diem rate and in return the owner provides the vessel complete with crew.
      This division of risk is not perfect. The container line is paying for
      fuel (bunker) so if the ship is less fuel efficient than anticipated then
      the container line will be exposed and might even have recourse to the
      ship-owner for damages if these can be proved. On the other hand, the
      owner is at risk if the ship is loaded improperly or sent into a risky
      area. The Master is always responsible for the seaworthiness and operation
      of the vessel but there are pratical limitations to a Master being able to
      certify that every one of the 5,000 boxes loaded onto his ship have the
      correct weight and are fixed to the vessel properly. Despite this, and
      perhaps because other splits are even worse time charters remain very
      popular.
    </p>
    <img align="right" src="./Article4-pixabay.jpg" alt="" />
    <Br />
    <h3>Crew Costs</h3>
    <p>
      For the sake of simplicity I am going to use some rough and ready
      estimates and use a medium sized, panamax container ship (roughly 5000
      TEU) as a basis for my estimates. First there is the crew to be paid for.
      A reputable crewing agency will take carry of vetting, training and
      rotating the crew. Often ship management organizations have their own in
      house crewing agency which invariably makes things easier to manage. The
      typical shipping crew is not terribly typical. However, Ukrainians,
      Filipinos, Russians, Indians are certainly all very well represented. It
      is unusual but not impossible to find Western crews but they are certainly
      more expensive. Crew costs for our medium sized containership would be
      around 3000$ per day.
    </p>
    <Br />
    <h3>Insurance</h3>
    <p>
      My own experience with marine insurers of all types is that they are a
      hands on bunch, easy to deal with an actually very knowledgeable. Unlike
      many other industries a marine insurer is generally easy to get a hold of
      and full of excellent advice and information. I have not found this to be
      the case in other industries that I have worked in! The owner will be on
      the hook for P & I insurance (Protection and Indemnity) which covers
      liability claims from crew, passengers and third parties. The owner will
      also have to stump up for Hull and Machinery insurance which is pretty
      self-explanatory. For our medium sized containership these costs would run
      in the neighborhood of 500-1000$. The amounts can vary quite a bit here
      since the insurance rates will depend on their relationship with the owner
      and prior claims.
    </p>
    <Br />
    <h3>Maintenance</h3>
    <p>
      Ships generally follow a five year maintenance cycle. At the end of the
      cycle the vessel is dry-docked (removed from the water) so that the hull,
      propeller and rudder can be examined and re-painted. In between dry-docks
      ongoing maintenance will need to be performed and these costs will of
      course depend on the age of the ship. For our medium sized containship we
      would expect these costs to be in the range of 700-1000$ per day depending
      on the condition of the vessel.
    </p>
    <Br />
    <h3>Lubes and Consummables</h3>
    <p>
      The charterer will be on the hook for paying for bunkers but the owner
      will need to pay for lubricants. This should be about 600$ per day of
      which about half can be for lubricants and the remainder for other
      consummables related to ship maintenance.
    </p>
    <Br />
    <h3>Adminstration Costs</h3>
    <p>
      The quality of ship management companies has, in our view, improved a lot
      over the past 10 years. In addition, provided you are well-informed fees
      are very reasonable and should not be more than about 600$ a day for all
      of these kinds of fees. For that you would expect to get good day to day
      management via a technical superintenant (who will formerly have been a
      Chief Engineer), as well as some level of accounting and adminstrative
      support.
    </p>
    <Br />
    <p>
      So the total cost to the owner will be about 6000-7000$ per day for a
      medium sized container ship in good condition and around 10 years old. In
      addition, to this daily cost which will be calculated by the ship manager
      there will be a cost of between 1 - 1.5M$ every five years for dry
      docking. Typically this cost is accrued on a daily basis, so around 800$
      per day. Listed shipping companies never seem to be able to achieve
      standard cost benchmarks. Not sure why that is but you would be
      well-advised not to use their listed numbers in your negotations.
    </p>
  </Article>
);

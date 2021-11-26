import { Link, Switch, Route } from 'react-router-dom';
import React from 'react';

import Background from './Background';
import BottomBar from './BottomBar';
import TopBar from './TopBar';
import Page from './Page';
import LineBreak from './LineBreak';
import makeKebab from '../util/makeKebab';

const ServicesContainer = ({ children = [], noservice }) => (
  <div id="service-page-container">
    <div id="service-selector-container">
      {(() => {
        let key = 0;
        let services = Array.isArray(children) ? children : [children];
        return services.map((service) => {
          key++;
          let serviceName = service.props.name;

          let path = '/services/' + makeKebab(serviceName);
          return (
            <div key={key}>
              <Link to={path}>
                <Switch>
                  <Route path={path}>
                    <div class="selected-service">{serviceName}</div>
                  </Route>
                  <Route path="/">
                    <div class="unselected-service">{serviceName}</div>
                  </Route>
                </Switch>
              </Link>
            </div>
          );
        });
      })()}
    </div>
    <div id="services-container">
      <Switch>
        {(() => {
          let key = 0;
          let services = Array.isArray(children) ? children : [children];
          return services.map((service) => {
            key++;
            return (
              <Route path={'/services/' + makeKebab(service.props.name)}>
                <div class="service" key={key}>
                  <h1>{service.props.name}</h1>
                  <div class="service-children">{service.props.children}</div>
                </div>
              </Route>
            );
          });
        })()}
        <Route path="/">{noservice}</Route>
      </Switch>
    </div>
  </div>
);

const Service = ({ name, img, children }) => <></>;

const Services = () => {
  return (
    <>
      <Background image="/services-background.jpg" />
      <TopBar />
      <Page>
        <major-heading>Our Services</major-heading>
        <div
          style={{
            marginBottom: '15px',
            fontSize: '18px',
            color: 'var(--dark-blue)',
          }}
        >
          Our partnerships with our clients tend to focus on one of four areas:
          strategy including Board level positions; growth; a specific project
          such as an acquisition; or operational or financial restructuring.
        </div>
        <hr />
        <ServicesContainer>
          <Service name="Strategy">
            <img
              src="./board-Beluga.jpg"
              alt="" /* style={{ float: "left" }} */
            />
            <div>
              Depending on the nature and structure of your investment we can
              act as one of your Board representatives. While fulfilling the
              role of Board Member we typically be acting in an active manner:
              supporting management, providing market insight and assisting with
              strategic initiatives.
            </div>
            <br />
            <img
              src="./board-Geoquip.jpg"
              alt="" /* style={{ float: "right" }} */
            />
            <div>
              We have acted as Board Members in a wide range of shipping
              entities including offshore and break-bulk operators, single ship
              entities, and commercial groups.
            </div>
            <LineBreak />
          </Service>
          <Service name="Growth">
            <img src="DDBulker.jpg" alt="" /* style={{ float: "right" }} */ />
            <div>
              Due diligence activities in the marine sector can be broken down
              into three main categories: ship level, counter-party risk and
              business valuation. Ship level due diligence includes technical
              condition, commercial opportunities and valuations. Counter-party
              risk includes assessing potential partners as suppliers, shipyard
              inspections and commercial risks. Finally, business valuation
              includes the assessment of business plans, organizational
              capability and growth prospects.
              <LineBreak />
              We have performed and coordinated technical due diligence on a
              variety of fleets including: tankers, bulkers, chemical tankers,
              containers, multi-purpose and offshore. We have vetted
              counter-parties and assessed a number of shipyards, in the process
              we have developed a detailed shipyard assessment tool.
            </div>
            <img src="DDTanker.jpg" alt="" />
          </Service>
          <Service name="Projects">
            <img
              src="SAndPContainer.jpg"
              alt="" /* style={{ float: "left" }} */
            />
            <div>
              Sale and Purchase (S&P) requirement could be the relatively
              straight-forward purchase of an existing ship in support of an
              investment hypothesis. The process might then include the search
              and assessment of vessel opportunities, followed by the
              coordination of brokers and general transaction support. A new
              build acquisition would be quite different. It might include the
              assessment of various competing ship designs, finding the right
              shipyard coordination of brokers activities and ensuring that the
              right build supervision team is on site from the start.
              <LineBreak />
              Once the transaction process is underway an appropriate ship
              manager needs to be found as well as the best fit commercial
              structure, this could involve a long term charter, joining a pool
              or a more bespoke structure.
            </div>
            <img src="SAndPDSV.jpg" alt="" />
          </Service>
          <Service name="Restructuring">
            <img src="ORDryDock.jpg" alt="" /* style={{ float: "left" }} */ />
            <div>
              The role of Owner's Representative simply means looking after the
              owner's best interests at every stage of the ship's life. In this
              role we either work with the client to set up the right supply
              chain or, if this has already been done, manage their activities
              on a day to day basis. Key activities include managing
              counter-party claims, commercial and operational issues, ensuring
              that the vessels are kept in good order and getting value for
              money. Of particular importance is managing the in-service
              maintenance and the dry-docking scope as well as developing and
              maintaining good working relationships with the classification
              society and the flag state.
            </div>
            <img src="ORPort.jpg" alt="" /* style={{ float: "right" }} */ />
          </Service>
        </ServicesContainer>
      </Page>
      <BottomBar />
    </>
  );
};

export default Services;

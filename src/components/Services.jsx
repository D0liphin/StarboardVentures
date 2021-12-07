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
          strategy including Board level positions; revenue growth such as
          building up a fleet or serving new market; a specific project such as
          an acquisition; or operational or financial restructuring.
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
              either take on the role of a Board member or, in special cases,
              help the Board develop a long term strategy and organisation. We
              have acted as Board Members in a wide range of shipping entities
              including offshore and break-bulk operators, single ship entities,
              and commercial groups.
            </div>
            <br />
            <img
              src="./board-Geoquip.jpg"
              alt="" /* style={{ float: "right" }} */
            />
            <div>
              Strategy development involves understanding the dynamics and
              trends within the relevant market, getting to know the key players
              and understanding and developing concrete plans to deal with
              ongoing regulatory change. In particular, environmental regulation
              within the marine sector will, in the future, have a much greater
              impact on the success of investments in the medium term.
            </div>
          </Service>
          <Service name="Growth">
            <img src="DDBulker.jpg" alt="" /* style={{ float: "right" }} */ />
            <div>
              Developing a successful growth strategy in the marine sector is
              heavily dependent on getting the timing right. Marine cycles can
              take over a decade to play out and rates can stay low, at levels
              that barely cover opex, for many years. We can support you in
              determining when and how to grow your fleet or, for marine
              services, to understand how overall fleet trends might effect your
              business.
            </div>
            <br />
            <img src="DDTanker.jpg" alt="" />
            <div>
              We can assist you whether your Growth strategy involves the
              acquisition of a vessel or an operating company. We have conducted
              vessel and fleet due diligence on a broad range of vessel types
              including tankers, bulkers, chemical tankers, containers,
              multi-purpose and offshore vessels. And, if growth means ordering
              a new ship we have experience vetting Asian and European shipyards
              from Croatia to Vietnam to Japan and in the process have developed
              a detailed shipyard assessment tool. Last, but not least, we have
              experience conducting operational due diligence on operating
              companies and can help you build up an overall picture of the
              value creation opportunities within the market to help you steer
              the right course.
            </div>
          </Service>
          <Service name="Projects">
            <img
              src="SAndPContainer.jpg"
              alt="" /* style={{ float: "left" }} */
            />
            <div>
              An investment in a single vessel or a small number of ships can
              sometimes be difficult to manage. The small number precludes
              setting up a dedicated organization and yet the size of the
              investment can be substantial. In this case the best solution may
              be using us as your Owner's representative to manage the ships
              without setting up a large organization. We set up a commercial
              and technical structure using third party providers which gives
              you the flexibility to exit your investment when the time is
              right. Similarly, if you are investing in new build ships you will
              need to set up and monitor the performance of the build
              supervision team.
            </div>
            <br />
            <img src="SAndPDSV.jpg" alt="" />
            <div>
              On the other hand, if you are investing alongside a financial
              partner you may want an independent third party to investigate
              specific issues that could impact your returns. This might include
              ensuring that you are ship are of the right design, that you are
              selecting the right shipyard, that you understanding the risks of
              ongoing changes to environmental and regulatory rules or assessing
              your partners' organisation to ensure that it is fit for purpose.
            </div>
          </Service>
          <Service name="Restructuring">
            <img src="ORDryDock.jpg" alt="" /* style={{ float: "left" }} */ />
            <div>
              Restructuring can be either operational, financial or both. With
              regards to financial restructuring the rules for protecting
              security in the marine world are different from what you might be
              used to elsewhere. Individual vessels can be arrested at port
              fairly easily at the request of creditors and typically the nature
              of a bunker (fuel) contract is that the fuel continues to be owned
              by the bunker provider until paid for. A typical financial
              restructuring may therefore involve many arrests in various marine
              jurisdications. We have considerable experience managing financial
              restructuring in the marine space and have gone through twenty
              vessel arrests on behalf of clients.
            </div>
            <img src="ORPort.jpg" alt="" /* style={{ float: "right" }} */ />
            <div>
              The operational part of a restructuring can be similarly sector
              specific. There may be disputes with shipyards, suppliers, and
              operators to deal with. Crewing issues will need to be addressed
              as well as onshore staff. Frequently these issues are similar to
              other industrial sectors and do not require any marine specific
              expertise but sometimes they can be quite marine specific due to
              regulatory and practical considerations.
            </div>
          </Service>
        </ServicesContainer>
      </Page>
      <BottomBar />
    </>
  );
};

export default Services;

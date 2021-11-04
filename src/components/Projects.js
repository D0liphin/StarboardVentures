import { Link, Switch, Route } from 'react-router-dom';
import React from 'react';

import Background from './Background.js';
import BottomBar from './BottomBar.js';
import TopBar from './TopBar.js';
import Page from './Page.js';
import LineBreak from './LineBreak';

const makeKebab = (text) => text.toLowerCase().replace(/ /g, '-');

const ProjectsContainer = ({ children = [], noproject }) => {
  return (
    <div id="project-page-container">
      <div id="project-selector-container">
        {(() => {
          let key = 0;
          let projects = Array.isArray(children) ? children : [children];
          return projects.map((project) => {
            key++;
            let projectName = project.props.name;

            let path = '/projects/' + makeKebab(projectName);
            return (
              <div key={key}>
                <Link to={path}>
                  <Switch>
                    <Route path={path}>
                      <div class="selected-project">{projectName}</div>
                    </Route>
                    <Route path="/">
                      <div class="unselected-project">{projectName}</div>
                    </Route>
                  </Switch>
                </Link>
              </div>
            );
          });
        })()}
      </div>
      <div id="projects-container">
        <Switch>
          {(() => {
            let key = 0;
            let projects = Array.isArray(children) ? children : [children];
            return projects.map((project) => {
              key++;
              return (
                <Route path={'/projects/' + makeKebab(project.props.name)}>
                  <div class="project" key={key}>
                    <h1>{project.props.name}</h1>
                    <img src={project.props.img} alt="" />
                    <div>{project.props.children}</div>
                  </div>
                </Route>
              );
            });
          })()}
          <Route path="/">{noproject}</Route>
        </Switch>
      </div>
    </div>
  );
};

const Project = ({ name, img, children }) => <></>;

const Projects = () => {
  return (
    <>
      <Background image="/projects-background.jpg" />
      <TopBar />
      <Page>
        <major-heading>Partner</major-heading>
        <ProjectsContainer>
          <Project name="Intro">
            <div
              style={{
                fontSize: '18px',
                textAlign: 'justify',
              }}
            >
              We can act in roughly four ways on your behalf: as a board member,
              in due diligence, in sale and purchase or as an owner's
              representative.
            </div>
            <LineBreak />
          </Project>
          <Project name="Board Member">
            <img src="./board-Beluga.jpg" alt="" />
            <div
              style={{
                fontSize: '18px',
                textAlign: 'justify',
              }}
            >
              Depending on the nature and structure of your investment we can
              act as one of your Board representatives. While fulfilling the
              role of Board Member we typically be acting in an active manner:
              supporting management, providing market insight and assisting with
              strategic initiatives.
              <LineBreak />
              We have acted as Board Members in a wide range of shipping
              entities including offshore and break-bulk operators, single ship
              entities, and commercial groups.
            </div>
            <img src="./board-Geoquip.jpg" alt="" />
            <LineBreak />
          </Project>
          <Project name="Due Diligence">
            <img src="DDBulker.jpg" alt="" />
            <div
              style={{
                fontSize: '18px',
                textAlign: 'justify',
              }}
            >
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
          </Project>
          <Project name="Sale and Purchase">
            <img src="SAndPContainer.jpg" alt="" />
            <div
              style={{
                fontSize: '18px',
                textAlign: 'justify',
              }}
            >
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
          </Project>
          <Project name="Owner's Representative">
            <img src="ORDryDock.jpg" alt="" />
            <div
              style={{
                fontSize: '18px',
                textAlign: 'justify',
              }}
            >
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
            <img src="ORPort.jpg" alt="" />
          </Project>
        </ProjectsContainer>
      </Page>
      <BottomBar />
    </>
  );
};

export default Projects;

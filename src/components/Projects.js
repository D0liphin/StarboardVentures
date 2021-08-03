import { Link, Switch, Route } from 'react-router-dom';
import React from 'react';

import Background from './Background.js';
import BottomBar from './BottomBar.js';
import TopBar from './TopBar.js';
import Page from './Page.js';

// const ProjectSelector = ({ state, setState }) => {
//     return <div id="project-selector">
//     </div>
// }

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
        <major-heading>Services</major-heading>
        <ProjectsContainer noproject={<div>We have lots of projects</div>}>
          <Project name="Little Ship">
            <img
              src="https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=HRAif8197"
              alt=""
            />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            condimentum eros. Etiam id semper sem. Ut dictum libero a fringilla
            fermentum. Morbi pretium nunc risus, id iaculis ipsum elementum sed.
            Suspendisse potenti. Aenean id ligula in erat facilisis tristique.
            Donec tempor massa consectetur gravida convallis. Maecenas maximus
            pretium iaculis. Phasellus tincidunt ante turpis.
          </Project>
          <Project name="Big Ship">
            Suspendisse potenti. Aenean id ligula in erat facilisis tristique.
            Donec tempor massa consectetur gravida convallis. Maecenas maximus
            pretium iaculis. Phasellus tincidunt ante turpis. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Donec nec condimentum eros.
            Etiam id semper sem. Ut dictum libero a fringilla fermentum.
          </Project>
          <Project name="Heavy Ship">
            Suspendisse potenti. Aenean id ligula in erat facilisis tristique.
            Donec tempor massa consectetur gravida convallis. Maecenas maximus
            pretium iaculis. Phasellus tincidunt ante turpis. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Donec nec condimentum eros.
            Etiam id semper sem. Ut dictum libero a fringilla fermentum.
          </Project>
          <Project name="Another Ship">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            condimentum eros. Etiam id semper sem. Ut dictum libero a fringilla
            fermentum. Morbi pretium nunc risus, id iaculis ipsum elementum sed.
            Suspendisse potenti. Aenean id ligula in erat facilisis tristique.
            Donec tempor massa consectetur gravida convallis. Maecenas maximus
            pretium iaculis. Phasellus tincidunt ante turpis.
          </Project>
          <Project name="Yet Another Ship">
            Suspendisse potenti. Aenean id ligula in erat facilisis tristique.
            Donec tempor massa consectetur gravida convallis. Maecenas maximus
            pretium iaculis. Phasellus tincidunt ante turpis. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Donec nec condimentum eros.
            Etiam id semper sem. Ut dictum libero a fringilla fermentum.
          </Project>
          <Project name="Canoe">
            Suspendisse potenti. Aenean id ligula in erat facilisis tristique.
            Donec tempor massa consectetur gravida convallis. Maecenas maximus
            pretium iaculis. Phasellus tincidunt ante turpis. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Donec nec condimentum eros.
            Etiam id semper sem. Ut dictum libero a fringilla fermentum.
          </Project>
        </ProjectsContainer>
      </Page>
      <BottomBar />
    </>
  );
};

export default Projects;

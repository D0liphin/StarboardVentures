import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React from 'react';

import Home from "./Home";
import Team from "./Team";
import Contact from "./Contact";
import Blog from "./Blog";
import Projects from "./Projects";

const Redirect = ({ to }) => {
    let redirectLinkRef = React.useRef(null);
    React.useEffect(() => {
        redirectLinkRef.current.click()
    });
    return <Link to="/home" ref={redirectLinkRef} />
}

const App = () => (
    <div id="main-container">
        <Router>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/team">
                    <Team />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </Router>

    </div>
);

export default App;
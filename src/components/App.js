import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import Home from "./Home";
import Team from "./Team";
import Contact from "./Contact";
import Blog from "./Blog";
import DiversityAndInclusion from "./DiversityAndInclusion";


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
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/diversity-and-inclusion">
                    <DiversityAndInclusion />
                </Route>
            </Switch>
        </Router>

    </div>
);

export default App;
import InfoBar from './InfoBar';
import Home from './Home';
import Links from './Links';
import ContactBar from './ContactBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = () => <div id="main-container">
    <Router>
        <InfoBar/>
        <Switch>
            <Route path="/home"><Home/></Route>
            <Route path="/links"><Links/></Route>
        </Switch>
        <ContactBar/>
    </Router>
</div>;

export default App;
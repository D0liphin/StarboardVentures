import {
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

const NavEl = ({ page, children }) => (<> 
    <div class="navigation-element">   
        <Switch>
            <Route path={page}>
                <Link 
                    to={page} 
                    style={{
                        color: "var(--dark-blue)",
                        borderBottom: "1px solid var(--dark-blue)"
                    }}
                >
                    {children}
                </Link>
            </Route>
            <Link to={page}>{children}</Link>
        </Switch>
    </div>
</>);

const TopBar = () => (
    <div id="top-bar-container"> 
        <div id="top-bar-elements-container">
            <div class="logo">
                <img src="/starboard-ventures-logo.svg" alt="" height="105%"/>
            </div>
            <div style={{display: "flex-box", flexGrow: "2"}}></div>
            <div class="navigation-container">
                <NavEl page="/home">Home</NavEl>
                <NavEl page="/team">Team</NavEl>
                <NavEl page="/projects">Projects</NavEl>
                <NavEl page="/blog">Blog</NavEl>
                <NavEl page="/contact">Contact</NavEl>
            </div>
        </div>
    </div>
)

export default TopBar;
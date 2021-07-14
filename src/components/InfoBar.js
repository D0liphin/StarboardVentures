import NavigationElement from "./NavigationElement";

const WhiteSpace = ({ width }) => 
    <div class="white-space" style={{ minWidth: `${width}px` || "0px" }}/>;

const Logo = () => <div class="logo">Logo</div>;

const Navigation = () => (
    <div id="navigation-container">
        <nav>
            <NavigationElement link="/home" text="home"/>
            <NavigationElement link="/links" text="links"/>
            <NavigationElement link="/to" text="to"/>
            <NavigationElement link="/stuff" text="stuff"/>
        </nav>
    </div>
);

const InfoBar = () => (<>
    <div id="info-bar-container">
        <Logo/>
        <WhiteSpace width={350}/>
        <Navigation/>
    </div>
    <div id="under-info-bar"/>
</>);

export default InfoBar;
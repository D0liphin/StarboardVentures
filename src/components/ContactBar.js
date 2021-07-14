import NavigationElement from "./NavigationElement";

const ContactBar = () => (
    <div id="contact-bar">
        <div style={{margin: "0 70px 0 0px", maxWidth: "500px"}}>
        Ut vestibulum, lacus sit amet sagittis lobortis, dui ipsum posuere mi, 
        et sagittis eros ligula eu lacus. Aliquam erat volutpat. Quisque lectus 
        augue, convallis ut pulvinar sed, tempor id turpis. Curabitur varius 
        porttitor condimentum. Donec sit amet diam velit. Vestibulum ante ipsum 
        primis in faucibus orci luctus et ultrices 
        </div>
        <NavigationElement text="some"/> │
        <NavigationElement text="stuff"/> │
        <NavigationElement text="could"/> │
        <NavigationElement text="go"/> │ 
        <NavigationElement text="here"/> 
    </div>
);

export default ContactBar;
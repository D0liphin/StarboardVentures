
import Background from './Background';
import BottomBar from './BottomBar';
import TopBar from './TopBar';
import Page from './Page';

const Map = () => <iframe
    title="map"
    src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d302.1232645426307!2d-" +
        "2.244096037791773!3d53.47710045694746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0" +
        "%3A0xaba74861057dc5ae!2sStarboard%20Ventures%20Ltd!5e0!3m2!1sen!2suk!4v1637" +
        "537171190!5m2!1sen!2suk"}
    width="100%"
    height="450"
    style={{ border: "0", padding: "20px 0 20px 0" }}
    allowfullscreen=""
    loading="lazy"
/>;

const Contact = () => <>
    <Background image="contact-background.jpg" />
    <TopBar />
    <Page>
        <major-heading>Contact</major-heading>
        <div class="contact-widget-container">
            <div>
                Peter House <br />
                Oxford St  <br />
                Manchester <br />
                M1 5AN <br />
            </div>
            <div>
                <div>
                    Email us at <a href="mailto:admin@starboardventures.co.uk">
                        admin@starboardventures.co.uk
                    </a>
                </div>
                <div>
                    Contact us on <a href="tel:+44-7920-138-831">
                        +44 7920 138 831
                    </a>
                </div>
            </div>
        </div>
        <Map />
    </Page>
    <BottomBar />
</>;

export default Contact;

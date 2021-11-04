import Background from './Background.js';
import BottomBar from './BottomBar.js';
import TopBar from './TopBar.js';
import Page from './Page.js';

const Map = () => (
  <iframe
    title="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593.6281347603035!2d-2.244008970724712!3d53.47717139689956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1ea0c28e5e7%3A0xe95a7b1c281e3264!2s18%20A34%2C%20Manchester%20M1%205AN!5e0!3m2!1sen!2suk!4v1626529468173!5m2!1sen!2suk"
    width="100%"
    height="450"
    style={{ border: '0', padding: '20px 0 20px 0' }}
    allowfullscreen=""
    loading="lazy"
  />
);

const Contact = () => (
  <>
    <Background image="contact-background.jpg" />
    <TopBar />
    <Page>
      <major-heading>Contact</major-heading>
      Contact us on +44 7920 138 831
      <br />
      Emails us on admin@starboardventures.co.uk
      <br />
      <Map />
    </Page>
    <BottomBar />
  </>
);

export default Contact;

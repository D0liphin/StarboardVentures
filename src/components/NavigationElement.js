import { Link } from 'react-router-dom';

const NavigationElement = ({ link, text }) => (
    <Link to={link}>
        <div class="navigation-element">{text}</div>
    </Link>
);

export default NavigationElement;
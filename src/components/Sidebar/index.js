import {Link, NavLink} from 'react-router-dom';
import './index.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faUser, faToolbox} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={""} alt="logo" />
      <img className="sub-logo" src={""} alt="sub-logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
      </NavLink>
      <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
      </NavLink>

      <NavLink exact="true" activeClassName="active" className="portfolio-link" to="/portfolio">
        <FontAwesomeIcon icon={faToolbox} color="#4d4d4d" />
      </NavLink>
      {/*<NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">*/}
      {/*  <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />*/}
      {/*</NavLink>*/}

    </nav>
  </div>
)

export default Sidebar

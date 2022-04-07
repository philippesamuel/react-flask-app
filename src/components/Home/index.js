import './index.scss'
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br/> I'm Philippe</h1>
        <h2>Chemical Engineer / Software Developer</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>

    </div>
  );
}

export default Home

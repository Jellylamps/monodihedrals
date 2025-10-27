import { Link } from "react-router-dom";
import "./../css/Navigation.css";

const Navigation = () => {
    return (
        <nav id="pages">
            <section id="borgar" className="hide-large">
                <div></div>
                <div></div>
                <div></div>
            </section>
            <ul id="selection" className="columns">
                <li><div className="current"><Link to="/">Home</Link></div></li>
                <li><div><Link to="/processes">Processes</Link></div></li>
                <li><div><Link to="/list">Monodihedral List</Link></div></li>
                <li><div><Link to="/credits">Credits</Link></div></li>
                <li><div><Link to="/submission">Submit a Discovery</Link></div></li>
            </ul>
        </nav>
    );  // remember to add "hide-small" class back to selection
};

export default Navigation;
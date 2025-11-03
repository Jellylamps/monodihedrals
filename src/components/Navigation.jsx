import {Link} from "react-router-dom";
import {useState} from "react";
import {useLocation} from "react-router-dom";
import "./../css/Navigation.css";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const path = useLocation().pathname;

    return (
        <nav id="pages">
            <section id="borgar" className="hide-large" onClick={()=>{setMenuOpen(!menuOpen)}}>
                <div></div>
                <div></div>
                <div></div>
            </section>
            <ul id="selection" className={menuOpen ? "columns" : "columns hide-small"}>
                <li><div id="nav-home" className={path==="/" ? "current" : ""}><Link to="/">Home</Link></div></li>
                <li><div id="nav-processes" className={path==="/processes" ? "current" : ""}><Link to="/processes">Processes</Link></div></li>
                <li><div id="nav-list" className={path==="/list" ? "current" : ""}><Link to="/list">Monodihedral List</Link></div></li>
                <li><div id="nav-credits" className={path==="/credits" ? "current" : ""}><Link to="/credits">Credits</Link></div></li>
                <li><div id="nav-submission" className={path==="/submission" ? "current" : ""}><Link to="/submission">Submit a Discovery</Link></div></li>
            </ul>
        </nav>
    );
};

export default Navigation;
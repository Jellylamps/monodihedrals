import { Link } from "react-router-dom";
import TextBlock from "../components/TextBlock";
import "./../css/Credits.css"

const mike = (
    <div className="text-block">
        <h3 className="indent"><a href="https://michaelrmontgomery.github.io/">Michael Montgomery</a> (@_dedekind on Discord)</h3>
        <ul>
            <li>Determined the exact dihedral angle of the standard and alternating crimped cubes: arccos(-3/sqrt(29-4sqrt(7))) degrees</li>
            <li>Created a program that stochastically approaches monodihedral geometries from an initial set of vertices</li>
        </ul>
    </div>
);
const loocookie = (
    <div className="text-block">
        <h3 className="indent">@loocookie on Discord</h3>
        <ul>
            <li>Discovered that the "<a href="https://www.georgehart.com/propello/propello.html">propellor operation</a>", when done to platonic solids, can create monodihedral polyhedra</li>
        </ul>
    </div>
);

const Credits = () => {
    return (
        <main id="credits">
            <h2>Additional Credit for Discoveries</h2>
            <TextBlock content={mike} />
            <TextBlock content={loocookie} />
            <p><Link to="/submission">Submit a discovery of your own</Link> to be added to this page!</p>
        </main>
    );
};

export default Credits;
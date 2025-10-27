import { Link } from "react-router-dom";
import TextBlock from "./TextBlock";

const Polyhedron = (props) => {
    const content = (
        <div id="crimped-tetrahedron" className="always columns text-block">
            <img src={props.img} alt={props.name}/>
            <section className="info">
                <Link to="/info"><h2>{props.name}</h2></Link>
                <p>Dihedral Angle: {props.angle}</p>
                <p>Symmetry: {props.symmetry}</p>
                <p>First Discovered by: me</p>
            </section>
        </div>
    );

    return <TextBlock content={content} />;
};

export default Polyhedron;
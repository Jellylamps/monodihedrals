import {useState} from "react";
import Info from "./Info";
import TextBlock from "./TextBlock";

const Polyhedron = (props) => {
    const [showPopUp, setPopUp] = useState(false);
    const openPopUp = () => {
        setPopUp(true);
        props.setCanPopUp(false);
    };
    const closePopUp = () => {
        setPopUp(false);
        props.setCanPopUp(true);
    };

    const content = (
        <div id="polyhedron" className="always columns text-block" onClick={props.canPopUp ? openPopUp : ()=>{}}>
            <img src={props.img} alt={props.name}/>
            <section className="info">
                <h2>{props.name}</h2>
                <p>Dihedral Angle: {props.angle}</p>
                <p>Symmetry: {props.symmetry}</p>
                <p>First Discovered by: {props.discovery}</p>
            </section>
        </div>
    );

    return (
        <>
            <TextBlock content={content} />
            {showPopUp ? (<Info name={props.name}
                                img={props.img}
                                angle={props.angle}
                                symmetry={props.symmetry}
                                discovery={props.discovery}
                                faces={props.faces}
                                vertices={props.vertices}
                                edges={props.edges}
                                families={props.families}
                                trivia={props.trivia}
                                closePopUp={closePopUp}
            />) : ("")}
        </>
    );
};

export default Polyhedron;
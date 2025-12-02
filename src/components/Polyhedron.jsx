import {useState} from "react";
import Info from "./Info";
import EditShape from "./EditShape";
import DeleteShape from "./DeleteShape";
import TextBlock from "./TextBlock";

const Polyhedron = (props) => {
    const [polyhedron, setPolyhedron] = useState(props);

    const [displayShape, setDisplayShape] = useState(true);

    const [showPopUp, setPopUp] = useState(false);
    const openPopUp = () => {
        setPopUp(true);
        props.setCanPopUp(false);
    };
    const closePopUp = () => {
        setPopUp(false);
        props.setCanPopUp(true);
    };

    const [showEdit, setEdit] = useState(false);
    const openEdit = () => {
        setEdit(true);
        props.setCanPopUp(false);
    };
    const closeEdit = () => {
        setEdit(false);
        props.setCanPopUp(true);
    };

    const [showDelete, setDelete] = useState(false);
    const openDelete = () => {
        setDelete(true);
        props.setCanPopUp(false);
    };
    const closeDelete = () => {
        setDelete(false);
        props.setCanPopUp(true);
    };

    const editPolyhedron = (polyhedron) => {
        setPolyhedron(polyhedron);
    };

    const hidePolyhedron = () => {
        setDisplayShape(false);
    };

    const content = (
        <div id="polyhedron" className="always columns">
            <div className="always columns text-block" onClick={props.canPopUp ? openPopUp : ()=>{}}>
                <img src={"http://localhost:3001/images/"+polyhedron.img} alt={polyhedron.name}/>
                <section className="info">
                    <h2>{polyhedron.name}</h2>
                    <p>Dihedral Angle: {polyhedron.angle}</p>
                    <p>Symmetry: {polyhedron.symmetry}</p>
                    <p>First Discovered by: {polyhedron.discovery}</p>
                </section>
            </div>
            <section className="options">
                <div className="text-block option" onClick={props.canPopUp ? openEdit : ()=>{}}>
                    <h1>&#9998;</h1>
                </div>
                <div className="text-block option" onClick={props.canPopUp ? openDelete : ()=>{}}>
                    <h1>&#x2715;</h1>
                </div>
            </section>
        </div>
    );

    return (
        <>
            {displayShape ? (
                <>
                    <TextBlock content={content} />
                    {showPopUp ? (<Info name={polyhedron.name}
                                        img={polyhedron.img}
                                        angle={polyhedron.angle}
                                        symmetry={polyhedron.symmetry}
                                        discovery={polyhedron.discovery}
                                        faces={polyhedron.faces}
                                        vertices={polyhedron.vertices}
                                        edges={polyhedron.edges}
                                        families={polyhedron.families}
                                        trivia={polyhedron.trivia}
                                        closePopUp={closePopUp}
                    />) : ("")}
                    {showEdit ? (<EditShape closeEdit={closeEdit}
                                            editPolyhedron={editPolyhedron}
                                            _id={polyhedron._id}
                                            name={polyhedron.name}
                                            img={polyhedron.img}
                                            angle={polyhedron.angle}
                                            symmetry={polyhedron.symmetry}
                                            discovery={polyhedron.discovery}
                                            faces={polyhedron.faces}
                                            vertices={polyhedron.vertices}
                                            edges={polyhedron.edges}
                                            families={polyhedron.families}
                                            trivia={polyhedron.trivia}
                    />) : ("")}
                    {showDelete ? (<DeleteShape closeDelete={closeDelete} hidePolyhedron={hidePolyhedron} _id={polyhedron._id} />) : ("")}
                </>
            ) : ("")}
        </>
    );
};

export default Polyhedron;
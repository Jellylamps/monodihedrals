import {useState, useEffect} from "react";
import axios from "axios";
import Polyhedron from "../components/Polyhedron";
import AddShape from "../components/AddShape";
import "./../css/List.css"

const List = (props) => {
    const [shapes, setShapes] = useState([]);
    const [canPopUp, setCanPopUp] = useState(true);
    const [showAdd, setShowAdd] = useState(false);

    const openAdd = () => {
        setShowAdd(true);
        setCanPopUp(false);
    };
    const closeAdd = () => {
        setShowAdd(false);
        setCanPopUp(true);
    };

    useEffect(()=>{
        const loadShapes = async() => {
            const response = await axios.get("https://server-monodihedrals.onrender.com/api/shapes");
            //const response = await axios.get("http://localhost:3001/api/shapes");
            setShapes(response.data);
        };

        loadShapes();
    }, []);

    const addListShape = (shape) => {
        setShapes((shapes) => [...shapes, shape]);
    };

    return (
        <main id="polyhedra">
            <h1>Monodihedral Polyhedra<button id="add" onClick={canPopUp?openAdd:()=>{}}>+</button></h1>
            <ul id="list">
                {shapes.map((shape)=>(
                    <Polyhedron key={shape._id}
                                _id={shape._id}
                                name={shape.name}
                                //img={"https://server-monodihedrals.onrender.com/images/"+shape.img}
                                img={shape.img}
                                angle={shape.angle}
                                symmetry={shape.symmetry}
                                discovery={shape.discovery}
                                faces={shape.faces}
                                vertices={shape.vertices}
                                edges={shape.edges}
                                families={shape.families}
                                trivia={shape.trivia}
                                canPopUp={canPopUp}
                                setCanPopUp={setCanPopUp}
                    />
                ))}
            </ul>
            {showAdd ? (<AddShape closeAdd={closeAdd} addListShape={addListShape} />) : ("")}
        </main>
    );
};

export default List;
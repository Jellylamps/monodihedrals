import {useState, useEffect} from "react";
import axios from "axios";
import Polyhedron from "../components/Polyhedron";
import "./../css/List.css"

const List = (props) => {
    const [shapes, setShapes] = useState([]);
    const [canPopUp, setCanPopUp] = useState(true);

    useEffect(()=>{
        const loadShapes = async() => {
            const response = await axios.get("https://server-monodihedrals.onrender.com/api/shapes");
            setShapes(response.data);
        };

        loadShapes();
    }, []);

    return (
        <main id="polyhedra">
            <h1>Monodihedral Polyhedra</h1>
            <ul id="list">
                {shapes.map((shape)=>(
                    <Polyhedron key={shape._id}
                                id={shape._id}
                                name={shape.name}
                                img={"https://server-monodihedrals.onrender.com/images/"+shape.img}
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
        </main>
    );
};

export default List;
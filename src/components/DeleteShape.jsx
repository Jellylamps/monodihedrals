import TextBlock from "./TextBlock";
import "./../css/Info.css";
import {useState} from "react";

const DeleteShape = (props) => {
    const serverURL = "https://server-monodihedrals.onrender.com/";
    //const serverURL = "http://localhost:3001/";

    const [result, setResult] = useState("");

    const deleteShape = async () => {
        const response = await fetch(`${serverURL}api/shapes/${props._id}`, {method: "DELETE"});
        setResult("processing...");

        if (response.status === 200) {
            setResult("Shape deleted");
            props.hidePolyhedron();
            props.closeDelete();
        } else {
            setResult("Something went wrong");
        }
    };

    const content = (
        <>
            <button onClick={deleteShape}>Delete</button>
        </>
    );

    return (
        <main id="delete-shape">
            <span id="close" onClick={props.closeDelete}>&times;</span>
            <h1>Delete Shape?</h1>
            <TextBlock content={content} />
            <p>{result}</p>
        </main>
    );
};

export default DeleteShape;
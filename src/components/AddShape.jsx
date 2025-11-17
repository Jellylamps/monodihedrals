import TextBlock from "./TextBlock";
import "./../css/Info.css";
import {useState} from "react";

const AddShape = (props) => {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState("");

    const submitShape = async (event) => {
        event.preventDefault();
        setResult("processing...");

        const formData = new FormData(event.target);
        const response = await fetch("https://server-monodihedrals.onrender.com/api/shapes", {method: "POST", body: formData});
        //const response = await fetch("http://localhost:3001/api/shapes", {method: "POST", body: formData});

        if (response.status === 200) {
            setResult("Shape added");
            event.target.reset();
            props.addListShape(await response.json());
            props.closeAdd();
        } else {
            setResult("Something went wrong");
        }
    };

    const formChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({...values, [name]: value}));
    };
    const imageChange = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        setInputs((values) => ({...values, [name]: value}));
    };

    const form = (
        <form id="add-shape-form" onSubmit={submitShape}>
            <p>
                <label htmlFor="shape-name">Name:</label>
                <input type="text" id="shape-name" name="name" value={inputs.name || ""} onChange={formChange} />
            </p>
            <p>
                <label htmlFor="shape-angle">Angle:</label>
                <input type="number" id="shape-angle" name="angle" value={inputs.angle || ""} onChange={formChange} required />
            </p>
            <p>
                <label htmlFor="shape-symmetry">Symmetry:</label>
                <input type="text" id="shape-symmetry" name="symmetry" value={inputs.symmetry || ""} onChange={formChange} />
            </p>
            <p>
                <label htmlFor="shape-discovery">Discovery:</label>
                <input type="text" id="shape-discovery" name="discovery" value={inputs.discovery || ""} onChange={formChange} />
            </p>
            <p>
                <label htmlFor="shape-faces">Faces:</label>
                <input type="number" id="shape-faces" name="faces" value={inputs.faces || ""} onChange={formChange} required />
            </p>
            <p>
                <label htmlFor="shape-vertices">Vertices:</label>
                <input type="number" id="shape-vertices" name="vertices" value={inputs.vertices || ""} onChange={formChange} required />
            </p>
            <p>
                <label htmlFor="shape-edges">Edges:</label>
                <input type="number" id="shape-edges" name="edges" value={inputs.edges || ""} onChange={formChange} required />
            </p>
            <p>
                <label htmlFor="shape-trivia">Trivia:</label>
                <input type="text" id="shape-trivia" name="trivia" value={inputs.trivia || ""} onChange={formChange} />
            </p>
            <section>
                <p id="p-img-preview">
                    <img id="img-preview" src={inputs.img!=null ? URL.createObjectURL(inputs.img) : null} alt="" />
                </p>
                <p id="p-img-upload">
                    <label htmlFor="shape-img">Image:</label>
                    <input type="file" id="shape-img" name="img" onChange={imageChange} accept="image/*" />
                </p>
            </section>
            <p>
                <button type="submit">Submit</button>
            </p>
        </form>
    );

    return (
        <main id="add-shape">
            <span id="close" onClick={props.closeAdd}>&times;</span>
            <h1>New Shape</h1>
            <TextBlock content={form} />
            <p>{result}</p>
        </main>
    );
};

export default AddShape;
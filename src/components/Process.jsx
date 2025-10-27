import TextBlock from "./TextBlock";
import "./../css/Process.css"

const Process = (props) => {
    const content = (
        <div className="text-block">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <section className="always columns">
                <section>
                    <img src="https://jellylamps.github.io/csce242/projects/json/images/Tetra.jpg" alt="a trtrahedron"/>
                    <p className="faded">a tetrahedron</p>
                </section>
                <section>
                    <img src="https://jellylamps.github.io/csce242/projects/json/images/CTetra.jpg" alt="a crimped tetrahedron"/>
                    <p className="faded">a crimped tetrahedron</p>
                </section>
            </section>
        </div>
    );

    return <TextBlock content={content} />;
};

export default Process;
import TextBlock from "../components/TextBlock";
import "./../css/Info.css"

const Info = () => {
    const data = (
        <div className="text-block">
            <h2>Data</h2>
            <p className="dense">Dihedral Angle: 122.601252&#176</p>
            <p className="dense">Symmetry: Tetrahedral</p>
            <p className="dense">First discovered by: me</p>
            <p className="dense">Faces: 16</p>
            <p className="dense">Vertices: 22</p>
            <p className="dense">Edges: 36</p>
        </div>
    );
    const families = (
        <div className="text-block">
            <h2>Families</h2>
            <p className="dense">Derived from Tetrahedron</p>
            <p className="dense">Crimped</p>
        </div>
    );
    const trivia = (
        <div className="text-block">
            <h2>Trivia</h2>
            <p className="dense">This is the first monodihedral polyhedron I discovered with sole intent of finding one, but the second I discovered overall. I found this one in hopes to assist the development of the program Michael Montgomery created (mentioned in the credits page). I had the idea to start from the geometry of a truncated triakis tetrahedron and managed to discover the geometry just before the program did.</p>
        </div>
    );

    return (
        <main id="info">
            <h1>Crimped Tetrahedron</h1>
            <img className="spotlight" src="https://jellylamps.github.io/csce242/projects/json/images/CTetra.jpg" alt="a crimped tetrahedron"/>
            <TextBlock content={data} />
            <TextBlock content={families} />
            <TextBlock content={trivia} />
        </main>
    );
};

export default Info;
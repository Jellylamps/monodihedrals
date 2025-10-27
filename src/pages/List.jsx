import Polyhedron from "../components/Polyhedron";
import "./../css/List.css"

const List = () => {
    return (
        <main id="polyhedra">
            <h1>Monodihedral Polyhedra</h1>
            <ul id="list">
                <Polyhedron name="Crimped Tetrahedron" img="https://jellylamps.github.io/csce242/projects/json/images/CTetra.jpg" angle={122.601252} symmetry="Tetrahedral" />
                <Polyhedron name="Standard Crimped Cube" img="https://jellylamps.github.io/csce242/projects/json/images/CCube.jpg" angle={134.351303} symmetry="Octahedral" />
                <Polyhedron name="Standard Crimped Cube" img="https://jellylamps.github.io/csce242/projects/json/images/ACCube.jpg" angle={134.351303} symmetry="Tetrahedral" />
            </ul>
        </main>
    );
};

export default List;
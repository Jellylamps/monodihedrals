import TextBlock from "../components/TextBlock";
import "./../css/Home.css"

const Home = () => {
    const one = (
        <div className="text-block columns">
            <section>
                <h2>What is a "monodihedral polyhedron"?</h2>
                <p>Every 3D shape with flat sides (<strong>polyhedron</strong>) has one or more dihedral angles. A <strong>dihedral angle</strong> is the angle between two faces that share an edge. A <strong>monodihedral polyhedron</strong> has the interesting and rare property that <strong>every single dihedral angle is the same for the whole shape.</strong></p>
                <p>This page aims to record and catalogue <strong>newly discovered</strong> shapes with this property, as it is surprisingly under explored as a geometric concept.</p>
                <p>This website elects not to include already well documented monodihedral shapes, such as all platonic and catalan solids.</p>
            </section>
            <aside>
                <img src="https://jellylamps.github.io/csce242/projects/json/images/Cube.jpg" alt="a cube"/>
                <p className="faded">a cube, the most well known shape in this category</p>
            </aside>
        </div>
    );
    const two = (
        <div className="text-block columns">
            <section>
                <h2>Why does this Matter?</h2>
                <p>To start, it's a fun and interesting concept for those interested in geometry and math. That said, like many niche areas of mathematics, its applications may have the potential to make an impact on something more "important."</p>
                <p>What led me down this rabbit hole initially was a desire to create novel designs for rubiks cube type puzzles. I noticed a common factor among puzzles I found to be interesting, mostly ones that could rearrange their pieces very well. Almost all the shapes used as a base for their mechanisms had only one dihedral angle. In my drive to make a unique design, I saw that every monodihedral shape I found documented already had a puzzle design. I thought certainly there must be many more, and I was right. I'm making a puzzle based on the first new shape I found, so there already is a practical application, more or less.</p>
            </section>
            <aside>
                <img src="https://jellylamps.github.io/csce242/projects/json/images/Puzzle.jpg" alt="a design for a puzzle derived from the crimped tetrahedron"/>
                <p className="faded">a design for a puzzle derived from the crimped tetrahedron</p>
            </aside>
        </div>
    );

    return (
        <main id="home">
            <h1>Monodihedral Polyhedra</h1>
            <TextBlock content={one} />
            <TextBlock content={two} />
            <p id="name">&copy;Thomas Zwetsloot</p>
        </main>
    );
};

export default Home;
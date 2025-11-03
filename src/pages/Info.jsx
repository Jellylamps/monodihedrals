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
            <iframe title="3d" width="400" height="400" src="https://3dviewer.net/embed.html#model=https://raw.githubusercontent.com/Jellylamps/jellylamps.github.io/main/csce242/projects/3d/CrimpedTetrahedron.stl$camera=55.18354,31.01423,48.93408,0.00000,0.00000,0.00000,0.00000,1.00000,0.00000,45.00000$projectionmode=perspective$envsettings=fishermans_bastion,off$backgroundcolor=255,255,255,0$defaultcolor=200,200,200$defaultlinecolor=100,100,100$edgesettings=on,0,0,0,2"></iframe>
            <TextBlock content={data} />
            <TextBlock content={families} />
            <TextBlock content={trivia} />
        </main>
    );
};

export default Info;
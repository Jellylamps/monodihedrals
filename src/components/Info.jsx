import TextBlock from "./TextBlock";
import "./../css/Info.css"

const Info = (props) => {
    const data = (
        <div className="text-block">
            <h2>Data</h2>
            <p className="dense">Dihedral Angle: {props.angle}</p>
            <p className="dense">Symmetry: {props.symmetry}</p>
            <p className="dense">First discovered by: {props.discovery}</p>
            <p className="dense">Faces: {props.faces}</p>
            <p className="dense">Vertices: {props.vertices}</p>
            <p className="dense">Edges: {props.edges}</p>
        </div>
    );
    const families = (
        <div className="text-block">
            <h2>Families</h2>
            {props.families.map((family)=>(<p className="dense">{family}</p>))}
        </div>
    );
    const trivia = (
        <div className="text-block">
            <h2>Trivia</h2>
            <p className="dense">{props.trivia}</p>
        </div>
    );

    return (
        <main id="info">
            <span id="close" onClick={props.closePopUp}>&times;</span>
            <h1>{props.name}</h1>
            <img className="spotlight" src={props.img} alt={props.name}/>
            <TextBlock content={data} />
            <TextBlock content={families} />
            <TextBlock content={trivia} />
        </main>
    );
};

export default Info;

// <iframe title="3d" width="400" height="400" src="https://3dviewer.net/embed.html#model=https://raw.githubusercontent.com/Jellylamps/jellylamps.github.io/main/csce242/projects/3d/CrimpedTetrahedron.stl$camera=55.18354,31.01423,48.93408,0.00000,0.00000,0.00000,0.00000,1.00000,0.00000,45.00000$projectionmode=perspective$envsettings=fishermans_bastion,off$backgroundcolor=255,255,255,0$defaultcolor=200,200,200$defaultlinecolor=100,100,100$edgesettings=on,0,0,0,2"></iframe>
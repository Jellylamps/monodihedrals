import Form from "../components/Form";
import TextBlock from "../components/TextBlock";
import "./../css/Submission.css"

const submission = () => {
    const content = (
        <div className="text-block">
                <h2>Please supply a descriotion or link to information you think should be added to this site.</h2>
                <h3>This can include:</h3>
                <ul>
                    <li>a newly discovered monodihedral polyhedron</li>
                    <li>additional facts about one or a family of polyhedra</li>
                    <li>a correction to information on this site, like a polyhedron's traits or an incorrect credit</li>
                </ul>
                
                <Form />
            </div>
    );

    return (
        <main id="submission">
            <h2>Submission</h2>
            <TextBlock content={content} />
        </main>
    );
};

export default submission;
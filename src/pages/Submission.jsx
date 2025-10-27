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
                <form method="POST" id="submission-form">

                    <input type="hidden" name="access_key" value="a044c59b-8358-4d1a-962a-fc7bf45077a5"/>

                    <p className="short-input">
                        <label for="name">Name:</label>
                        <input type="text" name="name" required/>
                    </p>
                    
                    <p className="short-input">
                        <label for="email">Email:</label>
                        <input type="email" name="email" required/>
                    </p>
                    
                    <p><textarea name="message" placeholder="description or link" required></textarea></p>

                    <button type="submit">Submit</button>

                    <div id="submission-result"></div>

                </form>
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
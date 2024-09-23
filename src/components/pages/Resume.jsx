import './Resume.css';

export default function Resume () {
    return (
        <div id="resume">
            <div className="container text-left">
                <div className="row text-left">
                    <div className="col text-left">
                        <h1>Resume</h1>
                        <p>Download my <a href='../src/assets/Carter-Paccione-Resume.pdf' download='CarterPaccioneResume'>resume</a></p>
                        <h3>Front End Proficiencies</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>responsive design</li>
                            <li>React</li>
                        </ul>
                        <h3>Back End Proficiencies</h3>
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
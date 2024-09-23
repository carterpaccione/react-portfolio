import './Aboutme.css';

export default function Aboutme () {
    return (
        <div id='aboutme'>
            <div className="container text-left">
                <div className="row text-left">
                    <div className="col" id='title'>
                        <h1><img src='../src/images/ProfilePic.JPEG' alt='ProfilePic' id='icon'></img>About Me</h1>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col" id='description'>
                        <p>
                            My name is Carter Paccione. I am an aspiring and motivated software developer from Manasquan, New Jersey.
                            Always striving to learn, I hope that I can break my way into the industry with growth on the horizon.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
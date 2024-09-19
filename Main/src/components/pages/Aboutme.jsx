import './Aboutme.css';

export default function Aboutme () {
    return (
        <div id='aboutme'>
            <div className="container text-left">
                <div className="row text-left">
                    <div className="col" id='title'>
                        <h1><img src='../src/images/dodger.png' alt='dodger' id='icon'></img>About Me</h1>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col" id='description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
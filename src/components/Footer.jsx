import './Footer.css';

export default function Footer () {
    return (
        <div id='footer'>
            <div className="container text-center" id='icons'>
                <div className="row align-items-start">
                    <div className="col">
                        <a href='https://github.com/carterpaccione' target="_blank">
                            <img src='../src/images/github-mark-white.png' alt='GitHub Icon' id='gitHubIcon' />
                        </a>
                    </div>
                    
                    <div className="col">
                        <a href= 'https://www.linkedin.com/in/carter-paccione/' target="_blank">
                            <img src='../src/images/LI-In-Bug.png' alt='LinkedIn Icon' id='linkedInIcon' />
                        </a>
                    </div>
                    
                    <div className="col">
                        <a href= 'https://try.stackoverflow.co' target="_blank">
                            <img src='../src/images/stack-overflow-logo.png' alt='StackOverflow Icon' id='stackIcon' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};
import './Footer.css';

export default function Footer () {
    return (
        <div id='footer'>
            <div class="container text-center" id='icons'>
                <div class="row align-items-start">
                    <div class="col">
                        <a href='https://github.com/carterpaccione' target="_blank">
                            <img src='../src/images/github-mark-white.png' alt='GitHub Icon' id='gitHubIcon' />
                        </a>
                    </div>
                    <div class="col">
                        <a href= 'https://www.linkedin.com' target="_blank">
                            <img src='../src/images/LI-In-Bug.png' alt='LinkedIn Icon' id='linkedInIcon' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};
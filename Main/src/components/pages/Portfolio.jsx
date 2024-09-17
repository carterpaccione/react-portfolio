import './Portfolio.css';

export default function Portfolio () {
    return (
        <div id='portfolio'>
            <h1>Portfolio</h1>

            <div class="container text-center">
                <div class="row row-cols-2">
                    <div class="col ">
                        <img src='../src/images/placeholderimage.png' alt='placeholderimage' class='thumbnail' id='proj1'></img>
                        </div>
                    <div class="col">
                        <img src='../src/images/placeholderimage.png' alt='placeholderimage' class='thumbnail'></img>
                        </div>
                    <div class="col">
                        <img src='../src/images/placeholderimage.png' alt='placeholderimage' class='thumbnail'></img>
                        </div>
                    <div class="col">
                        <img src='../src/images/placeholderimage.png' alt='placeholderimage' class='thumbnail'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
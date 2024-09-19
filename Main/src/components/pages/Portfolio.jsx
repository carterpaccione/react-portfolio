import './Portfolio.css';

export default function Portfolio () {
    return (
        <div id='portfolio'>
            <h1>Portfolio</h1>

            <div className="container text-center">
                <div className="row row-cols-2">
                    <div className="col ">
                        <img src='../src/images/placeholderimage.png' alt='placeholderimage' className='thumbnail' id='proj1'></img>
                        </div>
                    <div className="col">
                        <img src='../src/images/placeholderimage.png' alt='placeholderimage' className='thumbnail'></img>
                        </div>
                    <div className="col">
                        <img src='../src/images/placeholderimage.png' alt='placeholderimage' className='thumbnail'></img>
                        </div>
                    <div className="col">
                        <img src='../src/images/placeholderimage.png' alt='placeholderimage' className='thumbnail'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
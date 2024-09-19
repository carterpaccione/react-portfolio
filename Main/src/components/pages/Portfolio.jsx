import './Portfolio.css';

export default function Portfolio () {
    return (
        <div id='portfolio'>
            <h1>Portfolio</h1>

            <div className="container text-center">
                <div className="row row-cols-2">
                    
                    <div className="col ">
                        <img src='../src/images/README-thumbnail.png' alt='placeholderimage' className='thumbnail' id='proj1'></img>
                            <div className='projectInfo'>
                                <h3><a>README Generator</a></h3>
                                <h3><a href='https://github.com/carterpaccione/README-Generator' target='_blank'>GitHub Repo</a></h3>
                            </div>
                    </div>
                   
                    <div className="col ">
                        <img src='../src/images/EmployeeManager-thumbnail.png' alt='placeholderimage' className='thumbnail' id='proj1'></img>
                            <div className='projectInfo'>
                                <h3><a>Employee Manager</a></h3>
                                <h3><a href='https://github.com/carterpaccione/Employee-Manager' target='_blank'>GitHub Repo</a></h3>
                            </div>
                    </div>
                    
                    <div className="col ">
                        <img src='../src/images/WeatherDashboard-thumbnail.png' alt='placeholderimage' className='thumbnail' id='proj1'></img>
                            <div className='projectInfo'>
                                <h3><a href='https://weather-dashboard-81rv.onrender.com/' target='_blank'>Weather Dashboard</a></h3>
                                <h3><a href='https://github.com/carterpaccione/Weather-Dashboard' target='_blank'>GitHub Repo</a></h3>
                            </div>
                    </div>

                    <div className="col ">
                        <img src='../src/images/VehicleBuilder-thumbnail.png' alt='placeholderimage' className='thumbnail' id='proj1'></img>
                            <div className='projectInfo'>
                                <h3><a>Vehicle Builder</a></h3>
                                <h3><a href='https://github.com/carterpaccione/VehicleBuilder' target='_blank'>GitHub Repo</a></h3>
                            </div>
                    </div>

                    <div className="col ">
                        <img src='../src/images/placeholderimage.png' alt='placeholderimage' className='thumbnail' id='proj1'></img>
                            <div className='projectInfo'>
                                <h3><a>Inventory Manager</a></h3>
                                <h3><a href='https://github.com/carterpaccione/Project-1' target='_blank'>GitHub Repo</a></h3>
                            </div>
                    </div>

                    <div className="col ">
                        <img src='../src/images/ReactPortfolio-thumbnail.png' alt='placeholderimage' className='thumbnail' id='proj1'></img>
                            <div className='projectInfo'>
                                <h3><a>React Portfolio</a></h3>
                                <h3><a href='https://github.com/carterpaccione/react-portfolio' target='_blank'>GitHub Repo</a></h3>
                            </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}
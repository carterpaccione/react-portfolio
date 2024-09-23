import './Project.css';

export default function Portfolio () {

    const projects = [
        {
            name: 'README Generator',
            image: '../src/images/README-thumbnail.png',
            altText: 'EmployeeManagerScreenshot',
            github: 'https://github.com/carterpaccione/README-Generator',
            link: 'https://github.com/carterpaccione/README-Generator?tab=readme-ov-file#readme-generator-'
        },
        {
            name: 'Employee Manager',
            image: '../src/images/README-thumbnail.png',
            altText: 'READMEGeneratorScreenshot',
            github: 'https://github.com/carterpaccione/README-Generator',
            link: 'https://github.com/carterpaccione/Employee-Manager?tab=readme-ov-file#employee-manager'
        },
        {
            name: 'Weather Dashboard',
            image: '../src/images/WeatherDashboard-thumbnail.png',
            altText: 'WeatherDashboardScreenshot',
            github: 'https://github.com/carterpaccione/Weather-Dashboard',
            link: 'https://weather-dashboard-81rv.onrender.com/'
        },
        {
            name: 'Vehicle Builder',
            image: '../src/images/VehicleBuilder-thumbnail.png',
            altText: 'VehicleBuilderScreenshot',
            github: 'https://github.com/carterpaccione/VehicleBuilder',
            link: 'https://github.com/carterpaccione/VehicleBuilder?tab=readme-ov-file#vehicle-builder'
        },
        {
            name: 'Inventory Manager',
            image: '../src/images/InventoryManager-thumbnail.png',
            altText: 'InventoryManagerScreenshot',
            github: 'https://github.com/carterpaccione/Project-1',
            link: 'https://carterpaccione.github.io/Project-1/'
        },
        {
            name: 'React Portfolio',
            image: '../src/images/ReactPortfolio-thumbnail.png',
            altText: 'PortfolioScreenshot',
            github: 'https://github.com/carterpaccione/react-portfolio',
            link: ''
        }
    ]

    function renderProjects() {
        return projects.map((project, index) => {
            return (
                <div className="col " key={index}>
                    <img src={project.image} alt={project.altText} className='thumbnail'></img>
                    <div className='projectInfo'>
                        <h3><a href={project.link} target='_blank'>{project.name}</a></h3>
                        <h3><a href={project.github} target='_blank'>GitHub Repo</a></h3>
                    </div>
                </div>
            )
        })
    };

    return (
        <div id='portfolio'>
            <h1>Portfolio</h1>

            <div className="container text-center">
                <div className="row row-cols-2">
                    {renderProjects()}
                </div>
            </div>
        </div>
    )
}
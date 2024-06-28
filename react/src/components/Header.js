import { Link } from 'react-router-dom'

const Header =()=> {

    return(
        <>
            <header className="header mb-4">
                <div className='container'>
                    <div className="row">
                        <div className="col-7 h1-div">
                            <h1 className="text-capitalize text-md-start mt-2 header-h1">
                                <Link to='/' className='text-decoration-none h1-link'>
                                    legit pc site
                                </Link>
                            </h1>
                        </div>
                        <div className="col-5">
                            <nav className='nav text-capitalize mt-4 header-nav justify-content-end'>
                                <Link to='/' className='text-decoration-none header-link'>Home</Link>
                                <Link to='/sign_up' className='text-decoration-none header-link'>sign up</Link>
                                <Link to='/shop' className='text-decoration-none header-link'>Shop</Link>
                            </nav> 
                        </div>
                    </div>
                </div>
                {/* <nav className="navbar navbar-dark bg-dar fixed-top">
                    <div className="container-fluid">
                        <a class="navbar-brand" href="#">Offcanvas dark navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link to='/' className='text-decoration-none header-link'>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/shop' className='text-decoration-none header-link shop-link'>Shop</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </a>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <li>
                                                <a className="dropdown-item" href="#">Action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex mt-3" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav> */}
            </header>
        </>
    )
}

export default Header
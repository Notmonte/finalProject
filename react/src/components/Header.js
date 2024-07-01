import { Link } from 'react-router-dom'

const Header =()=> {

    return(
        <>
            <header className="header mb-4 ">
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6 h1-div">
                            <h1 className="text-capitalize mt-2 header-h1 text-start d-none d-lg-block">
                                <Link to='/' className='text-decoration-none h1-link'>
                                    legit pc site
                                </Link>
                            </h1>
                        </div>
                        <div className="col-lg-6 col-md-12 ">
                            <h1 className="text-capitalize mt-3 header-h1 text-center d-lg-none">
                                <Link to='/' className='text-decoration-none h1-link'>
                                    legit pc site
                                </Link>
                            </h1>
                            <div className='d-none d-md-block'>
                                <nav className='nav text-capitalize mt-4 header-nav justify-content-center'>
                                    <Link to='/' className='text-decoration-none header-link text'>Home</Link>
                                    <Link to='/login' className='text-decoration-none header-link '>Login</Link>
                                    <Link to='/sign_up' className='text-decoration-none header-link'>sign up</Link>
                                    <Link to='/shop' className='text-decoration-none header-link'>Shop</Link>
                                </nav> 
                            </div>
                            <div className='d-sm-block d-md-none'>
                                <nav className="navbar navbar-dark fixed-top mt-2">
                                    <div className="container-fluid">
                                        {/* <a class="navbar-brand" href="#">Offcanvas dark navbar</a> */}
                                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                                            <div className="offcanvas-header">
                                                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">The Menu</h5>
                                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                                    <li className="nav-item mb-3">
                                                        <Link to='/' className='text-decoration-none header-link'>Home</Link>
                                                    </li>
                                                    <li className="nav-item mb-3">
                                                        <Link to='/sign_up' className='text-decoration-none header-link shop-link'>Sign Up</Link>
                                                    </li>
                                                    <li className='nav-item mb-3'>
                                                    <Link to='/login' className='text-decoration-none header-link'>Login</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to='/shop' className='text-decoration-none header-link shop-link'>Shop</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
import { Link } from 'react-router-dom'

const Header =()=> {

    return(
        <>
            <header className="header">
                <div className='container'>
                    <div className="row">
                        <div className="col-5">
                            <h1 className="text-capitalize text-md-start mt-3">
                                <Link to='/' className='text-decoration-none'>
                                    pc store
                                </Link>
                            </h1>
                        </div>
                        <div className="col-7">
                            <nav className='nav justify-content-end text-capitalize mt-4'>
                                <Link to='/' className='pe-3 text-decoration-none'>Home</Link>
                                <Link to='/login' className='text-decoration-none'>Login</Link>
                                <Link to='/shop' className=' ps-3 text-decoration-none'>Shop</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
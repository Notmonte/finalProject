import { useState } from 'react'
import { Link } from 'react-router-dom'

    //Pass in users from App

const Login = ({ users }) => { 
    const [signInData, setSignInData] = useState({
        email: '',
        password: ''
    });


    // Functionality for Login

    const [access, setAccess] = useState(false)
    const [user, setUser] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target
        setSignInData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let validUser = false;
    
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === signInData.email && users[i].password === signInData.password) {
                setAccess(true);
                setUser(users[i].email);
                setSignInData({
                    email: '',
                    password: ''
                });
                validUser = true;
                break;
            }
        }
    
        if (!validUser) {
            alert('Invalid email or password. Please try again.');
        }
    };
    

    return (
        <main className="header login-main bg-dark" id="loginMain">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-3">
                        {/* <h2 className="display-2">Login</h2> */}
                        {access && <p className="access-text text-center">Greetings, {user}!</p>}
                    </div>
                    <div className="col-md-9">
                        <form className="sign-in-form" onSubmit={handleSubmit}>
                            <div className='member-div d-flex justify-content-center'>
                                <Link to='/sign_up' className=''>
                                    <p className="form-text text-capitalize login-link">Not Member? Sign up here</p>
                                </Link>
                            </div>
                            <div className="mb-3">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-auto mb-3">
                                        <label htmlFor="signInEmail" className='login-label label-name'>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="signInEmail"
                                            name="email"
                                            value={signInData.email}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-auto">
                                        <label htmlFor="signInPassword" className='login-label label-name'>
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="signInPassword"
                                            name="password"
                                            value={signInData.password}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-auto mt-4 text-center">
                                        <button className="btn btn-danger" type="submit">
                                            Sign In
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* <Link to="/register" className="btn btn-link">Create an Account</Link> */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login

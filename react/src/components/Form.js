const Form =( { formData, handleChange, handleSubmit } )=> {

    return(
        <main className="main" id="formMain">
            <div className="container">
                <h2 className="form-h2 text-center mb-5 text-capitalize">
                    sign up
                </h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="row  d-md-flex justify-content-center">
                        <div className="col-md-auto mb-3 form-check form-div">
                            <label className="form-label text-capitalize label-name">
                                first name
                            </label>
                            <input
                                type="text"
                                id="fName"
                                name="fName"
                                value={formData.fName}
                                onChange={handleChange}
                                className="form-control"    
                                required
                            />
                        </div>
                        <div className=" col-md-auto mb-3 form-check form-div">
                            <label className="form-label text-capitalize label-name">
                                last name
                            </label>
                            <input 
                                type="text"
                                id='lName'
                                name="lName"
                                value={formData.lName}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="col-md-auto mb-3 form-check form-div">
                            <label className="form-label text-capitalize label-name">
                                email
                            </label>
                            <input 
                                type="email"
                                id='email'
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="col-md-auto mb-3 form-check form-div">
                            <label className="form-label text-capitalize label-name">
                                phone
                            </label>
                            <input 
                                type="phone"
                                id='phone'
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="col-md-auto mb-3 form-check form-div password-div">
                            <label className="form-label text-capitalize label-name">
                                password
                            </label>
                            <input 
                                type="password"
                                id='password'
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="col-md-auto mb-3 sub-btn d-flex justify-content-center">
                            <button type="submit" className="btn btn-danger">
                                create account
                            </button>
                        </div>
                    </div>
                </form> 
            </div>
        </main>
    )
}

export default Form
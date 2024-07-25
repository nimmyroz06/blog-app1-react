import React from 'react'

const SignUp = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 md-col-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 md-col-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Date Of Birth</label>
                                <input type="date" name="" id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 md-col-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Gender</label>
                                <select name="" id="" className="form-control">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-12 md-col-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 md-col-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">password</label>
                                <input type="password" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 md-col-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success">Register</button>
                            </div>
                            <div className="col col-12 col-sm-12 md-col-12 col-lg-12 col-xl-12 col-xxl-12">
                                <a href="" className="btn btn-primary">Login</a>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
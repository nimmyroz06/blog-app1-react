import React from 'react'

const SignIn = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12">
                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12">
                            <button className="btn btn-success">SingIn</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12">
                            <a href="/signup" className="btn btn-secondary">New Users Click Here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn
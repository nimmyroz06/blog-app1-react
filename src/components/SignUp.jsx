import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [input, setInput] = new useState(
        {
            "name": "", "dob": "", "gender": "", "email": "", "password": "", "cnfpass": ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        if (input.password == input.cnfpass) {


            let newInput = { "name": input.name, "dob": input.dob, "gender": input.gender, "email": input.email, "password": input.password }
            axios.post("", newInput).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("Successfully registered")
                        setInput({
                            "name": "", "dob": "", "gender": "", "email": "", "password": "", "cnfpass": ""
                        })
                        
                    } else {
                        alert("Email id already exist")
                        setInput({
                            "name": "", "dob": "", "gender": "", "email": "", "password": "", "cnfpass": ""
                        })
                    }


                }

            ).catch(
                (error) => {
                    console.log(error)
                }
            )

        } else {
            alert("Password and confirm password doesn't match")
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 md-col-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 md-col-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Date Of Birth</label>
                                <input type="date" name="dob" id="" className="form-control" value={input.dob} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 md-col-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Gender</label>
                                <select name="gender" id="" className="form-control" value={input.gender} onChange={inputHandler}>
                                    <option value="select">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-12 md-col-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 md-col-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">password</label>
                                <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 md-col-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Confirm password</label>
                                <input type="password" className="form-control" name='cnfpass' value={input.cnfpass} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 md-col-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-success">Register</button>
                            </div>
                            <div className="col col-12 col-sm-12 md-col-12 col-lg-12 col-xl-12 col-xxl-12">
                                <a href="/" className="btn btn-primary">Login</a>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
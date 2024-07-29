import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate=useNavigate()

    const [input,setInput]=useState(
        {"email":"",
        "password":""
    }

    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(input)
        axios.post("http://localhost:3030/signIn",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="INCORRECT PASSWORD") {
                    alert("INCORRECT PASSWORD")
                } else if (response.data.status=="INVALID EMAIL ID"){
                    alert("INVALID EMAIL ID")
                }
                else{
                    let token=response.data.token
                    let userId=response.data.userId
                    console.log(token)
                    console.log(userId)
                    sessionStorage.setItem("userId",userId)//can be accessed in all pages
                    sessionStorage.setItem("token",token)
                    navigate("/create")
               }
            }
        ).catch(
            (error)=>{

            }
        )
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">EMAIL ID</label>
                            <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">PASSWORD</label>
                            <input type="password" className="form-control"name='password' value={input.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>SIGNIN</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><a href="/signup" className="btn btn-secondary">NEW USERS REGISTERS CLICK HERE</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin
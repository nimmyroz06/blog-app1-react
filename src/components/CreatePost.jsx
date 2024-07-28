import axios from 'axios'
import React, { useState } from 'react'

const CreatePost = () => {
const [token,setToken]=useState(sessionStorage.getItem("token"))


    const [input,setInput]=useState(
        {"message":"","UserId":sessionStorage.getItem("UserId")}
    )


    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }


const readValue=()=>{
    console.log(input)
    axios.post("",input,{
        headers:{"token":token,"Content-Type":"application/json"}
    }).then(
        (response)=>{
            if (response.data.status=="success") {
                alert("Posted succesfully")
                
            } else {
                alert("something went wrong!!")
            }

        }
    ).catch(
        (error)=>{
            console.log(error)
        }
    )
}

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Post a Message</label>
                            <textarea name="" value={input.message} className="form-control" onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-success">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default CreatePost
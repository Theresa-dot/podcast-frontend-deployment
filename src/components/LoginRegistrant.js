import '../style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Axios from "axios"
import React from 'react';

function LoginRegistrant({ setNotLoggedIn }){
  const[name,setName]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();

  const handleSubmit=(event)=>{
    event.preventDefault();
      Axios.post("https://podcast-deployment-backend.onrender.com/registerRoute/login-registrant",{name,password})
      .then((res)=>{
          if(res.data==="Success"){
            setNotLoggedIn(false); 
              navigate('/main')
          }
          else if(res.data==="Password is incorrect"){
            alert("Password is incorrect")
          }
          else if(res.data==="No record existed"){
            alert("Username does not exist")
          }
      })
      .catch((err)=>alert(err));
  }

    return (
      <div>
        <div className="site-section">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-md-5 my-5 mx-3 desc-1">
                <h3 className="fw-bold mb-4">Login</h3>
                <form action="#" method="post" className="bg-white">
                  <div className="">
                    <div className="form-group row">
                      <div className="col-md-12 mb-3">
                        <label htmlFor="c_uname" className="text-black">Username <span style={{ color: '#A7727D' }}>*</span></label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="c_uname" 
                        name="c_uname"
                        onChange={(event)=> setName(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-12 mb-3">
                        <label htmlFor="c_password" className="text-black">Password <span style={{ color: '#A7727D' }}>*</span></label>
                        <input 
                        type="password" 
                        className="form-control" 
                        id="c_password" 
                        name="c_password" 
                        onChange={(event)=> setPassword(event.target.value)}
                        />
                      </div>
                    </div>
    
                    <div className="form-group row">
                      <div className="col-lg-12 mb-4">
                        <input type="submit" onClick={handleSubmit} className="btn login navlink btn-lg" value="Login" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      );
}

export default LoginRegistrant;

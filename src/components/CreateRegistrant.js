import '../style.css';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom'
import RegistrantForm from './RegistrantForm';
import Axios from "axios"
import React from 'react';

function CreateRegistrant() {
    const [arr,setArr]=useState([]);
    const getState=(childData)=>{
        setArr(childData);
    }
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
      event.preventDefault();
        const data={name:arr[0],email:arr[1],password:arr[2]}
        Axios.post("https://podcast-deployment-backend.onrender.com/registerRoute/create-registrant",data)
        .then((res)=>{
            if(res.data==="User already exists"){
              alert("Username already exists")
            }
            else if(res.status===200){
              alert("Registered successfully")
              navigate('/login-registrant')
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
  return (
    <div>
        <div className="site-section">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-md-5 my-5">
            <h3 className="mb-4 desc-1 fw-bold">Register</h3>
            <form onSubmit={handleSubmit} className="bg-white">
              <RegistrantForm getState={getState}/>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default CreateRegistrant;

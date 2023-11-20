import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import Axios from "axios"

function Contact() {
  const[Fname,setFname]=useState("");
  const[Lname,setLname]=useState("");
  const[email,setEmail]=useState("");
  const[subject,setSubject]=useState("");
  const[message,setMessage]=useState("");

  useEffect(() => {
    setFname(Fname);
    setLname(Lname);
    setEmail(email);
    setSubject(subject);
    setMessage(message);
}, [Fname, Lname, email, subject, message]);


  const arr = [Fname, Lname, email, subject, message];

    const navigate=useNavigate();
    const handleSubmit=(event)=>{
      event.preventDefault();
        const data={Fname:arr[0],Lname:arr[1],email:arr[2],subject:arr[3],message:arr[4]}
        Axios.post("https://podcast-deployment-backend.onrender.com/contactRoute/contact",data)
        .then((res)=>{
          if(res.status===200){
              alert("Message sent")
              navigate('/contact')
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
  return (
    <div className="container flex-contact">
      <div className="site-section mx-5 my-4">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row">
            <div className="col-md-7 mb-5">
              <form onSubmit={handleSubmit} className="bg-white">
                <div className="navlink">
                  <div className="form-group row mb-4">
                    <div className="col-md-6">
                      <label htmlFor="c_fname" className="text-black">
                        First Name <span className="navlink">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_fname"
                        name="c_fname"
                        onChange={(event)=> setFname(event.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_lname" className="text-black">
                        Last Name <span className="navlink">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_lname"
                        name="c_lname"
                        onChange={(event)=> setLname(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-4">
                    <div className="col-md-12">
                      <label htmlFor="c_email" className="text-black">
                        Email <span className="navlink">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="c_email"
                        name="c_email"
                        placeholder=""
                        onChange={(event)=> setEmail(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-4">
                    <div className="col-md-12">
                      <label htmlFor="c_subject" className="text-black">
                        Subject{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_subject"
                        name="c_subject"
                        onChange={(event)=> setSubject(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-5">
                    <div className="col-md-12">
                      <label htmlFor="c_message" className="text-black">
                        Message{" "}
                      </label>
                      <textarea
                        name="c_message"
                        id="c_message"
                        cols={30}
                        rows={7}
                        className="form-control"
                        defaultValue={""}
                        onChange={(event)=> setMessage(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-lg-12">
                      <input
                        type="submit"
                        className="btn signup btn-lg"
                        defaultValue="Send Message"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4 desc-1">
              <div className="p-4 mb-3 bg-white">
                <p className="mb-1 fw-bold">Address</p>
                <p className="mb-4">
                  456, XYZ Avenue, ABC Street, Mumbai, Maharashtra, India
                </p>
                <p className="mb-1 fw-bold">Phone</p>
                <p className="mb-4">
                  <Link style={{ color: "#A7727D" }}>+1 232 3235 324</Link>
                </p>
                <p className="mb-1 fw-bold">Email Address</p>
                <p className="mb-4">
                  <Link style={{ color: "#A7727D" }}>youremail@domain.com</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

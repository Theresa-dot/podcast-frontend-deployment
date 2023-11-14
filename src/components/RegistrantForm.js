import { useEffect,useState } from 'react';
import '../style.css';

function RegistrantForm(props){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    useEffect(()=>{
        setName(props.nameValue);
        setEmail(props.emailValue);
        setPassword(props.passwordValue);
    },[props.nameValue,props.emailValue,props.passwordValue])

    const arr=[name,email,password];

    const handleClick = () => {
      if (arr.every((value) => value !== undefined && value.trim() !== "")) {
        props.getState(arr);
      } else {
        console.log("Please fill in all required fields");
      }
    }
    

    return(
        <div className="desc-1">
                <div className="form-group row">
                  <div className="col-md-12 mb-3">
                    <label htmlFor="c_fname" className="text-black">Username <span style={{ color: '#A7727D' }}>*</span></label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="c_fname" 
                    name="c_fname"
                    onChange={(event)=> setName(event.target.value)}
                    required
                     />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12 mb-3">
                    <label htmlFor="c_email" className="text-black">Email <span style={{ color: '#A7727D' }}>*</span></label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="c_email" 
                    name="c_email" 
                    placeholder="" 
                    onChange={(event)=> setEmail(event.target.value)}
                    required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12 mb-3">
                    <label htmlFor="c_pass" className="text-black">Password <span style={{ color: '#A7727D' }}>*</span></label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="c_pass" 
                    name="c_pass"
                    onChange={(event)=> setPassword(event.target.value)}
                    required
                     />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12 mb-4">
                    <label htmlFor="c_repass" className="text-black">Re-type Password <span style={{ color: '#A7727D' }}>*</span></label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="c_repass" 
                    name="c_repass" 
                    required
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-lg-12">
                    <button onClick={handleClick} type="submit" className="btn login navlink btn-lg" >Register</button>
                  </div>
                </div>
              </div>
    )

}

export default RegistrantForm;


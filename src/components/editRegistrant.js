import { useParams } from "react-router-dom";
import UpdateForm from "./UpdateForm";
import Axios from "axios";
import { useEffect, useState } from "react";

function EditRegistrant({setNotLoggedIn}) {
    const { id } = useParams();

    const [data, setData] = useState({ name: "", email: "",password: "" });
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get("https://podcast-deployment-backend.onrender.com/registerRoute/update-registrant/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { name, email, password } = res.data;
                    setData({ name, email, password });
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    }, [id]);

    const getState = (childData) => {
        setNewData(childData);
    }


    const handleSubmit = () => {
        const data = { name: newData[0], email: newData[1], password: newData[2] }
        Axios.put("https://podcast-deployment-backend.onrender.com/registerRoute/update-registrant/" + id, data)
            .then((res) => {
                if (res.status === 200){
                    alert("Record updated successfully");
                    setNotLoggedIn(true);
                    window.location.href = "/";
                }

                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    }

    return (

        <div>
        <div className="site-section">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-md-5 my-5">
            <h3 className="mb-4 desc-1 fw-bold">Update Account</h3>
            <form onSubmit={handleSubmit}>
            <UpdateForm getState={getState} nameValue={data.name} emailValue={data.email}
                passwordValue={data.password}>
                Update Registrant
            </UpdateForm>
        </form>
          </div>
        </div>
      </div>
    </div>
    </div>
        
    )
}
export default EditRegistrant;


import Axios from "axios";
import { Link } from "react-router-dom";

function Account(props) {
  const { _id, name, email } = props.obj;

  const handleClick = async () => {
    try {
      const response = await Axios.delete(`http://localhost:4000/registerRoute/delete-account/${_id}`);

      if (response.status === 200) {
        alert("Record deleted successfully");
        // Set not logged in before reloading or redirecting
        props.setNotLoggedIn(true);
        // Redirect to the home page (index)
        window.location.href = "/";
      } else {
        Promise.reject();
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred while deleting the record.");
    }
  };

  return (
    <div className="container mt-3">
      <div className="px-4 pt-5 my-4 text-center">
        <h1 className="display-4 fw-bold text-body-emphasis">Your Account Details</h1>
      </div>

      <div className="user-info desc-2">
        <p className="fw-bold text-center" id="username">
          Your Username: <span id="username-value">{name}</span>
        </p>
        <p className="fw-bold text-center" id="email">
          Your Email: <span id="email-value">{email}</span>
        </p>
        </div>
        <br/>
        <center className="user-info desc-2">
            <Link  to={`/edit-registrant/${_id}`} className="account btn mx-auto navlink login me-2 my-5">
              Modify Account
            </Link>
            <Link  to="/" onClick={handleClick} className="account btn mx-auto navlink login me-2">
              Delete Account
            </Link>
        </center>
      </div>
  );
}

export default Account;


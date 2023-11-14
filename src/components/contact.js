import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="container flex-contact">
      <div className="site-section mx-5 my-4">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row">
            <div className="col-md-7 mb-5">
              <form action="#" className="bg-white">
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

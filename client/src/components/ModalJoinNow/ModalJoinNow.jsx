import React from "react";
import { useState } from "react";
import "./ModalJoinNow.scss";
import closeIcon from "../../assets/icons/close-24px.svg";
import axios from "axios";
import { motion } from "framer-motion";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

const ModalJoinNow = ({ setShowJoinModal, setShowLoginModal }) => {
  // function for button - closing the modal

  const handleClose = () => {
    setJoinFormData(blankFormData);
    setShowJoinModal(false);
    setShowLoginModal(false);
  };
  const handleOpenLogin = () => {
    setJoinFormData(blankFormData);
    setShowJoinModal(false);
    setShowLoginModal(true);
  };

  // const [currentUser, setCurrentUser] = useState(null);

  const [joinFormData, setJoinFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
  });

  let blankFormData = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
  };

  const handleChange = (e) => {
    setJoinFormData({ ...joinFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL+"/users", joinFormData);
      console.log(response.data);
      setShowJoinModal(false);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="join-now-modal__overlay">
        <div className="join-now-modal__container">
          <div className="join-now-modal__close">
            <img src={closeIcon} alt="close icon" onClick={handleClose} />
          </div>
          <div className="join-now-modal__title">
            <h1>JOIN NOW</h1>
          </div>
          <div className="join-now-modal__content">
            <form className="join-now-modal__form" onSubmit={handleSubmit}>
              <div className="join-now-modal__row">
                <div className="join-now-modal__col-left">Email Address</div>
                <div className="join-now-modal__col-right">
                  <input
                    type="email"
                    name="email"
                    className="join-now-modal__input"
                    value={joinFormData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                  />{" "}
                </div>
              </div>
              <div className="join-now-modal__row">
                <div className="join-now-modal__col-left">First Name</div>
                <div className="join-now-modal__col-right">
                  <input
                    type="text"
                    name="first_name"
                    className="join-now-modal__input"
                    value={joinFormData.first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="join-now-modal__row">
                <div className="join-now-modal__col-left">Last Name</div>
                <div className="join-now-modal__col-right">
                  <input
                    type="text"
                    name="last_name"
                    className="join-now-modal__input"
                    value={joinFormData.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="join-now-modal__row">
                <div className="join-now-modal__col-left">Phone Number</div>
                <div className="join-now-modal__col-right">
                  <input
                    type="text"
                    name="phone"
                    className="join-now-modal__input"
                    value={joinFormData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="join-now-modal__row">
                <div className="join-now-modal__col-left">Password</div>
                <div className="join-now-modal__col-right">
                  <input
                    type="password"
                    name="password"
                    className="join-now-modal__input"
                    value={joinFormData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
              </div>
              <button className="join-now-modal__submit" type="submit">
                Create Profile
              </button>
            </form>

            <div className="join-now-modal__separator">
              ------------------------------------
              <div className="join-now-modal__separator-or">OR</div>
              ------------------------------------
            </div>

            <div className="join-now-modal__button-container">
              <div><button className="join-now-modal__login" onClick={handleOpenLogin}>
                Login
              </button></div>
              <div><button className="join-now-modal__cancel" onClick={handleClose}>
                Cancel
              </button></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ModalJoinNow;

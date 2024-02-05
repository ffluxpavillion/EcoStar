import React from "react";
import { useState } from "react";
import "./ModalLogin.scss";
import closeIcon from "../../assets/icons/close-24px.svg";
import axios from "axios";
import { motion } from "framer-motion";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

const ModalLogin = ({ setShowJoinModal, setShowLoginModal, setLoggedIn, setUserId, setUserName }) => {
  // function for button - closing the modal
  const handleClose = () => {
    setLoginFormData(blankFormData);
    setShowJoinModal(false);
    setShowLoginModal(false);
  };

  const handleOpenJoin = () => {
    setLoginFormData(blankFormData);
    setShowJoinModal(true);
    setShowLoginModal(false);
  };

  // const [currentUser, setCurrentUser] = useState(null);
  
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  let blankFormData = {
    email: "",
    password: "",
  };

  const handleChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL+"/users/login", loginFormData);
      console.log(response.data);
      setUserId(response.data.id);
      setUserName(response.data.first_name);
      setLoggedIn(true);
      setShowLoginModal(false);
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
      <div className="login-modal__overlay">
        <div className="login-modal__container">
          <div className="login-modal__close">
            <img src={closeIcon} alt="close icon" onClick={handleClose} />
          </div>
          <div className="login-modal__title">
            <h1>LOG IN</h1>
          </div>
          <div className="login-modal__content">
            <form className="login-modal__form" onSubmit={handleSubmit}>
              <div className="login-modal__row">
                <div className="login-modal__col-left">Email Address</div>
                <div className="login-modal__col-right">
                  <input
                    type="email"
                    name="email"
                    className="login-modal__input"
                    value={loginFormData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                  />{" "}
                </div>
              </div>
              <div className="login-modal__row">
                <div className="login-modal__col-left">Password</div>
                <div className="login-modal__col-right">
                  <input
                    type="password"
                    name="password"
                    className="login-modal__input"
                    value={loginFormData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
              </div>
              <button className="login-modal__submit" type="submit">
                LOGIN
              </button>
            </form>

            <div className="login-modal__separator">
              ------------------------------------
              <div className="login-modal__separator-or">OR</div>
              ------------------------------------
            </div>

            <div className="login-modal__button-container">
              <div>
                <button
                  className="login-modal__create"
                  onClick={handleOpenJoin}
                >
                  Create New Profie
                </button>
              </div>
              <div>
                <button className="login-modal__cancel" onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ModalLogin;

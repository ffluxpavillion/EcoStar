import "./EcoScore.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
import Partnerships from "../../components/Partnerships/Partnerships";
import EcoNumber from "../../components/EcoNumber/EcoNumber";
import ModalJoinNow from "../../components/ModalJoinNow/ModalJoinNow";
import ModalLogin from "../../components/ModalLogin/ModalLogin";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";


// const API_URL = process.env.REACT_APP_API_URL;

function EcoScore({loggedIn, userName, userId, setLoggedIn, setUserName, setUserId}) {
  
  // const [isloading, setIsLoading] = useState(true);

  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);


  return (
    <>
      <Header
        setShowJoinModal={setShowJoinModal}
        setShowLoginModal={setShowLoginModal}
        setLoggedIn={setLoggedIn}
        setUserName={setUserName}
        setUserId={setUserId}
        loggedIn={loggedIn}
      />
      <AnimatePresence>
        {showJoinModal && (
          <ModalJoinNow
            setShowJoinModal={setShowJoinModal}
            setShowLoginModal={setShowLoginModal}
          />
        )}
        {showLoginModal && (
          <ModalLogin
            setShowJoinModal={setShowJoinModal}
            setShowLoginModal={setShowLoginModal}
            setLoggedIn={setLoggedIn}
            setUserName={setUserName}
            setUserId={setUserId}
          />
        )}
      </AnimatePresence>


      <EcoNumber 
        userId={userId}
        userName={userName}
      />
      <Leaderboard />
      <Partnerships />

      <Footer />
    </>
  );
}

export default EcoScore;

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/App.scss";

import Main from "./pages/Main/Main";
import EcoScore from "./pages/EcoScore/EcoScore";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  
  const [isloading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("EcoStar");
  const [userId, setUserId] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main 
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            userName={userName}
            setUserName={setUserName}
            userId={userId}
            setUserId={setUserId}
          />} />
          <Route path="/ecoscore" element={<EcoScore 
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              userName={userName}
              setUserName={setUserName}
              userId={userId}
              setUserId={setUserId}
          />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

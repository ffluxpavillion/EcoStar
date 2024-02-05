import "./EcoNumber.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import canister from "../../assets/images/canister.png";
import CountUp from 'react-countup';
import { HashLink } from 'react-router-hash-link';

const EcoScore = ({userId,userName}) => {
  const [isloading, setIsLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [totalCarbonSaved, setTotalCarbonSaved] = useState(0);
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

  useEffect(() =>{

    axios
      .get(API_URL+"/commute/total/"+userId)
      .then(function (response) {
        if (response.data[0]["sum(`eco_score`)"] !== null){
          setTotalScore(response.data[0]["sum(`eco_score`)"])
        }else{
          setTotalScore(0)
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    axios
      .get(API_URL+"/commute/carbon/"+userId)
      .then(function (response) {
        if (response.data[0]["sum(`co2_saved_kg`)"] !== null) {
          setTotalCarbonSaved(response.data[0]["sum(`co2_saved_kg`)"]);
        }
        else{
          setTotalCarbonSaved(0)
        }
      })
  },[userId]);

  return (
    <main className="eco-number__main">
      <div className="eco-number__card">
        <div className="eco-number__card-left"></div>
        <div className="eco-number__card-right">
          <div className="eco-number__header">
            <h1>Welcome, {userName}!</h1>
          </div>

          <div className="eco-number__block-1">
            <div className="eco-number__statement">
              <p>You have saved</p>
              <p className="middle-paragraph">
                
              <CountUp end={totalCarbonSaved} duration={2.75} /> grams of CO<span className="subscript">2</span></p>
              <p>from being emitted!</p>
            </div>
            <div className="eco-number__image-container tipping-container"><img className="eco-number__image tipping" src={canister} alt="a canister" /></div>
          </div>

          <div className="eco-number__block-2">
            <h1>You have</h1>
          
            <HashLink smooth to="#target-section"><h1 className="eco-number__data neumorphic-div"><CountUp end={totalScore}duration={2.75} /></h1></HashLink>
          <div className="eco-number__header1">
            <h1>Eco Points!</h1><p>Reward yourself!</p>
          </div></div>
        </div>
      </div>
    </main>
  );
};

export default EcoScore;

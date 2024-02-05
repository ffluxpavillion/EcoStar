import "./Leaderboard.scss";
import { useState, useEffect } from "react";
import userImage1 from "../../assets/images/user-image-1.webp";
import userImage2 from "../../assets/images/user-image-2.jpg";
import userImage3 from "../../assets/images/user-image-3.jpg";
import userImage4 from "../../assets/images/user-image-4.jpeg";
import firstPlace from "../../assets/icons/1st-prize.png";
import secondPlace from "../../assets/icons/2nd-place.png";
import thirdPlace from "../../assets/icons/3rd-place.png";
import participationMedal from "../../assets/icons/medal.png";


const Leaderboard = () => {
  const [isloading, setIsLoading] = useState(true);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [totalCarbonSaved, setTotalCarbonSaved] = useState("");

  const handleJoinNow = () => {
    console.log("Join Now");
    setShowJoinModal(true);
  };

  return (
    <main className="leaderboard">
      <div className="leaderboard__card">
        <h1 className="leaderboard__table-header">LEADERBOARD</h1>

        <div className="leaderboard__table-wrapper">
          <div className="leaderboard__table-container">
            <section className="leaderboard__table-title">
              <div className="leaderboard__title pos">Position</div>
              <div className="leaderboard__title">Username</div>
              <div className="leaderboard__title point">Points</div>
            </section>

            <section className="leaderboard__table-data">
              <div className="leaderboard__data one">
                1st
                <div className="leaderboard__icon-container">
                  <img
                    className="leaderboard__icon"
                    src={firstPlace}
                    alt="first place medal"
                  ></img>
                </div>
              </div>
              <div className="leaderboard__data">
                <div className="leaderboard__image-container">
                  <img
                    className="leaderboard__user-image"
                    src={userImage1}
                    alt="user-image"
                  ></img>
                </div>
                Cobra
              </div>
              <div className="leaderboard__data point">100,000</div>
            </section>
            <section className="leaderboard__table-data dark">
              <div className="leaderboard__data one">
                2nd
                <div className="leaderboard__icon-container">
                  <img
                    className="leaderboard__icon-2"
                    src={secondPlace}
                    alt="first place medal"
                  ></img>
                </div>
              </div>
              <div className="leaderboard__data">
                <div className="leaderboard__image-container">
                  <img
                    className="leaderboard__user-image"
                    src={userImage3}
                    alt="user-image"
                  ></img>
                </div>
                JessyJ
              </div>
              <div className="leaderboard__data point">80,221</div>
            </section>
            <section className="leaderboard__table-data">
              <div className="leaderboard__data one">
                3rd
                <div className="leaderboard__icon-container">
                  <img
                    className="leaderboard__icon-3"
                    src={thirdPlace}
                    alt="first place medal"
                  ></img>
                </div>
              </div>
              <div className="leaderboard__data">
                <div className="leaderboard__image-container">
                  <img
                    className="leaderboard__user-image"
                    src={userImage2}
                    alt="user-image"
                  ></img>
                </div>
                JonJones
              </div>
              <div className="leaderboard__data point">67,901</div>
            </section>
            <section className="leaderboard__table-data dark">
              <div className="leaderboard__data one">
                4th
                <div className="leaderboard__icon-container">
                  <img
                    className="leaderboard__icon-4"
                    src={participationMedal}
                    alt="first place medal"
                  ></img>
                </div>
              </div>
              <div className="leaderboard__data">
                <div className="leaderboard__image-container">
                  <img
                    className="leaderboard__user-image"
                    src={userImage4}
                    alt="user-image"
                  ></img>
                </div>
                Khamzat
              </div>
              <div className="leaderboard__data point">45,902</div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Leaderboard;

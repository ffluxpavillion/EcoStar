import "./DataVis.scss";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const DataVis = ({ setShowJoinModal, totalCarbonSaved }) => {
  return (
    <main className="data-vis__main">
      <div className="data-vis__card">
        <div className="data-vis__card-left"></div>

        <div className="data-vis__card-right">
          <div className="data-vis__header">
            <h1>EcoStars have saved </h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HashLink smooth to="#calculator">
              <div className="data-vis__data">
                <h1>{totalCarbonSaved || ". . ."}</h1>
              </div>
            </HashLink>
          </motion.div>

          <div className="data-vis__header">
            <h1>
              kilograms of CO<span className="subscript">2</span>
            </h1>
            <h1>from being emitted.</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DataVis;

import "./Partnerships.scss";
import Adidas from '../../assets/logo/adidas.svg';
import Loblaws from '../../assets/logo/loblaws.svg';
import Lululemon from '../../assets/logo/lululemon.svg';
import Starbucks from '../../assets/logo/starbucks.svg';
import Patagonia from '../../assets/logo/patagonia.svg';
import CanadianTire from '../../assets/logo/canadian-tire.svg';
import Roots from '../../assets/logo/roots.svg';
import Nike from '../../assets/logo/nike.svg';

const Partnerships = () => {


  return (
    // <div className='background' // Repeating Background Image (Leaf)>
    <div className="partnerships-main" id="target-section">
        <div className="partnerships-main__card-example">
      <section className="partnerships__section">
        <div className="partnerships__div-top">
          <h2 className="partnerships__div-header" id="Tagline">Local Brands with a <span id='GlobalImpact'> Global Impact.</span></h2>
          <h2 className="partnerships__div-header" id="Tagline">We've joined forces with your favorite brands to save the planet.</h2>
          <h3 className="partnerships__div-header" id="EcoStar">Eco<span id='SUPER'>SUPER</span>Star.</h3>
          <h3 className="partnerships__div-header" id="SuperFast">SuperFast.</h3>
          <div className="partnerships__div"></div>
            <br />
            <div className="grid-container">
              <div className="grid-item">
                <a className="link" target='_blank' href="https://www.loblaws.ca/">
                  <img src={Loblaws} className='grid-img'></img>
                </a>
              </div>
              <div className="grid-item">
                <a className="link" target='_blank' href="https://www.patagonia.ca/home/">
                  <img src={Patagonia} className='grid-img'></img>
                </a>
              </div>
              <div className="grid-item">
                <a className="link" target='_blank' href="https://shop.lululemon.com/en-ca/">
                  <img src={Lululemon} className='grid-img'></img>
                </a>
              </div>
              <div className="grid-item">
                <a className="link" target='_blank' href="https://www.nike.com/ca/">
                  <img src={Nike} className='grid-img'></img>
                </a>
              </div>
              <div className="grid-item">
                <a className="link" target='_blank' href="https://www.starbucks.ca/">
                  <img src={Starbucks} className='grid-img'></img>
                </a>
              </div>
              <div className="grid-item">
                <a className="link" target='_blank' href="https://www.adidas.ca/">
                  <img src={Adidas} className='grid-img'></img>
                </a>
              </div>
              <div className="grid-item">
                <a className="link" target='_blank' href="https://www.roots.com/ca/en/homepage">
                  <img src={Roots} className='grid-img'></img>
                </a>
              </div>
              <div className="grid-item">
                <a className="link" target='_blank' href="https://www.canadiantire.ca/">
                  <img src={CanadianTire} className='grid-img'></img>
                </a>
              </div>
            </div>
          </div>
      </section>
      </div>
    </div>
  );
};

export default Partnerships;
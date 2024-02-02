
// ImageRow.js
import React, { useState } from 'react';
import './Product.css'; // Import your custom CSS file
 import img1 from'./assets/women.jpg';
 import img2 from'./assets/menspects.jpg';
 import img3 from'./assets/unisex.jpg';
 import img5 from './assets/img5.png';
 import Catlogue from './Catlogue';
import CatlogueWoman from './Catloguewomen';
import AllCatlogue from'./AllCatalogue';
import Unisex from './Unisex';
//  import img2 from'./Men spects2.jpg';


const ImageRow = () => {

  const [showCatalogue, setShowCatalogue] = useState(false);
  

  const showCataloguePage = () => {
    setShowCatalogue(true);
    setShowCatalogue1(false);
    setShowCatalogue2(false);
    setShowCatalogue3(false);
  };

  const [showCatalogue1, setShowCatalogue1] = useState(false);

  const showCataloguePage1 = () => {
    setShowCatalogue1(true);
    setShowCatalogue(false);
    setShowCatalogue2(false);
    setShowCatalogue3(false);
  };

  const [showCatalogue2, setShowCatalogue2] = useState(true);

  const showCataloguePage2 = () => {
    setShowCatalogue2(true);
    setShowCatalogue(false);
    setShowCatalogue1(false);
    setShowCatalogue3(false);
  }

  const [showCatalogue3, setShowCatalogue3] = useState(false);

  const showCataloguePage3 = () => {
    setShowCatalogue3(true);
    setShowCatalogue(false);
    setShowCatalogue2(false);
    setShowCatalogue1(false);
  };

  return (
    <div className="image-row-container">
      <h2 className="my-4">CATEGORY</h2>
      <div className="image-row">
      
      <div className="image-item" onClick={showCataloguePage1}>
          {/* <a href='/Catalogue'><img src={img1} alt="Women's Optical Frame" className="img" /></a> */}
          <img src={img1} alt="Women's Optical Frame" className="img" />
          <p>Women</p>
        </div>

        <div className="image-item" onClick={showCataloguePage}>
          <img src={img2} alt="men's Optical Frame" className="img" />
          <p>Men</p>
        </div>

        <div className="image-item" onClick={showCataloguePage3}>
          <img src={img5} alt="unisex Optical Frame" className="img" />
          <p>UNISEX</p>
        </div>


        <div className="image-item"  onClick={showCataloguePage2}>
          <img src={img3} alt="All Optical Frame" className="img" />
          <p>ALL</p>
        </div>
      
      </div>
      {showCatalogue && <Catlogue/>}
      {showCatalogue1 && <CatlogueWoman/>}
      {showCatalogue2 && <AllCatlogue/>}
      {showCatalogue3 && <Unisex/>}  
      </div>
    
  );
};



export default ImageRow;




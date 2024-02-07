// ImageRow.js
import React, { useState } from 'react';
import './Product.css'; // Import your custom CSS file
// import img1 from './assets/women1.jpg';
// import img2 from './assets/men1.jpg';
// import img3 from './assets/unisex1.webp';
import img4 from './assets/womenn.jpg';
import img5 from './assets/menspectsss.jpg';
import img6 from './assets/unisexx.jpg';
import Catalogue from './Catlogue'; // Assuming you have a Catalogue component
import './Image_row.css';

const ImageRow = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

 

  return (
    <div className="image-row-container">
      <h2 className="my-4">CATEGORY</h2>
      <div className="image-row"  >
        <div className="image-item" onClick={() => handleCategoryClick('women')}>
          <img src={img4} alt="Women's Optical Frame" className="img" style={{zIndex:'1'}}/>
          <p>Women</p>
        </div>

        <div className="image-item" onClick={() => handleCategoryClick('men')}>
          <img src={img5} alt="Men's Optical Frame" className="img" />
          <p>Men</p>
        </div>

        <div className="image-item" onClick={() => handleCategoryClick('all')}>
          <img src={img6} alt="Unisex Optical Frame" className="img" />
          <p>ALL</p>
        </div>
      </div>

      
      {/* Render the Catalogue component with the selected category */}
      <Catalogue selectedCategory={selectedCategory} />
      

    </div>
  );
};

export default ImageRow;

// // import Image1 from './Assests/unisexCatlogue/unisex1.jpg';
// import unisex from './assets/unisex.jpg';

// // ... other image imports

// const products = [
//   { imgSrc: unisex, productName: 'Vinsent Chase model301' },
//   { imgSrc: unisex, productName: 'Vinsent Chase model302' },
//   { imgSrc: unisex, productName: 'Vinsent Chase model303'},
//   { imgSrc: unisex, productName: 'Vinsent Chase model304'},
//   { imgSrc: unisex, productName: 'Vinsent Chase model305'},
//   { imgSrc: unisex, productName: 'Vinsent Chase model306'},
//   { imgSrc: unisex, productName: 'Vinsent Chase model307'},
//   { imgSrc: unisex, productName: 'Vinsent Chase model308'},
//   { imgSrc: unisex, productName: 'Vinsent Chase model309'},
//   { imgSrc: unisex, productName: 'Vinsent Chase model400'},
  

//   // ... add other product details
// ];

// const Unisex= () => {
//   return (
//     <div>
//       <main>
//         <h1>UNISEX</h1>
//         <div id="wrap" className="oe_structure oe_empty">
//           {/* ... other HTML code */}
//         </div>

//         <section className="s_product_list o_colored_level" data-snippet="s_product_list" data-name="Items">
//           <div className="container-fluid">
//             <div className="row">
//               {products.map((product, index) => (
//                 <div key={index} className="col-md-4 col-6 o_colored_level col-lg-4">
//                   <a href="" data-bs-original-title="" title="">
//                     <img
//                       src={product.imgSrc}
//                       alt="shallow focus photography of eyeglasses"
//                       className="img img-fluid o_we_custom_image"
//                       data-mimetype="image/webp"
//                       data-original-id="255"
//                       data-original-src="/unsplash/GMjmjBi579I/Specs.jpg?unique=f249c4bf"
//                       data-mimetype-before-conversion="image/jpeg"
//                       data-resize-width="962"
//                       loading="lazy"
//                     />
//                   </a>
//                   <div className="s_product_list_item_link">
//                     {product.productName}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//         {/* ... other sections */}
//       </main>

//       <div id="o_shared_blocks" className="oe_unremovable"></div>
//     </div>
//   );
// };

// export default Unisex;

import React from 'react';
import logo from './assets/logo512.png';
import { useState, useEffect, useRef } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './firbaseConfig';
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import 'firebase/auth'; // Add any other Firebase services you need
import womenImage1 from './assets/WomenCatlogue/Women1.jpg';
import 'firebase/storage';
import products from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';



const Unisex = () => {
  
    const [unisexData, setUnisexData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const app = initializeApp(firebaseConfig);
          const db = getFirestore(app);
          const productsCollection = collection(db, 'products');
  
          const querySnapshot = await getDocs(productsCollection);
  
          const productsData = querySnapshot.docs
            .filter((doc) => doc.data().gender === 'unisex') // Filter by gender field
            .map((doc) => doc.data());
  
          setUnisexData(productsData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }

  return (
    <div>
      <main>
        <h1>Unisex</h1>

        <section className="s_product_list o_colored_level" data-snippet="s_product_list" data-name="Items">
          <div className="container-fluid">
            <div className="row">
              {unisexData.map((product, index) => (
                <div key={index} className="col-md-4 col-6 o_colored_level col-lg-4">
                <a href="" data-bs-original-title="" title="">
                  <img
                    src={product.imageUrls || " "}
                    alt="Product"
                    className="img img-fluid o_we_custom_image"
                    loading="lazy"
                    style={{objectFit: 'cover',width:'50%',height:'50%'}}
                  />
                </a>
                <div className="s_product_list_item_link">
                  <p>Name: {product.name || 'N/A'}</p>
                  <p>Model No: {product.modelno || 'N/A'}</p>
                </div>
              </div>
              
              ))}
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default Unisex;
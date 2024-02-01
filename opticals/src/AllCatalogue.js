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



const AllCatalogue = () => {
  const [allcatalogueData, setAllCatalogueData] = useState([]);

  useEffect(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const productsCollection = collection(db, 'products');

    // Fetch data from Firebase Firestore
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(productsCollection);
        const productsData = snapshot.docs.map((doc) => doc.data());
        setAllCatalogueData(productsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <main>
        <h1>All</h1>

        <section className="s_product_list o_colored_level" data-snippet="s_product_list" data-name="Items">
          <div className="container-fluid">
            <div className="row">
              {allcatalogueData.map((product, index) => (
                <div key={index} className="col-md-4 col-6 o_colored_level col-lg-4">
                
                  <img
                    src={product.imageUrls || " "}
                    alt="Product"
                    className="img img-fluid o_we_custom_image"
                    loading="lazy"
                    style={{objectFit: 'cover',width:'50%',height:'50%'}}
                  />
                
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

export default AllCatalogue;
  
  


// const ImageRow = () => {

//     const [showCatalogue, setShowCatalogue] = useState(false);
  
//     const showCataloguePage = () => {
//       setShowCatalogue(true);
//     };





// const products = [
//   { imgSrc: womenImage1, productName: 'Vinsent Chase model301' },
//   { imgSrc: womenImage1, productName: 'Vinsent Chase model302' },
//   { imgSrc: womenImage1, productName: 'Vinsent Chase model303'},
//   { imgSrc: womenImage1, productName: 'Vinsent Chase model304'},
//   { imgSrc: womenImage1, productName: 'Vinsent Chase model305'},
//   { imgSrc:womenImage1, productName: 'Vinsent Chase model306'},
//   { imgSrc: womenImage1, productName: 'Vinsent Chase model307'},
//   { imgSrc: womenImage1, productName: 'Vinsent Chase model308'},
//   { imgSrc: womenImage1, productName: 'Vinsent Chase model309'},
//   { imgSrc: womenImage1, productName: 'Vinsent Chase model400'},
//   { imgSrc: womenImage1, productName: 'Vinsent Chase model401'},
//   { imgSrc: womenImage1, productName: 'Vinsent Chase model402'},
//   { imgSrc: womenImage1, productName: 'Vinsent Chase model403'},
//   { imgSrc: womenImage1, productName: 'Vinsent Chase model403'},
  

//   // ... add other product details
// ];

// const Cataloguewomen = () => {
//   return (
//     <div>
//       <main>
//         <h1>MEN</h1>
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


// export default Cataloguewomen;
  






// const CatlogueWoman = () => {
//   return (
    
//     <div>
//       <main> 
//       <h1>WOMEN</h1> 
//          <div id="wrap" class="oe_structure oe_empty"><section class="s_text_block pt40 pb0 o_colored_level" data-snippet="s_text_block" data-name="Text">
//             <div class="container s_allow_columns">
//         </div>
//         </section>
                
                
                
//             <section class="s_product_list o_colored_level" data-snippet="s_product_list" data-name="Items" >
//                     <div class="container-fluid">
//                         <div class="row">
                        
//                             <div class="col-md-4 col-6 o_colored_level o_draggable col-lg-4">
//                                     <img src={womenImage1} 
                                  
//                                     height="50%"
//                                     alt="shallow focus photography of eyeglasses" class="img img-fluid o_we_custom_image" data-mimetype="image/webp" data-original-id="255" data-original-src="/unsplash/GMjmjBi579I/Specs.jpg?unique=f249c4bf" data-mimetype-before-conversion="image/jpeg" data-resize-width="962" loading="lazy"/>
                                    
                                    
                                    
                                
//                                 <div class="s_product_list_item_link">
//                                 John Jacobs<br></br>model1-&nbsp;<br/></div>
//                             </div>
//                             <div class="col-md-4 col-6 o_colored_level col-lg-4">
//                                 <a href="" data-bs-original-title="" title="">
//                                     <img src={womenImage2} alt="shallow focus photography of eyeglasses" class="img img-fluid o_we_custom_image" data-mimetype="image/webp" data-original-id="255" data-original-src="/unsplash/GMjmjBi579I/Specs.jpg?unique=f249c4bf" data-mimetype-before-conversion="image/jpeg" data-resize-width="962" loading="lazy"/>
//                                 </a>
//                                 <div class="s_product_list_item_link">
//                                 John Jacobs<br></br>mode201-<br/>-&nbsp;<br/></div>
//                             </div>
//                             <div class="col-md-4 col-6 o_colored_level o_draggable col-lg-4">
//                                 <a href="" data-bs-original-title="" title="">
//                                     <img src={womenImage3} alt="shallow focus photography of eyeglasses" class="img img-fluid o_we_custom_image" data-mimetype="image/webp" data-original-id="255" data-original-src="/unsplash/GMjmjBi579I/Specs.jpg?unique=f249c4bf" data-mimetype-before-conversion="image/jpeg" data-resize-width="962" loading="lazy"/>
//                                 </a>
//                                 <div class="s_product_list_item_link">
//                                 John Jacobs<br></br>mode202<br/>&nbsp;<br/></div>
//                             </div>
//                             <div class="col-md-4 col-6 o_colored_level col-lg-4">
//                                 <a href="" data-bs-original-title="" title="">
//                                     <img src={womenImage4} alt="shallow focus photography of eyeglasses" class="img img-fluid o_we_custom_image" data-mimetype="image/webp" data-original-id="255" data-original-src="/unsplash/GMjmjBi579I/Specs.jpg?unique=f249c4bf" data-mimetype-before-conversion="image/jpeg" data-resize-width="962" loading="lazy"/>
//                                 </a>
//                                 <div class="s_product_list_item_link">
//                                 John Jacobs<br></br>model203<br/>-&nbsp;<br/></div>
//                             </div>
//                             <div class="col-md-4 col-6 o_colored_level col-lg-4">
//                                 <a href="" data-bs-original-title="" title="">
//                                     <img src={womenImage5} alt="shallow focus photography of eyeglasses" class="img img-fluid o_we_custom_image" data-mimetype="image/webp" data-original-id="255" data-original-src="/unsplash/GMjmjBi579I/Specs.jpg?unique=f249c4bf" data-mimetype-before-conversion="image/jpeg" data-resize-width="962" loading="lazy"/>
//                                 </a>
//                                 <div class="s_product_list_item_link">
//                                 John Jacobs<br></br>model204<br/>-&nbsp;<br/></div>
//                             </div>
//                             <div class="col-md-4 col-6 o_colored_level col-lg-4">
//                                 <a href="" data-bs-original-title="" title="">
//                                     <img src={womenImage6} alt="shallow focus photography of eyeglasses" class="img img-fluid o_we_custom_image" data-mimetype="image/webp" data-original-id="255" data-original-src="/unsplash/GMjmjBi579I/Specs.jpg?unique=f249c4bf" data-mimetype-before-conversion="image/jpeg" data-resize-width="962" loading="lazy"/>
//                                 </a>
//                                 <div class="s_product_list_item_link">
//                                 John Jacobs<br></br>model205<br/>-&nbsp;<br/></div>
//                             </div>
//                         </div>
//                     </div>
//                 </section><section class="s_product_list o_colored_level" data-snippet="s_product_list" data-name="Items">
//                     <div class="container-fluid">
//                         <div class="row">
//                             <div class="col-md-4 col-6 o_colored_level col-lg-4">
                                
//                                     <img src={womenImage7} alt="shallow focus photography of eyeglasses" class="img img-fluid o_we_custom_image" data-mimetype="image/webp" data-original-id="255" data-original-src="/unsplash/GMjmjBi579I/Specs.jpg?unique=f249c4bf" data-mimetype-before-conversion="image/jpeg" data-resize-width="962" loading="lazy" data-quality="81"/>
                                
//                                 <div class="s_product_list_item_link">
//                                 John Jacobs<br></br>model206<br/>-&nbsp;<br/></div>
//                             </div>
//                             <div class="col-md-4 col-6 o_colored_level col-lg-4">
//                                 <a href="" data-bs-original-title="" title="">
//                                     <img src={womenImage8} alt="shallow focus photography of eyeglasses" class="img img-fluid o_we_custom_image" data-mimetype="image/webp" data-original-id="255" data-original-src="/unsplash/GMjmjBi579I/Specs.jpg?unique=f249c4bf" data-mimetype-before-conversion="image/jpeg" data-resize-width="962" loading="lazy"/>
//                                 </a>
//                                 <div class="s_product_list_item_link">
//                                 John Jacobs<br></br>model207<br/>-&nbsp;<br/></div>
//                             </div>
//                             <div class="col-md-4 col-6 o_colored_level o_draggable col-lg-4">
//                                 <a href="" data-bs-original-title="" title="">
//                                     <img src={womenImage9} alt="shallow focus photography of eyeglasses" class="img img-fluid o_we_custom_image" data-mimetype="image/webp" data-original-id="255" data-original-src="/unsplash/GMjmjBi579I/Specs.jpg?unique=f249c4bf" data-mimetype-before-conversion="image/jpeg" data-resize-width="962" loading="lazy"/>
//                                 </a>
//                                 <div class="s_product_list_item_link">
//                                 John Jacobs<br></br> model208<br/>-&nbsp;<br/></div>
//                             </div>
//                             <div class="col-md-4 col-6 o_colored_level col-lg-4">
//                                 <a href="" data-bs-original-title="" title="">
//                                     <img src={womenImage10} alt="shallow focus photography of eyeglasses" class="img img-fluid o_we_custom_image" data-mimetype="image/webp" data-original-id="255" data-original-src="/unsplash/GMjmjBi579I/Specs.jpg?unique=f249c4bf" data-mimetype-before-conversion="image/jpeg" data-resize-width="962" loading="lazy"/>
//                                 </a>
//                                 <div class="s_product_list_item_link">
//                                 John Jacobs<br></br> model209<br/>-&nbsp;<br/></div>
//                             </div>
//                             <div class="col-md-4 col-6 o_colored_level col-lg-4">
//                                 <a href="" data-bs-original-title="" title="">
//                                 <br></br><img src={womenImage11} alt="shallow focus photography of eyeglasses" class="img img-fluid o_we_custom_image" data-mimetype="image/webp" data-original-id="255" data-original-src="/unsplash/GMjmjBi579I/Specs.jpg?unique=f249c4bf" data-mimetype-before-conversion="image/jpeg" data-resize-width="962" loading="lazy"/>
//                                 </a>
//                                 <div class="s_product_list_item_link">
//                                 John Jacobs<br></br>model210<br/>-&nbsp;<br/></div>
//                             </div>
//                             <div class="col-md-4 col-6 o_colored_level col-lg-4">
//                                 <a href="" data-bs-original-title="" title="">
//                                     <img src={womenImage12} alt="shallow focus photography of eyeglasses" class="img img-fluid o_we_custom_image" data-mimetype="image/webp" data-original-id="255" data-original-src="/unsplash/GMjmjBi579I/Specs.jpg?unique=f249c4bf" data-mimetype-before-conversion="image/jpeg" data-resize-width="962" loading="lazy"/>
//                                 </a>
//                                 <div class="s_product_list_item_link">
//                                 John Jacobs<br></br>model211<br/>-&nbsp;<br/></div>
//                             </div>
//                         </div>
//                     </div>
//                 </section></div>
                
//                     <div id="o_shared_blocks" class="oe_unremovable"></div>
//                             </main>
                        

// </div>

//   );
// };






// const Cataloguewomen = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
    // Replace with your Firebase project configuration
    // const firebaseConfig = {
    //     apiKey: "AIzaSyCcTESg0v515MWZ0fPq9dine9s7o_YCB_o",
    //     authDomain: "opticsproject-df2d7.firebaseapp.com",
    //     databaseURL: "https://opticsproject-df2d7-default-rtdb.firebaseio.com",
    //     projectId: "opticsproject-df2d7",
    //     storageBucket: "opticsproject-df2d7.appspot.com",
    //     messagingSenderId: "518230967384",
    //     appId: "1:518230967384:web:410f55765f0bd9e4dc362d"
    // };

    // // Initialize Firebase
    // if (!firebase.apps.length) {
    //   firebase.initializeApp(firebaseConfig);
    // }

    // Reference to the 'products' collection in Firestore
//     const productsCollection = firebaseConfig.firestore().collection('products');

//     // Fetch products from Firestore
//     const fetchProducts = async () => {
//       try {
//         const snapshot = await productsCollection.get();
//         const fetchedProducts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     // Fetch products when the component mounts
//     fetchProducts();

//     // Clean up any Firebase listeners when the component unmounts
//     return () => {};
//   }, []);

//   return (
//     <div>
//       <main>
//         <h1>WOMEN</h1>
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
//                       src={product.imgSrc || womenImage1}
//                       alt="Product"
//                       className="img img-fluid o_we_custom_image"
//                       loading="lazy"
//                     />
//                   </a>
//                   <div className="s_product_list_item_link">
//                     {product.productName || 'Product Name'}
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

// export default Cataloguewomen;






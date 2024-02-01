// import React from 'react';
// import logo from './assets/logo512.png';
// import { useState, useEffect, useRef } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import firebaseConfig from './firbaseConfig';
// import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore';
// import { initializeApp } from 'firebase/app';
// import 'firebase/auth'; // Add any other Firebase services you need
// import womenImage1 from './assets/WomenCatlogue/Women1.jpg';
// import 'firebase/storage';
// import products from './Product';
// import 'bootstrap/dist/css/bootstrap.min.css';

  


// const Catalogue = () => {
//   const [catalogueData, setCatalogueData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const app = initializeApp(firebaseConfig);
//         const db = getFirestore(app);
//         const productsCollection = collection(db, 'products');

//         const querySnapshot = await getDocs(productsCollection);

//         const productsData = querySnapshot.docs
//           .filter((doc) => doc.data().gender === 'men') // Filter by gender field
//           .map((doc) => doc.data());

//         setCatalogueData(productsData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <main>
//         <h1>MEN</h1>

//         <section className="s_product_list o_colored_level" data-snippet="s_product_list" data-name="Items">
//           <div className="container-fluid">
//             <div className="row">
//               {catalogueData.map((product, index) => (
//                 <div key={index} className="col-md-4 col-6 o_colored_level col-lg-4">
//                 <a href="" data-bs-original-title="" title="">
//                   <img
//                     src={product.imageUrls || " "}
//                     alt="Product"
//                     className="img img-fluid o_we_custom_image"
//                     loading="lazy"
//                     style={{objectFit: 'cover',width:'50%',height:'50%'}}
//                   />
//                 </a>
//                 <div className="s_product_list_item_link">
//                   <p>Name: {product.name || 'N/A'}</p>
//                   <p>Model No: {product.modelno || 'N/A'}</p>
//                 </div>
//               </div>
              
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       </div>
//   );
// };

// export default Catalogue;
  
  
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './firbaseConfig';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import 'firebase/auth'; // Add any other Firebase services you need
import womenImage1 from './assets/WomenCatlogue/Women1.jpg';
import products from './Product';

const Catalogue = () => {
  const [catalogueData, setCatalogueData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const productsCollection = collection(db, 'products');

        const querySnapshot = await getDocs(productsCollection);

        const productsData = querySnapshot.docs
          .filter((doc) => doc.data().gender === 'men') // Filter by gender field
          .map((doc) => doc.data());

        setCatalogueData(productsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <main>
        <h1>MEN</h1>

        <section className="s_product_list o_colored_level" data-snippet="s_product_list" data-name="Items">
          <div className="container-fluid">
            <div className="row">
              {catalogueData.map((product, index) => (
                <div key={index} className="col-md-4 col-6 o_colored_level col-lg-4">
                  <a href="#" onClick={() => handleImageClick(product)}>
                    <img
                      src={product.imageUrls || " "}
                      alt="Product"
                      className="img img-fluid o_we_custom_image"
                      loading="lazy"
                      style={{ objectFit: 'cover', width: '50%', height: '50%' }}
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

      {/* Modal for Enlarged Image */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <img
              src={selectedProduct.imageUrls || " "}
              alt="Product"
              className="img img-fluid"
              style={{ width: '500px', height: '300px' }}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Catalogue;

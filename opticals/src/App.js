// // App.js
// import React, {useEffect, useState } from 'react';
// import HomePage from './home';
// import Footer from './footer';
// import About from './Aboutus';
// import Navbar from './nav';
// import Contact from './contact';
// import {Route, Routes } from 'react-router-dom';
// // import { firebase, database } from './Firebase';
// import ImageRow from './Product';

// const Products = () => (
//   <div>
//     <ImageRow/>
//   </div>
// );


// const Catalogue = () => (
// <div>
//     <Catalogue />
//   </div>
// );
// const App = () => {
//   // const [items, setItems] = useState([]);

//   // useEffect(() => {
//   //   const fetchItems = async () => {
//   //     try {
//   //       // Assuming you have a "items" node in your database
//   //       const snapshot = await database.ref('items').once('value');
//   //       const data = snapshot.val();

//   //       if (data) {
//   //         // Convert data object to an array of items
//   //         const itemsArray = Object.keys(data).map((key) => ({
//   //           id: key,
//   //           ...data[key],
//   //         }));

//   //         setItems(itemsArray);
//   //       }
//   //     } catch (error) {
//   //       console.error('Error fetching items:', error);
//   //     }
//   //   };

//   //   fetchItems();
//   // }, []);


//   return (
    
//       <div>
//          <Navbar />
//       <Routes>
//         <Route path='/aboutus' element={<About/> } />
//         <Route path='/contact' element={<Contact />} /> 
//         <Route path='/home' element= {<HomePage /> } />
//         <Route path='/Product' element={<Products />} />
//       </Routes>
       
//         <Footer />
        
//       </div>
    
//   );
// };

// export default App;

import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore'; 
import 'firebase/storage';
import Navbar from './nav';
import ImageRow from './Image_row';
import Footer from './footer';
import About from './Aboutus';
import Contact from './contact';
import HomePage from './home';
import { Route, Routes } from 'react-router-dom';
import firebaseConfig from './firbaseConfig';
import Posters from './posters';
import Products from './Product';
import Catlogue from './Catlogue';


// const Products = ({ products }) => (
//   <div>
//     <ImageRow products={products} />
//   </div>
// );
const Catalogue = () => (
  <div>
    <Catalogue />
  </div>
)

const App = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // Firebase configuration
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyCcTESg0v515MWZ0fPq9dine9s7o_YCB_o",
  // authDomain: "opticsproject-df2d7.firebaseapp.com",
  // databaseURL: "https://opticsproject-df2d7-default-rtdb.firebaseio.com",
  // projectId: "opticsproject-df2d7",
  // storageBucket: "opticsproject-df2d7.appspot.com",
  // messagingSenderId: "518230967384",
  // appId: "1:518230967384:web:410f55765f0bd9e4dc362d"
  //   };

  //   // Initialize Firebase
  //   const app = initializeApp(firebaseConfig);

  //   // Reference to the Firebase database collection
  //   const db = getFirestore(app);
  //   const productsCollection = collection(db, 'advertisement');

  //   // Fetch products from Firebase Firestore
  //   const fetchProducts = async () => {
  //     try {
  //       const snapshot = await getDocs(productsCollection);
  //       const productsData = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setProducts(productsData);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   fetchProducts();
  // }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/aboutus' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/Catalogue' element={<Catlogue />} />
        <Route path='/Product' element={<Products />} /> 
      </Routes>
     
      <Footer />
    </div>
  );
};

export default App;

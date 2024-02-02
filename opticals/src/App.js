import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore'; 
import 'firebase/storage';
import Navbar from './nav';
import ImageRow from './Image_row';

import About from './Aboutus';
import Contact from './contact';
import HomePage from './home';
import { Route, Routes } from 'react-router-dom';
import firebaseConfig from './firbaseConfig';
import Posters from './posters';
import Products from './Product';
import Catlogue from './Catlogue';
import Sunglass from './sunglasses';
import Footer from './footer';


// const Products = ({ products }) => (
//   <div>
//     <ImageRow products={products} />
//   </div>
// );
// const Catalogue = () => (
//   <div>
//     <Catalogue />
//   </div>
// )

const App = () => {
 
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<Products />} />
        <Route path='/' element={<Sunglass />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/Catalogue' element={<Catlogue />} />
        <Route path='/Product' element={<Products />} /> 
        <Route path='/sunglasses' element={<Sunglass />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

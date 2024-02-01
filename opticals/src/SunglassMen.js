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



const SunglassMen = () => {
    const [sunglassmenData, setSunglassMenData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const app = initializeApp(firebaseConfig);
          const db = getFirestore(app);
          const sunglassesCollection = collection(db, 'sunglasses');
  
          const querySnapshot = await getDocs(sunglassesCollection);
  
          const sunglassesData = querySnapshot.docs
            .filter((doc) => doc.data().gender === 'men') // Filter by gender field
            .map((doc) => doc.data());
  
          setSunglassMenData(sunglassesData);
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
        <h1>Men</h1>

        <section className="s_product_list o_colored_level" data-snippet="s_product_list" data-name="Items">
          <div className="container-fluid">
            <div className="row">
              {sunglassmenData.map((sunglass, index) => (
                <div key={index} className="col-md-4 col-6 o_colored_level col-lg-4">
                
                  <img
                    src={sunglass.imageUrls || " "}
                    alt="Product"
                    className="img img-fluid o_we_custom_image"
                    loading="lazy"
                    style={{objectFit: 'cover',width:'50%',height:'50%'}}
                  />
                
                <div className="s_product_list_item_link">
                  <p>Name: {sunglass.name || 'N/A'}</p>
                  <p>Model No: {sunglass.modelno || 'N/A'}</p>
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

export default SunglassMen;

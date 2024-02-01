import React, { useState,useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './firbaseConfig';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

const SunglassAll = () => {
  const [sunglassallData, setSunglassAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedSunglass, setSelectedSunglass] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const sunglassesCollection = collection(db, 'sunglasses');

        const querySnapshot = await getDocs(sunglassesCollection);

        const sunglassesData = querySnapshot.docs.map((doc) => doc.data());

        setSunglassAllData(sunglassesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (sunglass) => {
    setSelectedSunglass(sunglass);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSunglass(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <main>
        <h1>All</h1>

        <section className="s_product_list o_colored_level" data-snippet="s_product_list" data-name="Items">
          <div className="container-fluid">
            <div className="row">
              {sunglassallData.map((sunglass, index) => (
                <div key={index} className="col-md-4 col-6 o_colored_level col-lg-4">
                  <a href="#" onClick={() => handleImageClick(sunglass)}>
                    <img
                      src={sunglass.imageUrls || " "}
                      alt="Product"
                      className="img img-fluid o_we_custom_image"
                      loading="lazy"
                      style={{ objectFit: 'cover', width: '50%', height: '50%' }}
                    />
                  </a>
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

      {/* Modal for Enlarged Image */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          {selectedSunglass && (
            <img
              src={selectedSunglass.imageUrls || " "}
              alt="Product"
              className="img img-fluid"
              style={{ width: '500px', height: '300px' }}
            />
          )}
        </Modal.Body>
        
      </Modal>
    </div>
  );
};

export default SunglassAll;

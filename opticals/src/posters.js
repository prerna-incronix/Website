

// Posters.js

import React, { useRef, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import 'firebase/storage';
import './poster.css';
import firebaseConfig from './firbaseConfig';

const Posters = () => {
  const postersContainerRef = useRef(null);
  const posterWidth = window.innerWidth;
  const [postersData, setPostersData] = useState([]);
  const [currentPoster, setCurrentPoster] = useState(0);

  useEffect(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Reference to the Firebase database collection
    const db = getFirestore(app);
    const advertisementCollection = collection(db, 'students');

    // Fetch posters from Firebase Firestore
    const fetchPosters = async () => {
      try {
        const snapshot = await getDocs(advertisementCollection);
        const posters = snapshot.docs.map((doc) => doc.data().ImageURL);
        setPostersData(posters);
        console.log('Uploading Images')
        // Preload images into browser cache
        posters.forEach((poster) => {
          const img = new Image();
          img.src = poster;
        });
        console.log('Images fetched from cache memory')
      } catch (error) {
        console.error('Error fetching posters:', error);
      }
    };

    fetchPosters();
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (postersContainerRef.current) {
        setCurrentPoster((prevPoster) => (prevPoster + 1) % postersData.length);
        postersContainerRef.current.scrollLeft = posterWidth * currentPoster;
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [posterWidth, postersData.length, currentPoster]);

  const postersContainerStyle = {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  };

  const posterStyle = {
    position: 'relative',
    flex: '0 0 auto',
    minWidth: '100%',
    height: '70vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // filter: 'brightness(70%)',
  };

  const textContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#ffff',
    zIndex: 1,
    
  };

  return (
    <div className="posters-container" style={postersContainerStyle} ref={postersContainerRef}>
      {postersData.map((poster, index) => (
        <div
          key={index}
          className="poster"
          style={{
            ...posterStyle,
            backgroundImage: `url(${poster})`,
            display: index === currentPoster ? 'block' : 'none',
          }}
        >
          
        </div>
      ))}
    </div>
  );
};

export default Posters;


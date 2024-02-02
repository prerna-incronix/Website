// // Posters.js
// import React, { useRef, useEffect, useState } from 'react';
// import './poster.css';
// import poster1 from './assets/poster1.jpg';
// import poster2 from './assets/poster2.jpg';
// import poster3 from './assets/poster3.jpg';
// import firebaseConfig from './firebaseConfig';

// const postersData = [poster1, poster2, poster3];

// const Posters = () => {
//   const postersContainerRef = useRef(null);
//   const posterWidth = window.innerWidth;
//   const postersCount = postersData.length;
//   const [currentPoster, setCurrentPoster] = useState(0);

//   useEffect(() => {
//     const scrollInterval = setInterval(() => {
//       if (postersContainerRef.current) {
//         setCurrentPoster((prevPoster) => (prevPoster + 1) % postersCount);
//         postersContainerRef.current.scrollLeft = posterWidth * currentPoster;
//       }
//     }, 3000); // Adjust the duration as needed

//     return () => clearInterval(scrollInterval);
//   }, [posterWidth, postersCount, currentPoster]);

//   const postersContainerStyle = {
//     display: 'flex',
//     overflow: 'hidden', // Hide the scrollbar
//     position: 'relative',
//     width: '100%',
//   };

//   const posterStyle = {
//     position: 'relative', // Added relative positioning
//     flex: '0 0 auto',
//     minWidth: '100%',
//     height: '100vh',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     filter: 'brightness(70%)',
//   };

//   const textContainerStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     textAlign: 'center',
//     color: '#fff',
//     zIndex: 1, // Ensure the text is above the posters
//   };

//   return (
//     <div className="posters-container" style={postersContainerStyle} ref={postersContainerRef}>
//       {postersData.map((poster, index) => (
//         <div
//           key={index}
//           className="poster"
//           style={{
//             ...posterStyle,
//             backgroundImage: `url(${poster})`,
//             display: index === currentPoster ? 'block' : 'none',
//           }}
//         >
//           <div style={textContainerStyle}>
//             <h1>Welcome to Your Optics Website</h1>
//             <p>Shaping the future of eyewear</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Posters;






// // import React, { useRef, useEffect, useState } from 'react';
// // import { initializeApp } from 'firebase/app';
// // import { getFirestore, collection, getDocs } from 'firebase/firestore';
// // import 'firebase/storage';
// // import './poster.css';

// // const Posters = () => {
// //   const postersContainerRef = useRef(null);
// //   const posterWidth = window.innerWidth;
// //   const [postersData, setPostersData] = useState([]);
// //   const [currentPoster, setCurrentPoster] = useState(0);

// //   useEffect(() => {
// //     // Firebase configuration
// //     const firebaseConfig = {
// //       apiKey: "AIzaSyCcTESg0v515MWZ0fPq9dine9s7o_YCB_o",
// //       authDomain: "opticsproject-df2d7.firebaseapp.com",
// //       databaseURL: "https://opticsproject-df2d7-default-rtdb.firebaseio.com",
// //       projectId: "opticsproject-df2d7",
// //       storageBucket: "gs://opticsproject-df2d7.appspot.com/advertisement",
// //       messagingSenderId: "518230967384",
// //       appId: "1:518230967384:web:410f55765f0bd9e4dc362d"
// //     };

// //     // Initialize Firebase
// //     const app = initializeApp(firebaseConfig);

// //     // Reference to the Firebase database collection
// //     const db = getFirestore(app);
// //     const advertisementCollection = collection(db, 'advertisement');

// //     // Fetch posters from Firebase Firestore
// //     const fetchPosters = async () => {
// //       try {
// //         const snapshot = await getDocs(advertisementCollection);
// //         const posters = snapshot.docs.map((doc) => doc.data().imagePaths[0]); // Assuming 'imagePaths' is an array of image URLs
// //         setPostersData(posters);
// //       } catch (error) {
// //         console.error('Error fetching posters:', error);
// //       }
// //     };

// //     fetchPosters();
// //   }, []);

// //   useEffect(() => {
// //     const scrollInterval = setInterval(() => {
// //       if (postersContainerRef.current) {
// //         setCurrentPoster((prevPoster) => (prevPoster + 1) % postersData.length);
// //         postersContainerRef.current.scrollLeft = posterWidth * currentPoster;
// //       }
// //     }, 3000); // Adjust the duration as needed

// //     return () => clearInterval(scrollInterval);
// //   }, [posterWidth, postersData.length, currentPoster]);

// //   const postersContainerStyle = {
// //     display: 'flex',
// //     overflow: 'hidden', // Hide the scrollbar
// //     position: 'relative',
// //     width: '100%',
// //   };

// //   const posterStyle = {
// //     position: 'relative', // Added relative positioning
// //     flex: '0 0 auto',
// //     minWidth: '100%',
// //     height: '100vh',
// //     backgroundSize: 'cover',
// //     backgroundPosition: 'center',
// //     filter: 'brightness(70%)',
// //   };

// //   const textContainerStyle = {
// //     position: 'absolute',
// //     top: '50%',
// //     left: '50%',
// //     transform: 'translate(-50%, -50%)',
// //     textAlign: 'center',
// //     color: '#fff',
// //     zIndex: 1, // Ensure the text is above the posters
// //   };

// //   return (
// //     <div className="posters-container" style={postersContainerStyle} ref={postersContainerRef}>
// //       {postersData.map((poster, index) => (
// //         <div
// //           key={index}
// //           className="poster"
// //           style={{
// //             ...posterStyle,
// //             backgroundImage: `url(${poster})`,
// //             display: index === currentPoster ? 'block' : 'none',
// //           }}
// //         >
// //           <div style={textContainerStyle}>
// //             <h1>Welcome to Your Optics Website</h1>
// //             <p>Shaping the future of eyewear</p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Posters;

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
    height: '100vh',
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


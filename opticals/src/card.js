// import React from 'react';
// import './card.css';

// function Card({title,imgUrl}) {

    
//   return (
//     <div className='card-page-div'>
//     {/* {data.map((item)=>( */}
//      <div className='card-container'> {/*key={item.id} }*/}
//         <div className='card-img-container'>
//             <img src={imgUrl} alt='img'/>
//         </div>
//         <div className='card-content'>
//             <div className='card-title'>
//                 <h3>{title}</h3>
//                 <hr></hr>
//             </div>
            
//             {/* <div className='card-btn'>
//             <button>
//                 <p>Read more</p>
//             </button>
//         </div> */}
//         </div>
        
        
//     </div>
//     {/*))}*/}
//     </div>
//   )
// }

// export default Card

// Card.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const Card = ({ title, imgUrl }) => {
  return (
    <div className='card-page-div'>
      <div className='card-container'>
        <div className='card-img-container'>
          <img src={imgUrl} alt='img' />
          <div className='card-title-overlay'>
            <h3>{title}</h3>
            <hr></hr>
          </div>
        </div>
        <div className='card-content'>
          {/* Other content */}
        
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default Card;

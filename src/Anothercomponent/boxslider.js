import React from 'react';

// Import images
import box1 from '../assets/box1-1.jpg';
import box2 from '../assets/box1-2.jpg';
import box3 from '../assets/box1-3.jpg';
import box4 from '../assets/box1-4.jpg';
import box5 from '../assets/box2-1.jpg';
import box6 from '../assets/box2-2.jpg';
import box7 from '../assets/box2-3.jpg';
import box8 from '../assets/box2-4.jpg';

// Define box data
const boxData = [
  { title: 'Box 1', imgSrc: box1 },
  { title: 'Box 2', imgSrc: box2 },
  { title: 'Box 3', imgSrc: box3 },
  { title: 'Box 4', imgSrc: box4 },
  { title: 'Box 5', imgSrc: box5 },
  { title: 'Box 6', imgSrc: box6 },
  { title: 'Box 7', imgSrc: box7 },
  { title: 'Box 8', imgSrc: box8 },
];

const BoxRow = () => {
  return (
    <div className="box-row">
      {boxData.map((box, index) => (
        <div className="box-col" key={index}>
          <h3>{box.title}</h3>
          <img src={box.imgSrc} alt={box.title} />
          <a href="/">Shop More</a>
        </div>
      ))}
    </div>
  );
};

export default BoxRow;

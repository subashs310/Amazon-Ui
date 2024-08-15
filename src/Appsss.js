// src/App.js
import React from 'react';
import Nav from '../src/Anothercomponent/nav';
import HeaderSlider from '../src/Anothercomponent/headerslider';
import BoxRow from '../src/Anothercomponent/boxslider';
import ProductsSlider from '../src/Anothercomponent/productslider';
import Footer from '../src/Anothercomponent/flooter';
import './stylessss.css';

// Import images
import box1_1 from './assets/box1-1.jpg';
import box1_2 from './assets/box1-2.jpg';
import box1_3 from './assets/box1-3.jpg';
import box1_4 from './assets/box1-4.jpg';
import box2_1 from './assets/box2-1.jpg';
import box2_2 from './assets/box2-2.jpg';
import box2_3 from './assets/box2-3.jpg';
import box2_4 from './assets/box2-4.jpg';
import product1_1 from './assets/product1-1.jpg';
import product1_2 from './assets/product1-2.jpg';
import product1_3 from './assets/product1-3.jpg';
import product1_4 from './assets/product1-4.jpg';
import product1_5 from './assets/product1-5.jpg';
import product1_6 from './assets/product1-6.jpg';
import product1_7 from './assets/product1-7.jpg';
import product1_8 from './assets/product1-8.jpg';
import product1_9 from './assets/product1-9.jpg';
import product1_10 from './assets/product1-10.jpg';
import product2_1 from './assets/product2-1.jpg';
import product2_2 from './assets/product2-2.jpg';
import product2_3 from './assets/product2-3.jpg';
import product2_4 from './assets/product2-4.jpg';
import product2_5 from './assets/product2-5.jpg';
import product2_6 from './assets/product2-6.jpg';
import product2_7 from './assets/product2-7.jpg';
import product2_8 from './assets/product2-8.jpg';
import product2_9 from './assets/product2-9.jpg';
import product2_10 from './assets/product2-10.jpg';
import product2_11 from './assets/product2-11.jpg';

const App = () => {
  return (
    <div>
      <Nav />
      <HeaderSlider />
      <BoxRow
        boxes={[
          { title: 'Free international returns', imgSrc: box1_1 },
          { title: 'Lunar New Year', imgSrc: box1_2 },
          { title: 'Toy under $25', imgSrc: box1_3 },
          { title: 'Deals in PCs', imgSrc: box1_4 },
        ]}
      />
      <BoxRow
        boxes={[
          { title: 'Grooming Products', imgSrc: box2_1 },
          { title: 'Latest Devices', imgSrc: box2_2 },
          { title: 'Pets Food', imgSrc: box2_3 },
          { title: 'Fashion Mart', imgSrc: box2_4 },
        ]}
      />
      <ProductsSlider
        title="Best Sellers in Sports & Outdoors"
        images={[
          product1_1,
          product1_2,
          product1_3,
          product1_4,
          product1_5,
          product1_6,
          product1_7,
          product1_8,
          product1_9,
          product1_10,
        ]}
      />
      <ProductsSlider
        title="Deals Under ₹ 250"
        products={[
          { imgSrc: product2_1, price: '114.49', listPrice: '190.95', offer: '27% off', description: 'This product is the best for you' },
          { imgSrc: product2_2, price: '214.49', listPrice: '290.95', offer: '27% off', description: 'This product is the best for you' },
          { imgSrc: product2_3, price: '134.49', listPrice: '190.95', offer: '27% off', description: 'This product is the best for you' },
          { imgSrc: product2_4, price: '124.49', listPrice: '199.95', offer: '27% off', description: 'This product is the best for you' },
          { imgSrc: product2_5, price: '140.49', listPrice: '200.95', offer: '27% off', description: 'This product is the best for you' },
          { imgSrc: product2_6, price: '184.49', listPrice: '230.95', offer: '27% off', description: 'This product is the best for you' },
          { imgSrc: product2_7, price: '214.49', listPrice: '250.95', offer: '27% off', description: 'This product is the best for you' },
          { imgSrc: product2_8, price: '114.49', listPrice: '190.95', offer: '27% off', description: 'This product is the best for you' },
          { imgSrc: product2_9, price: '194.49', listPrice: '250.95', offer: '27% off', description: 'This product is the best for you' },
          { imgSrc: product2_10, price: '174.49', listPrice: '230.95', offer: '27% off', description: 'This product is the best for you' },
          { imgSrc: product2_11, price: '114.49', listPrice: '196.95', offer: '27% off', description: 'This product is the best for you' },
        ]}
      />
      <Footer />
    </div>
  );
};

export default App;

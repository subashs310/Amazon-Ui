import React from 'react';
import Nav from '../src/newcomponent/nav';
import HeaderSlider from '../src/newcomponent/Headerslider';
import ProductSection from '../src/newcomponent/products';
import Footer from '../src/newcomponent/footer';

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

function App() {
  return (
    <div className="App">
        <h1>hkjfhaslkjfhs</h1>
      <Nav />
      <HeaderSlider />
      <ProductSection title="Best Sellers in Sports & Outdoors" images={productImages1} />
      <ProductSection title="Deals Under $25" images={productImages2} />
      <ProductSection />
      <Footer />
    </div>
  );
}

const productImages1 = [
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
];

const productImages2 = [
  product2_1,
  product2_2,
  product2_3,
  product2_4,
  product2_5,
  product2_6,
  product2_7,
  product2_8,
  product2_9,
  product2_10,
  product2_11,
];

export default App;

import React from 'react';
const ProductsSlider = ({ title, images = [], products = [] }) => {
  return (
    <div className="products-slider">
      <h2>{title}</h2>
      <div className="products">
        {products.length > 0
          ? products.map((product, index) => (
              <div className="product-card" key={index}>
                <div className="product-img-container">
                  <img src={product.imgSrc} alt={`Product ${index + 1}`} />
                </div>
                <div className="product-offer">
                  <p>{product.offer}</p> <span>Deal</span>
                </div>
                <p className="product-price">₹ <span>{product.price}</span> List Price:₹{product.listPrice}</p>
                <h4>{product.description}</h4>
              </div>
            ))
          : images.map((image, index) => (
              <img src={image} alt={`Product ${index + 1}`} key={index} />
            ))}
      </div>
    </div>
  );
};

export default ProductsSlider;

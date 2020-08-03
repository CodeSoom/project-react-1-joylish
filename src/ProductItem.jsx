import React from 'react';

function ProductItem({ item }) {
  const {
    name, sellerName, price, minBuyNumber, imageUrl,
  } = item;

  return (
    <div className="productItem">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="productInfo">
        <span className="name">{name}</span>
        <span className="sellerName">{sellerName}</span>
        <span className="Price">{price}</span>
        <span className="minBuyNumber">{minBuyNumber}</span>
      </div>
    </div>
  );
}

export default ProductItem;

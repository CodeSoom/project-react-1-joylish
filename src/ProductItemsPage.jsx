import React from 'react';

import ProductItem from './ProductItem';

function ProductItemsPage({ product }) {
  const { title, productItems } = product;

  return (
    <div className="productPage">
      <h2>{title}</h2>
      <div className="productItems">
        {
          productItems.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
}

export default ProductItemsPage;

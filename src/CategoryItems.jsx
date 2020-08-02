import React from 'react';

import CategoryItem from './CategoryItem';

import categories from '../fixtures/categories';

import CategoryItemsContainer from './style/CategoryItemsContainer';

function CategoryItems() {
  return (
    <CategoryItemsContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoryItemsContainer>
  );
}

export default CategoryItems;

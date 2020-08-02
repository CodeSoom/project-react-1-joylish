import React from 'react';

import { withRouter } from 'react-router-dom';

import CategoryItemContainer from './style/CategoryItemContainer';

function CategoryItem({
  category, history, match,
}) {
  const { title, imageUrl, linkUrl } = category;
  return (
    <CategoryItemContainer
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
      </div>
    </CategoryItemContainer>
  );
}

export default withRouter(CategoryItem);

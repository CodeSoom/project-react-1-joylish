import React from 'react';

import { Link } from 'react-router-dom';

import HeaderContainer from './style/HeaderContainer';

export default function Header() {
  return (
    <HeaderContainer>
      <Link className="logoContainer" to="/">
        <div className="logo" style={{ backgroundImage: 'url(src/assets/images/logo.JPG)' }} />
      </Link>
      <div className="options">
        <Link className="option" to="/login">
          로그인
        </Link>
        <Link className="option" to="/cart">
          관심상품
        </Link>
      </div>
    </HeaderContainer>
  );
}

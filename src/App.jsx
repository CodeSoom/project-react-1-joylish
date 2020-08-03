import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import CartPage from './CartPage';
import LoginPage from './LoginPage';
import Header from './Header';
import ProductItemsPage from './ProductItemsPage';

import AppContainer from './style/AppContainer';

export default function App() {
  return (
    <AppContainer>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/product/:productId" component={ProductItemsPage} />
        </Switch>
      </div>
    </AppContainer>
  );
}

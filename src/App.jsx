import React, { useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { addToCart, addToProducts, addToOrder, addNewErrorMessage } from './actions/actions';
import { Navbar, Products, Cart, Checkout } from './components';
import { commerce } from './lib/commerce';

const App = ({addToCart, addToProducts}) => {

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    addToProducts(data);
  };

  const fetchCart = async () => {
    const res = await commerce.cart.retrieve()
    addToCart(res);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    addToCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    addToCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    addToCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    addToCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    addToCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      addToOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      addNewErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Products onAddToCart={handleAddToCart} handleUpdateCartQty />
          </Route>
          <Route exact path="/cart">
            <Cart onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout onCaptureCheckout={handleCaptureCheckout} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const mapDispatchToProps = {
  addToCart,
  addToProducts,
  addToOrder,
  addNewErrorMessage
}

export default connect(null, mapDispatchToProps)(App);
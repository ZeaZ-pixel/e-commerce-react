import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import Product from './product/Product'
import useStyles from './styles'


const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

const mapStateToProps = (state) => ({
  products : state.productsReducer.products
});

export default connect(mapStateToProps)(Products);
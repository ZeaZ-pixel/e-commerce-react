import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './product/Product'

const products = [
  {id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cushion-shoes-7659-1584132587.jpg?crop=1.00xw:0.701xh;0,0.229xh&resize=1200:*'},
  {id: 2, name: 'Macbook', description: 'Apple macbook', price: '$10', url: 'https://www.ixbt.com/img/r30/00/02/25/30/Apple16inchMacBookPro111319large.jpg'},
]

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
  </main>
  );

}

export default Products;
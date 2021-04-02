import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const Products = ({products, onAddToCart}) => {
  const classes = useStyles();
  if (!products.length) return <p>Loading...</p>;
  return (
    <main className={classes.content} style={{background: "#465f7d",position: 'fixed',
    padding: '0',
    margin: 'none', top:0,
    left:0,
    }}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4} >
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} >
            <Product product={product} onAddToCart={onAddToCart}  />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

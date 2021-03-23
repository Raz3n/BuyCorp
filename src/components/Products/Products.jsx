import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const inventory = [
  { id: 1, name: "shoes", description: "Running shoes", price: "£30", image: "" },
  { id: 2, name: "Macbook", description: "Apple Macbook", price: "£1,700", image: "" },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {inventory.map((inventoryItem) => (
          <Grid item key={inventoryItem.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={inventoryItem} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

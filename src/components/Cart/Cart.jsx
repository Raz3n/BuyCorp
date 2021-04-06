import React from "react";
import { Container, Typography, Button, Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";

const Cart = ({
  cart,
  onUpdateCartQuantity,
  onRemoveFromCart,
  onEmptyCart,
}) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1" style={{ background: "#465f7d", color: "#f2f4f8" }}>
      You have no items in your shopping cart,
      <Link className={classes.link} to="/">
        <Box fontWeight="fontWeightBold">BUY MORE!</Box>
      </Link>
    </Typography>
  );

  if (!cart.line_items) return "Loading";

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid
            item
            xs={12}
            sm={4}
            key={lineItem.id}
            style={{ background: "#232f3e" }}
          >
            <CartItem
              item={lineItem}
              onUpdateCartQuantity={onUpdateCartQuantity}
              onRemoveFromCart={onRemoveFromCart}
              style={{ background: "#232f3e" }}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container style={{ background: "#465f7d", position:"absolute", left:0, bottom:0, top:0 }}>
      <div className={classes.toolbar} />
      <Typography
        className={classes.title}
        variant="h3"
        gutterBottom
        style={{ color: "#f2f4f8" }}
      >
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;

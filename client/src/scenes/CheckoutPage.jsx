import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import CheckoutForm from '../components/ShoppingCartComponents/CheckoutForm';
import CartSummary from '../components/ShoppingCartComponents/CartSummary';
import Navbar from '../components/HomePage/Navbar';

const CheckoutPage = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <CheckoutForm />
          </Grid>
          <Grid item xs={12} md={4}>
            <CartSummary />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CheckoutPage;

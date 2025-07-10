import { useEffect, useState } from 'react';
import {
  Box, Typography, Button, Card, CardMedia, TextField,
  Grid, Divider, Chip, Paper,
  useTheme,
  Breadcrumbs,
  Link
} from '@mui/material';
import ProductDetailsTabs from './ProductDetailsTab';
import sampleTube from '../../assets/sampletube.jpg';
import { useParams } from 'react-router-dom';
import CustomerReviews from './CustomerReviews';
import { useCart } from '../../hooks/CartContext';

const ProductComponent = () => {
  const { id } = useParams();
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();

  const [makeupQty, setMakeupQty] = useState(1);
  const [balancingQty, setBalancingQty] = useState(0);
  const theme = useTheme();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    if (product && cartItems?.length > 0) {
      const existingItem = cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        setMakeupQty(existingItem.quantity);
      }
    }
  }, [product, cartItems]);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await res.json();
        console.log("Product Details", data);
        setProduct(data)
      } catch (err) {
        console.error("Failed to load product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <Box sx={{ backgroundColor: '#f9f9fd', py: 6 }}>
      <Paper
        elevation={4}
        sx={{
          maxWidth: 1100,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          p: 10,
          borderRadius: 3,
          backgroundColor: theme.palette.background.alt,
          gap: 4
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Stack on small, row on large
            gap: 4,
          }}
        >
          {/* Image Section */}
          <Card
            sx={{
              maxWidth: 400,
              mx: 'auto',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: 6,
              },
            }}
          >
            <CardMedia
              component="img"
              image={product?.imageUrl}
              alt="Flawless Product"
              sx={{
                objectFit: 'contain',
                p: 2,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
          </Card>


          {/* Product Details Section */}
          <Box sx={{ flex: 1 }}>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link underline="hover" color="inherit" href="/">
                {product?.category?.name}
              </Link>
              <Typography color="text.primary">{product?.name}</Typography>
            </Breadcrumbs>

            <Typography variant="h2" mt={1}>
              {product?.name}
            </Typography>

            <Typography variant="h5" color="primary" mt={1}>
              ${product?.price}{' '}
              <Typography component="span" variant="body1" color="text.secondary">
                &nbsp;+ Free Shipping
              </Typography>
            </Typography>

            <Typography variant="body1" mt={2} color="text.secondary">
              {product?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            </Typography>

            {/* <Typography variant="body1" mt={1} color="text.secondary">
              Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum.
            </Typography> */}

            {/* Quantity Selectors */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 3 }}>
              <TextField
                type="number"
                size="small"
                sx={{ width: 100 }}
                InputProps={{ inputProps: { min: 0 } }}
                value={makeupQty}
                onChange={(e) => setMakeupQty(Number(e.target.value))}
              />

              <Button
                variant="outlined"
                sx={{
                  borderColor: "#ff4081",
                  color: "#ff4081",
                  fontWeight: 'bold',
                  py: 1.2,
                  fontSize: "1rem",
                  px: 15,
                  letterSpacing: 1,
                  '&:hover': {
                    borderColor: "#ff4081",
                    backgroundColor: "#fff0f6",
                  },
                }}
                onClick={() => {
                  if (makeupQty === 1) {
                    addToCart(product)
                  } else if (makeupQty>1){
                    addToCart(product)
                    updateQuantity(product.id, makeupQty)
                  } else if (makeupQty === 0) {
                    removeFromCart(product.id);
                  }
                }}
              >
                Add to Cart
              </Button>
            </Box>


            {/* Categories */}
            <Typography variant="body1" mt={2} sx={{ py: 1 }}>
              Skin Concerns:
              {product?.skinConcerns.map((item, index) => (
                <Chip key={item.id || index} label={item.name} size="medium" sx={{ mx: 1 }} />
              ))}
            </Typography>

            {/* Payment Methods */}
            <Divider sx={{ my: 3 }} />
            <Typography variant="body1" color="text.secondary" mb={1}>
              Guaranteed Safe Checkout
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" height={30} />
              <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" height={30} />
              <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" height={30} />
              <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" height={30} />
            </Box>
          </Box>

        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ transition: 'min-height 0.3s ease' }}>
          <ProductDetailsTabs description={product?.description} reviews={product?.reviews} />
        </Box>
        <CustomerReviews />
      </Paper>

    </Box>
  );
};

export default ProductComponent;

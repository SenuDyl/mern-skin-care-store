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

const ProductComponent = () => {
  const { id } = useParams(); 

  const [makeupQty, setMakeupQty] = useState(0);
  const [balancingQty, setBalancingQty] = useState(0);
  const theme = useTheme();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await res.json();
        setProduct(data)
      } catch (err) {
        console.error("Failed to load product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <Box sx={{ backgroundColor: '#f9f9fd', minHeight: '100vh', py: 6 }}>
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
          <Card sx={{ maxWidth: 400, mx: 'auto' }}>
            <CardMedia
              component="img"
              image={sampleTube}
              alt="Flawless Product"
              sx={{ objectFit: 'contain', p: 2 }}
            />
          </Card>

          {/* Product Details Section */}
          <Box sx={{ flex: 1 }}>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link underline="hover" color="inherit" href="/">
                Category
              </Link>
              <Typography color="text.primary">{product.category.name}</Typography>
            </Breadcrumbs>

            <Typography variant="h2" mt={1}>
              {product.name}
            </Typography>

            <Typography variant="h5" color="primary" mt={1}>
              {product.price}{' '}
              <Typography component="span" variant="body1" color="text.secondary">
                &nbsp;+ Free Shipping
              </Typography>
            </Typography>

            <Typography variant="body1" mt={2} color="text.secondary">
              {product.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            </Typography>

            {/* <Typography variant="body1" mt={1} color="text.secondary">
              Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum.
            </Typography> */}

            {/* Quantity Selectors */}
            <Grid container spacing={2} mt={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  // label="Makeup Melting Cleanser ($29.90)"
                  type="number"
                  fullWidth
                  InputProps={{ inputProps: { min: 0 } }}
                  value={makeupQty}
                  onChange={(e) => setMakeupQty(Number(e.target.value))}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  label="Balancing Daily Cleanser ($34.90)"
                  type="number"
                  fullWidth
                  InputProps={{ inputProps: { min: 0 } }}
                  value={balancingQty}
                  onChange={(e) => setBalancingQty(Number(e.target.value))}
                />
              </Grid> */}
            </Grid>

            <Button
              variant="outlined"
              sx={{
                borderColor: "#ff4081",
                color: "#ff4081",
                fontWeight: 'bold',
                py: 1.5,
                fontSize: "1rem",
                mt: 3,
                px: 4,
                letterSpacing: 1,
                '&:hover': {
                  borderColor: "#ff4081",
                  backgroundColor: "#fff0f6",
                },
              }}
            >
              Add to Cart
            </Button>

            {/* Categories */}
            <Typography variant="body1" mt={2}>
              Categories:
              <Chip label="Bundles" size="medium" sx={{ mx: 1 }} />
              <Chip label="Moisturizer" size="medium" />
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
        <ProductDetailsTabs />
      </Paper>

    </Box>
  );
};

export default ProductComponent;

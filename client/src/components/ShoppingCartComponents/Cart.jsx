import React, { useState } from 'react';
import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  IconButton,
  TextField,
  Button,
  Grid,
  Paper,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const product = {
  name: 'Complex Sunscreen Balm',
  price: 22.5,
  quantity: 1,
  image: 'https://pplx-res.cloudinary.com/image/private/user_uploads/78437415/45bb947e-3a91-4eba-a14a-b434f0cd2d87/image.jpg', // Replace with your image URL
};

const Cart = () => {
  const [quantity, setQuantity] = useState(product.quantity);
  const [coupon, setCoupon] = useState('');

  const subtotal = (product.price * quantity).toFixed(2);

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, bgcolor: '#fff', minHeight: '100vh' }}>
      <Typography variant="h2" sx={{ mb: 3, fontWeight: 400 }}>
        Cart
      </Typography>

      <Grid container spacing={4} alignItems="flex-start">
        {/* Cart Table */}
        <Grid item xs={12} md={8}>
          <Paper variant="outlined" sx={{ mb: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell sx={{ fontWeight: 500 }}>Product</TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>Price</TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>Quantity</TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>Subtotal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <IconButton size="small">
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box
                        component="img"
                        src={product.image}
                        alt={product.name}
                        sx={{
                          width: 48,
                          height: 48,
                          objectFit: 'contain',
                          bgcolor: '#fafafa',
                          border: '1px solid #eee',
                          borderRadius: 1,
                          mr: 2,
                        }}
                      />
                      <Typography>{product.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      value={quantity}
                      size="small"
                      inputProps={{ min: 1, style: { textAlign: 'center', width: 48 } }}
                      onChange={e => setQuantity(Number(e.target.value))}
                    />
                  </TableCell>
                  <TableCell>${subtotal}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            {/* Coupon and Update Cart Row */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: { xs: 'wrap', sm: 'nowrap' },
                alignItems: 'center',
                borderTop: '1px solid #eee',
                p: 2,
                gap: 2,
              }}
            >
              <TextField
                placeholder="Coupon code"
                variant="outlined"
                size="small"
                value={coupon}
                onChange={e => setCoupon(e.target.value)}
                sx={{ flex: 1, maxWidth: 220 }}
              />
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#e91e63',
                  color: '#e91e63',
                  fontWeight: 500,
                  letterSpacing: 1,
                  px: 3,
                  mr: 2,
                  '&:hover': {
                    borderColor: '#e91e63',
                    background: '#fff0fa',
                  },
                }}
              >
                APPLY COUPON
              </Button>
              <Button
                variant="outlined"
                disabled
                sx={{
                  borderColor: '#e91e63',
                  color: '#e91e63',
                  fontWeight: 500,
                  letterSpacing: 1,
                  px: 3,
                  opacity: 0.6,
                }}
              >
                UPDATE CART
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Cart Totals */}
        <Grid item xs={12} md={4}>
          <Paper variant="outlined" sx={{ p: 3, minWidth: 300 }}>
            <Typography variant="h6" sx={{ fontWeight: 400, mb: 2 }}>
              Cart totals
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Subtotal</Typography>
              <Typography>${subtotal}</Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography sx={{ fontWeight: 500 }}>Total</Typography>
              <Typography sx={{ fontWeight: 500 }}>${subtotal}</Typography>
            </Box>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                borderColor: '#e91e63',
                color: '#e91e63',
                fontWeight: 500,
                letterSpacing: 1,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  borderColor: '#e91e63',
                  background: '#fff0fa',
                },
              }}
            >
              PROCEED TO CHECKOUT
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;

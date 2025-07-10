import React, { useState, useEffect } from 'react';
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
import { useCart } from '../../hooks/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, fetchCart } = useCart();
  useEffect(() => {
    fetchCart();
  }, []);
  const [coupon, setCoupon] = useState('');
  const [localQuantities, setLocalQuantities] = useState({});
  const [hasChanges, setHasChanges] = useState(false);

  // Initialize localQuantities on first render or when cartItems change
  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach(item => {
      initialQuantities[item.productId] = item.quantity;
    });
    setLocalQuantities(initialQuantities);
    setHasChanges(false);
  }, [cartItems]);

  const handleQuantityChange = (id, value) => {
    const newQuantities = { ...localQuantities, [id]: value };
    setLocalQuantities(newQuantities);

    // Check if there's a change compared to original cart quantities
    const changed = cartItems.some(item => newQuantities[item.productId] !== item.quantity);
    setHasChanges(changed);
  };

  const handleUpdateCart = () => {
    Object.entries(localQuantities).forEach(([id, qty]) => {
      const item = cartItems.find(p => p.productId === id);
      if (item && item.quantity !== qty) {
        updateQuantity(id, qty);
      }
    });
    setHasChanges(false);
  };

  const calculateSubtotal = item => {
    const qty = localQuantities[item.productId] ?? item.quantity;
    return item.price * qty;
  };
  const total = cartItems
    .reduce((acc, item) => acc + calculateSubtotal(item), 0)
    .toFixed(2);

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
                {cartItems.map(product => {
                  const currentQty = localQuantities[product.productId] ?? product.quantity;
                  const subtotal = (product.price * product.quantity).toFixed(2);

                  return (
                    <TableRow key={product.productId}>
                      <TableCell>
                        <IconButton size="small" onClick={() => {
                          removeFromCart(product.productId)
                          fetchCart();
                          }}>
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box
                            component="img"
                            src={product.imageUrl}
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
                          value={currentQty}
                          size="small"
                          inputProps={{ min: 1, style: { textAlign: 'center', width: 48 } }}
                          onChange={e => {
                            handleQuantityChange(product.productId, Number(e.target.value))
                            updateQuantity(product.productId, Number(e.target.value))
                          }}
                        />
                      </TableCell>
                      <TableCell>${(product.price * (localQuantities[product.productId] ?? product.quantity)).toFixed(2)}</TableCell>
                    </TableRow>
                  );
                })}
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
                disabled={!hasChanges}
                onClick={handleUpdateCart}
                sx={{
                  borderColor: '#e91e63',
                  color: '#e91e63',
                  fontWeight: 500,
                  letterSpacing: 1,
                  px: 3,
                  opacity: hasChanges ? 1 : 0.6,
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
              <Typography>${total}</Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography sx={{ fontWeight: 500 }}>Total</Typography>
              <Typography sx={{ fontWeight: 500 }}>${total}</Typography>
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
              onClick={() => {
                console.log("Proceed to checkout")
                navigate(`/checkout`)
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

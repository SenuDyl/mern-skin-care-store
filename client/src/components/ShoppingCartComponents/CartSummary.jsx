import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Divider,
  Badge,
} from '@mui/material';
import { useCart } from '../../hooks/CartContext';

const CartSimple = () => {

    const { cartItems } = useCart();
  const [coupon, setCoupon] = useState('');

  const subtotal = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <Box
      sx={{
        bgcolor: '#f8f9fc',
        minHeight: '100vh',
        p: { xs: 2, md: 4 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: 400,
          p: 3,
          bgcolor: '#fff',
          borderRadius: 3,
        }}
      >
        {cartItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 7,
              position: 'relative',
            }}
          >
            <Badge
              badgeContent={item.quantity}
              color="secondary"
              sx={{
                position: 'absolute',
                left: 0,
                top: 0,
                '& .MuiBadge-badge': {
                  fontWeight: 500,
                  fontSize: 14,
                  right: 12,
                  top: -2,
                  bgcolor: '#e91e63',
                },
              }}
            >
              <Box
                component="img"
                src={item.imageUrl}
                alt={item.name}
                sx={{
                  width: 72,
                  height: 72,
                  borderRadius: 2,
                  bgcolor: '#f5f5f5',
                  border: '1px solid #eee',
                  mr: 2,
                }}
              />
            </Badge>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 500, mb: 0.5, ml: 12 }}>
                {item.name}
              </Typography>
              <Typography sx={{ color: '#888', fontSize: 15, ml: 12 }}>
                ${item.price.toFixed(2)} × {item.quantity}
              </Typography>
            </Box>
          </Box>
        ))}

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            placeholder="Coupon Code"
            size="small"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            sx={{ flex: 1, bgcolor: '#fafafa' }}
            InputProps={{
              sx: { borderRadius: 2 },
            }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: '#e91e63',
              color: '#fff',
              fontWeight: 500,
              borderRadius: 2,
              px: 3,
              boxShadow: 'none',
              '&:hover': { bgcolor: '#d81b60' },
            }}
          >
            Apply
          </Button>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography>Subtotal</Typography>
          <Typography>${subtotal}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography sx={{ fontWeight: 700, fontSize: 20 }}>Total</Typography>
          <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
            ${subtotal}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default CartSimple;

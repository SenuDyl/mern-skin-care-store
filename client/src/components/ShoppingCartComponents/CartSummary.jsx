import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Badge,
  Avatar,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const PinkButton = styled(Button)({
  backgroundColor: "#ff4a6e",
  color: "#fff",
  height: 48,
  minWidth: 64,
  borderRadius: 8,
  fontWeight: "bold",
  fontSize: 18,
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#e63e5d",
  },
});

const CartSummary = () => {
  const [coupon, setCoupon] = useState("");
  const [couponError, setCouponError] = useState(false);

  // Example product data
  const product = {
    name: "Complex Sunscreen Balm",
    price: 22.5,
    image: "https://pplx-res.cloudinary.com/image/private/user_uploads/37404127/80eae3f8-5afd-441e-be4e-df46e8c8fd74/image.jpg",
    quantity: 1,
  };

  const handleCouponApply = (e) => {
    e.preventDefault();
    if (!coupon.trim()) {
      setCouponError(true);
    } else {
      setCouponError(false);
      // Handle coupon logic here
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#fafbff",
        borderRadius: 2,
        p: 3,
        maxWidth: 400,
        mx: "auto",
        fontFamily: "inherit",
      }}
    >
      {/* Product Row */}
      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
        <Badge
          badgeContent={product.quantity}
          color="error"
          sx={{
            "& .MuiBadge-badge": {
              right: -10,
              top: 10,
              fontWeight: "bold",
              fontSize: 14,
              border: "2px solid #fff",
            },
          }}
        >
          <Avatar
            src={product.image}
            alt={product.name}
            variant="rounded"
            sx={{
              width: 56,
              height: 70,
              bgcolor: "#fff",
              border: "1px solid #e0e0e0",
              mr: 2,
            }}
          />
        </Badge>
        <Box sx={{ flex: 1, mt: 0.5 }}>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {product.name}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          ${product.price.toFixed(2)}
        </Typography>
      </Box>

      {/* Coupon Row */}
      <form onSubmit={handleCouponApply} style={{ display: "flex", gap: 12, marginBottom: 20 }}>
        <TextField
          placeholder="Coupon Code"
          variant="outlined"
          value={coupon}
          onChange={(e) => {
            setCoupon(e.target.value);
            setCouponError(false);
          }}
          error={couponError}
          helperText={couponError ? "Please enter a coupon code" : " "}
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: 8,
              bgcolor: "#fff",
            },
            "& .MuiFormHelperText-root": {
              marginLeft: 0,
            },
          }}
        />
        <PinkButton
          type="submit"
          sx={{
            px: 4,
            minWidth: 0,
            mt: "auto",
            mb: "auto",
          }}
        >
          &nbsp;
        </PinkButton>
      </form>

      {/* Subtotal and Total */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography color="text.secondary">Subtotal</Typography>
        <Typography color="text.secondary">${product.price.toFixed(2)}</Typography>
      </Box>
      <Divider sx={{ mb: 1 }} />
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography sx={{ fontWeight: 600, fontSize: 18 }}>Total</Typography>
        <Typography sx={{ fontWeight: 700, fontSize: 22 }}>${product.price.toFixed(2)}</Typography>
      </Box>
    </Box>
  );
}

export default CartSummary;
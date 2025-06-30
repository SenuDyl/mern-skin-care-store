import React from "react";
import { Box, Typography, Divider, Avatar, Stack } from "@mui/material";

// Example data for recently viewed products
const recentlyViewed = [
  {
    name: "Soothing Sunscreen Gel",
    price: "$24.50",
    image: "https://via.placeholder.com/40x56?text=Img1", // Replace with actual image URL
  },
  {
    name: "Calm Hydrating Moisturizer",
    price: "$29.90 - $34.90",
    image: "https://via.placeholder.com/40x56?text=Img2", // Replace with actual image URL
  }
];

const RecentlyViewedProducts = () => {
  return (
    <Box sx={{ width: 250, bgcolor: "background.paper", p: 2 }}>
      <Typography variant="h4" color="text.secondary" sx={{ mb: 2 }}>
        Recently Viewed Products
      </Typography>
      <Stack spacing={2}>
        {recentlyViewed.map((item, idx) => (
          <React.Fragment key={item.name}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                variant="square"
                src={item.image}
                alt={item.name}
                sx={{ width: 40, height: 56, bgcolor: "#f5f5f5" }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  {item.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {item.price}
                </Typography>
              </Box>
            </Stack>
            {idx < recentlyViewed.length - 1 && <Divider sx={{ my: 1 }} />}
          </React.Fragment>
        ))}
      </Stack>
    </Box>
  );
}

export default RecentlyViewedProducts;
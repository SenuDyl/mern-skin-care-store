import React, { useState } from "react";
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Rating,
} from "@mui/material";

const products = [
  {
    id: 1,
    category: "Sunscreens",
    name: "Complex Sunscreen Balm",
    price: 22.5,
    image: "https://via.placeholder.com/150x150?text=Complex+Sunscreen+Balm",
  },
  {
    id: 2,
    category: "Sunscreens",
    name: "Soothing Sunscreen Gel",
    price: 24.5,
    image: "https://via.placeholder.com/150x150?text=Soothing+Sunscreen+Gel",
  },
];

const CategoryDetails = () => {
  const [sortOrder, setSortOrder] = useState("default");

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    // Add sorting logic here if needed
  };

  return (
    <Box sx={{ bgcolor: "background.paper", p: 10, height: '100vh'}}>
      {/* Breadcrumb */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Sunscreens</Typography>
      </Breadcrumbs>

      {/* Title */}
      <Typography variant="h1" gutterBottom>
        Sunscreens
      </Typography>

      {/* Results and sorting */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Showing all {products.length} results
        </Typography>

        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel id="sort-label">Default sorting</InputLabel>
          <Select
            labelId="sort-label"
            id="sort-select"
            value={sortOrder}
            label="Default sorting"
            onChange={handleSortChange}
          >
            <MenuItem value="default">Default sorting</MenuItem>
            <MenuItem value="priceLowHigh">Price: Low to High</MenuItem>
            <MenuItem value="priceHighLow">Price: High to Low</MenuItem>
            <MenuItem value="nameAZ">Name: A to Z</MenuItem>
            <MenuItem value="nameZA">Name: Z to A</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Product grid */}
      <Grid container spacing={4}>
        {products.map(({ id, category, name, price, image }) => (
          <Grid item xs={12} sm={6} md={3} key={id}>
            <Card sx={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt={name}
                sx={{ objectFit: "contain", bgcolor: "#f5f5f5" }}
              />
              <CardContent sx={{ p: 1 }}>
                <Typography variant="caption" color="text.secondary" gutterBottom>
                  {category}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {name}
                </Typography>
                <Rating name="read-only" value={0} readOnly size="small" />
                <Typography variant="body2" sx={{ mt: 0.5, fontWeight: "bold" }}>
                  ${price.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CategoryDetails;
import React, { useState } from 'react';
import {
  Box, Typography, Tabs, Tab, Grid, Card, CardContent, CardMedia, Rating,
  IconButton
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductDetailsTabs = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', mt: 1, px: 2 }}>
      {/* Tabs */}
      <Tabs value={tabValue} onChange={handleTabChange} aria-label="product tabs">
        <Tab label="Description" />
        <Tab label="Reviews (0)" />
      </Tabs>

      {/* Tab Content */}
      <Box sx={{ mt: 2 }}>
        {tabValue === 0 && (
          <Box>
            <Typography paragraph>
              Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor
              consequat risus tellus amet augue egestas mauris scelerisque donec ultrices.
            </Typography>
            <Typography paragraph>
              Tincidunt mauris, pharetra aliquam in magnis ornare sit mi velit, quis semper ut a malesuada pharetra
              volutpat euismod vulputate pellentesque et risus in malesuada pellentesque dictumst amet vitae vitae ut
              phasellus quam et enim feugiat eget mauris aenean eu volutpat, dictum donec gravida nunc egestas viverra
              justo sed.
            </Typography>
            <Typography paragraph>
              Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit
              malesuada.
            </Typography>
          </Box>
        )}
        {tabValue === 1 && (
          <Typography>No reviews yet.</Typography>
        )}
      </Box>

      {/* Related Products */}
      <Typography variant="h2" mt={6} mb={3}>
        Related products
      </Typography>

      <Grid item xs={12} sm={6} md={3} key={1}>
        <Box
          sx={{
            position: 'relative',
            width: 250,           // fixed width
            height: 400,          // fixed height
            mx: 'auto',
            '&:hover .cart-icon': { opacity: 1 },
          }}
        >
          <IconButton
            className="cart-icon"
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: 'white',
              boxShadow: 1,
              opacity: 0,
              transition: 'opacity 0.3s',
              zIndex: 2,
            }}
          >
            <ShoppingCartIcon fontSize="small" />
          </IconButton>

          <Card
            elevation={0}
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
              overflow: 'hidden',
              borderRadius: 2,
            }}
          >
            <CardMedia
              component="img"
              image={"https://via.placeholder.com/250x250?text=Product+Image"} // replace dynamically
              alt={"product.name"}
              sx={{
                height: 200,
                objectFit: 'contain',
              }}
            />
            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', px: 2 }}>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  {"product.category"}
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  {"product.name"}
                </Typography>
              </Box>
              <Box>
                <Rating size="small" value={0} readOnly />
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {"$29.90"}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>

    </Box>
  );
};

export default ProductDetailsTabs;

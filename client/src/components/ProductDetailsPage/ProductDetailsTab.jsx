import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Rating,
  IconButton
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// MUI TabPanel helper
const TabPanel = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
};

const ProductDetailsTabs = ({ description, reviews = [] }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto',  px: 2 }}>
      {/* Tabs */}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
        sx={{ minWidth: '100%', justifyContent: 'space-between' }}
      >
        <Tab label="Description" />
        <Tab label={`Reviews (${reviews.length})`} />
      </Tabs>

      {/* Tab Panels */}
      <Box >
        <TabPanel value={tabValue} index={0}>
          <Typography paragraph>{description}</Typography>
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
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          {reviews.length === 0 ? (
            <Typography>No reviews yet.</Typography>
          ) : (
            reviews.map(({ id, reviewerName, rating, comment }) => (
              <Box
                key={id}
                sx={{
                  mb: 3,
                  borderBottom: '1px solid #ddd',
                  pb: 2,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <IconButton size="small" sx={{ mr: 1 }}>
                    <AccountCircleIcon fontSize="small" />
                  </IconButton>
                  <Typography variant="h6" fontWeight="bold">
                    {reviewerName}
                  </Typography>
                </Box>

                <Rating size="h5" value={rating} readOnly />
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {comment}
                </Typography>
              </Box>
            ))
          )}
        </TabPanel>
      </Box>
    </Box>
  );
};

export default ProductDetailsTabs;

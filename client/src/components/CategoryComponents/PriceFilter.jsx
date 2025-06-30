import React, { useState } from 'react';
import {
  Box, Typography, Slider, Button
} from '@mui/material';

const PriceFilter = () => {
  const [priceRange, setPriceRange] = useState([20, 30]);

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleFilter = () => {
    console.log('Filtering with price range:', priceRange);
    // Apply your filtering logic here
  };

  return (
    <Box sx={{ width: 250, bgcolor: "background.paper", p: 2 }}>
      <Typography variant="h4" color="text.secondary" gutterBottom>
        Filter by price
      </Typography>

      <Slider
        value={priceRange}
        onChange={handleChange}
        valueLabelDisplay="off"
        min={0}
        max={100}
        sx={{
          color: 'black',
          height: 4,
          '& .MuiSlider-thumb': {
            color: 'black',
          },
          '& .MuiSlider-track': {
            color: 'black',
          },
          '& .MuiSlider-rail': {
            color: 'black',
          }
        }}
      />

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
        <Button
          variant="outlined"
          onClick={handleFilter}
          sx={{
            borderColor: '#f06292',
            color: '#f06292',
            fontWeight: 600,
            fontSize: '0.8rem',
            px: 3,
            '&:hover': {
              borderColor: '#f06292',
              backgroundColor: '#ffe6ec'
            }
          }}
        >
          FILTER
        </Button>

        <Typography variant="body2">
          Price: <strong>${priceRange[0]} — ${priceRange[1]}</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default PriceFilter;

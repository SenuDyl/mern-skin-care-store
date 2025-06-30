import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Select,
  MenuItem,
  Breadcrumbs,
  Link,
  Button
} from '@mui/material';

import PriceFilter from '../components/CategoryComponents/PriceFilter';
import CategoryFilter from '../components/CategoryComponents/CategoryFilter';
import RecentlyViewedProducts from '../components/CategoryComponents/RecentlyViewedProducts';
import CategoryDetails from '../components/CategoryComponents/CategoryDetails';
import Navbar from '../components/HomePage/Navbar';
import Footer from '../components/HomePage/Footer';

const CategoryPage = () => {
  // State for sorting dropdown (optional)
  const [sort, setSort] = React.useState('default');

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <>
      <Navbar />
      <Box sx={{ p: 5 }}>
        <Grid container spacing={4}>
          {/* Left Sidebar */}
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box sx={{ mb: 4 }}>
              <PriceFilter />
            </Box>
            <Box sx={{ mb: 4 }}>
              <CategoryFilter />
            </Box>
            <Box>
              <RecentlyViewedProducts />
            </Box>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} sm={8} md={8} lg={10} >
            <Box sx={{ pl: 8, minHeight: "80vh", }}>
              <CategoryDetails />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default CategoryPage;

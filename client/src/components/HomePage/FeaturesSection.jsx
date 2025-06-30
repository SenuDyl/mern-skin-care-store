import React from 'react';
import { Grid, Typography, Box, Avatar } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const features = [
  {
    icon: <EmojiPeopleIcon fontSize="large" style={{ color: '#ff4c7e' }} />,
    title: 'All Skin Types',
    description:
      'Formulated to gently care for every skin type, from sensitive to oily, ensuring balanced hydration and healthy glow for all.',
  },
  {
    icon: <SpaIcon fontSize="large" style={{ color: '#ff4c7e' }} />,
    title: 'Pure Organic',
    description:
      'Made with 100% organic ingredients sourced from nature, free from harmful chemicals and synthetic additives for pure skincare.',
  },
  {
    icon: <FavoriteIcon fontSize="large" style={{ color: '#ff4c7e' }} />,
    title: 'Natural Care',
    description:
      'Harnessing the power of natural botanicals and gentle formulas to nurture your skin’s health and enhance its natural beauty.',
  },
];


const FeaturesSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9fd', py: 8, px: 20 }}>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} textAlign="center">
            <Avatar
              sx={{
                backgroundColor: '#fff',
                width: 64,
                height: 64,
                mx: 'auto',
                mb: 2,
                boxShadow: 1,
              }}
            >
              {feature.icon}
            </Avatar>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {feature.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {feature.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;

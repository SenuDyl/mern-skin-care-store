import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import heroImage from '../../assets/hero.jpg';

const Layout = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh', // Ensure it covers the whole viewport
                width: '100%',
            }}
        >
            <Navbar />
            <HeroSection />
        </Box>
    );
};

export default Layout;

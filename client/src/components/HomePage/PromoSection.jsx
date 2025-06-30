import React from 'react';
import { Box, Grid, Typography, Button, Divider, useTheme } from '@mui/material';
import promoImage from '../../assets/flawless-promo.jpg';


const PromoSection = () => {
      const theme = useTheme()

    return (
        <Box sx={{ backgroundColor: theme.palette.background.alt, py: 10, px: 4 }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={3.5}>
                    <Box
                        component="img"
                        src={promoImage}
                        alt="Beauty Flawless Skin"
                        sx={{ width: '100%', borderRadius: 2 }}
                    />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Divider sx={{ width: 40, borderColor: '#000', mb: 2 }} />
                    <Typography variant="h1" gutterBottom>
                        Beauty. Flawless Skin.
                    </Typography>
                    <Typography variant="h5" color="text.secondary" paragraph>
                        Discover the secret to radiant, healthy-looking skin. Our skincare solutions are designed to nourish, rejuvenate, and bring out your natural glow because flawless skin isn’t a dream, it’s a daily ritual.
                    </Typography>
                    <Typography variant="h5" color="text.secondary" paragraph>
                        Crafted with dermatologist-approved ingredients and powered by science, our products deeply hydrate, repair, and protect. Whether you’re targeting fine lines, dullness, or dryness, we’re here to help you feel confident in your skin every single day.
                    </Typography>
                    <Button
                        variant="outlined"
                        size="large"
                        sx={{ mt: 2, px: 4, py: 1, color: '#ff3366', borderColor: '#ff3366' }}
                    >
                        READ MORE
                    </Button>

                </Grid>
            </Grid>
        </Box>
    );
};

export default PromoSection;

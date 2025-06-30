// Footer.jsx
import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const features = [
  {
    icon: <LocalShippingIcon fontSize="small" color="error" />,
    title: "FREE DELIVERY",
    subtitle: "Enjoy fast, free shipping on all orders with no minimum purchase required.",
  },
  {
    icon: <CreditCardIcon fontSize="small" color="error" />,
    title: "EASY PAYMENT",
    subtitle: "Secure and flexible payment options for a smooth checkout.",
  },
  {
    icon: <LocalMallIcon fontSize="small" color="error" />,
    title: "TRACK ORDER",
    subtitle: "Stay updated with real-time tracking from purchase to your doorstep.",
  },
  {
    icon: <HelpOutlineIcon fontSize="small" color="error" />,
    title: "HAVE QUESTIONS?",
    subtitle: "Our friendly support team is here to help you anytime, anywhere.",
  },
];

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "#f7f8fc", pt: 4, pb: 3, mt: 8 }}>
      {/* Top Features Bar */}
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between" sx={{ mb: 6 }}>
          {features.map(({ icon, title, subtitle }, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={3}
              display="flex"
              alignItems="center"
              gap={2}
              sx={{ bgcolor: "white", p: 2, borderRadius: 2 }}
            >
              <Box
                sx={{
                  bgcolor: "#ffe7e7",
                  p: 1.5,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {icon}
              </Box>
              <Box>
                <Typography variant="h5" fontWeight={200} sx={{ letterSpacing: 1 }}>
                  {title}
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mt: 0.3, display: "block" }}>
                  {subtitle}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Middle Navigation and Social */}
      <Box sx={{ bgcolor: "#f4f6fb", py: 5 }}>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography variant="h6" fontWeight={500} mb={1}>
            EverGlow
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mb: 2 }}>
            <Link href="#" underline="none" color="error" fontWeight={500}>
              Home
            </Link>
            <Link href="#" underline="none" color="text.primary">
              Shop
            </Link>
            <Link href="#" underline="none" color="text.primary">
              About
            </Link>
            <Link href="#" underline="none" color="text.primary">
              Contact
            </Link>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <IconButton aria-label="instagram" size="small" color="inherit" href="#">
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="facebook" size="small" color="inherit" href="#">
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="twitter" size="small" color="inherit" href="#">
              <TwitterIcon fontSize="small" />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Bottom Copyright */}
      <Container maxWidth="lg" sx={{ textAlign: "center", mt: 3 }}>
        <Typography variant="caption" color="text.secondary">
          © 2025 Skin Cleanser Store. Powered by Skin Cleanser Store.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Divider
} from '@mui/material';
import {
  ShoppingCartOutlined as CartIcon,
  Menu as MenuIcon,
  AccountBoxOutlined,
  Close,
  Search
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import ShoppingCartWidget from '../ShoppingCartComponents/ShoppingCartWidget';

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/home';

  const navColor = isHomePage ? theme.palette.white.light : 'black';
  const brandColor = isHomePage ? theme.palette.white.offwhite : 'black';
  const backgroundColor = isHomePage ? 'transparent' : theme.palette.white.light;

  const navItems = ['Home', 'Shop', 'About', 'Contact'];
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const [isCartIconToggled, setIsCartIconToggled] = useState(false);
  const isNonMobileScreen = useMediaQuery('(min-width:1000px)');

  const cartItems = ['Item1', 'Item2', 'Item3'];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          alignItems: 'stretch',
          minHeight: '90px',
          backgroundColor: backgroundColor,
          paddingTop: '10px',
          boxShadow: 'none',
        }}
      >
        <Toolbar>

          {/* Navigation buttons */}
          {isNonMobileScreen ? (
            navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  fontSize: theme.typography.h5.fontSize,
                  color: navColor,
                  marginRight: '20px',
                }}
              >
                {item}
              </Button>
            ))
          ) : (
            <IconButton
              sx={{ color: navColor }}
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Mobile Menu */}
          {isMobileMenuToggled && !isNonMobileScreen && (
            <Box
              position="fixed"
              left="0"
              bottom="0"
              height="100%"
              zIndex="10"
              minWidth="600px"
              bgcolor="rgba(0, 0, 0, 0.7)"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              p={3}
              boxShadow={3}
            >
              <IconButton sx={{ color: navColor }} onClick={() => setIsMobileMenuToggled(false)}>
                <Close />
              </IconButton>
              {navItems.map((item) => (
                <div key={item}>
                  <Button
                    sx={{
                      fontFamily: theme.typography.fontFamily,
                      fontSize: theme.typography.h4.fontSize,
                      color: navColor,
                      marginTop: '30px',
                    }}
                  >
                    {item}
                  </Button>
                  <Divider sx={{ marginTop: '10px', width: '500px' }} />
                </div>
              ))}
            </Box>
          )}

          {/* Brand Name */}
          <Typography
            variant="h1"
            sx={{
              flexGrow: 1,
              fontSize: '50px',
              color: brandColor,
              textAlign: 'center',
            }}
          >
            Everglow
          </Typography>

          {/* Action Icons */}
          <IconButton sx={{ color: navColor, mx: 1 }}>
            <Search />
          </IconButton>
          <IconButton
            sx={{ color: navColor, mx: 1 }}
            onClick={() => setIsCartIconToggled(!isCartIconToggled)}
          >
            <CartIcon />
          </IconButton>
          <IconButton sx={{ color: navColor, mx: 1 }}>
            <AccountBoxOutlined />
          </IconButton>

          {/* Cart Widget */}
          {isCartIconToggled && (
            <ShoppingCartWidget
              setIsCartIconToggled={setIsCartIconToggled}
              cartItems={cartItems}
            />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

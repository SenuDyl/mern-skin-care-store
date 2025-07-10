import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Divider,
  Menu,
  MenuItem
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
import { useAuth } from '../../hooks/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const theme = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navColor = isHomePage ? theme.palette.white.light : 'black';
  const brandColor = isHomePage ? theme.palette.white.offwhite : 'black';
  const backgroundColor = isHomePage ? 'transparent' : theme.palette.white.light;

  const navItems = ['Home', 'Shop', 'About', 'Contact'];
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const [isCartIconToggled, setIsCartIconToggled] = useState(false);
  const isNonMobileScreen = useMediaQuery('(min-width:1000px)');

  const cartItems = ['Item1', 'Item2', 'Item3'];

  // State for Account Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAccountClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccountClose = () => {
    setAnchorEl(null);
  };

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
          <IconButton
            sx={{ color: navColor, mx: 1 }}
            onClick={handleAccountClick}
          >
            <AccountBoxOutlined />
          </IconButton>

          {/* Cart Widget */}
          {isCartIconToggled && (
            <ShoppingCartWidget
              setIsCartIconToggled={setIsCartIconToggled}
              cartItems={cartItems}
            />
          )}

          {/* Account Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleAccountClose}
            PaperProps={{
              sx: {
                mt: 1,
                borderRadius: 2,
                minWidth: 160,
                boxShadow: '0px 3px 8px rgba(0,0,0,0.15)',
              },
            }}
          >
            <MenuItem
              onClick={() => {
                handleAccountClose();
                navigate('/account'); // or wherever your account page is
              }}
            >
              My Account
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleAccountClose();
                if (user?.userId) {
                  logout(); // call the logout function
                } else {
                  navigate('/login'); // go to login page if not logged in
                }
              }}
            >
              {user?.userId ? 'Logout' : 'Login'}
            </MenuItem>

          </Menu>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

import { Typography, useMediaQuery, IconButton, Box, Divider, Button } from '@mui/material';
import { Menu, Close, ShoppingCart } from '@mui/icons-material';
import FlexBetween from '../../components/FlexBetween';
import React from 'react';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const [isCartToggled, setIsCartToggled] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

    return (
        <div>
            <FlexBetween padding="1rem 6%" sx={{ width: '100%' }}>
                <FlexBetween
                    sx={{
                        width: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    {isNonMobileScreens ? (
                        <FlexBetween gap="1.75rem">
                            <Typography variant="h6">HOME</Typography>
                            <Typography variant="h6">SHOP</Typography>
                            <Typography variant="h6">ABOUT</Typography>
                            <Typography variant="h6">CONTACT</Typography>
                        </FlexBetween>
                    ) : (
                        <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                            <Menu />
                        </IconButton>
                    )}

                    {isMobileMenuToggled && !isNonMobileScreens && (
                        <Box
                            position="fixed"
                            left='0'
                            top='10'
                            bottom='0'
                            height='100%'
                            zIndex="10"
                            maxWidth="500px"
                            minWidth="300px"
                            backgroundColor={alt}
                            padding="1.75rem"
                        >
                            <IconButton onClick={() => setIsMobileMenuToggled(false)}
                                sx={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                }}>
                                <Close />
                            </IconButton>
                            <FlexBetween
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                                gap="3rem"
                            >
                                <Typography variant="h6">HOME</Typography>
                                <Typography variant="h6">SHOP</Typography>
                                <Typography variant="h6">ABOUT</Typography>
                                <Typography variant="h6">CONTACT</Typography>
                            </FlexBetween>
                        </Box>
                    )}

                    <FlexBetween
                        sx={{
                            flex: 'none',
                            justifyContent: 'center',
                            width: 'auto'
                        }}
                    >
                        <Typography
                            fontWeight="bold"
                            fontSize="clamp(1rem,2rem,2.25rem)"
                            color="primary"
                            onClick={() => navigate('/home')}
                            sx={{
                                "&:hover": {
                                    cursor: "pointer",
                                    color: primaryLight
                                }
                            }}
                        >
                            EverGlow
                        </Typography>
                    </FlexBetween>

                    {isNonMobileScreens && (
                        <FlexBetween gap="1.75rem">
                            <IconButton onClick={() => setIsCartToggled(!isCartToggled)}>
                                <ShoppingCart />
                            </IconButton>
                            <Typography variant="h6">LOGIN</Typography>
                            <Typography variant="h6">SIGNUP</Typography>
                        </FlexBetween>
                    )}

                    {isCartToggled && (
                        <Box
                            position="fixed"
                            right='0'
                            top='10'
                            bottom='0'
                            height='100%'
                            zIndex="10"
                            maxWidth="500px"
                            minWidth="300px"
                            backgroundColor={alt}
                            padding="1.75rem"
                        >
                            <IconButton onClick={() => setIsCartToggled(false)}
                                sx={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                }}>
                                <Close />
                            </IconButton>
                            <FlexBetween
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                                gap="1.5rem" // Reduced gap between elements
                            >
                                <Typography variant="h5" fontWeight="bold">Shopping Cart</Typography>
                                <Divider sx={{ width: '100%', margin: '0.25rem 0' }} /> {/* Adjusted margin around Divider */}
                                <FlexBetween flexDirection="column"

                                    justifyContent="center"
                                    alignItems="center"
                                    gap="2rem">
                                    <Typography variant="h6">Item 1</Typography>
                                    <Typography variant="h6">Item 2</Typography>
                                    <Typography variant="h6">Item 3</Typography>
                                    <Typography variant="h6">Item 4</Typography>
                                </FlexBetween>


                                <Divider sx={{ width: '100%', margin: '0.25rem 0' }} />
                                <Typography variant="h6">Total: $100</Typography>
                                <Divider sx={{ width: '100%', margin: '0.25rem 0' }} />
                                <FlexBetween
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    gap="1.5rem" // Reduced gap between buttons
                                >
                                    <Button variant="outlined">VIEW CART</Button>
                                    <Button variant="outlined" color="error">CHECKOUT</Button>
                                </FlexBetween>
                            </FlexBetween>
                        </Box>
                    )}
                </FlexBetween>
            </FlexBetween>
        </div >
    );
}

export default Navbar;

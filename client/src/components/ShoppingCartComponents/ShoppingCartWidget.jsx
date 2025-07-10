import React, { useEffect, useState } from 'react'
import {
    Box,
    Button,
    Divider,
    IconButton,
    List,
    ListItem,
    Typography,
    ListItemText,
    ListItemAvatar,
    Avatar,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Add, Close, Remove } from '@mui/icons-material'
import { useCart } from '../../hooks/CartContext'
import { useNavigate } from 'react-router-dom'

const ShoppingCartWidget = ({ isCartIconToggled, setIsCartIconToggled }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const { removeFromCart, updateQuantity, fetchCart, cartItems } = useCart();
    console.log("CartItems: ", cartItems);
    useEffect(() => {
        fetchCart();
    }, []);
    const subtotal = cartItems?.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <Box
            position="fixed"
            right="0"
            top="0"
            height="100%"
            zIndex="10"
            minWidth="400px"
            maxWidth="450px"
            bgcolor="#fff"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            p={3}
            boxShadow={3}
            sx={{
                borderRadius: 0,
            }}
        >
            {/* Header */}
            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography
                    sx={{
                        fontFamily: theme.typography.fontFamily,
                        fontSize: "1.15rem",
                        color: "#111",
                        fontWeight: 500,
                        letterSpacing: 0.2,
                    }}
                >
                    Shopping Cart
                </Typography>
                <IconButton onClick={() => setIsCartIconToggled(false)} sx={{ color: "#111" }}>
                    <Close />
                </IconButton>
            </Box>

            {/* Divider */}
            <Divider sx={{ my: 2, width: "100%" }} />

            {/* Cart Items */}
            <List
                sx={{
                    width: '100%',
                    bgcolor: "transparent",
                    flexGrow: 1,
                    p: 0,
                    overflowY: 'auto',
                    maxHeight: 'calc(100vh - 270px)', // Adjust based on header + footer height
                }}
            >

                {cartItems?.length > 0 ? (
                    cartItems.map((item) => (
                        <ListItem
                            key={item.id}
                            alignItems="flex-start"
                            sx={{
                                px: 0,
                                py: 1.5,
                                borderBottom: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                            secondaryAction={
                                <IconButton edge="end" sx={{ color: "#bbb" }} onClick={() => 
                                    {removeFromCart(item.productId) 
                                fetchCart();}}>
                                    <Close />
                                </IconButton>
                            }
                        >
                            <ListItemAvatar sx={{ minWidth: 56 }}>
                                <Avatar
                                    variant="square"
                                    src={item.imageUrl}
                                    alt={item.name}
                                    sx={{ width: 48, height: 48, borderRadius: 1, bgcolor: "#f5f5f5" }}
                                />
                            </ListItemAvatar>
                            <Box sx={{ flex: 1, ml: 2 }}>
                                <Typography sx={{ fontWeight: 500, fontSize: "1rem", color: "#222" }}>
                                    {item.name}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                                    <IconButton
                                        size="small"
                                        sx={{ color: '#999' }}
                                        onClick={() => {
                                            if (item.quantity > 1) updateQuantity(item.productId, item.quantity - 1);
                                        }}
                                    >
                                        <Remove fontSize="small" />
                                    </IconButton>

                                    <Typography sx={{ mx: 1, fontSize: '0.95rem', color: '#222', minWidth: 24, textAlign: 'center' }}>
                                        {item.quantity}
                                    </Typography>

                                    <IconButton
                                        size="small"
                                        sx={{ color: '#999' }}
                                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                    >
                                        <Add fontSize="small" />
                                    </IconButton>

                                    <Typography sx={{ ml: 2, fontSize: "0.95rem", color: "#999" }}>
                                        × ${item.price.toFixed(2)}
                                    </Typography>
                                </Box>
                            </Box>
                        </ListItem>
                    ))
                ) : (
                    <Typography sx={{ color: theme.palette.grey[400], textAlign: "center", width: "100%", mt: 2 }}>
                        Your cart is empty.
                    </Typography>
                )}
            </List>

            {/* Subtotal */}
            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                <Typography sx={{ color: "#222", fontWeight: 500 }}>Subtotal:</Typography>
                <Typography sx={{ color: "#222", fontWeight: 500 }}>${subtotal?.toFixed(2)}</Typography>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ width: "100%", mt: 3 }}>
                <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                        borderColor: "#ff4081",
                        color: "#ff4081",
                        fontWeight: 'bold',
                        mb: 2,
                        py: 1.5,
                        fontSize: "1rem",
                        letterSpacing: 1,
                        '&:hover': {
                            borderColor: "#ff4081",
                            backgroundColor: "#fff0f6",
                        },
                    }}
                    onClick={() => { navigate(`/cart`) }}
                >
                    VIEW CART
                </Button>
                <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                        borderColor: "#ff4081",
                        color: "#ff4081",
                        fontWeight: 'bold',
                        py: 1.5,
                        fontSize: "1rem",
                        letterSpacing: 1,
                        '&:hover': {
                            borderColor: "#ff4081",
                            backgroundColor: "#fff0f6",
                        },
                    }}
                    onClick={() => { navigate(`/checkout`) }}
                >
                    CHECKOUT
                </Button>
            </Box>
        </Box>
    )
}

export default ShoppingCartWidget

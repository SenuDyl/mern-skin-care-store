import React from 'react'
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
import { Close } from '@mui/icons-material'

const cartItems = [
    {
        id: 1,
        name: 'Complex Sunscreen Balm',
        price: 22.50,
        quantity: 1,
        image: 'https://pplx-res.cloudinary.com/image/private/user_uploads/37404127/a4b8e625-3f9b-4368-82f9-13d51c63ee1a/image.jpg', // Replace with actual product image
    },
]

const ShoppingCartWidget = ({ isCartIconToggled, setIsCartIconToggled }) => {
    const theme = useTheme()
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

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
            <List sx={{ width: '100%', bgcolor: "transparent", flexGrow: 1, p: 0 }}>
                {cartItems.length > 0 ? (
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
                                <IconButton edge="end" sx={{ color: "#bbb" }}>
                                    <Close />
                                </IconButton>
                            }
                        >
                            <ListItemAvatar sx={{ minWidth: 56 }}>
                                <Avatar
                                    variant="square"
                                    src={item.image}
                                    alt={item.name}
                                    sx={{ width: 48, height: 48, borderRadius: 1, bgcolor: "#f5f5f5" }}
                                />
                            </ListItemAvatar>
                            <Box sx={{ flex: 1, ml: 2 }}>
                                <Typography sx={{ fontWeight: 500, fontSize: "1rem", color: "#222" }}>
                                    {item.name}
                                </Typography>
                                <Typography sx={{ fontSize: "0.95rem", color: "#999", mt: 0.3 }}>
                                    {item.quantity} × ${item.price.toFixed(2)}
                                </Typography>
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
                <Typography sx={{ color: "#222", fontWeight: 500 }}>${subtotal.toFixed(2)}</Typography>
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
                >
                    CHECKOUT
                </Button>
            </Box>
        </Box>
    )
}

export default ShoppingCartWidget

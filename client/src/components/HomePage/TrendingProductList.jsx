// import { useState } from "react";
// import { useEffect } from "react";

// const ProductList = () => {
//     const [products, setProducts] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     const getProducts = async () => {
//         const response = await fetch(`http://localhost:8081/api/products`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         const data = await response.json();
//         setProducts(data);
//         setIsLoading(false);
//     }

//     useEffect(() => {
//         getProducts();
//     }, []);
//     return (
//         // <ul>
//         //     {products.map(product => (
//         //         <li key={product.id}>{product.name}</li>
//         //     ))

//         //     }
//         // </ul>
//     )
// }
// export default ProductList;

import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, Rating, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import sampleTube from '../../assets/sampletube.jpg';

const products = [
    {
        id: 1,
        name: 'Hybrid Cleansing Balm',
        category: 'Cleanser',
        price: '$32.90',
        image: sampleTube,
    },
    {
        id: 2,
        name: 'Soothing Sunscreen Gel',
        category: 'Sunscreens',
        price: '$24.50',
        image: sampleTube,
    },
    {
        id: 3,
        name: 'Energizing Marine Lotion',
        category: 'Body lotion',
        price: '$20.50',
        image: sampleTube,
    },
    {
        id: 4,
        name: 'Calm Hydrating Moisturizer',
        category: 'Bundles',
        price: '$29.90 - $34.90',
        image: sampleTube,
    }
];

const TrendingProductList = () => {
    return (
        <Box sx={{ py: 8, px: 20 }}>
            <Typography variant="h2" align='center' sx={{ mb: 4 }}>
                Most Loved By the Customers
            </Typography>
            <Typography variant="h6" color="text.secondary" align='center' sx={{ mb: 4 }}>
                Discover why thousands trust our skincare products for their daily beauty routine. Real results, glowing reviews, and happy skin stories await you.
            </Typography>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item xs={12} sm={7} md={3} key={product.id}>
                        <Box
                            sx={{
                                position: 'relative',
                                '&:hover .cart-icon': { opacity: 1 },
                            }}
                        >
                            <IconButton
                                className="cart-icon"
                                sx={{
                                    position: 'absolute',
                                    top: 8,
                                    right: 8,
                                    backgroundColor: 'white',
                                    boxShadow: 1,
                                    opacity: 0,
                                    transition: 'opacity 0.3s',
                                    zIndex: 2,
                                }}
                            >
                                <ShoppingCartIcon fontSize="small" />
                            </IconButton>
                            <Card elevation={0} sx={{ textAlign: 'left' }}>
                                <CardMedia
                                    component="img"
                                    image={product.image}
                                    alt={product.name}
                                    sx={{ height: 300, objectFit: 'contain', mb: 2 }}
                                />
                                <CardContent sx={{ px: 1 }}>
                                    <Typography variant="h6" color="text.secondary">
                                        {product.category}
                                    </Typography>
                                    <Typography variant="h5" sx={{ fontWeight: 500 }}>
                                        {product.name}
                                    </Typography>
                                    <Rating size="small" value={0} readOnly />
                                    <Typography variant="body2" color="text.secondary">
                                        {product.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TrendingProductList;

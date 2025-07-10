import {
    Box, Grid, Typography, Card, CardMedia, CardContent, IconButton, Skeleton
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useTheme } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import { useCart } from '../../hooks/CartContext';

const ProductList = () => {
    const { addToCart } = useCart();
    const { token } = useAuth();
    const theme = useTheme();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getProducts = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://localhost:5000/api/products`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            console.log("Fetched products", data)
            setProducts(data.content || data); // adjust based on actual API response
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const placeholderArray = new Array(20).fill(null); // Use a fixed size if needed for loading state

    return (
        <Box sx={{ py: 8, px: 20 }}>
            <Typography variant="h2" sx={{ mb: 4 }}>
                New Arrivals
            </Typography>

            <Grid container spacing={4}>
                {isLoading
                    ? placeholderArray.map((_, index) => (
                        <Grid item xs={12} sm={7} md={3} key={index}>
                            <Card elevation={0}>
                                <Skeleton variant="rectangular" height={300} />
                                <CardContent>
                                    <Skeleton width="60%" />
                                    <Skeleton width="80%" />
                                    <Skeleton width="40%" />
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                    : products?.map((product) => (
                        <Grid item xs={12} sm={7} md={3} key={product.id}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    '&:hover .cart-icon': { opacity: 1 },
                                }}
                                onClick={() => navigate(`/products/${product.id}`)}
                            >
                                <IconButton
                                    className="cart-icon"
                                    sx={{
                                        position: 'absolute',
                                        top: 8,
                                        right: 8,
                                        backgroundColor: theme.palette.white?.light || '#fff',
                                        boxShadow: 1,
                                        opacity: 0,
                                        transition: 'opacity 0.3s',
                                        zIndex: 2,
                                    }}
                                >
                                    <ShoppingCartIcon
                                        fontSize="small"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(product);
                                        }}
                                    />
                                </IconButton>
                                <Card elevation={0} sx={{ textAlign: 'left' }}>
                                    <CardMedia
                                        component="img"
                                        image={product.imageUrl}
                                        alt={product.name}
                                        sx={{ height: 200, objectFit: 'contain', mb: 2 }}
                                    />
                                    <CardContent >
                                        <Typography variant="h6" color="text.secondary">
                                            {product.category?.name}
                                        </Typography>
                                        <Typography variant="h5" sx={{ fontWeight: 500 }}>
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ${product.price}
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

export default ProductList;

import {
    Box, Grid, Typography, Card, CardMedia, CardContent, IconButton, Skeleton, Pagination
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useTheme } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1); // UI page starts from 1
    const [totalPages, setTotalPages] = useState(0);
    const pageSize = 8;

    const getProducts = async (pageNum = 1) => {
        setIsLoading(true);
        try {
            // Assuming backend expects 1-based page number:
            const response = await fetch(`http://localhost:5000/api/products?page=${pageNum}&size=${pageSize}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            setProducts(data.content);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getProducts(page);
    }, [page]);

    useEffect(() => {
        if (page > totalPages && totalPages > 0) {
            setPage(totalPages);
        }
    }, [totalPages, page]);


    const placeholderArray = new Array(pageSize).fill(null);

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
                    : products.map((product) => (
                        <Grid item xs={12} sm={7} md={3} key={product.id}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    '&:hover .cart-icon': { opacity: 1 },
                                }}
                                onClick={() => navigate(`/products/${product.id}`)}                            >
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
                                    <ShoppingCartIcon fontSize="small" />
                                </IconButton>
                                <Card elevation={0} sx={{ textAlign: 'left' }}>
                                    <CardMedia
                                        component="img"
                                        image={product.imageUrl}
                                        alt={product.name}
                                        sx={{ height: 300, objectFit: 'contain', mb: 2 }}
                                    />
                                    <CardContent sx={{ px: 1 }}>
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

            {/* Pagination */}
            {totalPages > 1 && (
                <Box display="flex" justifyContent="center" mt={6}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={(event, value) => setPage(value)}
                        color="primary"
                        size="large"
                    />
                </Box>
            )}
        </Box>
    );
};

export default ProductList;

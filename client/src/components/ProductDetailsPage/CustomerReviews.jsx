import React, { useRef, useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Rating,
    Stack,
    TextField,
    IconButton,
    Avatar,
    useTheme
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const CustomerReviews = () => {
    const theme = useTheme();

    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');
    const [image, setImage] = useState(null);
    const [youtube, setYoutube] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isForm, setForm] = useState(false);

    const fileInputRef = useRef();

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleCancel = () => {
        setRating(0);
        setTitle('');
        setReview('');
        setImage(null);
        setYoutube('');
        setName('');
        setEmail('');
        setForm(false); // ✅ return to initial view
    };

    return !isForm ? (
        <Box
            sx={{
                maxWidth: 500,
                mx: 'auto',
                p: 3,
                textAlign: 'center',
            }}
        >
            <Typography variant="h3" sx={{ mb: 3 }}>
                Customer Reviews
            </Typography>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                alignItems="center"
                justifyContent="center"
                divider={
                    <Box
                        sx={{
                            width: 25,
                            height: 40,
                            borderLeft: { sm: '1px solid #eee' },
                            display: { xs: 'none', sm: 'block' },
                        }}
                    />
                }
            >
                <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                    <Rating value={0} readOnly />
                    <Typography variant="h5" sx={{ mt: 1 }}>
                        Be the first to write a review
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setForm(true)}
                    sx={{
                        px: 4,
                        py: 1.5,
                    }}
                >
                    Write a review
                </Button>

            </Stack>
        </Box>
    ) : (
        <Box
            sx={{
                maxWidth: 420,
                mx: 'auto',
                p: 3,
            }}
        >
            <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
                Write a review
            </Typography>

            <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Rating
                    value={rating}
                    onChange={(_, newValue) => setRating(newValue)}
                    size="large"
                />
            </Box>

            <TextField
                label="Review Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                inputProps={{ maxLength: 100 }}
                sx={{ mb: 2 }}
            />

            <TextField
                label="Review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                fullWidth
                multiline
                minRows={4}
                sx={{ mb: 2 }}
            />

            <Typography variant="body2" sx={{ mb: 1 }}>
                Picture/Video (optional)
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <IconButton
                    color="primary"
                    component="label"
                    sx={{
                        border: '1px dashed #ccc',
                        width: 56,
                        height: 56,
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                    }}
                >
                    <PhotoCamera />
                    <input
                        type="file"
                        accept="image/*,video/*"
                        hidden
                        ref={fileInputRef}
                        onChange={handleImageChange}
                    />
                </IconButton>
                {image && (
                    <Avatar
                        src={image}
                        variant="rounded"
                        sx={{ width: 56, height: 56 }}
                    />
                )}
            </Stack>

            <TextField
                label="YouTube URL"
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
            />

            <TextField
                label="Name (displayed publicly)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
            />

            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
            />

            <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
                How we use your data: We'll only contact you about the review you left, and only if necessary. By submitting your review, you agree to our terms, privacy and content policies.
            </Typography>

            <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button variant="outlined" onClick={handleCancel} >
                    Cancel review
                </Button>
                <Button variant="contained" color="primary">
                    Submit Review
                </Button>
            </Stack>
        </Box>
    );
};

export default CustomerReviews;

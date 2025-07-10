import React, { useRef, useState } from 'react';
import {
    Box,
    Typography,
    Rating,
    TextField,
    Button,
    Stack,
    IconButton,
    Avatar,
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const ReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');
    const [image, setImage] = useState(null);
    const [youtube, setYoutube] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
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
    };

    return (
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
                onChange={e => setTitle(e.target.value)}
                fullWidth
                inputProps={{ maxLength: 100 }}
                sx={{ mb: 2 }}
            />
            <TextField
                label="Review"
                value={review}
                onChange={e => setReview(e.target.value)}
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
                onChange={e => setYoutube(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Name (displayed publicly)"
                value={name}
                onChange={e => setName(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
                type="email"
            />
            <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
                How we use your data: We'll only contact you about the review you left, and only if necessary. By submitting your review, you agree to our terms, privacy and content policies.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button variant="outlined" onClick={handleCancel}>
                    Cancel review
                </Button>
                <Button variant="contained" color="primary">
                    Submit Review
                </Button>
            </Stack>
        </Box>
    );
};

export default ReviewForm;

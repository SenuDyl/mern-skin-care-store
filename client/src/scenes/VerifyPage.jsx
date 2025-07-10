import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';

const VerifyEmailMessage = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#fdfdfd"
        >
            <Typography
                variant="h1"
                sx={{
                    fontWeight: 700,
                    color: '#f06292',
                    fontFamily: 'sans-serif',
                    marginBottom: 2,
                }}
            >
                EverGlow
            </Typography>
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    maxWidth: 400,
                    width: '90%',
                    textAlign: 'center',
                    borderRadius: 2,
                }}
            >

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 500,
                        marginBottom: 1,
                        color: '#333',
                    }}
                >
                    Verify your Email
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: '#666',
                        marginBottom: 3,
                    }}
                >
                    We've sent a verification link to your email address. Please check your inbox and follow the instructions to verify your account.
                </Typography>

                <Button
                    variant="outlined"
                    sx={{
                        borderColor: '#f06292',
                        color: '#f06292',
                        '&:hover': {
                            backgroundColor: '#f06292',
                            color: '#fff',
                            borderColor: '#f06292',
                        },
                    }}
                >
                    Resend Email
                </Button>
            </Paper>
        </Box>
    );
};

export default VerifyEmailMessage;

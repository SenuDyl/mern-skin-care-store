import React, { useState } from 'react';
import { Box, Typography, Avatar, MobileStepper, useTheme } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const testimonials = Array.from({ length: 10 }, (_, i) => ({
  name: `Customer ${i + 1}`,
  text: 'Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit.',
  image: `/path/to/customer${i + 1}.jpg`,
}));

const TestimonialsSection = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = Math.ceil(testimonials.length / 3);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const displayed = testimonials.slice(activeStep * 3, activeStep * 3 + 3);

  return (
    <Box sx={{ backgroundColor: theme.palette.background.alt, py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        What Our Customers Say
      </Typography>
      <Box sx={{ display: 'flex', gap: 10, paddingY: 10, justifyContent: 'center' }}>
        {displayed.map((t, index) => (
          <Box key={index} sx={{ width: 300, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} sx={{ color: '#ff4c7e' }} />
              ))}
            </Box>
            <Typography variant="h5" sx={{ mb: 2 }}>
              {t.text}
            </Typography>
            <Avatar src={t.image} sx={{ width: 64, height: 64, mx: 'auto', mb: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
              {t.name.toUpperCase()}
            </Typography>
          </Box>
        ))}
      </Box>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ justifyContent: 'center', mt: 4, background: 'transparent' }}
        nextButton={null}
        backButton={null}
        onStepChange={handleStepChange}
      />
    </Box>
  );
};

export default TestimonialsSection;

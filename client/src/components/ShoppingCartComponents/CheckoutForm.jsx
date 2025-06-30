import React from "react";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Alert,
  Grid,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];

const CheckoutForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      country: "United States (US)",
      street: "",
      apartment: "",
      city: "",
      state: "California",
      zip: "",
      phone: "",
      notes: "",
    },
  });

  const onSubmit = (data) => {
    // This won't be called as payment is disabled
    console.log(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 3,
        bgcolor: "#fff",
        borderRadius: 2,
        boxShadow: 2,
      }}
      autoComplete="off"
    >
      {/* Contact */}
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        <b>Contact</b>
      </Typography>
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Enter a valid email",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email Address"
            variant="outlined"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{ mb: 2 }}
          />
        )}
      />

      {/* Billing Details */}
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        <b>Billing Details</b>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: "First name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="First name"
                variant="outlined"
                fullWidth
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: "Last name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Last name"
                variant="outlined"
                fullWidth
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />
            )}
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 2 }}>
        <Controller
          name="country"
          control={control}
          rules={{ required: "Country is required" }}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel>Country / Region</InputLabel>
              <Select
                {...field}
                label="Country / Region"
                disabled
                value="United States (US)"
              >
                <MenuItem value="United States (US)">United States (US)</MenuItem>
              </Select>
            </FormControl>
          )}
        />
      </Box>

      <Box sx={{ mt: 2 }}>
        <Controller
          name="street"
          control={control}
          rules={{ required: "House number and street name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="House number and street name"
              variant="outlined"
              fullWidth
              error={!!errors.street}
              helperText={errors.street?.message}
            />
          )}
        />
      </Box>

      <Box sx={{ mt: 2 }}>
        <Controller
          name="apartment"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Apartment, suite, unit, etc. (optional)"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </Box>

      <Grid container spacing={2} sx={{ mt: 0.5 }}>
        <Grid item xs={12} sm={5}>
          <Controller
            name="city"
            control={control}
            rules={{ required: "Town / City is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Town / City"
                variant="outlined"
                fullWidth
                error={!!errors.city}
                helperText={errors.city?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            name="state"
            control={control}
            rules={{ required: "State is required" }}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>State</InputLabel>
                <Select
                  {...field}
                  label="State"
                  defaultValue="California"
                >
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Controller
            name="zip"
            control={control}
            rules={{
              required: "Postcode / ZIP is required",
              pattern: {
                value: /^\d{5}(-\d{4})?$/,
                message: "Enter a valid ZIP code",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Postcode / ZIP"
                variant="outlined"
                fullWidth
                error={!!errors.zip}
                helperText={errors.zip?.message}
              />
            )}
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 2 }}>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Phone is required",
            pattern: {
              value: /^\+?1?\d{10,14}$/,
              message: "Enter a valid phone number",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone"
              variant="outlined"
              fullWidth
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          )}
        />
      </Box>

      {/* Additional Information */}
      <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
        <b>Additional Information</b>
      </Typography>
      <Controller
        name="notes"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Notes about your order, e.g. special notes for delivery."
            variant="outlined"
            fullWidth
            multiline
            minRows={2}
          />
        )}
      />

      {/* Payment */}
      <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
        <b>Payment</b>
      </Typography>
      <FormControlLabel
        control={<Checkbox disabled />}
        label={
          <Typography variant="body2" color="textSecondary">
            Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.
          </Typography>
        }
      />
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          disabled
          sx={{ bgcolor: "#ff4a6e", color: "#fff", py: 1.5, fontWeight: "bold" }}
        >
          Place Order
        </Button>
      </Box>
    </Box>
  );
}

export default CheckoutForm;
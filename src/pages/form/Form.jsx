import React, { useState } from 'react';
import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from '@mui/material';
import { useForm } from "react-hook-form"
import Header from '../../components/Header'
const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


const roleOptions = [
  { value: "Admin", label: "Admin" },
  { value: "Manager", label: "Manager" },
  { value: "User", label: "User" },
];

const Form = () => {
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = ( ) => {
    console.log("done")
    handleClick();
  }


  return (
      <><Header title={'CREATE USER'} subTitle={'Create a New User Profile'} />
      
      <Box

      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      noValidate
      autoComplete="off"
    >
      <Stack direction="row" sx={{ gap: 2 }}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={Boolean(errors.firstName) ? "This field is required  & min 3." : null}
          {...register("firstName", { required: true, minLength: 3 })}
          name="firstName"
          label="First Name"
          variant="filled"
          fullWidth />
        <TextField
          error={Boolean(errors.firstName)}
          helperText={Boolean(errors.lastName) ? "This field is required  & min 3." : null}
          {...register("lastName", { required: true, minLength: 3 })}
          name="lastName"
          label="Last Name"
          variant="filled"
          fullWidth />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={Boolean(errors.email) ? "Please provide a valid email address" : null}
        {...register("email", { required: true, pattern: regEmail })}
        name="email"
        label="Email"
        variant="filled" />
      <TextField
        error={Boolean(errors.ContactNumber)}
        helperText={Boolean(errors.ContactNumber)
          ? "Please provide a valid Phone number"
          : null}
        {...register("ContactNumber", { required: true, pattern: phoneRegExp })}
        label="Contact Number"
        variant="filled" />
      <TextField
        error={Boolean(errors.address1)}
        helperText={Boolean(errors.address1) ? "This field is required " : null}
        {...register("address1", { required: true, minLength: 3 })}
        name="address1"
        label="Address 1"
        variant="filled" />
      <TextField
        error={Boolean(errors.address2)}
        helperText={Boolean(errors.address2) ? "This field is required" : null}
        {...register("address2", { required: true, minLength: 3 })}
        name="address2"
        label="Address 2"
        variant="filled" />
      <TextField
        name="role"
        select
        label="Role"
        defaultValue={"User"}
        variant="filled"

      >
        {roleOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            Account created successfully
          </Alert>
        </Snackbar>

      </Box>
    </Box></>
  );
}
export default Form;

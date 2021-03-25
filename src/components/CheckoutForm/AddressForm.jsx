import React from 'react';
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from "@material-ui/core";
import {UseForm, FormProvider} from "react-hook-form";
import FormInput from "./FormInput";

const AddressForm = () => {
    const methods = useForm();
    return (
        <>
        <Typography variant="h6" gutterBottom>
            Shipping Address
        </Typography>
        <FormProvider {...methods}>
            <Form onSubmit="">
                <Grid container spacing={3}>
                    <FormInput required name="firstName" label="First Name" />
                </Grid>
            </Form>
        </FormProvider>
        </>
    )
}

export default AddressForm

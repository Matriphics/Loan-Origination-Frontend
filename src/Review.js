import { Fragment, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useSpeechSynthesis } from "react-speech-kit";
import { MenuItem } from '@mui/material';

export default function Review(props) {
    const [dob, setDOB] = useState(null)

    const handlefullname = (e) => props.setFormdata({ ...props.formdata, applicant_name: e.target.value })
    const handleemail = (e) => props.setFormdata({ ...props.formdata, applicant_email: e.target.value })
    const handlenumber = (e) => props.setFormdata({ ...props.formdata, applicant_phn_no: e.target.value })
    const handlealtnumber = (e) => props.setFormdata({ ...props.formdata, applicant_alt_no: e.target.value })
    const handleaadhar = (e) => props.setFormdata({ ...props.formdata, aadhar_no: e.target.value })
    const handlepan = (e) => props.setFormdata({ ...props.formdata, pan_no: e.target.value })
    const handleincome = (e) => props.setFormdata({ ...props.formdata, income: e.target.value })
    const handleaddress1 = (e) => props.setFormdata({ ...props.formdata, address1: e.target.value })
    const handleaddress2 = (e) => props.setFormdata({ ...props.formdata, address2: e.target.value })
    const handlecity = (e) => props.setFormdata({ ...props.formdata, city: e.target.value })
    const handlestate = (e) => props.setFormdata({ ...props.formdata, state: e.target.value })
    const handlecountry = (e) => props.setFormdata({ ...props.formdata, country: e.target.value })
    const handlezip = (e) => props.setFormdata({ ...props.formdata, zip: e.target.value })
    const handleloanamount = (e) => props.setFormdata({ ...props.formdata, loan_amount: e.target.value })
    const handleloantype = (e) => props.setFormdata({ ...props.formdata, loan_type: e.target.value })
    const handlegender = (e) => props.setFormdata({ ...props.formdata, gender: e.target.value })

    const { speak } = useSpeechSynthesis();

    const property = [
        {
            value: props.formdata.applicant_name,
            label: 'Full Name',
        },
        {
            value: props.formdata.applicant_email,
            label: 'Email',
        },
        {
            value: props.formdata.gender,
            label: 'Gender',
        },
        {
            value: props.formdata.applicant_phn_no,
            label: 'Phone No.',
        },
        {
            value: props.formdata.applicant_alt_no,
            label: 'Alternate No.',
        },
        {
            value: props.formdata.loan_type,
            label: 'Loan Type',
        },
        {
            value: props.formdata.loan_amount,
            label: 'Loan Amount',
        },
        {
            value: props.formdata.aadhar_no,
            label: 'Aadhar No.',
        },
        {
            value: props.formdata.pan_no,
            label: 'PAN No.',
        },
        {
            value: props.formdata.income,
            label: 'Annual Income',
        },
        {
            value: props.formdata.address1,
            label: 'Address1',
        },
        {
            value: props.formdata.address2,
            label: 'Address2',
        },
        {
            value: props.formdata.city,
            label: 'City',
        },
        {
            value: props.formdata.state,
            label: 'State',
        },
        {
            value: props.formdata.zip,
            label: 'Zip Code',
        },
        {
            value: props.formdata.country,
            label: 'Country',
        },
    ];

    const handlespeech = (e) => {
        console.log(e.target)
        speak({ text: e.target.value })
    }

    return (
        <div>
            <Fragment>
                <Typography variant="h6" gutterBottom>
                    You have reached the end of the form.
                    Please check your details before submitting.
                </Typography><br />
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <TextField
                            // required
                            id="applicant_name"
                            name="fullName"
                            label="Full Name (as per AADHAR)"
                            fullWidth
                            defaultValue={props.formdata.applicant_name}
                            variant="standard"
                            onChange={handlefullname}
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            id="speech"
                            name="Speech"
                            select
                            fullWidth
                            label="Audio Listener"
                            variant="standard"
                            onChange={handlespeech}
                        >
                            {property.map((option) => (
                                <MenuItem key={option.value} value={option.value === undefined ? option.label : option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <TextField
                            // required
                            id="applicant_email"
                            name="Email"
                            label="Email"
                            fullWidth
                            defaultValue={props.formdata.applicant_email}
                            variant="standard"
                            onChange={handleemail}
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                id="applicant_dob"
                                label="Date of Birth"
                                disableFuture={true}
                                value={dayjs(props.formdata.applicant_dob)}
                                onChange={(newValue) => {
                                    setDOB(newValue)
                                    props.setFormdata({ ...props.formdata, applicant_dob: dob })
                                }}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="applicant_phn_no"
                            type="number"
                            name="Number"
                            label="Phone number"
                            fullWidth
                            defaultValue={props.formdata.applicant_phn_no}
                            variant="standard"
                            onChange={handlenumber}
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="applicant_alt_no"
                            type="number"
                            name="Alternate Number"
                            label="Alternate Phone number"
                            fullWidth
                            defaultValue={props.formdata.applicant_alt_no}
                            variant="standard"
                            onChange={handlealtnumber}
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="aadhar_no"
                            type="number"
                            name="Aadhar"
                            label="Aadhar Number"
                            fullWidth
                            defaultValue={props.formdata.aadhar_no}
                            variant="standard"
                            onChange={handleaadhar}
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="pan_no"
                            name="PAN"
                            label="PAN Number"
                            defaultValue={props.formdata.pan_no}
                            fullWidth
                            variant="standard"
                            onChange={handlepan}
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="gender"
                            name="Gender"
                            label="Choose Gender"
                            fullWidth
                            defaultValue={props.formdata.gender}
                            variant="standard"
                            onChange={handlegender}
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            id="income"
                            type="number"
                            name="Income"
                            label="Income"
                            fullWidth
                            defaultValue={props.formdata.income}
                            variant="standard"
                            onChange={handleincome}
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            id="loan_amount"
                            type="number"
                            name="loanAmount"
                            label="Loan Amount"
                            fullWidth
                            defaultValue={props.formdata.loan_amount}
                            variant="standard"
                            onChange={handleloanamount}
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            id="loan_type"
                            name="loanType"
                            label="Loan Type"
                            fullWidth
                            defaultValue={props.formdata.loan_type}
                            variant="standard"
                            onChange={handleloantype}
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address1"
                            name="Address1"
                            label="Address Line 1"
                            fullWidth
                            defaultValue={props.formdata.address1}
                            variant="standard"
                            onChange={handleaddress1}
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="Address2"
                            label="Address Line 2"
                            fullWidth
                            defaultValue={props.formdata.address2}
                            variant="standard"
                            onChange={handleaddress2}
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="city"
                            name="City"
                            label="City"
                            fullWidth
                            defaultValue={props.formdata.city}
                            variant="standard"
                            onChange={handlecity}
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="state"
                            name="State"
                            label="State"
                            fullWidth
                            defaultValue={props.formdata.state}
                            variant="standard"
                            onChange={handlestate}
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="zip"
                            type="number"
                            name="Zip"
                            label="Zip/Postal Code"
                            fullWidth
                            defaultValue={props.formdata.zip}
                            variant="standard"
                            onChange={handlezip}
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="country"
                            name="Country"
                            label="Country"
                            fullWidth
                            defaultValue={props.formdata.country}
                            variant="standard"
                            onChange={handlecountry}
                            size='small'
                        />
                    </Grid>
                </Grid><br />
            </Fragment>
        </div>
    );
}
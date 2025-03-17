import { Fragment, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Button from "@mui/material/Button";
import dayjs, { Dayjs } from 'dayjs';
import { MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useSpeechSynthesis } from "react-speech-kit";
import './index.css'

export default function PersonalForm(props) {
    const [dob, setDOB] = useState(null);
    const gender = [
        {
            value: 'Male',
            label: 'Male',
        },
        {
            value: 'Female',
            label: 'Female',
        },
        {
            value: 'Other',
            label: 'Other',
        }];
    const loantype = [
        {
            value: 'Personal Loan',
            label: 'Personal Loan',
        },
        {
            value: 'Home Loan',
            label: 'Home Loan',
        },
        {
            value: 'Business Loan',
            label: 'Business Loan',
        }];

    const handlefullname = (e) => {
        props.setFormdata({ ...props.formdata, applicant_name: e.target.value })
        speak({ text: e.target.value })
    }
    // const handledate = (e) => { props.setFormdata({ ...props.formdata, applicant_dob: dob }) }

    const [invalidEmail, setInvalidEmail] = useState(false);
    const handleemail = (e) => {
        const inputValue = e.target.value;
        const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputValue);
        setInvalidEmail(!isValidEmail)
        props.setFormdata({
            ...props.formdata, applicant_email: inputValue
        })
    }

    const handlegender = (e) => props.setFormdata({ ...props.formdata, gender: e.target.value })

    const [number, setNumber] = useState('');
    const [numberError, setNumberError] = useState(false);
    const handlenumber = (e) => {
        const inputValue = e.target.value;
        if (/^\d{0,10}$/.test(inputValue)) {
            setNumber(inputValue);
            setNumberError(inputValue.length !== 10);
        }
        props.setFormdata({ ...props.formdata, applicant_phn_no: e.target.value })
    };

    const [altnumber, setaltNumber] = useState('');
    const [altnumberError, setaltNumberError] = useState(false);
    const handlealtnumber = (e) => {
        const inputValue = e.target.value;
        if (/^\d{0,10}$/.test(inputValue)) {
            setaltNumber(inputValue);
            setaltNumberError(inputValue.length !== 10);
        }
        props.setFormdata({ ...props.formdata, applicant_alt_no: e.target.value })
    };

    const [aadhar, setaadhar] = useState('');
    const [aadharError, setaadharError] = useState(false);
    const handleaadhar = (e) => {
        const inputValue = e.target.value;
        if (/^\d{0,12}$/.test(inputValue)) {
            setaadhar(inputValue);
            setaadharError(inputValue.length !== 12);
            props.setFormdata({ ...props.formdata, aadhar_no: e.target.value })
        }
    };

    const [panError, setpanError] = useState(false);
    const handlepan = (e) => {
        const inputValue = e.target.value;
        const alphanumericRegex = /^[A-Z0-9]{10}$/;
        if (alphanumericRegex.test(inputValue)) {
            props.setFormdata({ ...props.formdata, pan_no: inputValue });
            setpanError(false);
        }
        else {
            setpanError(true);
        }
        props.setFormdata({ ...props.formdata, pan_no: e.target.value })
    };

    const handleincome = (e) => props.setFormdata({ ...props.formdata, income: e.target.value })
    const handleloanamount = (e) => props.setFormdata({ ...props.formdata, loan_amount: e.target.value })
    const handleloantype = (e) => props.setFormdata({ ...props.formdata, loan_type: e.target.value })
    const { speak } = useSpeechSynthesis();
    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Enter Your Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="applicant_name"
                        name="fullName"
                        label="Full Name (as per AADHAR)"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        onChange={handlefullname}
                        defaultValue={props.formdata.applicant_name}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        required
                        id="applicant_email"
                        name="Email"
                        label="Enter your email"
                        fullWidth
                        autoComplete="Email"
                        variant="standard"
                        onChange={handleemail}
                        error={invalidEmail}
                        helperText={invalidEmail ? 'Please enter a valid email address' : ''}
                        defaultValue={props.formdata.applicant_email}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="gender"
                        name="Gender"
                        select
                        fullWidth
                        label="Choose Gender"
                        variant="standard"
                        onChange={handlegender}
                        defaultValue={props.formdata.gender}
                    >
                        {gender.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="applicant_phn_no"
                        label="Enter your phone number"
                        fullWidth
                        autoComplete="Phone Number"
                        variant="standard"
                        onChange={handlenumber}
                        inputProps={{ maxLength: 10 }}
                        error={numberError}
                        helperText={numberError ? 'Phone number must be 10 digits' : ''}
                        defaultValue={props.formdata.applicant_phn_no}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="applicant_alt_no"
                        label="Alternate Phone Number"
                        fullWidth
                        autoComplete="Phone Number"
                        variant="standard"
                        onChange={handlealtnumber}
                        inputProps={{ maxLength: 10 }}
                        error={altnumberError}
                        helperText={altnumberError ? 'Phone number must be 10 digits' : ''}
                        defaultValue={props.formdata.applicant_alt_no}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="loan_type"
                        type="text"
                        name="loanType"
                        label="Loan Type"
                        fullWidth
                        select
                        autoComplete="Loan Type"
                        variant="standard"
                        onChange={handleloantype}
                        defaultValue={props.formdata.loan_type}
                    >
                        {loantype.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="loan_amount"
                        type="number"
                        name="loanAmount"
                        label="Loan Amount"
                        fullWidth
                        autoComplete="Loan Amount"
                        variant="standard"
                        onChange={handleloanamount}
                        defaultValue={props.formdata.loan_amount}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
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
                <Grid item xs={12} sm={7}>
                    <TextField
                        required
                        id="aadhar_no"
                        label="Enter your Aadhar Number"
                        fullWidth
                        autoComplete="Number"
                        variant="standard"
                        inputProps={{ maxLength: 12 }}
                        error={aadharError}
                        helperText={aadharError ? 'Aadhar number must be 12 digits' : ''}
                        onChange={handleaadhar}
                        defaultValue={props.formdata.aadhar_no}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Button variant="contained" for="file1" component="label" sx={{ backgroundColor: '#005d9a', marginTop: '10px' }}>
                        Upload Aadhar
                    </Button>
                    <input accept="application/pdf" id="file1" multiple type="file" onChange={e => {
                        props.setFile1(e.target.files[0])
                        console.log(e.target.files[0])
                    }} style={{ paddingLeft: '20px', width: '200px' }} />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <TextField
                        required
                        id="pan"
                        type="text"
                        name="Number"
                        label="Enter your PAN Number"
                        fullWidth
                        autoComplete="Number"
                        variant="standard"
                        onChange={handlepan}
                        inputProps={{ maxLength: 10 }}
                        error={panError}
                        helperText={panError ? 'Enter valid PAN number' : ''}
                        defaultValue={props.formdata.pan_no}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Button variant="contained" for="file2" component="label" sx={{ backgroundColor: '#005d9a', marginTop: '10px' }}>
                        Upload PAN
                    </Button>
                    <input accept="application/pdf" id="file2" multiple type="file" onChange={e => {
                        props.setFile2(e.target.files[0])
                        console.log(e.target.files[0])
                        // props.setFormdata({ ...props.formdata, uploadPan: true })
                    }} style={{ paddingLeft: '35px', width: '200px' }} />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <TextField
                        required
                        id="income"
                        type="number"
                        name="Number"
                        label="Enter your Annual Income"
                        fullWidth
                        autoComplete="Number"
                        variant="standard"
                        onChange={handleincome}
                        defaultValue={props.formdata.income}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Button variant="contained" for="file3" component="label" sx={{ backgroundColor: '#005d9a', marginTop: '10px' }}>
                        Upload Income
                    </Button>
                    <input accept="application/pdf" id="file3" multiple type="file" onChange={e => {
                        props.setFile3(e.target.files[0])
                        console.log(e.target.files[0])
                        // props.setFormdata({ ...props.formdata, uploadIncome: true })
                    }} style={{ paddingLeft: '25px', width: '200px' }} />
                </Grid>
            </Grid>
        </Fragment>
    );
}
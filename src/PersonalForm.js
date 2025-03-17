import { Fragment, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from "@mui/material/Button";
import { Dayjs } from 'dayjs';
import { MenuItem } from '@mui/material';

export default function PersonalForm(props) {
    // const[dob, setDOB] = useState<Dayjs | null>(null);
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

    const handlefirstname = (e) => props.setFormdata({ ...props.formdata, firstname: e.target.value })
    const handlemiddlename = (e) => props.setFormdata({ ...props.formdata, middlename: e.target.value })
    const handlelastname = (e) => props.setFormdata({ ...props.formdata, lastname: e.target.value })
    // const handledate = (e) => {
    //                             // setDOB(e)
    //                             props.setFormdata({...props.formdata, date: e.target.value})
    //                         }
    const handleemail = (e) => props.setFormdata({ ...props.formdata, email: e.target.value })
    const handlegender = (e) => props.setFormdata({...props.formdata, gender: e.target.value})
    const handlenumber = (e) => props.setFormdata({ ...props.formdata, number: e.target.value })
    const handlealtnumber = (e) => props.setFormdata({ ...props.formdata, altnumber: e.target.value })
    const handleaadhar = (e) => props.setFormdata({ ...props.formdata, aadhar: e.target.value })
    const handlepan = (e) => props.setFormdata({ ...props.formdata, pan: e.target.value })
    const handleincome = (e) => props.setFormdata({ ...props.formdata, income: e.target.value })

    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Enter Your Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstname"
                        name="firstName"
                        label="First Name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        onChange={handlefirstname}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="middlename"
                        name="middleName"
                        label="Middle Name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        onChange={handlemiddlename}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastname"
                        name="lastName"
                        label="Last Name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        onChange={handlelastname}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DatePicker
                            id="date"
                            // onChange={handledate}
                            label="DOB"
                            disableFuture={true}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="number"
                        type="number"
                        name="Number"
                        label="Enter your phone number"
                        fullWidth
                        autoComplete="Phone Number"
                        variant="standard"
                        onChange={handlenumber}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="altnumber"
                        type="number"
                        name="Number"
                        label="Alternate Phone Number"
                        fullWidth
                        autoComplete="Phone Number"
                        variant="standard"
                        onChange={handlealtnumber}
                    />
                </Grid>
                <Grid item xs={7}>
                    <TextField
                        required
                        id="email"
                        name="Email"
                        label="Enter your email"
                        fullWidth
                        autoComplete="Email"
                        variant="standard"
                        onChange={handleemail}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <TextField
                        id="gender"
                        name="Gender"
                        select
                        fullWidth
                        label="--Choose Gender--"
                        variant="standard"
                        onChange={handlegender}
                    >
                        {gender.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={7}>

                    <TextField
                        required
                        id="aadhar"
                        type="number"
                        name="Number"
                        label="Enter your Aadhar Number"
                        fullWidth
                        autoComplete="Number"
                        variant="standard"
                        onChange={handleaadhar}
                    />

                </Grid>
                <Grid item xs={12} sm={5}>
                    <Button variant="contained" component="label" sx={{ backgroundColor: '#005d9a', marginTop: '10px' }}>
                        Upload Aadhar
                        <input hidden accept="application/pdf" multiple type="file" onChange={e => {
                            props.setFile1(e.target.files[0])
                            console.log(e.target.files[0])
                            }}/>
                    </Button>
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
                    />

                </Grid>
                <Grid item xs={12} sm={5}>
                    <Button variant="contained" component="label" sx={{ backgroundColor: '#005d9a', marginTop: '10px' }}>
                        Upload PAN
                        <input hidden accept="application/pdf" multiple type="file" onChange={e => {
                            props.setFile2(e.target.files[0])
                            console.log(e.target.files[0])
                            }}/>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>

                    <TextField
                        required
                        id="income"
                        type="text"
                        name="Number"
                        label="Enter your Annual Income"
                        fullWidth
                        autoComplete="Number"
                        variant="standard"
                        onChange={handleincome}
                    />

                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" component="label" sx={{ backgroundColor: '#005d9a', marginTop: '10px' }}>
                        Upload Income Proof
                        <input hidden accept="application/pdf" multiple type="file" onChange={e => {
                            props.setFile3(e.target.files[0])
                            console.log(e.target.files[0])
                            }}/>
                    </Button>
                </Grid>
            </Grid>
        </Fragment>
    );
}
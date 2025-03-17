import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Header3 from './Header3';
import Footer from './Footer';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ApplicationMaker() {
    const { id } = useParams();
    console.log(id);
    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);
    // const [formdata, setFormdata] = useState({})
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
    const [customers, setCustomers] = useState({
        'applicant_name': "",
        'applicant_dob': "",
        'applicant_email': "",
        'gender': "",
        'applicant_phn_no': "",
        'applicant_alt_no': "",
        'aadhar_no': "",
        'pan_no': "",
        'income': "",
        'curr_occupation': "",
        'employer_name': "",
        'address1': "",
        'address2': "",
        'city': "",
        'state': "",
        'zip': "",
        'country': "",
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChange1 = (event1, newValue1) => {
        setValue1(newValue1);
    };
    const fetchApplicationData = () => {
        var config = {
            method: 'get',
            url: 'http://localhost:9090/application/' + id
        };
        axios(config)
            .then(res => setCustomers(res.data[0]))
            .catch(function (error) {
                console.log(error);
                setCustomers({})
            });
    }
    useEffect(() => {
        console.log("useEffect triggered");
        fetchApplicationData();
    }, [])
    console.log(customers);

    const handlesubmit = () => {
        console.log(customers)
        var config = {
            method: 'put',
            url: 'http://localhost:9090/maker/application/' + id,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(customers)
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handlename = (e) => {
        console.log(e.target.value)
        let name = e.target.value
        setCustomers({ ...customers, applicant_name: name })
    }
    // const handledate = (e) => {
    //                             // setDOB(e)
    //                             setFormdata({...formdata, date: e.target.value})
    //                         }
    const handleemail = (e) => setCustomers({ ...customers, applicant_email: e.target.value })
    const handlegender = (e) => setCustomers({ ...customers, gender: e.target.value })
    const handlephn_no = (e) => setCustomers({ ...customers, applicant_phn_no: e.target.value })
    const handlealtnumber = (e) => setCustomers({ ...customers, applicant_alt_no: e.target.value })
    const handleaadhar = (e) => setCustomers({ ...customers, aadhar_no: e.target.value })
    const handlepan = (e) => setCustomers({ ...customers, pan_no: e.target.value })
    const handleincome = (e) => setCustomers({ ...customers, income: e.target.value })
    const handleaddress1 = (e) => setCustomers({ ...customers, address1: e.target.value })
    const handleaddress2 = (e) => setCustomers({ ...customers, address2: e.target.value })
    const handlecity = (e) => setCustomers({ ...customers, city: e.target.value })
    const handlestate = (e) => setCustomers({ ...customers, state: e.target.value })
    const handlecountry = (e) => setCustomers({ ...customers, country: e.target.value })
    const handlezip = (e) => setCustomers({ ...customers, zip: e.target.value })
    const handleoccupation = (e) => setCustomers({ ...customers, curr_occupation: e.target.value })
    const handleemployer = (e) => setCustomers({ ...customers, employer_name: e.target.value })

    const [dob, setDOB] = useState(null);

    return (
        <div className='ApplicationPage' >
            <Header3></Header3>
            <Grid container xs={12} sx={{ marginTop: '100px', marginBottom: '20px' }} spacing={3}>
                <Grid item xs={6}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab sx={{ width: '40%' }} label="Personal Details" {...a11yProps(0)} />
                                <Tab sx={{ width: '30%' }} label="Income Details" {...a11yProps(1)} />
                                <Tab sx={{ width: '30%' }} label="Address Details" {...a11yProps(2)} />
                                {/* <Tab label="Identity Details" {...a11yProps(3)} /> */}
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="applicant_name"
                                        name="FullName"
                                        label="Full Name (as per AADHAR)"
                                        fullWidth
                                        value={customers.applicant_name}
                                        onChange={handlename}
                                        variant="standard"

                                    />
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <TextField
                                        required
                                        id="applicant_email"
                                        name="Email"
                                        label="Enter your email"
                                        fullWidth
                                        value={customers.applicant_email}
                                        onChange={handleemail}
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        id="gender"
                                        select
                                        fullWidth
                                        label="Gender"
                                        variant="standard"
                                        value={customers.gender}
                                        onChange={handlegender}
                                    >
                                        {gender.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DatePicker
                                            id="applicant_dob"
                                            label="Date of Birth"
                                            disableFuture={true}
                                            value={dayjs(customers.applicant_dob)}
                                            onChange={(newValue) => {
                                                setDOB(newValue)
                                                setCustomers({ ...customers, applicant_dob: dob })
                                            }}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="applicant_phn_no"
                                        type="number"
                                        name="Number"
                                        label="Enter your phone number"
                                        fullWidth
                                        value={customers.applicant_phn_no}
                                        onChange={handlephn_no}
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="applicant_alt_no"
                                        type="number"
                                        name="Number"
                                        label="Alternate Phone Number"
                                        fullWidth
                                        value={customers.applicant_alt_no}
                                        onChange={handlealtnumber}
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="aadhar_no"
                                        name="Aadhar"
                                        label="Aadhar Number"
                                        fullWidth
                                        value={customers.aadhar_no}
                                        onChange={handleaadhar}
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="pan_no"
                                        name="PAN"
                                        label="PAN Number"
                                        fullWidth
                                        value={customers.pan_no}
                                        onChange={handlepan}
                                        variant="standard"
                                    />
                                </Grid>
                            </Grid>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="curr_occupation"
                                        name="CurrentOccupation"
                                        label="Current occupation"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="standard"
                                        value={customers.curr_occupation}
                                        onChange={handleoccupation}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="employer_name"
                                        name="EmployerName"
                                        label="Employer name"
                                        fullWidth
                                        autoComplete=""
                                        variant="standard"
                                        value={customers.employer_name}
                                        onChange={handleemployer} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="income"
                                        type="number"
                                        name="AnnualIncome"
                                        label="Annual Income"
                                        fullWidth
                                        value={customers.income}
                                        onChange={handleincome}
                                        variant="standard"
                                    />
                                </Grid>
                            </Grid>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address1"
                                        name="address1"
                                        label="Address line 1"
                                        fullWidth
                                        value={customers.address1}
                                        onChange={handleaddress1}
                                        variant="standard"

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="address2"
                                        name="address2"
                                        label="Address line 2"
                                        fullWidth
                                        value={customers.address2}
                                        onChange={handleaddress2}
                                        variant="standard"

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        value={customers.city}
                                        onChange={handlecity}
                                        variant="standard"

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="state"
                                        name="state"
                                        label="State/Province/Region"
                                        fullWidth
                                        variant="standard"
                                        value={customers.state}
                                        onChange={handlestate}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zip"
                                        name="zip"
                                        label="Zip / Postal code"
                                        fullWidth
                                        value={customers.zip}
                                        onChange={handlezip}
                                        variant="standard"

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="country"
                                        name="country"
                                        label="Country"
                                        fullWidth
                                        value={customers.country}
                                        onChange={handlecountry}
                                        variant="standard"
                                    />
                                </Grid>
                                <br /><br />
                                <Button variant="contained" sx={{ mx: 30, my: 5 }} onClick={handlesubmit}>
                                    <Link to='/makerinbox' style={{textDecoration: 'none', color:'inherit'}}>Submit</Link>
                                </Button>
                            </Grid>
                        </CustomTabPanel>
                        {/* <CustomTabPanel value={value} index={3}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="aadhar"
                                        name="Aadhar"
                                        label="Aadhar Number"
                                        fullWidth
                                        value={customers[0].aadhar_no}
                                        onChange={handleaadhar}
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="aadhardate"
                                        name="Aadhar Date"
                                        label="Aadhar Issued Date"
                                        fullWidth
                                        autoComplete="address-line1"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        required
                                        id="aadharauth"
                                        name="Aadhar Authority"
                                        label="Aadhar Issued Authority"
                                        fullWidth
                                        autoComplete="address-line1"
                                        variant="standard"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="pan"
                                        name="PAN"
                                        label="PAN Number"
                                        fullWidth
                                        value={customers[0].pan_no}
                                        onChange={handlepan}
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="panauth"
                                        name="Pan Authority"
                                        label="PAN Issued Authority"
                                        fullWidth
                                        autoComplete="address-line1"
                                        variant="standard"
                                    />
                                </Grid>
                                <br /><br />
                                <Button variant="contained" sx={{ mx: 30, my: 5 }} onClick={handlesubmit}>
                                    Submit
                                </Button>
                            </Grid>
                        </CustomTabPanel> */}
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderLeft: 1, borderColor: 'divider' }}>
                            <Tabs value={value1} onChange={handleChange1} aria-label="basic tabs example">
                                <Tab sx={{ width: '30%' }} label="PAN Card" {...a11yProps(0)} />
                                <Tab sx={{ width: '30%' }} label="Aadhar Card" {...a11yProps(1)} />
                                <Tab sx={{ width: '40%' }} label="Income Certificate" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value1} index={0}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap', '& > :not(style)': {
                                        m: 1,
                                    },
                                    width: '100%',
                                    height: '80vh'
                                }}
                            >
                                <object width="100%" height="100%"
                                    data={"http://localhost:9090/getpdf/" + id + "?id=1"}></object>
                            </Box>
                        </CustomTabPanel>

                        <CustomTabPanel value={value1} index={1}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap', '& > :not(style)': {
                                        m: 1,
                                    },
                                    width: '100%',
                                    height: '80vh'
                                }}
                            >
                                <object width="100%" height="100%"
                                    data={"http://localhost:9090/getpdf/" + id + "?id=2"}></object>
                            </Box>
                        </CustomTabPanel>
                        <CustomTabPanel value={value1} index={2}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap', '& > :not(style)': {
                                        m: 1,
                                    },
                                    width: '100%',
                                    height: '80vh'
                                }}
                            >
                                <object width="100%" height="100%"
                                    data={"http://localhost:9090/getpdf/" + id + "?id=3"}></object>
                            </Box>
                        </CustomTabPanel>
                        {/* <CustomTabPanel value={value1} index={3}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap', '& > :not(style)': {
                                        m: 1,
                                    },
                                    width: '100%',
                                    height: '80vh'
                                }}
                            >
                                <object width="100%" height="100%"
                                    data="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"></object>
                            </Box>
                        </CustomTabPanel> */}
                    </Box>
                </Grid>
            </Grid>
            <Footer></Footer>
        </div>
    );
}

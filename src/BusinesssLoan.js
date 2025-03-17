import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from './Header';
import Footer from './Footer';


export default function BusinessLoan() {

    const currencies = [
        {
            value: "RS",
            label: "₹",
        },
        {
            value: "USD",
            label: "$",
        },
        {
            value: "LB",
            label: "£",
        },
        {
            value: "JPY",
            label: "¥",
        },
    ];

    const durations = [
        {
            value: "1",
            label: "Months",
        },
        {
            value: "12",
            label: "Years",
        },
    ];

    const [currency, setCurrency] = React.useState("");

    const handleChange = (event) => {
        // console.log("Hii");
        setCurrency(event.target.value);
    };

    const [time, setTime] = React.useState(1);

    const handleChange1 = (event) => {
        // console.log("Hiii");
        setTime(event.target.value);
    };

    const [loanAmount, setLoanAmount] = React.useState(0);
    const captureLoanAmount = (e) => {
        // console.log("Hii");
        setLoanAmount(e.target.value);
    };
    const [interest, setInterest] = React.useState(0);
    const captureInterest = (e) => {
        // console.log("Hii");
        setInterest(e.target.value);
    };
    const [loanDuration, setloanDuration] = React.useState(0);
    const captureLoanDuration = (e) => {
        //   console.log(e.target.value);
        setloanDuration(e.target.value);
    };

    var [a, setA] = React.useState(0);
    // var [b, setB] = React.useState(0);
    // var [c, setC] = React.useState(0);

    const calculate = (e) => {
        e.preventDefault();

        const time1 = parseFloat(time);
        const loanAmount1 = parseFloat(loanAmount);
        const interest1 = parseFloat(interest) / 100 / 12;
        const loanDuration1 = parseFloat(loanDuration * time);

        const x = 1 / (1 + interest1) ** loanDuration1;
        var monthly = (interest1 * loanAmount1) / (1 - x);
        var total = monthly * loanDuration1;
        var loanInterest = total - loanAmount1;

        monthly = (Math.round(monthly * 100) / 100).toFixed(2);
        total = (Math.round(total * 100) / 100).toFixed(2);
        loanInterest = (Math.round(loanInterest * 100) / 100).toFixed(2);

        a = setA(monthly);
        // b = setB(total);
        // c = setC(loanInterest);
    };
    return (
        <div>
            <Header></Header>
            <div>
                <img src="./businessloanimg.jpg" alt="bg for business loan" width='100%' height={400} />
            </div>
            {/* one */}
            <Grid container direction="row" spacing={4}>
                <Grid item xs={6}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={4}>
                            <Grid item>
                                <Accordion sx={{ marginTop: '20px' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Detailed Benefits of SC Business Loans</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        Instant Approval
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        No physical interaction Required
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        Loan amount
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        Minimal Documentation
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>

                            <Grid item >
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Documents Required</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={3}>
                                                        Aadhar Card
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        Passport
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        PanCard
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        Voter ID Card
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        Telephone Bill
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        Electricity Bill
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        Medical Insurance Policy
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        Rental Agreement
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>

                            <Grid item>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>FAQ</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Accordion>
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-controls="panel2a-content"
                                                                id="panel2a-header"
                                                            >
                                                                <Typography>What is a business loan?</Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Typography>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                                </Typography>
                                                            </AccordionDetails>
                                                        </Accordion>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Accordion>
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-controls="panel2a-content"
                                                                id="panel2a-header"
                                                            >
                                                                <Typography>What are business loans used for?</Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Typography>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                                </Typography>
                                                            </AccordionDetails>
                                                        </Accordion>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Accordion>
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-controls="panel2a-content"
                                                                id="panel2a-header"
                                                            >
                                                                <Typography>What are the benefits of taking a business loan from SCB?</Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Typography>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                                </Typography>
                                                            </AccordionDetails>
                                                        </Accordion>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Accordion>
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-controls="panel2a-content"
                                                                id="panel2a-header"
                                                            >
                                                                <Typography>What are the Eligibility Criteria to get business loan?</Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Typography>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                                </Typography>
                                                            </AccordionDetails>
                                                        </Accordion>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>

                            <Grid item>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Terms & Conditions</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <div>
                        <br />
                        <div>
                            <Grid item sx={{ justifyContent: 'center' }}><h2>Calculate your EMI now</h2></Grid>
                            <Grid container sx={{ justifyContent: 'center' }}>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        fullWidth
                                        label="Currency"
                                        defaultValue="Rs."
                                        onChange={handleChange}

                                    >
                                        {currencies.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Loan amount"
                                        variant="outlined"
                                        fullWidth
                                        onChange={captureLoanAmount}
                                        type="number"

                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container sx={{ justifyContent: 'center' }}>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        id="outlined-read-only-input"
                                        defaultValue="%"
                                        className=""
                                        fullWidth
                                        inputProps={{
                                            min: 0,
                                            style: { textAlign: "center", fontWeight: "bold" },
                                        }}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        className=""
                                        id="outlined-basic"
                                        label="Interest per annum"
                                        fullWidth
                                        variant="outlined"
                                        onChange={captureInterest}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container sx={{ justifyContent: 'center' }}>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        className=""
                                        id="outlined-select-currency"
                                        select
                                        fullWidth
                                        label="Duration"
                                        defaultValue="1"
                                        onChange={handleChange1}
                                    >
                                        {durations.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        className=""
                                        id="outlined-basic"
                                        label="Loan duration"
                                        fullWidth
                                        variant="outlined"
                                        onChange={captureLoanDuration}
                                    />
                                </Grid>
                            </Grid>
                            {/* <Box component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Currency"
                                    defaultValue="Rs."
                                    onChange={handleChange}

                                >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>


                                <TextField
                                    id="outlined-basic"
                                    label="Loan amount"
                                    variant="outlined"
                                    onChange={captureLoanAmount}
                                    type="number"

                                />
                            </Box>

                            <Box component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}>
                                <TextField
                                    id="outlined-read-only-input"
                                    defaultValue="%"
                                    className=""
                                    inputProps={{
                                        min: 0,
                                        style: { textAlign: "center", fontWeight: "bold" },
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />

                                <TextField
                                    className=""
                                    id="outlined-basic"
                                    label="Interest per annum"
                                    variant="outlined"
                                    onChange={captureInterest}
                                />
                            </Box>

                            <Box component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}>
                                <TextField
                                    className=""
                                    id="outlined-select-currency"
                                    select
                                    label="Duration"
                                    defaultValue="1"
                                    onChange={handleChange1}
                                >
                                    {durations.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    className=""
                                    id="outlined-basic"
                                    label="Loan duration"
                                    variant="outlined"
                                    onChange={captureLoanDuration}
                                />
                            </Box> */}





                            {/* <div
                                className="container"
                                style={{
                                    maxWidth: "50vw",
                                    display: "block",
                                    margin: "auto",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexWrap: "wrap",
                                }}
                            >
                                <TextField
                                    className="col-sm-12 col-md-3 my-1"
                                    id="outlined-select-currency"
                                    select
                                    label="Currency"
                                    defaultValue="RS"
                                    onChange={handleChange}
                                >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    className="col-sm-12 col-md-9 my-1"
                                    id="outlined-basic"
                                    label="Loan amount"
                                    variant="outlined"
                                    onChange={captureLoanAmount}
                                    type="number"
                                />

                                <TextField
                                    id="outlined-read-only-input"
                                    defaultValue="%"
                                    className="col-sm-12 col-md-3 my-1"
                                    inputProps={{
                                        min: 0,
                                        style: { textAlign: "center", fontWeight: "bold" },
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <TextField
                                    className="col-sm-12 col-md-9 my-1"
                                    id="outlined-basic"
                                    label="Interest per annum"
                                    variant="outlined"
                                    onChange={captureInterest}
                                />

                                <TextField
                                    className="col-sm-12 col-md-3 my-1"
                                    id="outlined-select-currency"
                                    select
                                    label="Duration"
                                    defaultValue="1"
                                    onChange={handleChange1}
                                >
                                    {durations.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    className="col-sm-12 col-md-9  my-1"
                                    id="outlined-basic"
                                    label="Loan duration"
                                    variant="outlined"
                                    onChange={captureLoanDuration}
                                />
                            </div> */}
                            <br />
                            <Button onClick={calculate} variant="contained">
                                Calculate
                            </Button>&nbsp;&nbsp;
                            Your Monthly Payment: {currency} {a}
                        </div>
                    </div>
                </Grid>
            </Grid><br /><br />
            <Footer></Footer>
        </div >
    );
}
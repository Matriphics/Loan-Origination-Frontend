import { Fragment, useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PersonalForm from './PersonalForm copy';
import Review from './Review';
import Header2 from './Header2';
import Footer from './Footer';
import axios from 'axios';
import FormData from 'form-data';

const steps = ['Personal Details', 'Address details', 'Review your Form'];

export default function BasicDetails() {
    const [activeStep, setActiveStep] = useState(0);
    const [formdata, setFormdata] = useState({});
    const [isFormComplete, setIsFormComplete] = useState(false);
    const active = [false, false, false];

    active[0] = formdata.applicant_name && formdata.applicant_dob && formdata.applicant_phn_no &&
        formdata.applicant_alt_no && formdata.applicant_email && formdata.gender &&
        formdata.aadhar_no && formdata.pan_no && formdata.income && formdata.loan_type &&
        formdata.loan_amount;

    active[1] = formdata.address1 && formdata.address2 && formdata.city && formdata.state &&
        formdata.country && formdata.zip;

    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [file3, setFile3] = useState(null);
    var data = new FormData();
    var id = "SCB2023L008";
    data.append('file1', file1);
    data.append('file2', file2);
    data.append('file3', file3);
    data.append('bd_id', id);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        console.log(activeStep);
        setIsFormComplete(active[activeStep + 1]);
    };
    const handleSaveNext = () => {
        setActiveStep(activeStep + 1);
        setIsFormComplete(false);

        let data1 = formdata
        data1['bd_id'] = id
        data1['application_date'] = Date.now()
        data1['username'] = localStorage.getItem('username')
        console.log(data1)
        
        var config1 = {
            method: 'post',
            url: 'http://localhost:9090/getdata',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data1)
        };
        axios(config1)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

        var config = {
            method: 'post',
            url: 'http://localhost:9090/fileuploadmulti',
            headers: {
                'accept': '*/*',
                'Content-Type': 'multipart/form-data',
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
        setIsFormComplete(active[activeStep + 1]);
    };

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <PersonalForm formdata={formdata} setFormdata={setFormdata} setFile1={setFile1} setFile2={setFile2} setFile3={setFile3} />;
            case 1:
                return <AddressForm formdata={formdata} setFormdata={setFormdata} />;
            case 2:
                return <Review formdata={formdata} setFormdata={setFormdata} />;
            default:
                throw new Error('Unknown step');
        }
    }

    useEffect(() => {
        if (activeStep === 0) {
            if (
                formdata.applicant_name && formdata.applicant_dob && formdata.applicant_phn_no &&
                formdata.applicant_alt_no && formdata.applicant_email && formdata.gender && formdata.aadhar_no && formdata.pan_no &&
                formdata.income && formdata.loan_amount && formdata.loan_type
            ) {
                setIsFormComplete(true);
            }
            else setIsFormComplete(false);
        } else if (activeStep === 1) {
            if (
                formdata.address1 && formdata.address2 && formdata.city &&
                formdata.state && formdata.country && formdata.zip
            ) {
                setIsFormComplete(true);
            }
            else setIsFormComplete(false);
        } else {
            setIsFormComplete(false);
        }
    }, [formdata])

    return (
        <div>
            <Header2></Header2>
            <Fragment>
                <CssBaseline />
                <Container component="main" maxWidth="sm" sx={{ marginTop: '100px', mb: 4 }}>
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

                        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you.
                                </Typography><br />
                                <Typography variant="subtitle1">
                                    Your application is submitted and your application number
                                    is sent to your registered mail id and phone number.
                                </Typography><br /><br />
                            </Fragment>
                        ) :
                            (
                                <Fragment>
                                    {getStepContent(activeStep)}
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                                Back
                                            </Button>
                                        )}
                                        {activeStep === steps.length - 1 ? (
                                            <Button
                                                variant="contained"
                                                onClick={handleSaveNext}
                                                sx={{ mt: 3, ml: 1 }}
                                            >Submit</Button>
                                        ) : (
                                            <Button
                                                disabled={!isFormComplete}
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 3, ml: 1 }}
                                            >Next</Button>)}
                                    </Box>
                                </Fragment>
                            )}
                    </Paper>
                </Container>
            </Fragment><br /><br /><br /><br />
            <Footer></Footer>
        </div>
    );
}
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';

export default function Faq() {
    return (
        <div>
            <br />
            <Grid container xs={2} sx={{ fontSize: 30, fontWeight: '600', color: 'grey', marginLeft: '20px' }}>FAQ</Grid>
            <br />
            <Grid sx={{ marginRight: '20px', marginLeft: '20px' }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>How do I apply for a loan?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: 'grey' }}>
                            You can apply for a loan by filling out an aplication with the
                            lender.This typically involves providing personal and financial
                            information
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>What effects my eligibility for a loan?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: 'grey' }}>
                            Lenders consider factors like your credit score,income,employement histoty,
                            and debt-to-income ratio to determine your eligibility for a loan
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Can I pay my loan early?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: 'grey' }}>
                            Yes,many loans allow for early repayment.However,some loans might have
                            prepayment penalities or fees for paying off the loan before agreed-upon-terms
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </div>
    );
}
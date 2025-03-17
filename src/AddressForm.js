import { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddressForm(props) {
    const handleaddress1 = (e) => props.setFormdata({...props.formdata, address1:e.target.value})
    const handleaddress2 = (e) => props.setFormdata({...props.formdata, address2:e.target.value})
    const handlecity = (e) => props.setFormdata({...props.formdata, city:e.target.value})
    const handlestate = (e) => props.setFormdata({...props.formdata, state:e.target.value})
    const handlecountry = (e) => props.setFormdata({...props.formdata, country:e.target.value})
    const handlezip = (e) => props.setFormdata({...props.formdata, zip:e.target.value})
    
    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Enter Your Address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="address-line1"
                        variant="standard"
                        onChange={handleaddress1}
                        defaultValue={props.formdata.address1}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        fullWidth
                        autoComplete="address-line2"
                        variant="standard"
                        onChange={handleaddress2}
                        defaultValue={props.formdata.address2}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="address-level2"
                        variant="standard"
                        onChange={handlecity}
                        defaultValue={props.formdata.city}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        fullWidth
                        variant="standard"
                        onChange={handlestate}
                        defaultValue={props.formdata.state}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        type="number"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="postal-code"
                        variant="standard"
                        inputProps={{maxLength: 6}}
                        onChange={handlezip}
                        defaultValue={props.formdata.zip}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="country"
                        variant="standard"
                        onChange={handlecountry}
                        defaultValue={props.formdata.country}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" sx={{marginLeft:'-200px'}} />}
                        label="Use this address for future purposes"
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
}
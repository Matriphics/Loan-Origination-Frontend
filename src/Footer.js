import { Grid } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
    return (
        <Grid container direction="row" alignItems={'center'} sx={{ height: '40px', backgroundColor: '#017aa7', color: 'white'}}>
            <Grid xs={4} alignContent={'center'} justifyContent="flex-start">
                Copyright © 2023. All rights reserved.</Grid>
            <Grid xs={4}></Grid>
            <Grid xs={4} alignContent={'center'} justifyContent="flex-end">
                <FacebookOutlinedIcon sx={{color:'white', paddingRight: '5px'}}/>
                <TwitterIcon sx={{color:'white', paddingRight: '5px'}}/>
                <GoogleIcon sx={{color:'white', paddingRight: '5px'}}/>
                <LinkedInIcon sx={{color:'white', paddingRight: '5px'}}/>
            </Grid>
        </Grid>
    )
}
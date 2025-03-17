import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material"
import { Link } from 'react-router-dom';

export default function Cards() {
    return (
        <Grid container spacing={6}>
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 400, marginLeft: '20px' }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image="personalloanimg.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            PERSONAL LOAN
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            When life demands more ,our personal loans provide the financial support you need
                        </Typography>
                    </CardContent>
                    <CardActions>
        
                        {/* <Button size="small">Share</Button> */}
                        <Link to='/personalloan' style={{textDecoration: 'none'}}>Learn More</Link>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image="homeloanimg.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            HOME LOAN
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            When life demands more ,our personal loans provide the financial support you need
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* <Button size="small">Share</Button> */}
                        <Link to='/homeloan' style={{textDecoration: 'none'}}>Learn More</Link>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 400, marginRight: '20px' }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image="businessloanimg.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            BUSINESS LOAN
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            When life demands more ,our personal loans provide the financial support you need
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* <Button size="small">Share</Button> */}
                        <Link to='/businessloan' style={{textDecoration: 'none'}}>Learn More</Link>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}
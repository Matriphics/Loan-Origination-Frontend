import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header1 from './Header1';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function CheckerLogin(props) {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [forgotPasswordDialogueOpen, setForgotPasswordDialogueOpen] = useState(false)
    const [captchaInput, setCaptchaInput] = useState(1)
    const [errorMessage, setErrorMessage] = useState("")
    const [captcha, setCaptcha] = useState({
        num1: 0,
        num2: 0
    })
    const [loginAttempts, setLoginAttempts] = useState(0);
    const [lastLoginAttempt, setLastLoginAttempt] = useState(0);
    const currentTime = Date.now();

    const handleForgotPassword = () => {
        setForgotPasswordDialogueOpen(true)
    }

    const handleFPClose = () => {
        setForgotPasswordDialogueOpen(false)
    }

    const captureUsername = (e) => setUsername(e.target.value)
    const capturePassword = (e) => setPassword(e.target.value)
    const captureCaptcha = (e) => setCaptchaInput(parseInt(e.target.value))

    const login = () => {
        // fetch(`http://localhost:3100/api/login?username=${username}&password=${password}`)
        // .then(res => res.json())
        // .then(res => {
        //     if (res.success) {
        //         props.setLoggedin(true)
        //         navigate("/home")
        //     }
        // })
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:9090/checkerlogin?username=${username}&password=${password}`,
            headers: {}
        };
        axios.request(config)
            .then((res) => {
                console.log(res);
                if ((loginAttempts >= 2)) {
                    setErrorMessage('Account locked. Please try again later');
                    setLastLoginAttempt(currentTime);
                }
                else {
                    if (res.data) {
                        if (captcha.num1 + captcha.num2 === captchaInput) {
                            props.setCheckerLoggedin(true)
                            localStorage.setItem('checker_id', username)
                            navigate("/checkerinbox")
                            setLoginAttempts(0);
                            setLastLoginAttempt(0);
                        }
                        else {
                            setErrorMessage("Incorrect Captcha!");
                        }
                    }
                    else {
                        setErrorMessage("Incorrect Username Or Password!");
                    }
                }
                setLoginAttempts(loginAttempts + 1);
                console.log(loginAttempts)
                // // if ((loginAttempts >= 3) || (currentTime - lastLoginAttempt < 300000)) 
            })
            .catch((error) => {
                console.log(error);
            });

    }
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    useEffect(() => {
        // generate two random number between 1-10
        let newCaptcha = {
            num1: Math.floor(1 + Math.random() * (10 - 1 + 1)),
            num2: Math.floor(1 + Math.random() * (10 - 1 + 1))
        }
        setCaptcha(captcha => newCaptcha);
    }, [])

    return (
        <div>
            <Header1></Header1>
            <Container component="main" maxWidth="xs" style={{}}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#005d9a' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                       Checker Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="Text"
                            label="Username"
                            name="Username"
                            autoComplete="Username"
                            autoFocus
                            onChange={captureUsername}
                        />
                        <TextField
                            margin="normal"
                            required={true}
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={capturePassword}
                        />
                        <Grid container sx={{ justifyContent: 'center' }}>
                            <Grid item xs={12} sm={6}>
                                <h3 fullWidth>{captcha.num1} + {captcha.num2} =</h3>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="captcha"
                                    type="text"
                                    id="captcha"
                                    onChange={captureCaptcha}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{
                        '& > :not(style)': { width: '25ch' },
                    }}>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                            style={{
                                marginLeft: '-20px'
                            }}
                        />
                        <Link href="#" variant="inherit" onClick={handleForgotPassword} sx={{
                            textAlign: 'left'
                        }}>
                            Reset Password

                        </Link>
                    </Box>

                </Box>
                <Dialog open={forgotPasswordDialogueOpen} onClose={handleFPClose}>
                    <DialogTitle textAlign='center'>Reset Password</DialogTitle>
                    <DialogContent sx={{width:"400px"}}>
                        <TextField
                            autoFocus
                            margin="normal"
                            id="name"
                            label="Enter your registered email address"
                            type="email"
                            fullWidth
                            variant="outlined"
                            required
                        />
                        {/* <TextField
                            variant="outlined"
                            autoFocus
                            margin="normal"
                            id="name"
                            label="Phone Number"
                            type="Phone Number"
                            fullWidth
                            required
                        /> */}
                    </DialogContent>
                    <DialogActions>
                        {/* <Button onClick={handleFPClose}>Login</Button> */}
                        <Button onClick={handleFPClose}>Reset</Button>
                    </DialogActions>
                </Dialog>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#005d9a", marginTop: '10px' }}
                    onClick={login}
                >
                    Sign In
                </Button>
                <h3>{errorMessage}</h3>
            </Container><br /><br />
            <Footer></Footer>
        </div>
    );
}
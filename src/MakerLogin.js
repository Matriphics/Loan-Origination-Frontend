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
import DialogTitle from '@mui/material/DialogTitle';
// Removed axios import as API calls are no longer used

export default function MakerLogin(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [forgotPasswordDialogueOpen, setForgotPasswordDialogueOpen] = useState(false);
    const [captchaInput, setCaptchaInput] = useState(1);
    const [errorMessage, setErrorMessage] = useState("");
    const [captcha, setCaptcha] = useState({
        num1: 0,
        num2: 0
    });
    const [loginAttempts, setLoginAttempts] = useState(0);
    const [lastLoginAttempt, setLastLoginAttempt] = useState(0);
    const currentTime = Date.now();

    const handleForgotPassword = () => {
        setForgotPasswordDialogueOpen(true);
    };

    const handleFPClose = () => {
        setForgotPasswordDialogueOpen(false);
    };

    const captureUsername = (e) => setUsername(e.target.value);
    const capturePassword = (e) => setPassword(e.target.value);
    const captureCaptcha = (e) => setCaptchaInput(parseInt(e.target.value));

    const login = () => {
        // Check if login attempts exceed limit
        if (loginAttempts >= 2) {
            setErrorMessage('Account locked. Please try again later');
            setLastLoginAttempt(currentTime);
            return;
        }

        // Custom credentials: username "maker" and password "makerpass"
        if (username === "maker" && password === "makerpass") {
            if (captcha.num1 + captcha.num2 === captchaInput) {
                props.setMakerLoggedin(true);
                localStorage.setItem('maker_id', username);
                navigate("/makerinbox");
                setLoginAttempts(0);
                setLastLoginAttempt(0);
            } else {
                setErrorMessage("Incorrect Captcha!");
                setLoginAttempts(loginAttempts + 1);
            }
        } else {
            setErrorMessage("Incorrect Username Or Password!");
            setLoginAttempts(loginAttempts + 1);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        // Generate two random numbers between 1-10 for captcha
        let newCaptcha = {
            num1: Math.floor(1 + Math.random() * 10),
            num2: Math.floor(1 + Math.random() * 10)
        };
        setCaptcha(newCaptcha);
    }, []);

    return (
        <div>
            <Header1 />
            <Container component="main" maxWidth="xs">
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
                        Maker Sign in
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
                            required
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
                                <h3>{captcha.num1} + {captcha.num2} =</h3>
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
                    <Box sx={{ '& > :not(style)': { width: '25ch' } }}>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                            style={{ marginLeft: '-20px' }}
                        />
                        <Link href="#" variant="inherit" onClick={handleForgotPassword} sx={{ textAlign: 'left' }}>
                            Reset Password
                        </Link>
                    </Box>
                </Box>
                <Dialog open={forgotPasswordDialogueOpen} onClose={handleFPClose}>
                    <DialogTitle textAlign='center'>Reset Password</DialogTitle>
                    <DialogContent sx={{ width: "400px" }}>
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
                    </DialogContent>
                    <DialogActions>
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
            </Container>
            <br /><br />
            <Footer />
        </div>
    );
}

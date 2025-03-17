import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

export default function Header1() {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
            <table cellpadding="0" cellspacing="0" style={{ width: '100%' }}>
                <tbody>
                    <tr style={{ height: '20px' }}>
                        <td style={{ width: '20%', backgroundColor: '#3dae38' }}></td>
                        <td style={{ width: '10%', backgroundColor: '#009015' }}></td>
                        <td style={{ width: '15%', backgroundColor: '#004a6d' }}></td>
                        <td style={{ width: '5%', backgroundColor: '#017aa7' }}></td>
                        <td style={{ width: '50%', backgroundColor: '#005d9a' }}></td>
                    </tr>
                </tbody>
            </table>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src='logo.png' alt='scb logo' style={{ marginLeft:'20px', marginRight: '20px', marginBottom: 'flex', height: '40px', width: '100px' }} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button sx={{ my: 2, color: '#238500', display: 'block', fontWeight: '700', marginLeft: 'auto', marginRight: '20px' }}>You're in &nbsp;&nbsp;<LanguageOutlinedIcon sx={{color:'black', mb:'-6px'}}/> India</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
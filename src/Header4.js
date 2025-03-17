
import logo from './logo.png'
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Link } from 'react-router-dom'

export default function Header4() {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorElLoan, setAnchorElLoan] = useState(null);

    const handleClick = (event) => {
        setAnchorElLoan(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElLoan(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
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
                    <img src={logo} alt='scb logo' style={{ marginRight: 20, marginBottom: 'flex', height: '40px', width: '100px' }} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button sx={{ my: 2, color: '#0473ea', display: 'block', fontWeight: '700' }}><Link to='/checkerinbox' style={{ textDecoration: 'none', color: 'inherit' }}>Inbox</Link></Button>
                        <Button sx={{ my: 2, color: '#238500', display: 'block', fontWeight: '700', marginLeft: 'auto', marginRight: '20px' }}><LanguageOutlinedIcon sx={{ color: 'black', mb: '-6px' }} /> India</Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Customer" src="" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}><Link to='/dashboard' style={{ textDecoration: 'none', color: 'inherit' }}>Profile</Link></MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}><Link to='/checkerlogin' style={{ textDecoration: 'none', color: 'inherit' }}>Logout</Link></MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {UserAuth} from '../auth/AuthContext';
import {makeStyles} from '@mui/styles';
import {AppBar, Avatar, Button, Menu, MenuItem, Toolbar, Typography} from "@mui/material";

const useStyles = makeStyles({
    logo: {
        width: '30px', // Adjust width as needed
        height: '30px', // Adjust height as needed
    },
});

const Navbar = () => {
    const classes = useStyles();
    const {user, logOut} = UserAuth();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button onClick={() => window.location.href = '/'}>
                    <img src="logo192.png" alt="Website Logo" className={classes.logo}/>
                    <Typography variant="h6" noWrap component="span" style={{marginLeft: '10px', color: 'white'}}>
                        Website Name
                    </Typography>
                </Button>
                {user?.displayName ? (
                    <div>
                        <Button onClick={handleOpenMenu}>
                            <Avatar alt={user.displayName} src={user.photoURL}/>
                        </Button>
                        <div style={{flexGrow: 1}}/>
                        <Menu
                            id="profile-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleCloseMenu}
                        >
                            <MenuItem onClick={() => window.location.href = "/account"}>Account</MenuItem>
                            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                        </Menu>
                    </div>
                ) : (
                    <Link to='/signin'>Sign in</Link>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
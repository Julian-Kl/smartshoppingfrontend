/*
// Import
 */
// React
import React, {useContext, useEffect, useState} from 'react';

// Router
import {Link, Redirect, useLocation} from "react-router-dom";

// Context
import LoginStatus from '../contexts/LoginContext';
import ListContext from "../contexts/ListContext";

// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavItem from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

// Material UI Components
import Button from "@material-ui/core/Button";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles, createStyles } from '@material-ui/core/styles';

// Material UI Icons
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

// Framer
import { motion } from "framer-motion";



const useStyles = makeStyles((theme) =>
    createStyles({
        search: {
            maxWidth: 300,
        },
        autocomplete: {
            [theme.breakpoints.down('sm')]: {
                width: 160,
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: '300px',
                width: 200,
            },
        },
        searchButton: {
            marginLeft: 10,
        },
        menu: {
            display: 'block',
            [theme.breakpoints.down('sm')]: {
                marginTop: 10,
                marginBottom: 10
            },
            [theme.breakpoints.up('sm')]: {

            },
        },
        menuDesc: {
            [theme.breakpoints.down('sm')]: {
                display: 'inline',
                fontFamily: 'Arial',
                marginLeft: 20,
            },
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        }
    }),
);

/*
// Function
 */
function NavBar() {
    // Context User
    const {setUser} = useContext(LoginStatus);

    // Context List
    const {setList} = useContext(ListContext);

    // State
    const [searchValue, setSearchValue] = useState('');
    const [redirect, setRedirect] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if(location !== '/'){
            setRedirect(false);
        }
    }, [redirect])

    // Dropdown Menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    // Sitename Funktion
    const siteName = () => {
        switch (location.pathname) {
            default:
                return("SmartShopping");
            case "/":
                return("Startseite");
            case "/preferences":
                return("Präferenzen");
            case "/products":
                return("Alle Produkte");
            case "/list":
                return("Einkaufsliste");
            case "/search":
                return("Suche");
        }
    }

    // Autocomplete Options
    const searchItems = ["Milch", "Brot", "Käse"];
    const search = (e) => {
        e.preventDefault();
        setRedirect(true);
    }

    const classes = useStyles();

    // Export
    if(redirect){
        return(
            <Redirect
                to={{
                    pathname: `/search/${searchValue}`
                }}
            />
        );
    } else {
        return (
            <React.Fragment>
                <motion.div className="sticky-nav mx-auto" initial={{opacity: 0, y: -10}} animate={{opacity: 1, y:0}} transition={{delay: 0, duration: 0.4}}>
                    <Navbar expand="md" variant="light" bg="light" className="rounded">
                        <NavbarBrand className="navbar-brand cnavbar-location text-center">
                            {siteName()}
                        </NavbarBrand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-center">
                            <Button className={classes.menu} aria-controls="simple-menu" aria-haspopup="true" color="primary" onClick={handleClick}>
                                <MenuIcon/>
                                <span className={classes.menuDesc}>
                                    Navigation
                                </span>
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <Link to="/preferences">
                                    <MenuItem onClick={handleClose}>
                                        <NavItem className="clink">Präferenzen</NavItem>
                                    </MenuItem>
                                </Link>
                                <Link to="/products">
                                    <MenuItem onClick={handleClose}>
                                        <NavItem className="clink">Alle Produkte</NavItem>
                                    </MenuItem>
                                </Link>
                                <Link onClick={() => {
                                    setList([]);
                                    setUser(false);
                                }} to="/">
                                    <MenuItem onClick={handleClose}>
                                        <NavItem className="clink">Logout</NavItem>
                                    </MenuItem>
                                </Link>
                            </Menu>
                            <Link to="/list">
                                <Button className={classes.menu} color="primary">
                                    <ShoppingBasketIcon href="/home/list" aria-controls="simple-menu" aria-haspopup="true" color="primary" size="large"/>
                                    <span className={classes.menuDesc}>
                                        Einkaufsliste
                                    </span>
                                </Button>
                            </Link>
                            <Form inline className={classes.search} onSubmit={search}>
                                <Autocomplete
                                    freeSolo
                                    onInputChange={(event, value) => setSearchValue(value)}
                                    onChange={(event, value) => setSearchValue(value)}
                                    id="productSearch"
                                    className={classes.autocomplete}
                                    options={searchItems}
                                    getOptionLabel={(option) => option}
                                    renderInput={(params) =>
                                        <TextField {...params} type="text" label="Produktsuche" variant="outlined"/>}
                                />
                                <Button onClick={search} variant="contained" size="large" color="primary" className={classes.searchButton}>
                                    <SearchIcon/>
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </motion.div>
            </React.Fragment>
        );
    }
}

export default NavBar;
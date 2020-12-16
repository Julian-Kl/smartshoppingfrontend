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

// Material UI Icons
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

// Framer
import { motion } from "framer-motion";
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
                <motion.div initial={{opacity: 0, y: -10}} animate={{opacity: 1, y:0}} transition={{delay: 0, duration: 0.4}}>
                    <Navbar expand="lg" variant="light" bg="light" className="justify-content-center rounded">
                        <NavbarBrand className="navbar-brand cnavbar-location">
                            {siteName()}
                        </NavbarBrand>
                        <Button aria-controls="simple-menu" aria-haspopup="true" color="primary" onClick={handleClick}>
                            <MenuIcon/>
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
                            <Button>
                                <ShoppingBasketIcon href="/home/list" aria-controls="simple-menu" aria-haspopup="true" color="primary" size="large"/>
                            </Button>
                        </Link>
                        <Form inline className="NavForm" onSubmit={search}>
                            <Autocomplete
                                freeSolo
                                onInputChange={(event, value) => setSearchValue(value)}
                                onChange={(event, value) => setSearchValue(value)}
                                id="productSearch"
                                className="mr-sm-2"
                                options={searchItems}
                                getOptionLabel={(option) => option}
                                style={{ width: 220, marginLeft: 20}}
                                renderInput={(params) =>
                                    <TextField {...params} type="text" label="Produktsuche" variant="outlined"/>}
                            />
                            <Button onClick={search} variant="contained" size="large" color="primary">
                                <SearchIcon/>
                            </Button>
                        </Form>
                    </Navbar>
                </motion.div>
            </React.Fragment>
        );
    }
}

export default NavBar;
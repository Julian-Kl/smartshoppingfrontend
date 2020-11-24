/*
// Imports
 */
// React
import React, {useState, useMemo} from 'react';

// Router
import {BrowserRouter as Router, Switch, Route, useLocation, Redirect} from "react-router-dom";

// Contexts
import LoginStatus from './contexts/LoginContext';
import ListContext from './contexts/ListContext';

// Components
import LoginForms from './components/Login';
import NavBar from './components/Navbar';
import Start from './components/Start';
import List from './components/List';
import Preferences from './components/Preferences';
import Products from './components/Products';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

//CSS
import './main.scss';

/*
// Function
 */
function App() {
    // Context User
    const [user, setUser] = useState(false);
    const userMemo = useMemo(() => ({user, setUser}), [user, setUser]);

    // Context List
    const [list, setList] = useState([]);
    const addItem = (product_id, title, warnings, origin, weight, price, distance) => {
        setList([...list, {product_id: product_id, title: title, warnings: warnings, origin: origin, weight: weight, price: price, distance: distance }])
    }
    const removeItem = (product_id) => {
        setList(list.filter(item => item.product_id !== product_id))
    }
    const listMemo = useMemo(() => ({list, setList, addItem, removeItem}), [list, setList, addItem, removeItem]);

    // Location
    const location = useLocation();

    // Export
    if (location.pathname != "/" && user == false) {
        return(
            <Redirect to="/"/>
        )
    } else {
        return (
            <Container fluid className="mx-auto">
                <Row>
                    <Col xs={12} sm={12} md={10} lg={8} xl={8} className="justify-content-center mx-auto fullscreen">
                        <Router>
                            <Switch>
                                {user ?
                                    <LoginStatus.Provider value={userMemo}>
                                        <ListContext.Provider value={listMemo}>
                                            <Route path="/" component={NavBar}/>
                                            <Route path="/" exact component={Start}/>
                                            <Route path="/list" component={List}/>
                                            <Route path="/products" component={Products}/>
                                        </ListContext.Provider>
                                        <Route path="/preferences" component={Preferences}/>
                                    </LoginStatus.Provider>
                                    :
                                    <LoginStatus.Provider value={userMemo}>
                                        <Route path="/">
                                            <LoginForms />
                                        </Route>
                                    </LoginStatus.Provider>
                                }
                            </Switch>
                        </Router>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;

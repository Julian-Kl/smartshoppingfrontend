/*
// Imports
 */
// React
import React, {useContext, useState} from "react";

// Contexts
import ListContext from "../contexts/ListContext";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Material UI
import Button from "@material-ui/core/Button";
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

// Framer
import { motion } from "framer-motion";

/*
// Function
 */
function List() {
    // State
    const [refresh, setRefresh] = useState(false);

    // Context List
    const {list, removeItem} = useContext(ListContext);

    // Total price calculation
    const totalPrice = () => {
        let sum = 0;
        for (let i = 0; i < list.length; i++){
            sum = sum + list[i].price
        }
        return(sum.toFixed(2));
    }

    // Order items
    const orderList = () => {
        list.sort((a, b) => {
            return a.distance - b.distance;
        })
        setRefresh(true);
    }

    // Export
    if (list.length === 0) {
        return(<React.Fragment>
            <div className="text-white mt-4 rounded text-center">
                <p>Die Einkaufsliste ist leer.</p>
            </div>
        </React.Fragment>);
    } else {
        return (
            <React.Fragment>
                <Container>
                    {list.map(item => (
                        <motion.div key={item.id} className="px-4 bg-white shadow-lg mt-4 rounded" initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2, duration: 0.6}}>
                            <Row>
                                <Col sm={5} className="p-0 pl-3 pt-4">
                                    <h4 className="mb-1 product-title">{item.title}</h4>
                                    <p className="text-primary">{item.warnings}</p>
                                </Col>
                                <Col sm={3} className="p-sm-0 pl-sm-1  pt-sm-4">
                                    <p className="mb-2">Herkunft: {item.origin}</p>
                                    <p className="">Gewicht: {item.weight}</p>
                                </Col>
                                <Col sm={4} className="p-sm-0 pr-3 my-auto">
                                    <Button className="d-inline ml-xs-4 float-sm-right align-bottom"
                                            onClick={() => {
                                        removeItem(item.product_id)
                                    }}>
                                        <p className="price d-inline mt-4">{item.price} €
                                            <IndeterminateCheckBoxIcon color="secondary" fontSize="large" className="ml-3 mb-1"/>
                                        </p>
                                    </Button>
                                </Col>
                            </Row>
                        </motion.div>
                    ))}
                </Container>
                <Container className="sticky-list-options p-0">
                    <motion.div className="px-4 bg-white shadow-lg mt-4 rounded" initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2, duration: 0.6}}>
                        <Row>
                            <Col sm={9} className="p-4 pt-sm-4">
                                <Button variant="contained" size="large" color="primary" className="d-inline float-right align-bottom" onClick={orderList}>
                                    Sortieren für den Einkauf
                                </Button>
                            </Col>
                            <Col sm={3}>
                                <p className="total-price d-inline mt-sm-4 float-right">{totalPrice()} €</p>
                                <p className="total-price mt-sm-4 float-right total-price-desc mr-2">
                                    Gesamt:
                                </p>
                            </Col>
                        </Row>
                    </motion.div>
                </Container>
            </React.Fragment>
        );
    }
}

export default List;

/*
// Import
 */
// React
import React, {useContext, useEffect, useState} from 'react';

// Context
import LoginStatus from '../contexts/LoginContext';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Framer
import { motion } from 'framer-motion';
import { SearchApiService } from "../services/SearchApiService";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ListContext from "../contexts/ListContext";

/*
// Function
 */
function Search(props) {
    // State
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const searchApi = new SearchApiService();

    const fetchAllProducts = async () => {
        setIsLoaded(false);
        try {
            const products = await searchApi.getSearchResult(user.id, value);
            console.log(products);
            setItems(products);
            setIsLoaded(true);
        } catch (e) {
            setError(e);
            setIsLoaded(true);
        }
    };

    // Context User
    const {user} = useContext(LoginStatus);
    // Context List
    const { addItem } = useContext(ListContext);

    // Search Value
    const value = props.match.params.value;
    const searchItems = ["Milch", "Brot", "Käse"];
    let validValue;
    validValue = searchItems.includes(value);

    // API Request
    useEffect(() => {
        if(validValue){
            fetchAllProducts();
        }
    }, []);

    // Export
    if (validValue) {
        if (error) {
            return (
                <React.Fragment>
                    <div className="bg-white mt-2">Error: {error.message}</div>
                </React.Fragment>
            );
        } else if (!isLoaded) {
            return (
                <React.Fragment>
                    <div className="text-white mt-4 rounded text-center">
                        <p>laden...</p>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <Container>
                        {items.map((item) => (
                            <motion.div
                                key={item.product_id}
                                className="px-4 bg-white shadow-lg mt-4 rounded"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
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
                                        <Button
                                            className="d-inline ml-xs-4 float-sm-right align-bottom"
                                            onClick={() => {
                                                addItem(
                                                    item.product_id,
                                                    item.title,
                                                    item.warnings,
                                                    item.origin,
                                                    item.weight,
                                                    item.price,
                                                    item.distance
                                                );
                                            }}
                                        >
                                            <p className="price d-inline mt-4">
                                                {item.price} €
                                                <AddCircleIcon
                                                    color="primary"
                                                    fontSize="large"
                                                    className="ml-md-3 mb-1"
                                                />
                                            </p>
                                        </Button>
                                    </Col>
                                </Row>
                            </motion.div>
                        ))}
                    </Container>
                </React.Fragment>
            );
        }
    } else {
        return (
            <React.Fragment>
                <Container>
                    <motion.div className="p-4 bg-white shadow-lg mt-4 rounded" initial={{opacity: 0, y: -10}}
                                animate={{opacity: 1, y: 0}} transition={{delay: 0.2, duration: 0.6}}>
                        <Row className="mt-4">
                            <Col>
                                <p className="text-center">Bitte Suche nach einer der vorgeschlagenen
                                    Produktkategorien.</p>
                            </Col>
                        </Row>
                    </motion.div>
                </Container>
            </React.Fragment>
        );
    }
}

export default Search;

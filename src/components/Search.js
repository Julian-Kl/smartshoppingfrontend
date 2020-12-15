/*
// Import
 */
// React
import React, { useContext } from 'react';

// Context
import LoginStatus from '../contexts/LoginContext';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Framer
import { motion } from 'framer-motion';

/*
// Function
 */
function Search(props) {
    // Context User
    const {user} = useContext(LoginStatus);

    const value = props.match.params.value;
    const searchItems = ["Milch", "Brot", "Käse"];
    let validValue;
    validValue = searchItems.includes(value);

    console.log("Searchvalue:");
    console.log(value);
    console.log("User ID:");
    console.log(user.id);

    // Export
    if (validValue) {
        return (
            <React.Fragment>
                <Container>
                    <motion.div className="p-4 bg-white shadow-lg mt-4 rounded" initial={{opacity: 0, y: -10}}
                                animate={{opacity: 1, y: 0}} transition={{delay: 0.2, duration: 0.6}}>
                        <Row className="mt-4">
                            <Col>
                                <p className="text-center">richtige suche</p>
                            </Col>
                        </Row>
                    </motion.div>
                </Container>
            </React.Fragment>
        );
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

/*
// Imports
 */
// React
import React, {useContext} from "react";

// Context
import LoginStatus from "../contexts/LoginContext";

// Bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// Material UI
import Button from "@material-ui/core/Button";

// Framer
import { motion } from "framer-motion";

/*
// Function
 */
function LoginForms() {
    // Context User
    const {setUser} = useContext(LoginStatus);

    // Export
    return(
        <React.Fragment>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0, duration: 0.4}}>
                <Container className="bg-white p-5 rounded">
                    <Row>
                        <Col>
                            <motion.div initial={{opacity: 0, y: -60}} animate={{opacity: 1, y:0}} transition={{delay: 0, duration: 1}} className="mx-2 px-4">
                                <h1 className="text-center">Login</h1>
                                <p className="text-center">Wähle eine Persona um eine Einkaufsliste mit personalisierten Vorschlägen zu erstellen.</p>
                            </motion.div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-4">
                            <motion.div initial={{opacity: 0, x: -60}} animate={{opacity: 1, x:0}} transition={{delay: 0.2, duration: 1}} className="mx-2 p-4 cgrey shadow-lg rounded">
                                <h2>Andreas</h2>
                                <p>Möchte nachhaltig leben und einkaufen.
                                    Günstige Preise und Gesundheitsaspekte der Produkte sind ihm jedoch genauso wichtig.</p>
                                <Button variant="contained" size="large" color="primary" onClick={() => setUser({id: 1, name: "Andreas"})}>
                                    Login
                                </Button>
                            </motion.div>
                        </Col>
                        <Col className="mt-4">
                            <motion.div initial={{opacity: 0, x: 60}} animate={{opacity: 1, x:0}} transition={{delay: 0.3, duration: 1}} className="mx-2 p-4 cgrey shadow-lg rounded">
                                <h2>Sabine</h2>
                                <p>Achtet beim Einkaufen wenig auf die Preise und sonstige Eigenschaften der Produkte.
                                    Ihr Einkaufsverhalten gleicht eher dem einer Impulsivkäuferin.</p>
                                <Button variant="contained" size="large" color="primary" onClick={() => setUser({id: 2, name: "Sabine"})}>
                                    Login
                                </Button>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </React.Fragment>
    );
}

export default LoginForms;

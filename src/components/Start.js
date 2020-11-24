/*
// Import
 */
// React
import React, {useContext} from "react";

// Contexts
import LoginStatus from "../contexts/LoginContext";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Franer
import { motion } from "framer-motion";

/*
// Function
 */
function Start() {
    // Context User
    const {user} = useContext(LoginStatus);

    // Export
    return(
        <React.Fragment>
            <Container>
                <motion.div className="p-4 bg-white shadow-lg mt-4 rounded" initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2, duration: 0.6}}>
                    <h1 className="text-center">Willkommen</h1>
                    <Row className="mt-4">
                        <Col>
                            <p className="text-center">Hallo {user.name}, über den Menüpunkt "Präferenzen" kannst du dein Einkaufverhalten einsehen.</p>
                        </Col>
                        <Col>
                            <p className="text-center">Füge über die Suche oder den Menüpunkt "Alle Produkte" Artikel zu deiner Einkaufsliste hinzu.</p>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </React.Fragment>
    );
}

export default Start;

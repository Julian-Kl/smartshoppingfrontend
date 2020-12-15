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
import Form from "react-bootstrap/Form";

// Framer
import { motion } from "framer-motion";

/*
// Function
 */
function Preferences() {
    // Context User
    const {user} = useContext(LoginStatus);

    console.log(user.id)
    // Export
    if (user.id === 0) {
        return(
            <React.Fragment>
                <Container>
                    <motion.div className="p-4 bg-white shadow-lg mt-4 rounded" initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2, duration: 0.6}}>
                        <Row>
                            <Col className="text-center">
                                <h5 className="text-center">Demographische Angaben:</h5>
                                <p className="mt-4 mb-0">Geschlecht: weiblich</p>
                                <p className="mb-0">Alter: 55-60+</p>
                                <p>Aufgewachsen: Stadt</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center mt-4">
                                <h5>Auf der Scala von 1-5 wie sehr achten Sie auf den Preis?</h5>
                                <Form className="mt-4">
                                    <div>
                                        <p className="form-check-inline" >Gar nicht</p>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio cform-enabled"/>
                                        <p className="form-check-inline cml-12" >Sehr</p>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center mt-4">
                                <h5>Wie regelmäßig kaufen Sie regionale Produkte auf der Skala von 1-5?</h5>
                                <Form className="mt-4">
                                    <div>
                                        <p className="form-check-inline" >Gar nicht</p>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio cform-enabled"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <p className="form-check-inline cml-12" >Sehr</p>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center mt-4">
                                <h5>Wie sehr achten Sie auf gesunde Produkte, auf der Skala von 1-5?</h5>
                                <Form className="mt-4">
                                    <div>
                                        <p className="form-check-inline" >Gar nicht</p>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio cform-enabled"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <p className="form-check-inline cml-12" >Sehr</p>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center mt-4">
                                <h5>Wie sehr achten Sie auf nachhaltige Produkte, auf der Skala von 1-5?</h5>
                                <Form className="mt-4">
                                    <div>
                                        <p className="form-check-inline" >Gar nicht</p>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio cform-enabled"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <p className="form-check-inline cml-12" >Sehr</p>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </motion.div>
                </Container>
            </React.Fragment>
        );
    } else {
        return(
            <React.Fragment>
                <Container>
                    <motion.div className="p-4 bg-white shadow-lg mt-4 rounded" initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2, duration: 0.6}}>
                        <Row>
                            <Col className="text-center">
                                <h5 className="text-center">Demographische Angaben:</h5>
                                <p className="mt-4 mb-0">Geschlecht: männlich</p>
                                <p className="mb-0">Alter: 18-25</p>
                                <p>Aufgewachsen: Dorf</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center mt-4">
                                <h5>Auf der Scala von 1-5 wie sehr achten Sie auf den Preis?</h5>
                                <Form className="mt-4">
                                    <div>
                                        <p className="form-check-inline" >Gar nicht</p>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio cform-enabled"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <p className="form-check-inline cml-12" >Sehr</p>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center mt-4">
                                <h5>Wie regelmäßig kaufen Sie regionale Produkte auf der Skala von 1-5?</h5>
                                <Form className="mt-4">
                                    <div>
                                        <p className="form-check-inline" >Gar nicht</p>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio cform-enabled"/>
                                        <p className="form-check-inline cml-12" >Sehr</p>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center mt-4">
                                <h5>Wie sehr achten Sie auf gesunde Produkte, auf der Skala von 1-5?</h5>
                                <Form className="mt-4">
                                    <div>
                                        <p className="form-check-inline" >Gar nicht</p>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio cform-enabled"/>
                                        <p className="form-check-inline cml-12" >Sehr</p>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center mt-4">
                                <h5>Wie sehr achten Sie auf nachhaltige Produkte, auf der Skala von 1-5?</h5>
                                <Form className="mt-4">
                                    <div>
                                        <p className="form-check-inline" >Gar nicht</p>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio"/>
                                        <Form.Check inline type='inline-radio' disabled className="cform-radio cform-enabled"/>
                                        <p className="form-check-inline cml-12" >Sehr</p>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </motion.div>
                </Container>
            </React.Fragment>
        );
    }
}

export default Preferences;

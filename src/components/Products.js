/*
// Import
 */
// React
import React, { useContext, useEffect, useState } from 'react';

// Contexts
import ListContext from '../contexts/ListContext';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Material UI
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

// Framer
import { motion } from 'framer-motion';
import { ProductsApiService } from '../services/ProductsApiService';

/*
// Function
 */
function Products() {
  // State
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const productsApi = new ProductsApiService();

  const fetchAllProducts = async () => {
    setIsLoaded(false);
    try {
      const products = await productsApi.getAllProducts();
      console.log(products);
      setItems(products);
      setIsLoaded(true);
    } catch (e) {
      setError(e);
      setIsLoaded(true);
    }
  };

  // Context List
  const { addItem } = useContext(ListContext);

  // API Request
  useEffect(() => {
    fetchAllProducts();
  }, []);

  // Export
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
                <Col xs={5} className="p-0 pl-3 pt-4">
                  <h4 className="mb-1">{item.title}</h4>
                  <p className="text-primary">{item.warnings}</p>
                </Col>
                <Col xs={3} className="p-0 pl-1  pt-4">
                  <p className="mb-2">Herkunft: {item.origin}</p>
                  <p className="">Gewicht: {item.weight} g</p>
                </Col>
                <Col xs={4} className="p-0 pr-3 my-auto">
                  <Button
                    className="d-inline float-right align-bottom"
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
                        className="ml-3 mb-1"
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
}

export default Products;

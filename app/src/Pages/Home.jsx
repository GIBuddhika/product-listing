import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import ProductsLayout from '../Components/ProductsLayout';

const Home = () => {
    return (
        <Container fluid className="p-0">
            <Row>
                <Col xs={4}>
                    <Sidebar />
                </Col>
                <Col>
                    <ProductsLayout />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
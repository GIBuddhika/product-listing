import React from 'react'
import styled from 'styled-components';
import { Typography } from './Typography.styles';
import { Col, Row } from 'react-bootstrap';

const Product = ({ product }) => {
    return (
        <ProductWrapper>
                <Row>
                    <Col xs={3}>
                        <img src={product.image} alt={product.name} width={100} />
                    </Col>
                    <Col>
                        <Typography variant='paragraph'>{product.name}</Typography>
                        <Typography variant='paragraph'>{product.name}</Typography>
                    </Col>
                </Row>
        </ProductWrapper>
    )
}

export default Product

const ProductWrapper = styled.div`
    // padding: 20px;
`;
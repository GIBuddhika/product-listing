import React from 'react'
import { Typography } from './Typography.styles';
import { Col, Row } from 'react-bootstrap';
import ImageFrame from './ImageFrame';

const Product = ({ product }) => {
    return (
        <>
            <Row>
                <Col xs={3}>
                    <ImageFrame location={product.images[0]?.location} altName={product.name} margin={0} />
                </Col>
                <Col>
                    <Typography variant='h2'>{product.name}</Typography>
                    <Typography variant='paragraph'>{product.description}</Typography>
                </Col>
            </Row>
        </>
    )
}

export default Product

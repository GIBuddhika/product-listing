import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Typography } from '../Components/Typography.styles';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { ProductsOne } from '../Reducers/Products/ProductsOne';
import ImageCarousel from '../Components/ImageCarousal';

const Product = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const productResults = useSelector((state) => state.products.one.data);
    const isLoading = useSelector((state) => state.products.one.loading);

    useEffect(() => {
        dispatch(ProductsOne(id));
    }, [dispatch, id]);

    return (
        <Container fluid style={{ padding: '20px' }}>
            <Row>
                <Col>
                    {isLoading ?
                        'loading'
                        :
                        <>
                            <Link to={'/'}>&lt;-- Back</Link>
                            <Typography variant='h1'>{productResults.name}</Typography>
                            <Row>
                                <Col xs={4}>
                                    {/* slider */}
                                    <ImageCarousel images={productResults.images} />
                                </Col>
                                <Col xs={8}>
                                    {/* details */}
                                    <Typography variant='paragraph'>{productResults.description}</Typography>
                                    <Typography variant='h2'>${productResults.price}</Typography>
                                    <Typography variant='paragraph'>Available Quantity: {productResults.quantity}</Typography>
                                </Col>
                            </Row>
                        </>
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Product;
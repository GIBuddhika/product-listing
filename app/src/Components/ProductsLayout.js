import React from 'react'
import styled from 'styled-components';
import Product from './Product';
import { Typography } from './Typography.styles';
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

const ProductsLayout = () => {
    const productsResults = useSelector((state) => state.products.all.data);
    const isLoading = useSelector((state) => state.categories.loading);
    let navigate = useNavigate();

    return (
        <ProductsLayoutWrapper>
            <>
                <Typography variant='h1'>Products</Typography>
                {!isLoading &&
                    <>
                        <UL>
                            {productsResults.length > 0 ?
                                productsResults.map((product) =>
                                    <LI key={product.id} onClick={() => { navigate('/product/' + product.id) }}>
                                        <Product product={product} />
                                    </LI>
                                )
                                :
                                <Typography variant='paragraph'>No products found.</Typography>
                            }
                        </UL>
                    </>
                }
            </>
        </ProductsLayoutWrapper >
    )
}

export default ProductsLayout

const ProductsLayoutWrapper = styled.div`
    padding: 20px;
`;

const UL = styled.ul`
    padding:0;
`;
const LI = styled.li`
    background-color:beige;
    padding: 20px;
    margin-bottom: 20px;
    list-style: none;
    cursor: pointer;
    
    &:hover{
        background-color:#e3e39c;
    }
`;
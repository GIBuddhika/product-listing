import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Product from './Product';
import { Typography } from './Typography.styles';
import { Link } from "react-router-dom"

const ProductsLayout = () => {

    //get products
    let [products, setProducts] = useState();
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setProducts([
            { id: 1, name: 'cat 1', image: 'https://pbs.twimg.com/profile_images/1501565644092936193/SefiCXEl_400x400.jpg' },
            { id: 2, name: 'cat 1', image: 'https://pbs.twimg.com/profile_images/1501565644092936193/SefiCXEl_400x400.jpg' },
            { id: 3, name: 'cat 1', image: 'https://pbs.twimg.com/profile_images/1501565644092936193/SefiCXEl_400x400.jpg' },
            { id: 4, name: 'cat 1', image: 'https://pbs.twimg.com/profile_images/1501565644092936193/SefiCXEl_400x400.jpg' },
        ]);
        setLoading(false);
    }, [])

    return (
        <ProductsLayoutWrapper>

            <>
                <Typography variant='h1'>Products</Typography>
                {!loading &&
                    <>
                        <UL>
                            {
                                products.map((product) =>
                                    <LI key={product.id} >
                                        <Link to={'/product/' + product.id}>
                                            <Product product={product} />
                                        </Link>
                                    </LI>
                                )
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
    
    &:hover{
        background-color:#e3e39c;
    }
`;
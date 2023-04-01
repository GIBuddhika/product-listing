import React from 'react'
import styled from 'styled-components';
import { Typography } from './Typography.styles';

const Category = ({ category, search }) => {
    return (
        <CategoryWrapper onClick={search}>
            <img src={category.image} alt={category.name} width={100} />
            <Typography variant='paragraph'>{category.name}</Typography>
        </CategoryWrapper>
    )
}

export default Category

const CategoryWrapper = styled.div`
    display: block;
    text-align:center;
`;


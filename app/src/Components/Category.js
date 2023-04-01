import React from 'react'
import styled from 'styled-components';
import { Typography } from './Typography.styles';
import ImageFrame from './ImageFrame';

const Category = ({ category, search }) => {
    return (
        <CategoryWrapper onClick={search}>
            <ImageFrame location={category.images[0]?.location} altName={category.name} />
            <Typography variant='paragraph'>{category.name}</Typography>
        </CategoryWrapper>
    )
}

export default Category

const CategoryWrapper = styled.div`
    display: block;
    text-align:center;
    cursor: pointer;
    &:hover{
        background-color: #00b3b3;
    }
    margin-bottom:10px;
    padding:10px 10px 0 10px;
`;


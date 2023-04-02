import React from 'react'
import styled from 'styled-components';
import { Typography } from './Typography.styles';
import ImageFrame from './ImageFrame';
import { useSelector } from 'react-redux';

const Category = ({ category, search }) => {
    const activeCategory = useSelector((state) => state.categories.active.id);
    console.log(activeCategory);

    return (
        <CategoryWrapper onClick={search} className={activeCategory === category.id ? 'active' : ''}>
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

    &.active{
        background-color: #00b3b3;
    }
`;


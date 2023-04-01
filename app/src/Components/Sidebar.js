import React from 'react'
import styled from 'styled-components';
import Categories from './Categories';
import { Typography } from './Typography.styles';

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <Typography variant='h1'>Categories</Typography>
            <br />
            <Categories />
        </SidebarWrapper>
    )
}

export default Sidebar

const SidebarWrapper = styled.div`
    padding: 20px;
    background-color: aquamarine;        
`;

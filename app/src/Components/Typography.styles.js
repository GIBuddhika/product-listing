import React from 'react';
import styled from "styled-components";

const variantsMapping = {
    h1: {
        tag: "h1",
        size: "50px",
        weight: "900"
    },
    h2: {
        tag: "h2",
        size: "30px",
        weight: "900"
    },
    paragraph: {
        size: "16px",
        tag: "p",
        weight: "400"
    },
};

export const Typography = styled((props) => {
    const Component = props.variant ? variantsMapping[props.variant]['tag'] : "p";
    return <Component {...props}> {props.children} </Component>;
})`
    font-weight: ${props => `${variantsMapping[props.variant]['weight']}`};
    font-size: ${props => `${variantsMapping[props.variant]['size']}`};
    color: ${props => `${props.color ? props.color : '#33475B'}`};
    margin: ${props => `${props.margin ? props.margin : '0 0 1rem 0'}`};
`;
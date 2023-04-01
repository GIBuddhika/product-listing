import React from 'react'
import styled from 'styled-components';

const ImageFrame = ({ location, altName, margin = "0 auto" }) => {
    return (
        <ImageWrapper url={location} margin={margin}></ImageWrapper>
    )
}

export default ImageFrame

const ImageWrapper = styled.div.attrs((props) => props)`
    background-image:url(${(props) => props.url});
    width: 150px;
    height: 150px;
    background-size: cover;
    background-position: center;
    margin: ${(props) => props.margin};
`;
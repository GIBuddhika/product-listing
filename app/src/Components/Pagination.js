import React from 'react'
import { Typography } from './Typography.styles';
import styled from 'styled-components';
import { setCurrentPage } from '../Reducers/Products/Common';
import { useDispatch } from 'react-redux';

const Pagination = ({ totalProducts, perPage, currentPage, callBackEntity }) => {

    const dispatch = useDispatch();
    let pages = Math.ceil(totalProducts / perPage);

    function dispatchSetCurrentPageEvent(page) {
        switch (callBackEntity) {
            case 'products':
                dispatch(setCurrentPage(page));
                break;
            default:
                break;
        }
    }

    const paginate = (page) => {
        dispatchSetCurrentPageEvent(page);
    }

    const paginatePrev = () => {
        if (currentPage !== 1)
            dispatchSetCurrentPageEvent(currentPage - 1);
    }

    const paginateNext = () => {
        if (currentPage !== pages)
            dispatchSetCurrentPageEvent(currentPage + 1);
    }

    return (
        <>
            <div style={{ display: 'flex' }}>
                <RoundItem onClick={() => paginatePrev()}>
                    <Typography margin="0" variant='paragraph'>
                        &lt;&lt;
                    </Typography>
                </RoundItem>
                {Array.from({ length: pages }, (_, i) =>
                    <RoundItem key={i + 1} className={currentPage === (i + 1) ? 'active' : ''} onClick={() => paginate(i + 1)}>
                        <Typography margin="0" variant='paragraph'>{i + 1}</Typography>
                    </RoundItem>
                )}
                <RoundItem key={pages + 1} onClick={() => paginateNext()}>
                    <Typography margin="0" variant='paragraph'>
                        &gt;&gt;
                    </Typography>
                </RoundItem>
            </div>
        </>
    )
}

export default Pagination

const RoundItem = styled.span`
    padding: 10px;
    margin: 0 5px 0 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    text-align: center; 
    line-height: initial;
    cursor:pointer;

    &.active, &:hover{
        background-color: red;
    }
`;
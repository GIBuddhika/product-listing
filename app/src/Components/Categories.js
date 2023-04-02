import React, { useEffect } from 'react'
import Category from './Category';
import { Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { CategoriesAll } from '../Reducers/Categories/CategoriesAll';
import { ProductsAll } from '../Reducers/Products/ProductsAll';
import { setActiveCategory } from '../Reducers/Categories/CategoryActive';
import { setCurrentPage } from '../Reducers/Products/Common';
import { Typography } from './Typography.styles';
import styled from 'styled-components';

const Categories = () => {

  const dispatch = useDispatch();
  const categoriesResults = useSelector((state) => state.categories.all.data);
  const isLoading = useSelector((state) => state.categories.loading);
  const activeCategory = useSelector((state) => state.categories.active.id);
  const perPage = useSelector((state) => state.products.common.perPage);
  const currentPage = useSelector((state) => state.products.common.currentPage);

  useEffect(() => {
    dispatch(CategoriesAll());
  }, [dispatch]);

  useEffect(() => {
    dispatch(ProductsAll({
      category_id: activeCategory,
      page: currentPage,
      per_page: perPage
    }));
  }, [dispatch, activeCategory, currentPage, perPage]);

  const search = (category) => {
    dispatch(setCurrentPage(1))
    dispatch(setActiveCategory({ category_id: category.id }));
  }

  const removeSelectedCategory = () => {
    dispatch(setActiveCategory({ category_id: null }));
  }

  return (
    <>
      {!isLoading &&
        <>
          <ViewAll>
            <Typography variant='paragraph' margin="0" onClick={() => removeSelectedCategory()}>View all products</Typography>
          </ViewAll>
          <Row>
            {
              categoriesResults.map((category) =>
                <Col xs={6} key={category.id}>
                  <Category category={category} search={() => search(category)} />
                </Col>
              )
            }
          </Row>
        </>
      }
    </>
  )
}

export default Categories

const ViewAll = styled.div`
  text-align: center; 
  padding: 10px;
  background: chocolate;
  width: 200px;
  margin: 0 auto 20px auto;
  cursor: pointer;
`;
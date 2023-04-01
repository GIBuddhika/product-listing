import React, { useEffect, useState } from 'react'
import Category from './Category';
import { Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { CategoriesAll } from '../Reducers/Categories/CategoriesAll';
import { ProductsAll } from '../Reducers/Products/ProductsAll';

const Categories = () => {

  const dispatch = useDispatch();
  const categoriesResults = useSelector((state) => state.categories.data);
  const isLoading = useSelector((state) => state.categories.loading);
  console.log(isLoading);
  console.log(categoriesResults);

  useEffect(() => {
    dispatch(CategoriesAll());
    dispatch(ProductsAll());
  }, [dispatch]);

  const search = (category) => {
    dispatch(ProductsAll({ category_id: category.id }));
  }

  return (
    <>
      {!isLoading &&
        <>
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
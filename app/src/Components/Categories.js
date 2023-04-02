import React, { useEffect } from 'react'
import Category from './Category';
import { Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { CategoriesAll } from '../Reducers/Categories/CategoriesAll';
import { ProductsAll } from '../Reducers/Products/ProductsAll';
import { setActiveCategory } from '../Reducers/Categories/CategoryActive';

const Categories = () => {

  const dispatch = useDispatch();
  const categoriesResults = useSelector((state) => state.categories.all.data);
  const isLoading = useSelector((state) => state.categories.loading);
  const activeCategory = useSelector((state) => state.categories.active.id);

  useEffect(() => {
    dispatch(CategoriesAll());
    dispatch(ProductsAll({ category_id: activeCategory }));
  }, [dispatch, activeCategory]);

  const search = (category) => {
    dispatch(ProductsAll({ category_id: category.id }));
    dispatch(setActiveCategory({ category_id: category.id }));
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
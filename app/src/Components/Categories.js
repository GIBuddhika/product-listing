import React, { useEffect, useState } from 'react'
import Category from './Category';
import { Col, Row } from 'react-bootstrap';

const Categories = () => {

  //get categories
  let [categories, setCategories] = useState();
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setCategories([
      { id: 1, name: 'cat 1', image: 'https://pbs.twimg.com/profile_images/1501565644092936193/SefiCXEl_400x400.jpg' },
      { id: 2, name: 'cat 1', image: 'https://pbs.twimg.com/profile_images/1501565644092936193/SefiCXEl_400x400.jpg' },
      { id: 3, name: 'cat 1', image: 'https://pbs.twimg.com/profile_images/1501565644092936193/SefiCXEl_400x400.jpg' },
      { id: 4, name: 'cat 1', image: 'https://pbs.twimg.com/profile_images/1501565644092936193/SefiCXEl_400x400.jpg' },
    ]);
    setLoading(false);
  }, [])

  const search = (category) => {
    console.log(category);
  }

  return (
    <>
      {!loading &&
        <>
          <Row>
            {
              categories.map((category) =>
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
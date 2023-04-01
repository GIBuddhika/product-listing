import './App.css';
import Sidebar from './Components/sidebar';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/products';


function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={4}>
          <Sidebar />
        </Col>
        <Col>
          <Products />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

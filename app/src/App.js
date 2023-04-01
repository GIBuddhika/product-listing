import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/product/:id', element: <Product /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map((route, idx) => {
            return <Route key={`route-${idx}`} {...route} />
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;

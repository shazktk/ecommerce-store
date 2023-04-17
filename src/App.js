import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path='/' exact Component={ProductListing} />
        <Route path='/product/:productId' exact Component={ProductDetail} />
        <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

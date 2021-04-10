import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './views/ProductList';
import ProductDetail from './views/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:id" exact component={ProductDetail} />
          <Route>404 Not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

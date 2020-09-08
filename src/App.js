import React from 'react';
// importējam React router dome!
import {Switch, Route} from 'react-router-dom';
// Visi css faili
import './App.css';
//Ievietojam Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

// Importējam componentus
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';




function App() {
  return (
    <React.Fragment>
      <Navbar/>
        <Switch>
        <Route exact path="/" component={Home} />  
          <Route path="/ProductList" component={ProductList} />  
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route component={Default} />
        </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;



///42.20
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Room from "./components/Room/Room";
import Book from "./components/Book/Book";
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route> 
        <Route path='/room'>
          <Room/>
        </Route>
        <Route path="/book/:bedType">
          <Book/>
        </Route> 
        <Route exact path='/'>
          <Home/>
        </Route> 
      </Switch> 
    </Router> 
    
  
  );
}

export default App;

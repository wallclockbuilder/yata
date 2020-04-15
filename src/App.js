import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;

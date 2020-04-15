import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import What from './what';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MainContent />
        <Footer />
      </div>
    );
  
    function NavBar() {
      return (
        <div>
          <span>Home</span>
          <span>Contact Us</span>
          <span>Team</span>
        </div>
      )
    }

    function MainContent() {
      return (
        <What />
        )
    }

    function Footer() {
      return (
        <div>
          <span>Phone</span>
          <span>Address</span>
          <span>Fax</span>
        </div>
      )
    }  
 }
}

export default App;

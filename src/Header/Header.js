import React, { Component } from './node_modules/react'
import logo from './logo.svg';
import './App.css';


export default class Header extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Bonjour Donatien Eneman
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        )
    }
}

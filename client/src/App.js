import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
            <Navbar.Brand>
              <a href="/home">Fitmatch<i className="fa fa-heartbeat" aria-hidden="true"></i></a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'about')}
            >
              About
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="success"
                    className="top-bar-right btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In or Sign Up
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'dashboard')}
                >
                  Dashboard
                </Button>
              )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="warning"
                    className="top-bar-right btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
        </Navbar>
      </div>
    );
  }
}

export default App;

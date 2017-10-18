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
                  <a
                    className="top-bar-right"
                    onClick={this.login.bind(this)}
                  ><i className="fa fa-sign-in" aria-hidden="true"></i>
                    Log In
                  </a>
                )
            }
            {
              !isAuthenticated() && (
                  <a
                    className="top-bar-right"
                    onClick={this.login.bind(this)}
                  ><i className="fa fa-pencil" aria-hidden="true"></i>
                    Sign Up
                  </a>
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
                  <a
                    className="top-bar-right"
                    onClick={this.logout.bind(this)}
                  ><i className="fa fa-sign-out" aria-hidden="true"></i>
                    Logout
                  </a>
                )
            }
        </Navbar>
      </div>
    );
  }
}

export default App;

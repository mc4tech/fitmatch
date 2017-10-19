import React, { Component } from 'react';
import Text from "../../components/Text";
//import PanelWells from "../../components/PanelWells";

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <h4>
                You are logged in!
              </h4>
            )
        }
        {
          !isAuthenticated() && (
              <h5>
                Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h5>
            )
        }
        <Text/>

      </div>
    );
  }
}

export default Home;

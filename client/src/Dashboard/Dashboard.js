import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
// import './Profile.css';

class Dashboard extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <h1>{profile.name}</h1>
            </div>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Dashboard;